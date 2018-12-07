using AngularApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace AngularApi.Controllers
{
    public class StocksController : ApiController
    {
        public static List<Stocks> stocks = new List<Stocks>();

        public StocksController()
        {
            if (stocks.Count == 0)
            {
                stocks.Add(new Stocks() { Id = 1, StockCode = "IBM", Name = "International Business Machines", IsDeleted = false });
                stocks.Add(new Stocks() { Id = 2, StockCode = "GOOG", Name = "Google", IsDeleted = false });
                stocks.Add(new Stocks() { Id = 3, StockCode = "AAPL", Name = "Apple Inc", IsDeleted = false });
                stocks.Add(new Stocks() { Id = 4, StockCode = "HPQ", Name = "Hewlett Packard", IsDeleted = false });
                stocks.Add(new Stocks() { Id = 5, StockCode = "BSE", Name = "Bombay Stock Exchange", IsDeleted = false });
                stocks.Add(new Stocks() { Id = 6, StockCode = "NSE", Name = "National Stock Exchange", IsDeleted = false });
            }
        }

        [HttpGet]
        [Route("api/Stocks/GetStocks")]
        public IHttpActionResult GetStocks()
        {
            //Wait();
            return Ok(stocks.Where(x => x.IsDeleted == false).ToList());
        }

        [HttpGet]
        [Route("api/Stocks/GetStockById/{id:int}")]
        public IHttpActionResult GetStockById(int id)
        {
            Wait();
            return Ok(stocks.Where(x => x.Id == id).ToList());
        }

        [HttpPost]
        [Route("api/Stocks/SaveStocks")]
        public IHttpActionResult SaveStocks(Stocks stock)
        {
            Wait();
            stock.Id = stocks.Count + 1;
            stock.IsDeleted = false;
            stocks.Add(stock);
            return Ok("Stocks added successfully");
        }

        [HttpPut]
        [Route("api/Stocks/UpdateStocks")]
        public IHttpActionResult UpdateStocks(Stocks s)
        {
            Wait();
            for (int i = 0; i < stocks.Count; i++)
            {
                if (s.Id == stocks[i].Id)
                {
                    stocks[i].Name = s.Name;
                    stocks[i].StockCode = s.StockCode;
                }
            }
            return Ok("Stocks updated sucessfully");
        }

        [HttpDelete]
        [Route("api/Stocks/DeleteStocks/{id:int}")]
        public IHttpActionResult DeleteStocks(int id)
        {
            Wait();
            stocks.Find(x => x.Id == id).IsDeleted = true;
            return Ok();
        }

        [NonAction]
        private void Wait()
        {
            System.Threading.Thread.Sleep(2000);
        }
    }
}
