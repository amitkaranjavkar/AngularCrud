using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularApi.Models
{
    public class Stocks
    {
        public int Id { get; set; }
        public string StockCode { get; set; }
        public string Name { get; set; }
        public bool IsDeleted { get; set; }
    }
}