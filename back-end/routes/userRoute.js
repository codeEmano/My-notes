const express=require('express');
const router=express.Router();
let User=require('../model/User.js');
router.route('/')
.get((req,res) =>{
    User.find()
    .then(users => res.json(users))
    .catch((err) => console.log('The error is ',err));
});
router.route('/add')
.post((req,res) =>{
    const name=req.body.name;
    const newUser=new User({name});
    newUser.save()
    .then(() => {console.log("User added");res.json('User added');})
    .catch((err) => console.log("Error adding the user.... ",err));
});

module.exports=router;