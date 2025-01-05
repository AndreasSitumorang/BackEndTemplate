using System;
using System.Collections.Generic;
using System.Data.Entity;

#nullable disable

namespace WebAppDAL.Models
{
    public class Person
    {
        public int Id { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public int? Age { get; set; }
    }
}
