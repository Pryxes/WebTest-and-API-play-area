using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using MongoDB.Driver;


namespace dictionary.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DictionController : ControllerBase
    {


        private IMongoCollection<DatabaseData> DataCollection;

        // controller accepts a variable of IMongoClient 
        // to connect to the database
        public DictionController(IMongoClient client) 
        {
            var database = client.GetDatabase("JuniorProgramer");
            DataCollection = database.GetCollection<DatabaseData>("Dictionary");
        }

        // the function get() accepts both httpget as well as httppost requests
        // it sends a query to the database asking for to find everything (x => true)
        // from it function returns only keys with .Select method (x=>x.key)
        [HttpGet]
        [HttpPost]
        public IEnumerable<string> Get()
        {
            var project = DataCollection.Find(x => true).ToList();
            
            return project.Select(x=>x.key);
        }

        // the function get(string id) accepts both get and post request alongside additional paramaters
        // example call to the api "http://localhost:5001/api/diction/test"
        // it makes a query to the databaes calling for all entries where the value is equivalent to the id = test
        // which upon getting returns the values with .Select method (x => x.values)
        [HttpGet  ("{id}")]
        [HttpPost ("{id}")]
        public IEnumerable<string> Get(string id)
        {
            var findValue = DataCollection.Find(x => x.key == id).ToList();

            return findValue.Select(x => x.value);
        }
    }
}
