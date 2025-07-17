const express = require('express');
const router = express.Router();
const Admin = require("../Model/adminModel");

console.log("✅ adminRoute loaded");

// POST create admin
router.post("/admin/create", async (req, res) => {
    console.log("✅ POST /admin/create hit")
    try {
        const newAdmin = new Admin({
            email: req.body.email,
            password: req.body.password
        });
        const savedAdmin = await newAdmin.save();
        res.send(savedAdmin);
    } catch (err) {
        res.status(500).send(err);
    }
});

// GET all admins
router.get("/admin/read", async (req, res) => {
    try {
        const admins = await Admin.find();
        res.send(admins);
    } catch (err) {
        res.status(500).send(err);
    }
});

// DELETE admin by ID
router.delete("/admin/delete/:id", async (req, res) => {
    try {
        const deletedAdmin = await Admin.findByIdAndDelete(req.params.id);
        res.send(deletedAdmin);
    } catch (err) {
        res.status(500).send(err);
    }
});

// POST login
router.post("/admin/login", async (req, res) => {
    try {
        const admin = await Admin.findOne({
            email: req.body.email,
            password: req.body.password
        });
        if (admin) {
            res.send({
                success: "Admin has been logged in successfully",
                admin
            });
        } else {
            res.send({
                error: "Invalid email or password"
            });
        }
    } catch (err) {
        console.error(err);
        res.status(5000).send("Internal server error");
    }
});

module.exports = router;
