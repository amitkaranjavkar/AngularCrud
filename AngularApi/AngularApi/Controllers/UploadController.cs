using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.IO;

namespace AngularApi.Controllers
{
    public class UploadController : ApiController
    {
        public string directory = @"D:\Projects\Uploads\";

        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpGet]
        public string Get(int id)
        {
            return "value";
        }

        [HttpPost]
        public IHttpActionResult Post()
        {
            var httpContext = HttpContext.Current.Request;
            try
            {
                if (!Directory.Exists(directory))
                {
                    Directory.CreateDirectory(directory);
                }

                if (httpContext.Files.Count > 0)
                {
                    for (int i = 0; i < httpContext.Files.Count; i++)
                    {
                        var postedFile = httpContext.Files[i];
                        postedFile.SaveAs(directory + postedFile.FileName);
                    }
                }
                return Json("Upload Successful");
            }
            catch (Exception)
            {
                return Json("Upload error");
            }            
        }

        [HttpDelete]
        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}