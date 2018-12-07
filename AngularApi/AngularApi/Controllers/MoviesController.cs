using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AngularApi.Controllers
{
    public class MoviesController : ApiController
    {
        public List<Movies> moviesList = new List<Movies>();

        public MoviesController()
        {
            if (moviesList.Count == 0)
            {
                moviesList.Add(new Movies() { Name = "Test 1", ImageUrl = "assets/movie-image/nature1.jpg" });
                moviesList.Add(new Movies() { Name = "Test 2", ImageUrl = "assets/movie-image/nature2.jpg" });
                moviesList.Add(new Movies() { Name = "Test 3", ImageUrl = "assets/movie-image/nature3.jpg" });
                moviesList.Add(new Movies() { Name = "Test 4", ImageUrl = "assets/movie-image/nature4.jpg" });
                moviesList.Add(new Movies() { Name = "Test 5", ImageUrl = "assets/movie-image/nature5.jpg" });
                moviesList.Add(new Movies() { Name = "Test 6", ImageUrl = "assets/movie-image/nature6.jpg" });
                moviesList.Add(new Movies() { Name = "Test 7", ImageUrl = "assets/movie-image/nature7.jpg" });
                moviesList.Add(new Movies() { Name = "Test 8", ImageUrl = "assets/movie-image/nature8.jpg" });
            }
        }

        [HttpGet]
        [Route("api/Movies/GetMovies")]
        public IHttpActionResult GetMovies(int startIndex, int maxRows)
        {
            System.Threading.Thread.Sleep(3000);
            var movies = moviesList.Skip(startIndex).Take(maxRows).ToList();
            if (movies.Count == 0)
            {
                movies.Add(new Movies() { Message = "Thats All Folks" });
                return Ok(movies);
            }
            return Ok(movies);
        }
    }

    public class Movies
    {
        public string Name { get; set; }
        public string ImageUrl { get; set; }
        public string Message { get; set; }
    }
}
