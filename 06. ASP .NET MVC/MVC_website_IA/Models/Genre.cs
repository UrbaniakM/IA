using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MVC_website_IA.Models
{
    public class Genre
    {
        public int Id { set; get; }

        [Required(ErrorMessage = "Name is required!")]
        [StringLength(100, ErrorMessage = "Maximal length of the name of a song is 100 characters!")]
        public string Name { set; get; }
        public ICollection<Song> Songs { get; set; }
    }
}