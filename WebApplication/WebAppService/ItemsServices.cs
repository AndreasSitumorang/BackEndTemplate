using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebAppDAL.Models;

namespace WebAppService
{
    public class ItemsServices
    {
        private readonly Items _ListAllContent;
        private readonly WebApplicationContext _context;


        public string GetItems()
        {
            return "Items";
        }

        public string GetItem(int id)
        {
            return "Item";
        }
        public List<Items> GetAllItem()
        {
            try
            {
                using (var dbContext = new WebApplicationContext())
                {                    
                    return dbContext.Items.ToList();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Items GetLastItem()
        {
            try
            {
                using (var dbContext = new WebApplicationContext())
                {
                    return dbContext.Items.LastOrDefault();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Items GetItemByName( string name)
        {
            try
            {
                using (var dbContext = new WebApplicationContext())
                {
                    return dbContext.Items.Where( a => a.name.Equals(name)).FirstOrDefault();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
