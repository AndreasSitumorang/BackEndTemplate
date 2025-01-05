using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebAppDAL.Models;

namespace WebAppService
{

    public class SignUpServices
    {
        private WebApplicationContext _context;
        public bool SignupNewUser(Users users, string salt)
        {
            string query = "select username from users where username = '" + users.username + "' and email = '" + users.email + "'";
            _context = new WebApplicationContext();

            var data = _context.Database.ExecuteSqlRaw(query);
            if (data != null)
            {
                return false;
            }
            else
            {
                byte[] bytes = Encoding.UTF8.GetBytes(salt);

                string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                    password: users.password!,
                    salt: bytes,
                    prf: KeyDerivationPrf.HMACSHA256,
                    iterationCount: 100000,
                    numBytesRequested: 256 / 8));

                query = "INSERT INTO [dbo].[users]([username], [password], [key], [salt], [created_at], [updated_at], [email]) VALUES(@username, @password, @salt, @salt, GETDATE(), GETDATE(), @email)";
                SqlParameter[] pamameters = 
                {
                    new SqlParameter("@username", users.username),
                    new SqlParameter("@email", users.email),
                    new SqlParameter("@password", hashed),
                    new SqlParameter("@salt", users.salt),
                };

                _context.Database.ExecuteSqlRaw(query, pamameters);

                return true;
            }
        }
    }
}
