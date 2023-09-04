using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAppDAL.Models;


namespace WebApplication.Controllers
{
    public class DashboardController : Controller
    {
        private WebAppBLL.PersonBLL personBLL;
        public DashboardController()
        {
            personBLL = new WebAppBLL.PersonBLL();

        }

        [Route("getName")]
        [HttpGet]
        public string getName()
        {
            return "joma tech";
        }


        [Route("getAllPersons")]
        [HttpGet]
        public List<Person> getAllPerson()
        {
            return personBLL.getAllPerson();
        }


        [Route("getonePerson")]
        [HttpGet]
        public Person getonePerson()
        {
            return personBLL.getOnePerson();
        }
    }
}
