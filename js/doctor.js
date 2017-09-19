let apiKey = require('./../.env').apiKey;

let DoctorModule = function() {


DoctorModule.prototype.getData = function(issue, apiKey) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + {this.issue} + '&location=or-portland&skip=0&limit=10&user_key=' +  {this.apiKey})
    .then(function(results) {
      results.forEach(function(result) {
        $('#searchResult').append('<li>' + profile.first_name + '</li>');
      });
    })
    .fail(function() {
      console.log('something went wrong');
    });
  };
};
exports.DoctorModule = DoctorModule;
