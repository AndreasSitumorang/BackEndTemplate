﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebAppDAL.Models
{
    [PrimaryKey(nameof(DayOffId))]
    public class DayOffForm
    {
        [Key]
        public int DayOffId { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public DateTime endDate { get; set; }
        public DateTime startDate { get; set; }
    }
}