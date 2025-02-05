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
using System.Security.Cryptography.X509Certificates;

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
                return Ok(token);
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
            //var test = _configuration["Jwt:Key"];

            //var key = Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]);
            //if (key.Length < 32)
            //{
            //    throw new ArgumentException("The key size must be at least 256 bits (32 bytes).");
            //}

            //var issuer = _configuration["Jwt:Issuer"];
            //var audience = _configuration["Jwt:Audience"];

            //var claims = new[]
            //{
            //    new Claim(ClaimTypes.Name, username),
            //    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            //};

            //var signingCredentials = new SigningCredentials(
            //    new SymmetricSecurityKey(key),
            //    SecurityAlgorithms.HmacSha256
            //);

            //var token = new JwtSecurityToken(
            //    issuer: issuer,
            //    audience: audience,
            //    claims: claims,
            //    expires: DateTime.UtcNow.AddHours(1),
            //    signingCredentials: signingCredentials
            //);

            //return new JwtSecurityTokenHandler().WriteToken(token);
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]);

            // Validate the key size, ensuring it's at least 256 bits (32 bytes)
            if (key.Length < 32)
            {
                throw new ArgumentException("The key size must be at least 256 bits (32 bytes).");
            }

            var issuer = _configuration["Jwt:Issuer"];
            var audience = _configuration["Jwt:Audience"];

            // Create claims
            var claims = new[]
            {
                new Claim(ClaimTypes.Name, username),  // Claim for the username
            };

            // Signing credentials
            var signingCredentials = new SigningCredentials(
                new SymmetricSecurityKey(key),
                SecurityAlgorithms.HmacSha256
            );

            // Create the JWT token
            var token = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddHours(1),  // Token expiry time (1 hour in this case)
                SigningCredentials = signingCredentials,
                Issuer = issuer,
            };

            // Create a JWT token string
            var tokenDescriptor = tokenHandler.CreateToken(token);
            // After creating the token, write it to a string
            var tokenString = tokenHandler.WriteToken(tokenDescriptor);

            // Return the token string (This is your Bearer token)
            return tokenString;
        }
    }
}
