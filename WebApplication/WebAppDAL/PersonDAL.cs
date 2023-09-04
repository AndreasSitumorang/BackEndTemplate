using System;
using System.Collections.Generic;
using System.Linq;
using WebAppDAL.Models;



namespace WebAppDAL
{
    public class PersonDAL
    {
        public List<Person> GetAllPerson()
        {
            var db = new WebApplicationContext();
            return db.Set<Person>().ToList();
        }
    }
}
