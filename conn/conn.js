const User = require("../models/User");
const List = require("../models/list");
const mongoose =  require('mongoose')

const conn = async (req,res) => {
     await mongoose.connect("mongodb+srv://ahadbbk9:bismillah@todo-app.ddaa90o.mongodb.net/"             )
     await List.init();
     await User.init();
     return   console.log("sucessfully connected database")
    }
     
conn()