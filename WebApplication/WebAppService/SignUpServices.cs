using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using Microsoft.Data.SqlClient;
using System.Linq;
using System.Text;
using WebAppDAL.Models;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;
using System.Data;
using MySqlConnector;
using System.Transactions;

namespace WebAppService
{

    public class SignUpServices
    {
        WebApplicationContext webApplicationContext;
        public bool SignupNewUser(Users users, string salt)
        {
            webApplicationContext = new WebApplicationContext();
            string connectStr = webApplicationContext.Database.GetDbConnection().ConnectionString;
            using (SqlConnection committrans = new SqlConnection(connectStr))
            {
                committrans.Open();
                var transaction = committrans.BeginTransaction();

                try
                {
                    string query = "select * from users where  email = '" + users.email + "'";
                    CommonSerives common = new CommonSerives();
                    DataTable dataTable = common.ExecuteSqlToDataTable(connectStr, query);

                    if (dataTable.Rows.Count == 0)
                    {
                        return false;
                    }
                    else
                    {

                        byte[] bytes = Encoding.UTF8.GetBytes(salt);

                        string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                            password: users.password!,
                            salt: bytes,
                            prf: KeyDerivationPrf.HMACSHA256,
                            iterationCount: 100000,
                            numBytesRequested: 256 / 8));

                        query = @"INSERT INTO [dbo].[users]( [username], [password], [key], [salt], [created_at], [updated_at], [email]) VALUES( @username, @password, @key, @salt, @created_at, @updated_at, @email)";

                        SqlParameter[] parameters =
                        {
                        new SqlParameter("@username", users.username),
                        new SqlParameter("@password", hashed),
                        new SqlParameter("@salt", salt),
                        new SqlParameter("@key", salt),
                        new SqlParameter("@created_at", DateTime.Now),  // Pass DateTime directly
                        new SqlParameter("@updated_at", DateTime.Now),  // Pass DateTime directly
                        new SqlParameter("@email", users.email)
                        };

                        SqlCommand cmd = new SqlCommand(query, committrans);

                        cmd.Transaction = transaction;
                        cmd.Parameters.AddRange(parameters);
                        cmd.ExecuteNonQuery();
                        transaction.Commit();
                        committrans.Close();
                        return true;
                    }
                }
                catch (Exception ex)
                {
                    transaction.Rollback();
                    Console.WriteLine("An error occurred: " + ex.Message);
                    return false;
                }
            }      
        }
    }
}
