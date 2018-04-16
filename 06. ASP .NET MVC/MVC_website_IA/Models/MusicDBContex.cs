using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace MVC_website_IA.Models
{
    public class MusicDBContex : DbContext
    {
        public MusicDBContex() : base("DefaultConnection") { }

        public DbSet<Song> Songs { get; set; }
    }
}