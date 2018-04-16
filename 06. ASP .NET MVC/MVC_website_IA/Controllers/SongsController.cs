using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC_website_IA.Controllers
{
    public class SongsController : Controller
    {
        // GET: Songs
        public ActionResult Index()
        {
            Models.Song song = new Models.Song()
            {
                Name = "Irby Tremor", Artist = "Forest Swords",
                Genre = "Electronic", Id = 1
            };

            return View(song);
        }

        public ActionResult Square(int id)
        {
            return Content((id * id).ToString());
        }
    }
}