import { Doctor } from './../js/doctor.js';

$(document).ready(function() {
  $('#search-form').submit(function(e) {
    e.preventDefault();
    let issue = $('#issue').val();
    let requestURL = 'https://api.betterdoctor.com/2016-03-01/doctors?';
    var apiKey = require('./../.env').apiKey;
    let doctor = new Doctor();
    // console.log(doctor.doctorsByIssue(requestURL, issue, apiKey));//undefined
    doctor.doctorsByIssue(requestURL, issue, apiKey);
    $("input").val("");
    $("#searchResult").empty();
  });
});
