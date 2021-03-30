const express=require('express');
const router=express.Router();
let Notes=require('../model/Notes.js');
router.route('/')
.get((req,res) =>{
    Notes.find()
    .then(note => res.json(note))
    .catch((err) => console.log('The error is ',err));
});
router.route('/add')
.post((req,res) =>{
    const name=req.body.name;
    const notes=req.body.notes;
    const newNote=new Notes({name,notes});
    newNote.save()
    .then(() => {console.log("Notes added");res.json('Notes added!');})
    .catch((err) => console.log("Error adding the notes.... ",err));
});
router.route('/:id').get((req, res) => {
    Notes.findById(req.params.id)
      .then(note => res.json(note))
      .catch(err => res.status(400).json('Error: ' + err));
  });
router.route('/:id')
.delete((req,res) =>{
    Notes.findByIdAndDelete(req.params.id)
    .then(() => {console.log("Notes deleted");res.json('Note deleted');})
    .catch((err) => console.log("Couldn't delete notes... ",err));
});
router.route('/update/:id')
.post((req,res) =>{
    Notes.findById(req.params.id)
    .then((note) => {
        note.name=req.body.name;
        note.notes=req.body.notes;
        note.save()
        .then(() => {console.log("Notes updated");res.json("Notes updated");})
        .catch((err) => res.json(err));
       
    })
    .catch((err) => console.log("Couldn't update notes... ",err));
});
module.exports=router;