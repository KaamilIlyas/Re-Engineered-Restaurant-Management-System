const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//-------------------------

const Dish = require("./models/DishesSchema");
const Feedback = require("./models/FeedbackSchema");
const Admin = require("./Models/AdminSchema");
const Rider=require("./Models/RiderSchema");
const User = require("./Models/UserSchema");



//-------------------------
const app = express();
app.use(cors());
app.use(express.json());
const port = 3001;




//------------------------------------------------------------------------------
let url="mongodb+srv://razzi:0984@cluster0.vuen418.mongodb.net/Restaurant";
mongoose.connect(url
).then(()=>{
  console.log("Database Connected")
})
.catch(()=>{
  console.log("Database not Connected")
})

//------------------------------------------------------------------------------




app.post("/api/adminLogin", async (req, res) => {
  // console.log(req.body)
  const result = await Admin.findOne({
    username: req.body.username,
    password: req.body.password,
  })
    .then((obj) => {
      if (obj) {
        res.json({ found: true, object: obj });
      } else {
        res.json({ found: false });
      }
    })
    .catch((err) => {
      res.json(err);
    });
});

//------------------------------------------------------

app.post("/api/addDish", async (req, res) => {
  try {
    const dish = await new Dish(req.body);
    dish.save().then((response) => {
      console.log(response);
      res.json({ status: response });
    });
  } catch (error) {
    res.json({ status: "error" });
  }
});


app.get("/api/getDishes", async (req, res) => {
  const result = await Dish.find({}, {  _id: 0 })
    .then((response) => {
      res.send(response);
    })
    .catch({ message: "error" });
});


app.post("/api/deleteDish", async (req, res) => {
  const result = await Dish.deleteOne({
    name: req.body.name,
  });
  if (result.deletedCount == 1) {
    console.log("deleted");
  } else {
    console.log("not found");
  }
  res.send({ status: result });
});


//-------------------------------------------------------------------

app.post("/api/getfeedbacks", async (req, res) => {
  const result = await Feedback.find({}, { user_email: 1, feedback: 1, _id: 0 })
    .then((response) => {
      res.send(response);
    })
    .catch({ message: "error" });
});

//-------------------------------------------------------------------


// GET all riders
app.get("/api/riders", async (req, res) => {
  try {
    const allRiders = await Rider.find({});
    res.json(allRiders);
  } catch (err) {
    res.status(500).json({ message: "error" });
  }
});


// // GET all available riders
// app.get('/riders/available', async (req, res) => {
//   try {
//     const availableRiders = await Rider.find({ status: 'available' });
//     res.json(availableRiders);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // GET all unavailable riders
// app.get('/riders/unavailable', async (req, res) => {
//   try {
//     const unavailableRiders = await Rider.find({ status: 'unavailable' });
//     res.json(unavailableRiders);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

//----------------------------------------------------

app.post("/riders/deleteRider", async (req, res) => {
  const result = await Rider.deleteOne({
    riderid: req.body.riderid,
  });
  if (result.deletedCount == 1) {
    console.log("Rider deleted");
  } else {
    console.log("Rider not found");
  }
  res.send({ status: result });
});



//------------------------------------------------------

//--------------------------------------------------------


app.post("/api/getUsers", async (req, res) => {
  const result = await User.find({}, { _id: 0 })
    .then((response) => {
      res.send(response);
    })
    .catch({ message: "error" });
});

app.post("/api/deleteUser", async (req, res) => {
  const result = await User.deleteOne({
    userid: req.body.userid,
  });
  if (result.deletedCount == 1) {
    console.log("User deleted");
  } else {
    console.log("User not found");
  }
  res.send({ status: result });
});

app.post("/api/blockUser", async (req, res) => {
  await User.updateOne({ userid: req.body.userid }, { isBlock: true })
    .then((response) => {
      console.log(response);
      res.send({ blocked: response.modifiedCount });
    })
    .catch((err) => {
      res.send(err);
    });
});

app.post("/api/unBlockUser", async (req, res) => {
  await User.updateOne({ userid: req.body.userid }, { isBlock: false })
    .then((response) => {
      console.log(response);
      res.send({ unblocked: response.modifiedCount });
    })
    .catch((err) => {
      res.send(err);
    });
});

//--------------------------------------------------------



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
