using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebAppDAL.Models
{
    [PrimaryKey(nameof(id))]

    public class Items
    {
        [Key]
        public int id { get; set; } 
        public string name { get; set; }
        public int sellerId { get; set; }
    }
}
