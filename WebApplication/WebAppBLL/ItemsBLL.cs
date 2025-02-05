using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebAppDAL.Models;

namespace WebAppBLL
{
    public class ItemsBLL
    {
        private WebAppService.ItemsServices ItemsServices;

        public List<Items> AllItemsBLL()
        {
            ItemsServices = new WebAppService.ItemsServices();

            return ItemsServices.GetAllItem();
        }

        public Items LAstItemsBLL()
        {
            ItemsServices = new WebAppService.ItemsServices();

            return ItemsServices.GetLastItem();
        }

        public Items NameItemBLL(string name)
        {
            ItemsServices = new WebAppService.ItemsServices();

            return ItemsServices.GetItemByName (name);
        }

        //public Items getdail()
        //{
        //    //NameItemBLL
        //}
    }
}
