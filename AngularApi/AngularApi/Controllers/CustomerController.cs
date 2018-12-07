using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace AngularApi.Controllers
{
    //[Authorize]
    public class CustomerController : ApiController
    {
        private CustomersDBEntities context = new CustomersDBEntities();

        [HttpGet]
        [Route("api/Customer/GetCustomers")]
        public IHttpActionResult GetCustomers()
        {
            Wait();
            return Ok(context.Customers.Where(x => x.IsDeleted == false).ToList());
        }

        [HttpGet]
        [Route("api/Customer/GetCustomerById/{id:int}")]
        public IHttpActionResult GetCustomerById(int id)
        {
            //Wait();
            return Ok(context.Customers.Where(x => x.Id == id).FirstOrDefault());
        }

        [HttpPut]
        [Route("api/Customer/EditCustomer")]
        public IHttpActionResult EditCustomer(Customer cust)
        {
            //Wait();
            var customer = context.Customers.Where(e => e.Id == cust.Id).FirstOrDefault();
            customer.Name = cust.Name;
            customer.Address = cust.Address;
            customer.Phone = cust.Phone;
            context.SaveChanges();
            return Ok("Record updated successfully");
        }

        [HttpDelete]
        [Route("api/Customer/DeleteCustomer/{id:int}")]
        public IHttpActionResult DeleteCustomer(int id)
        {
            Wait();
            var customer = context.Customers.Where(e => e.Id == id).FirstOrDefault();
            customer.IsDeleted = true; ;
            context.SaveChanges();
            return Ok("Customer deleted successfully");
        }

        [HttpPost]
        [Route("api/Customer/SaveCustomer")]
        public IHttpActionResult SaveCustomer(Customer cust)
        {
            Wait();
            context.Customers.Add(cust);
            context.SaveChanges();
            return Ok("Customer added successfully");
        }

        [HttpGet]
        [Route("api/Customer/SearchCustomers")]
        public IHttpActionResult SearchCustomers(string searchText)
        {
            //Wait();
            searchText = searchText != null && searchText != "" ? searchText.ToLower() : null;
            var searchResults = searchText == null ? context.Customers : context.Customers.Where(x => x.Name.ToLower().Contains(searchText) || x.Address.ToLower().Contains(searchText));
            return Ok(searchResults);
        }

        [NonAction]
        private void Wait()
        {
            System.Threading.Thread.Sleep(1000);
        }
    }
}
