import { Doctor } from './../js/doctor.js';

$(document).ready(function() {
  $('#search-form').submit(function(e) {
    // console.log("1");
    e.preventDefault();
    var $results = $('#searchResult');

    let issue = $('#issue').val();
  // console.log("2");
    let requestURL = 'https://api.betterdoctor.com/2016-03-01/doctors?';
    var apiKey = require('./../.env').apiKey;
    let resultsOfLookup = Doctor.doctorsByIssue(requestURL, issue, apiKey);

    $results.html(resultsOfLookup);
      // console.log(resultsOfLookup);
    // function displayDoctors(resultsOfLookup) {
    //   $.each(resultsOfLookup, function(i, rep) {
    //     $('#searchResult').html('<p>' + resultsOfLookup.rep.first_name);
    //   });
    // }
  });
});
