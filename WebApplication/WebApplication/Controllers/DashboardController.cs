using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using WebAppBLL;
using WebAppDAL.Models;


namespace WebApplication.Controllers
{
    public class DashboardController : Controller
    {
        private readonly ILogger<DashboardController> _Dashboard;

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
        //[Authorize]
        public List<Users> getAllPerson()
        {
            var data = new PersonBLL();
            return data.getAllPerson();
        }

        [Route("getonePerson/{id}")]
        [HttpGet]
        public Person getonePerson(int id)
        {
            return personBLL.getOnePerson(id);
        }

        [Route("getonePersonName/{name}")]
        [HttpGet]
        [Authorize]
        public Person getonePerson(string name)
        {
            return personBLL.getOnePersonByName(name);
        }

        [Route("postPerson")]
        [HttpPost]
        public void postPerson([FromBody] Person personModel)
        {
            personBLL.postPerson(personModel);
        }

        [Route("deletePerson/{id}")]
        [HttpDelete]
        public void deletePerson(int id)
        {
            personBLL.deletePerson(id);
            //var db = new PersonDbContext();
            //Person p = new Person();
            //p = db.Person.FirstOrDefault(x => x.Id == id);

            //if (p == null)
            //    throw new Exception("Not found");

            //db.Person.Remove(p);
            //db.SaveChanges();
        }

        public IActionResult Dayoff(DayOffForm dayoff)
        {
            //return View(model);
            return View("DayOffForm", dayoff);
        }

        [Route("ProcessDayoff")]
        [HttpPost]
        public IActionResult ProcessDayoff(DayOffForm dayoff)
        {
            if (ModelState.IsValid)
            {
                if (dayoff.startDate == DateTime.MinValue || dayoff.endDate == DateTime.MinValue)
                {
                    return View("DayOffForm", dayoff);
                }
                // save to database
                return View("DayOffForm", dayoff);
            }
            return View("DayOffForm", dayoff);
        }

    }
}
