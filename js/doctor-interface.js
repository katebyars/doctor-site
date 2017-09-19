import { Doctor } from './../js/doctor.js';

$(document).ready(function() {
  $('#search-form').submit(function(e) {
    e.preventDefault();
    let issue = $('#issue').val();
    var apiKey = require('./../.env').apiKey;
    let doctor = new Doctor();
    doctor.doctorsByIssue(issue, apiKey);
  $("input").val("");
  $("#searchResult").empty();
  });
});
