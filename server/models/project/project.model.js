const restful = require('node-restful')
const mongoose = restful.mongoose

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  information: {
    type: String,
    required: true
  },
  moreInformation: {
    type: String,
    required: true
  },
  technologies: {
    type: Array,
    required: true
  },
  imageLocation: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})

module.exports = restful.model('Project', projectSchema)