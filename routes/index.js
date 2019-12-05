var express = require('express');
var router = express.Router();

const sql = require('../utils/sql');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chinese Zodiac | Home' });
  // see favouriteThings routes > index.js for reference
});

// get the dynamic data that goes with each svg graphic
router.get('/info/:target', (req, res) => {

  // set up your sql query here and retrieve the relevant data
  let query = `SELECT * FROM tbl_animals WHERE ID = "${req.params.target}"`;

    // if response = an err, do this. else, show the result in this way 
    sql.query(query, (err, result) => {
      if (err) { throw err; console.log(err); }

      console.log(result);

      //convert the social property into an array before sending it through
      //map is an array method that lets you map one value to another (convert it)
      //grabbing commas and splitting them before and after to select 3 different values
      result[0].Year = result[0].Year.split(',').map(function(item){

           //removes any empty white space from text
          item = item.trim();

          return item;
      })

      console.log('after trim / conversion:', result[0]);

      // can change the key (changeme: result) to whatever you want
      // controls 'people' var on home.hbs
      res.json(result[0]);
  })

  sql.query(query, (err, result) => {
    if (err) {console.log(err); }
    console.log(result)
    res.json(result[0]);
  })
})


module.exports = router;
