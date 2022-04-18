using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace theocean_v2.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult HomePege()
        {
            return View();
        }
        public ActionResult index()
        {
            return View();
        }
    }
}