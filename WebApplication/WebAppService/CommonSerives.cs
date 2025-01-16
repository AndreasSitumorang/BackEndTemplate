using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebAppDAL.Models;

namespace WebAppService
{
    public class CommonSerives
    {
        WebApplicationContext webApplicationContext;

        public DataTable ExecuteSqlToDataTable(string connection, string query)
        {
            DataTable dataTable = new DataTable();

            using (SqlConnection conns = new SqlConnection(connection))
            {
                try
                {
                    using (SqlCommand cmd = new SqlCommand(query, conns))
                    {
                        using (SqlDataAdapter sda = new SqlDataAdapter(cmd))
                        {
                            sda.Fill(dataTable);
                        }
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine("An error occurred: " + ex.Message);
                }
            }
                return dataTable;
        }

        public bool IsValidUser(string email, string pass)
        {
            return true;
            string connectStr = webApplicationContext.Database.GetDbConnection().ConnectionString;

            try
            {
                using (SqlConnection committrans = new SqlConnection(connectStr))
                {
                    committrans.Open();
                    var transaction = committrans.BeginTransaction();
                    string query = "SELECT * FROM users WHERE email = @Email";
                    using (SqlCommand cmd = new SqlCommand(query, committrans))
                    {
                        cmd.Parameters.AddWithValue("@Email", email);
                        cmd.Transaction = transaction;
                        using (SqlDataReader reader = cmd.ExecuteReader())
                        {
                            if (reader.HasRows)
                            {
                                while (reader.Read())
                                {
                                    string password = reader["password"].ToString();
                                    byte[] bytes = Encoding.UTF8.GetBytes(reader["salt"].ToString());
                                    string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                                        password: pass,
                                        salt: bytes,
                                        prf: KeyDerivationPrf.HMACSHA256,
                                        iterationCount: 100000,
                                        numBytesRequested: 256 / 8));
                                    if (password == hashed)
                                    {
                                        return true;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}

