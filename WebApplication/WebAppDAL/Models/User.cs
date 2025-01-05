using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebAppDAL.Models
{
    public class Users
    {
            public int user_id { get; set; }
            public string username { get; set; }
            public string password { get; set; }
            public string key { get; set; }
            public string salt { get; set; }
            public DateTime created_at { get; set; }
            public DateTime updated_at { get; set; }
            public string email { get; set; }
        }
}
