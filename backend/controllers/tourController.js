import Tour from "../models/Tour.js";

//cretae new tour

export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);
  try {
    const savedTour = await newTour.save();
    res.status(200).json({
      success: true,
      message: "succefuly created",
      data: savedTour,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create.Try again" });
  }
};

//update tour
export const updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "succefuly updated",
      data: updatedTour,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update" });
  }
};

//delete tour
export const deleteTour = async (req, res) => {
  const id = req.params.id;

  try {
    await Tour.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "succefuly deleted",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to deleted" });
  }
};

//getSingle tour
export const getSingleTour = async (req, res) => {
  const id = req.params.id;
  try {
    const tour = await Tour.findById(id).populate("reviews");
    res.status(200).json({
      success: true,
      message: "succefuly finded",
      data: tour,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to find" });
  }
};

//getAll tour
export const getAllTour = async (req, res) => {
  //for pagination
  const page = parseInt(req.query.page);
  try {
    const tours = await Tour.find({})
      .populate("reviews")
      .skip(page * 8)
      .limit(8);
    res.status(200).json({
      success: true,
      count: tours.length,
      message: "succefuly finded All",
      data: tours,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to find All" });
  }
};

//get tour by search
export const getTourBySearch = async (req, res) => {
  const citys = new RegExp(req.query.city, "i");
  const distances = parseInt(req.query.distance);
  const maxGroupSizes = parseInt(req.query.maxGroupSize);

  try {
    const tours = await Tour.find({
      city: citys,
      distance: { $gte: distances },
      maxGroupSize: { $gte: maxGroupSizes },
    }).populate('reviews');
    res.status(200).json({
      success: true,
      message: "succefuly finded All",
      data: tours,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "not find" });
  }
};

//get featured tour
export const getFeaturedTour = async (req, res) => {
  try {
    const tours = await Tour.find({ featured: true })
      .populate("reviews")
      .limit(8);
    res.status(200).json({
      success: true,
      count: tours.length,
      message: "succefuly finded featured",
      data: tours,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to featured" });
  }
};

//get tour count
export const getTourCount = async (req, res) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount();
    res.status(200).json({ success: true, data: tourCount });
  } catch (error) {
    res.status(500).json({ success: false, message: "failed to fetch" });
  }
};
