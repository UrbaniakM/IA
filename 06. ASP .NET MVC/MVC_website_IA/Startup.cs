using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MVC_website_IA.Startup))]
namespace MVC_website_IA
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
