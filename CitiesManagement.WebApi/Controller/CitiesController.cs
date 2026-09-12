using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using CitiesManagement.WebApi;
namespace MyApp.Namespace
{
    [Route("api/[controller]")]
    [ApiController]
    public class CitiesController : ControllerBase
    {
        protected readonly ApplicationDbContext _context;
        public CitiesController(ApplicationDbContext context)
        {
            _context= context;
        }

       [HttpGet("/cities")]
        public IActionResult GetCities()
        {
             var cities = _context.City.ToList();

             return Ok(cities);
        }
    }
}
