using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebAppDAL.Models;

namespace WebAppBLL
{
    public class SignUpBLL
    {
        private WebAppService.SignUpServices SignUpServices;

        public bool SignUpUser(Users user, string salt)
        {
            SignUpServices = new WebAppService.SignUpServices();
            var signUp = SignUpServices.SignupNewUser(user, salt);
            return signUp;
        }

    }
}
