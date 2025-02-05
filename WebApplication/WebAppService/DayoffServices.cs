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

        public bool DayoffProcess(DayOffForm dayOff)
        {
            this.webApplicationContext = webApplicationContext;
            webApplicationContext = new WebApplicationContext();
            string connectStr = webApplicationContext.Database.GetDbConnection().ConnectionString;

            try
            {
                using (var dbContext = new WebApplicationContext())
                {
                    dbContext.DayOffForm.Add(dayOff);
                    dbContext.SaveChanges();
                    return true;
                }
            }catch (Exception ex)
            {
                Console.WriteLine("An error occurred: " + ex.Message);
                return false;
            }



            //using (SqlConnection committrans = new SqlConnection(connectStr))
            //{
            //    committrans.Open();
            //    var transaction = committrans.BeginTransaction();

            //    try
            //    {
            //        string query = "INSERT INTO dayoff (firstName, lastName, startDate, endDate) VALUES (@FirstName, @LastName, @StartDate, @EndDate)";
            //        using (SqlCommand cmd = new SqlCommand(query, committrans))
            //        {
            //            cmd.Parameters.AddWithValue("@FirstName", dayOff.firstName);
            //            cmd.Parameters.AddWithValue("@LastName", dayOff.lastName);
            //            cmd.Parameters.AddWithValue("@StartDate", dayOff.startDate);
            //            cmd.Parameters.AddWithValue("@EndDate", dayOff.endDate);
            //            cmd.Transaction = transaction;
            //            cmd.ExecuteNonQuery();
            //        }

            //        transaction.Commit();
            //        committrans.Close();
            //        return true;
            //    }
            //    catch (Exception ex)
            //    {
            //        transaction.Rollback();
            //        Console.WriteLine("An error occurred: " + ex.Message);
            //        return false;
            //    }
            //}
        }
    }
}
