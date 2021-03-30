const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const userSchema=new Schema({
    name:
    {
        type:String,
        required:true
    },
    notes:
    {
        type:String,
        required:true
    }
});

const Notes=mongoose.model('Notes',userSchema);
module.exports=Notes;