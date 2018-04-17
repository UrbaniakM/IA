using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MVC_website_IA.Models
{
    public class Genre
    {
        public int Id { set; get; }
        public string Name { set; get; }
        public ICollection<Song> Songs { get; set; }
    }
}