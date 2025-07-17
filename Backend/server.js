const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect("mongodb+srv://Sumaya:sumaya%40123@clusterreact.9fktqw9.mongodb.net/")
  .then(() => console.log("✅ Database connected successfully."))
  .catch((err) => console.error("❌ DB connection error:", err));

// Import routes
const adminRoute = require("./Routes/adminRoute");
console.log("✅ adminRoute required in server.js");
app.use(adminRoute);

const registerRoute = require("./Routes/registerRoute");
console.log("✅ registerRoute required in server.js");
app.use(registerRoute);

const patientRoute = require("./Routes/patientRoute");
console.log("✅ patientRoute required in server.js");
app.use("/", patientRoute);

const cancelledRoute = require("./Routes/cancelledRoute");
app.use(cancelledRoute);

const authRoute = require('./Routes/authRoute');
console.log("✅ authRoute required in server.js");
app.use("/", authRoute);

const messageRoute = require('./Routes/messageRoute');
app.use("/", messageRoute);

const notificationRoutes = require('./Routes/notificationRoute');
app.use('/api/notifications', notificationRoutes);


// Start server
app.listen(5000, () => {
  console.log("🚀 Server is running on port 5000");
});
