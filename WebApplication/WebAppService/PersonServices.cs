using System;
using System.Collections.Generic;
using System.Linq;
using WebAppDAL.Models;

namespace WebAppService
{
    public class PersonServices
    {
        private readonly WebApplicationContext _context;

        public PersonServices(WebApplicationContext context)
        {
            _context = context;
        }

        public List<Users> GetAllPerson()
        {
            var data = _context.Users.ToList();
            return data;
        }

        public Person GetPersonById(int id)
        {
            var data = new List<Person>();
            return data.FirstOrDefault( person => person.Id == id);
        }

        public Person GetPersonByName(string name)
        {
            var data = new List<Person>();
            return data.FirstOrDefault(person => person.FirstName == name);
        }

        public List<Person> GetAllPersonByName(string name)
        {
            var data = new List<Person>();
            return data.Where(person => person.FirstName == name).ToList()  ;
        }

        public void postPerson(Person personanlilty)
        {
            var data = new List<Person>();
            data.Add(personanlilty);
        }

        public void deletePerson(int id)
        {
            //var db = new WebApplicationContext();
            //Person p = new Person();
            //p = db.Persons.FirstOrDefault(x => x.Id == id);

            //if (p == null)
            //    throw new Exception("Not found");

            //db.Persons.Remove(p);
            //db.SaveChanges();
        }

    }
}
