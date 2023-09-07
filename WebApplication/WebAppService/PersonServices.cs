using System;
using System.Collections.Generic;
using System.Linq;
using WebAppDAL.Models;

namespace WebAppService
{
    public class PersonServices
    {
        private WebAppDAL.PersonDAL personDAL;

        public List<Person> GetAllPerson()
        {
            var db = new WebApplicationContext();
            return db.Set<Person>().ToList();
        }

        public Person GetPersonById(int id)
        {
            var db = new WebApplicationContext();
            return db.Persons.FirstOrDefault( person => person.Id == id);
        }

        public Person GetPersonByName(string name)
        {
            var db = new WebApplicationContext();
            return db.Persons.FirstOrDefault(person => person.FirstName == name);
        }

        public List<Person> GetAllPersonByName(string name)
        {
            var db = new WebApplicationContext();
            return db.Persons.Where(person => person.FirstName == name).ToList()  ;
        }

        //public void PostPerson(Person personanlilty)
        //{
        //    var db = new WebApplicationContext();
        //    db.Add(personanlilty);
        //    db.SaveChanges();
        //    //return db.Persons.Where(person => person.FirstName == name).ToList();
        //}
        public void postPerson(Person personanlilty)
        {
            var db = new WebApplicationContext();
            db.Add(personanlilty);
            db.SaveChanges();
        }
    }
}
