using System;
using System.Collections.Generic;

#nullable disable

namespace WebAppDAL.Models
{
    public partial class Person
    {
        public int Id { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public int? Age { get; set; }
    }
}
