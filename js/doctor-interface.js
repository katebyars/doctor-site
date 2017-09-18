import { Doctor } from './../js/doctor.js';

$(document).ready(function() {
  $('#search-form').submit(function(e) {
    e.preventDefault();
    var $results = $('#searchResult');
    let issue = $('#issue').val();
    let requestURL = 'https://api.betterdoctor.com/2016-03-01/doctors?';
    var apiKey = require('./../.env').apiKey;
    let resultsOfLookup = Doctor.doctorsByIssue(requestURL, issue, apiKey);
    console.log(resultsOfLookup);
    function displayResults (resultsOfLookup) {
      resultsOfLookup.forEach(function(doctor){
      $("#searchResult").append('<p> '+ doctor.data.first_name + '</p>');
      });
    }
  });
$("input").val("");
$("#searchResult").empty();
});
