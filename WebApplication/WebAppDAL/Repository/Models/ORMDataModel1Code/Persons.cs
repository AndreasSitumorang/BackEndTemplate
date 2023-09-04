using System;
using DevExpress.Xpo;
using DevExpress.Xpo.Metadata;
using DevExpress.Data.Filtering;
using System.Collections.Generic;
using System.ComponentModel;
using System.Reflection;
namespace WebAppDAL.Repository.Models.WebApplication
{

    public partial class Persons
    {
        public Persons(Session session) : base(session) { }
        public override void AfterConstruction() { base.AfterConstruction(); }
    }

}
