var express = require('express');
var router = express.Router();
var path = require('path');

const sql = require('../utils/sql');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

// get the dynamic data that goes with each svg graphic
router.get('/info/:target', (req, res) => {

  // set up your sql query here and retrieve the relevant data
  let query = `SELECT * FROM tbl_animals WHERE ID = "${req.params.target}"`;

    // if response = an err, do this. else, show the result in this way 
    sql.query(query, (err, result) => {
      if (err) { throw err; console.log(err); }

      console.log(result);

      //convert the Year column into an array before sending it through
      //map is an array method that lets you map one value to another (convert it)
      //grabbing commas and splitting them before and after to select 3 different values
      result[0].Year = result[0].Years.split(',').map(function(item){

           //removes any empty white space from text
          item = item.trim();

          return item;
      })

      console.log('after trim / conversion:', result[0]);

      // can change the key (changeme: result) to whatever you want
      res.json(result[0]); // => same as php

      // echo json.encode($result) 
  })

  // sql.query(query, (err, result) => {
  //   if (err) {console.log(err); }
  //   console.log(result)
  //   res.json(result[0]);
  // })
})


module.exports = router;
