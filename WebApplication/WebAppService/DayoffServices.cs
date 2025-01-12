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
    public class DayoffServices
    {
        WebApplicationContext webApplicationContext;

        public DayoffServices(WebApplicationContext webApplicationContext)
        {
            this.webApplicationContext = webApplicationContext;
            webApplicationContext = new WebApplicationContext();
            string connectStr = webApplicationContext.Database.GetDbConnection().ConnectionString;
            using (SqlConnection committrans = new SqlConnection(connectStr))
            {
                committrans.Open();
                var transaction = committrans.BeginTransaction();

                try
                {

                }
                catch (Exception ex)
                {
                    transaction.Rollback();
                    Console.WriteLine("An error occurred: " + ex.Message);
                }
            }
        }
    }
}
