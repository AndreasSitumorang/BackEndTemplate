using Microsoft.Data.SqlClient;
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
    }
}

