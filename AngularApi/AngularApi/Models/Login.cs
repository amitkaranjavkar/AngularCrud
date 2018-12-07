using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularApi.Models
{
    public class Login
    {
        CustomersDBEntities context = new CustomersDBEntities();

        public UserLogin ValidateUser(string userName, string password)
        {
            UserLogin users = context.UserLogins.Where(x => x.UserName == userName && x.Password == password).FirstOrDefault();
            return users;
        }
    }
}