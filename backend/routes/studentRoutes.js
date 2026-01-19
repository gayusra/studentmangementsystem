const express = require("express");
const Student = require("../models/students");

const router = express.Router();

// Add student
router.post("/", async (req, res) => {
  const student = new Student({
    name: req.body.name
  });
  await student.save();
  res.json(student);
});

// Get all students
router.get("/", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// Update attendance
router.put("/:id", async (req, res) => {
  const student = await Student.findByIdAndUpdate(
    req.params.id,
    { isPresent: req.body.isPresent },
    { new: true }
  );
  res.json(student);
});

// Delete student
router.delete("/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: "Student deleted" });
});

module.exports = router;
