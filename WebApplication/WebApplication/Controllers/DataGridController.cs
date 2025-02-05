using Microsoft.AspNetCore.Mvc;
using WebAppDAL.Models;
using WebAppBLL;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;

namespace WebApplication.Controllers
{
    public class DataGridController : Controller
    {

        public IActionResult Index()
        {
            return View();
        }
        [Authorize] // add authorize for general
        [HttpGet("getAllItems")]
        public IActionResult GetAllData()
        {
            var Items = new ItemsBLL();
            var data = Items.AllItemsBLL();
            ////var dataLAst = Items.LAstItemsBLL();
            //var data = Items.NameItemBLL("Stapler");

            if (data is null)
            {
                return BadRequest("No data found");
            }

            return Ok(data);
        }

        [Authorize] //if need specific user access, add claims by role or menu access
        [HttpGet("getItemsByName")]        
        public IActionResult GetByName()
        {
            var Items = new ItemsBLL();
            //var data = Items.AllItemsBLL();
            //var dataLAst = Items.LAstItemsBLL();
            var data = Items.NameItemBLL("Stapler");

            if (data is null)
            {
                return BadRequest("No data found");
            }

            return Ok(data);
        }
    }
}
