let apiKey = require('./../.env').apiKey;
export class Doctor {

  constructor(first, last, title, bio, phone, numberAddress, numberAddress2, city, state, zip, image, accepts){
    this.first = first;
    this.last = last;
    this.title = title;
    this.bio = bio;
    this.phone = phone;
    this.numberAddress = numberAddress;
    this.numberAddress2 = numberAddress2;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.image = image;
    this.accepts = false;
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
          let doctor = new Doctor(rep.profile.first_name, rep.profile.last_name, rep.profile.title, rep.profile.bio, rep.practices[0].phones[0].number, rep.practices[0].visit_address.street, rep.practices[0].visit_address.street2, rep.practices[0].visit_address.city, rep.practices[0].visit_address.state, rep.practices[0].visit_address.zip, rep.profile.image_url, rep.practices.accepts_new_patients);
          doctors.push(doctor);
        });

        doctors.forEach(function(doctor){
          $("#searchResult").append('<div class="col-md-6">' + '<img src="' + doctor.image + '<h2> '+ doctor.first + ' ' + doctor.last + ' ' + doctor.title  + '</h2>' + '<p>' + doctor.bio + '</p>' +  '<p>' + doctor.phone + '</p>' + '</p>' + ' ' + doctor.numberAddress + ' ' + doctor.numberAddress2 + ' ' + doctor.city + ' ' + doctor.state  + ' ' + doctor.zip + '</p>' + ' ' + '</div>');

          // if (doctor.accepts === true) {
          //   $("#searchResult").append("Dr. " + doctor.last + " " + "is accepting new patients!")
          // }
          // else {
          //   $("#searchResult").append("Dr. " + doctor.last + " " + "is not accepting new patients at this time.")
          //
          // }
      //   });
      // }
      // else {
      //   $("#searchResult").append('<p>There are no doctors who cover this issue!</p>');
      //   }
    });
  }
}
