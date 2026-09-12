using Microsoft.EntityFrameworkCore;

namespace CitiesManagement.WebApi;

public class ApplicationDbContext : DbContext
{

    public ApplicationDbContext (DbContextOptions<ApplicationDbContext> options)
    :base(options)
    {

    }

    public virtual DbSet<CityModel> City {get;set;}
}
