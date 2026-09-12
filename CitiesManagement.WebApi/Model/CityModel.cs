using System.ComponentModel.DataAnnotations;
namespace CitiesManagement.WebApi;

public class CityModel
{
    [Key]
    public string? CityId{get;set;}
    public string? CityName{get;set;}
}
