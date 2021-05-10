const UserModel = require('../models/User')

exports.get_user =  async (req, res, next) => {
// get users from db
try {
    const userList =  await UserModel.findAll();
    res.render('users',{userList});
     } catch (error) {
    res.send('A fail occured')
    }
  }

  exports.add_user_form = (req, res) =>{
    res.render("addUser")
  }

  exports.add_user = async (req, res) => {
    try {
      const newUser = await UserModel.create({
        firstName:req.body.firstName,
        lastName:req.body.lastName
      })
      res.redirect("/users")
    } catch (error) {
      res.send('an error accured')
    }
  }

  exports.delete_user = async (req, res) =>{
    try {
      await UserModel.destroy({
        where : {
          id: req.params.id,  
        }
      })
      res.redirect('/users')
    } catch (error) {
      console.log(error)
    }
  }