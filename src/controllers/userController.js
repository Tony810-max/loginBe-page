const userModel = require("../../src/models/userModel");

class userController {
  async getUser(req, res) {
    try {
      const allUsers = await userModel.find({});
      return res.json(allUsers);
    } catch (error) {
      throw error;
    }
  }

  async createUser(req, res, next) {
    try {
      const { name, email, password } = req.body;
      const user = await userModel.findOne({ email: email });
      if (user) {
        return res.status(400).json({ error: "Account is duplicated" });
      }
      const newUser = new userModel({ name, email, password });
      await newUser.save();
      return res.json({ message: "Create account successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      console.log(req);
      await userModel.deleteOne({ _id: id });
      return res.json({
        message: "Delete successfully",
      });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new userController();
