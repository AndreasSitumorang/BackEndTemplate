using DevExpress.Entity.Model.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using WebAppDAL.Models;
using AutoMapper;

namespace WebAppBLL
{
    public class PersonBLL
    {
        private WebAppService.PersonServices PersonServices;
        private AutoMapper.Mapper PersonMapper;

        public PersonBLL()
        {
            PersonServices = new WebAppService.PersonServices();

            var _configPerson = new MapperConfiguration(cfg => cfg.CreateMap<Person, Person>().ReverseMap());

            PersonMapper = new AutoMapper.Mapper(_configPerson);
        }
        public List<Person> getAllPerson()
        {
            return PersonServices.GetAllPerson(); //personDAL.GetAllPerson();
        }

        public Person getOnePerson(int id)
        {
            return PersonServices.GetPersonById(id); //personDAL.GetAllPerson();
        }

        public Person getOnePersonByName(string name)
        {
            return PersonServices.GetPersonByName(name); //personDAL.GetAllPerson();
        }

        public void postPerson(Person personModel)
        {
            Person personEntity = PersonMapper.Map<Person, Person>(personModel);
            PersonServices.postPerson(personEntity);
        }

        public void deletePerson(int id)
        {
            PersonServices.deletePerson(id);
        }
    }
}
