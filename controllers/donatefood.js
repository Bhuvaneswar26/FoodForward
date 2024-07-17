const donatelargeschema = require("../models/donatelarge");
const donatefood = async (req, res) => {
  try {
    // Fetch recent donation data from the database
    const donateEntries = await donatelargeschema
      .find({})
      .sort({ createdAt: -1 }) // Assuming createdAt field exists for sorting
      .limit(5); // Limiting to 5 recent donations, adjust as needed

    res.render("donatefood", { donateEntries });
  } catch (err) {
    console.log("Error fetching recent donations:", err);
    res.status(500).send("Error fetching recent donations");
  }
};

const donatelargepost = async (req, res) => {
  console.log("hii i reached", req.body);
  try {
    const mail = req.session.usermail;
    const data = new donatelargeschema({
      usermail: req.body.email,
      name: req.body.name,
      desc: req.body.desc,
      mobileno: req.body.contact,
      address: req.body.eventAddress,
      date: req.body.date,
      time: req.body.time,
    });
    await data.save();
    console.log("Donation saved successfully.");
    // Redirect to donatefood route to render with updated data
    res.redirect("/donatefood");
  } catch (err) {
    console.log("Error saving donation:", err);
    // Handle error appropriately
    res.status(500).send("Error saving donation");
  }
};

module.exports = { donatefood, donatelargepost };
