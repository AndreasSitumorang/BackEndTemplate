﻿using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace WebAppDAL.Models
{
    public partial class WebApplicationContext : DbContext
    {
        public WebApplicationContext()
        {
        }

        public WebApplicationContext(DbContextOptions<WebApplicationContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Person> Persons { get; set; }
        public virtual DbSet<Users> Users { get; set; }
        public virtual DbSet<DayOffForm> DayOffForm { get; set; }
        public virtual DbSet<Items> Items { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                //optionsBuilder.UseSqlServer("Server=LAPTOP-31JQL744;Database=WebApplication;Trusted_Connection=True;TrustServerCertificate=true;");
                //optionsBuilder.UseSqlServer("server=localhost;port=1434;database=WebTemplate;user id=userproduct;password=userproduct");
                optionsBuilder.UseSqlServer("server=localhost;database=WebTemplate;user id=userproduct;password=userproduct;Integrated Security=True;TrustServerCertificate=true;");
            }
        }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

        //    modelBuilder.Entity<Person>(entity =>
        //    {
        //        entity.Property(e => e.Id)
        //            .ValueGeneratedNever()
        //            .HasColumnName("ID");

        //        entity.Property(e => e.FirstName)
        //            .HasMaxLength(255)
        //            .IsUnicode(false);

        //        entity.Property(e => e.LastName)
        //            .IsRequired()
        //            .HasMaxLength(255)
        //            .IsUnicode(false);
        //    });

        //    OnModelCreatingPartial(modelBuilder);
        //}

        //partial void OnModelCreatingPartial(ModelBuilder modelBuilder);

    }
}
