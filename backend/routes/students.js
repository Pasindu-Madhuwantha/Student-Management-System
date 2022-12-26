const router = require("express").Router();
let Student = require("../models/student");


router.route('/').get((req, res)=>{
    Student.find()
    .then(students=>res.json(students))
    .catch(err=> res.status(400).json('Error:'+err));
});



router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    const newStudent = new Student({
        name,
        age,
        gender
    })

    newStudent.save()
    .then(()=>res.json("Student Added"))
    .catch(err=> res.status(400).json('Error:'+err));

});


router.route("/update/:id").put()






module.exports=router;