const mainController = (db) => {
  const User = require("../models/user")(db);


  this.redirectUsers = (req,res,next) =>{
      return res.status(301).redirect('/users')
  }

  this.index = async (req, res, next) => {
    try {
      const users = await User.findAll();

      res.status(200).send(users);
    } catch (e) {
      return res.send({
        status: false,
        message: e.message,
      });
    }
  };

  this.show = async (req, res, next) => {
    const { id } = req.params;

    try {
      // if(!Number.isInteger(id)) throw new Error('User id is not valid');

      const user = await User.findByPk(id);

      if (!user) throw new Error("User not found");

      res.status(200).send(user);
    } catch (e) {
      return res.send({
        status: false,
        message: e.message,
      });
    }
  };

  this.store = async (req, res, next) => {
    const userData = ({
      firstname,
      lastname,
      role,
      rate,
      location,
      email,
      phone,
    } = req.body);

    try {
      if (!userData.firstname)
        throw new Error({ message: "First name is required" });
      if (!userData.lastname) throw new Error("Last name is required");
      if (!userData.role) throw new Error("Role is required");
      if (!userData.rate) throw new Error("Rate is required");
      if (!userData.location) throw new Error("Location is required");
      if (!userData.email) throw new Error("Email is required");
      if (!userData.phone) throw new Error("Phone is required");

      if (!Number.isInteger(phone))
        throw new Error("Phone is not valid.Phone mast be a number");

      console.log(userData);

      const user = await User.create(userData);

      res.status(200).send(user);
    } catch (e) {
      console.log(e);
      return res.send({
        status: false,
        message: e.message,
      });
    }
  };

  this.update = async (req, res, next) => {
    const { id } = req.params;
    const userData = ({
      firstname,
      lastname,
      role,
      rate,
      location,
      email,
      phone,
    } = req.body);

    try {
      const user = await User.findByPk(id);

      if (!user) throw new Error("User not found");

      await user.update(userData);

      res.status(200).send(user);
    } catch (e) {
      res.send({
        status: false,
        message: e.message,
      });
    }
  };

  this.destroy = async (req, res, next) => {
    const { id } = req.params;

    try {
      const user = await User.findByPk(id);

      if (!user) throw new Error("User not found");

      const rm = await user.destroy();

      if (!rm.length)
        return res.status(200).send({
            status: true,
            message: "User " + id + " remove successfully",
          });
      else
        throw new Error("User " + id + " removed is fail");
    
        
    } catch (e) {
      return res.send({
        status: false,
        message: e.message,
      });
    }
  };

  return this;
};

module.exports = mainController;
