using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System;
using WebAppDAL.Models;
using WebAppBLL;
using System.ServiceModel.Channels;
using Microsoft.AspNetCore.Http.HttpResults;

namespace WebApplication.Controllers
{
    public class LoginController(IConfiguration configuration) : Controller
    {
        private readonly IConfiguration _configuration = configuration;

        [HttpPost("Login")]
        public IActionResult Login([FromBody] Users login)
        {
            if (IsValidUser(login))
            {
                var token = GenerateJwtToken(login.email);
                return Ok();
            }

            return  Unauthorized("Invalid username or password");
        }

        private bool IsValidUser(Users login)
        {
            var common =  new WebAppBLL.LoginBLL();
            var isValid = common.LoginUser(login.email, login.password);
            if (isValid)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        private string GenerateJwtToken(string username)
        {
            // Get JWT settings from configuration
            var key = Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]);
            var issuer = _configuration["Jwt:Issuer"];
            var audience = _configuration["Jwt:Audience"];

            var claims = new[]
            {
                new Claim(ClaimTypes.Name, username),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var signingCredentials = new SigningCredentials(
                new SymmetricSecurityKey(key),
                SecurityAlgorithms.HmacSha256
            );

            var token = new JwtSecurityToken(
                issuer: issuer,
                audience: audience,
                claims: claims,
                expires: DateTime.UtcNow.AddHours(1), // Token expiration time
                signingCredentials: signingCredentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
