using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MyApp.Namespace
{
    [Route("api/v{version:apiversion}[controller]")]
    [ApiController]
    public class CustomController : ControllerBase
    {
    }
}
