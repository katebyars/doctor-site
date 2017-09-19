let apiKey = require('./../.env').apiKey;
export class Doctor {

  constructor(first, last, title, bio){
    this.first = first;
    this.last = last;
    this.title = title;
    this.bio = bio;
  }

  doctorsByIssue (issue, user_key){

    let requestURL = 'https://api.betterdoctor.com/2016-03-01/doctors?query=' + issue + '&location=or-portland&skip=0&limit=10&user_key='+ user_key;

    $.getJSON(requestURL, {
    }, function(data) {
      if (data.data && data.data.length > 0) {
        let doctors = [];

        $.each(data.data, function(i, rep) {
          let doctor = new Doctor(rep.profile.first_name, rep.profile.last_name, rep.profile.title, rep.profile.bio);
          doctors.push(doctor);
          // doctors.push(rep.profile.middle_name);
          // doctors.push(rep.profile.last_name);
          // doctors.push(rep.profile.title);
          // doctors.push(rep.profile.bio);
        });
        console.log("doctor.js" + doctors);
        doctors.forEach(function(doctor){
          $("#searchResult").append('<p> '+ doctor.first + '</p>');
        });
      }
      else {
        return '<p>There are no doctors who cover this issue!</p>';
        }
    });
  }
}
