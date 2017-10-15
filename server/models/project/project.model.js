const restful = require('node-restful')
const mongoose = restful.mongoose

const projectSchema = new mongoose.Schema({
  title: String,
  label: String,
  information: String,
  moreInformation: String,
  technologies: Array,
  imageLocation: String,
  url: String
})

module.exports = restful.model('Project', projectSchema)