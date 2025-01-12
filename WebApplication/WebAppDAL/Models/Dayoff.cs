using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebAppDAL.Models
{
    public class DayOffForm
    {
        public string firstName { get; set; }
        public string lastName { get; set; }
        public DateTime endDate { get; set; }
        public DateTime startDate { get; set; }
    }
}
