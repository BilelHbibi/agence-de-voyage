import User from "../models/User.js";

//cretae new User

export const createUser = async (req, res) => {
  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();
    res.status(200).json({
      success: true,
      message: "succefuly created",
      data: savedUser,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create.Try again" });
  }
};

//update User
export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "succefuly updated",
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update" });
  }
};

//delete User
export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "succefuly deleted",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to deleted" });
  }
};

//getSingle User
export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    res.status(200).json({
      success: true,
      message: "succefuly finded",
      data: user,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to find" });
  }
};

//getAll User
export const getAllUser = async (req, res) => {

  try {
    const users = await User.find({}) 
    res.status(200).json({
      success: true,
      message: "succefuly finded All",
      data: users,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to find All" });
  }
};

