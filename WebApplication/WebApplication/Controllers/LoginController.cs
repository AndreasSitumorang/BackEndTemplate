using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System;
using WebAppDAL.Models;
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
            // Replace this with actual user authentication logic
            if (IsValidUser(login))
            {
                var token = GenerateJwtToken(login.email);
                return Ok();
            }

            return  Unauthorized("Invalid username or password");
        }

        private bool IsValidUser(Users login)
        {
            // Simulated user validation (replace with actual database/service validation)
            return login.email == "admin" && login.password == "password";
        }

        private string GenerateJwtToken(string username)
        {
            // Get JWT settings from configuration
            var key = Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]);
            var issuer = _configuration["Jwt:Issuer"];
            var audience = _configuration["Jwt:Audience"];

            // Define claims for the token
            var claims = new[]
            {
                new Claim(ClaimTypes.Name, username),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            // Create signing credentials
            var signingCredentials = new SigningCredentials(
                new SymmetricSecurityKey(key),
                SecurityAlgorithms.HmacSha256
            );

            // Define the token properties
            var token = new JwtSecurityToken(
                issuer: issuer,
                audience: audience,
                claims: claims,
                expires: DateTime.UtcNow.AddHours(1), // Token expiration time
                signingCredentials: signingCredentials
            );

            // Generate and return the token
            return new JwtSecurityTokenHandler().WriteToken(token);

        }
    }
}
