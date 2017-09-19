let apiKey = require('./../.env').apiKey;
export class Doctor {

  constructor(first, last, title, bio, image){
    this.first = first;
    this.last = last;
    this.title = title;
    this.bio = bio;
    this.image = image;
  }

  doctorsByIssue (issue, user_key){

    let requestURL = 'https://api.betterdoctor.com/2016-03-01/doctors?query=' + issue + '&location=or-portland&skip=0&limit=10&user_key='+ user_key;

    $.getJSON(requestURL, {
    }, function(data) {
      console.log(data);

      if (data.data && data.data.length > 0) {
        let doctors = [];
        $(".well").toggle();
        $.each(data.data, function(i, rep) {
          let doctor = new Doctor(rep.profile.first_name, rep.profile.last_name, rep.profile.title, rep.profile.bio, rep.profile.image_url);
          doctors.push(doctor);
        });
        doctors.forEach(function(doctor){
          $("#searchResult").append('<img src="' + doctor.image + '">' + '<h2> '+ doctor.first + ' ' + doctor.last + ' ' + doctor.title  + '</h2>' + '<p>' + doctor.bio + '<p>');
        });
      }
      else {
        $("#searchResult").append('<p>There are no doctors who cover this issue!</p>');
        }
    });
  }
}
