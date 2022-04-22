// import mongoose
const mongoose = require('mongoose');
// declare model name
const model_name = 'classroom';

// create schema
const schema = new mongoose.Schema({
  body: {
    type: String,
    required: true,
  },
  class_Room_Name: {
    type: String,
    trim: true,
    required: true,
  },
  student_count: {
    type: Number,
    trim: true,
    required: true,
  },
  created_at: {
    type: Date,
    default: new Date(),
  },
  updated_at: {
    type: Date,
    default: new Date(),
  },
  is_deleted: {
    type: Boolean,
    default: false,
  },
});

// create modal
const model = mongoose.model(model_name, schema);
module.exports = model;
