//Create model of user Document
const mongoose = require ('mongoose');
const bcrypt = require ('bcryptjs'); //hashage de password
const userSchema = new mongoose.Schema({
    username:{type:String,unique:true},
    password :String
})

//hashage password before save
userSchema.pre('save',async function(next){
    const user = this; // yekhou contenu kbal mayetsajel 
    if (user.isModified('password')){
        user.password = await bcrypt.hash(user.password,10)
    }
    next();
})

const User = mongoose.model('User',userSchema)
module.exports = User;