const decomposelargeschema = require("../models/decomposeLarge");

const decomposefood = async (req, res) => {
  try {
    // Fetch all decomposed  entries
    const decomposeEntries = await decomposelargeschema.find();
    res.render("decomposefood", { decomposeEntries });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

const decomposelargefood = async (req, res) => {
  console.log("Decomp Large");
  try {
    const {
      organizerName,
      email,
      contact,
      eventAddress,
      desc,
      date,
      time,
      foodType,
    } = req.body;

    console.log(req.body);
    // Validate input data
    if (
      !organizerName ||
      !email ||
      !contact ||
      !eventAddress ||
      !desc ||
      !date ||
      !time ||
      !foodType
    ) {
      return res.status(400).send("All fields are required");
    }

    // Create a new decompose entry
    const newDecompose = new decomposelargeschema({
      organizerName,
      email,
      contact,
      eventAddress,
      desc,
      date,
      time,
      foodType,
    });

    // Save to database
    await newDecompose.save();

    // Fetch all decomposed entries including the new one
    const decomposeEntries = await decomposelargeschema.find();

    // Send response
    res.status(200).render("decomposefood", { decomposeEntries });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { decomposefood, decomposelargefood };
