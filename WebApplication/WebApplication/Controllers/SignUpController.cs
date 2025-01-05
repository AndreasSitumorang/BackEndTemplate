using Microsoft.AspNetCore.Mvc;
using System.ServiceModel.Channels;
using System.Threading.Tasks;
using WebAppDAL.Models;

namespace WebApplication.Controllers
{
    public class SignUpController : Controller
    {
        private readonly string _salt = "qqWZ7mf2HLOUVkLEd08wPwobkyYy3JYx";

        private WebAppBLL.SignUpBLL SignUpBLLs;

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("Signup")]
        public IActionResult Signup([FromBody] Users login)
        {
            var data = login;

            SignUpBLLs = new WebAppBLL.SignUpBLL();
            
            if (SignUpBLLs.SignUpUser(login, _salt))
            {
                return Ok();
            }
            else {
                return BadRequest("Email is already Used");
            }

        
        }
    }
}
