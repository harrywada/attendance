const express = require("express");
const router = express.Router();

var students = [];

function add(name){
  if(name.trim()){
    for(var i = 0; i < students.length; i++){
      if(students[i].name.toLowerCase() === name.toLowerCase()){
        students[i].attendance += 1;
        return;
      }
    }
    students.push({name: name, attendance: 1});
  }
}

router.get("/", function(req, res, next){
  res.render("attendance.ejs", {students: students})
});

router.post("/", function(req, res, next){
  const name = req.body.name;
  add(name);

  res.render("attendance.ejs", {students: students});
});

module.exports = router;
