using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebAppService;

namespace WebAppBLL
{

    public class LoginBLL
    {
        private WebAppService.CommonSerives CommonSerives;

        public LoginBLL()
        {
            CommonSerives = new WebAppService.CommonSerives();
        }

        public bool LoginUser(string email, string pass)
        {
            return CommonSerives.IsValidUser(email, pass);
        }
    }
}
