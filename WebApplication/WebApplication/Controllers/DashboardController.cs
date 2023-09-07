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

        [Route("getonePerson/{id}")]
        [HttpGet]
        public Person getonePerson(int id)
        {
            return personBLL.getOnePerson(id);
        }

        [Route("getonePersonName/{name}")]
        [HttpGet]
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

    }
}
