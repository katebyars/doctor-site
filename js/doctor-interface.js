var DoctorModule = require('./../js/doctor.js').DoctorModule;
let apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  var doctor = new DoctorModule();

  $('#search-form').submit(function(event) {
    event.preventDefault();
    var issue = $('#issue').val();
    doctor.getData(issue, apiKey);
 });
});
