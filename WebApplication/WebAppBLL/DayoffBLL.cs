using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebAppDAL.Models;
using WebAppService;

namespace WebAppBLL
{
    public class DayoffBLL
    {
        public WebAppService.DayoffServices DayoffServices;

        public bool DayOffProcess(DayOffForm dayOff)
        {
            DayoffServices = new WebAppService.DayoffServices();

            if (dayOff.startDate > dayOff.endDate)
            {
                return false;
            }
            else if (dayOff.startDate < DateTime.Now)
            {
                return false;
            }
            else {
                var dayOffProcess = DayoffServices.DayoffProcess(dayOff);
                return true;
            }
        }
    }
}
