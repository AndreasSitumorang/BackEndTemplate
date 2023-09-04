using System;
using System.Collections.Generic;
using System.Linq;
using WebAppDAL.Models;

namespace WebAppBLL
{
    public class PersonBLL
    {
        private WebAppDAL.PersonDAL personDAL;
        private WebAppService.PersonServices PersonServices;

        public PersonBLL()
        {
            personDAL = new WebAppDAL.PersonDAL();
            PersonServices = new WebAppService.PersonServices();
        }
        public List<Person> getAllPerson()
        {
            return PersonServices.GetAllPerson(); //personDAL.GetAllPerson();
        }

        public Person getOnePerson()
        {
            return PersonServices.GetAllPerson(); //personDAL.GetAllPerson();
        }
    }
}
