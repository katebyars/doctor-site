let apiKey = require('./../.env').apiKey;

export class Doctor {
  constructor (first, last, bio, title) {
    this.first = first;
    this.last = last;
    this.bio = bio;
    this.title = title;
  }

  doctorsByIssue (requestURL, issue, user_key){

    $.getJSON(requestURL, {
      'user_key' : user_key,
      'query' : issue,
      'location' : 'or-portland',
      // 'limit' : 9,
    }, function(data) {
      if (data.data && data.data.length > 0) {
        let doctors = [];
        $.each(data.data, function(i, rep) {
          let doctor = new Doctor(rep.profile.first_name, rep.profile.last_name, rep.profile.bio, rep.profile.title);
          $('#searchResult').html('<p>' + doctor.first + ' ' + doctor.last + ' ' + doctor.title + doctor.bio + '</p>');
        });
        return doctors;
      }
      else {
        return '<p>There are no doctors who cover this issue!</p>';
      }
    });
  }
}
