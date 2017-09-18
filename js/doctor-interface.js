import { Doctor } from './../js/doctor.js';

$(document).ready(function() {
  $('#search-form').submit(function(e) {
    e.preventDefault();

    var $results = $('#lookup-results'),

    issue = $('#issue').val();

    let requestURL = 'https://api.betterdoctor.com/2016-03-01/doctors?';
    var apiKey = require('./../.env').apiKey;

    Doctor.doctorsByIssue(requestURL, issue, apiKey);
//collect data
    //
    // searchDoctorsByIssue (function(results){
    //   // here you use the output
    // });
    $('#results').html("Your search results for" + issue);

  });
});
