let apiKey = require('./../.env').apiKey;
export let Doctor = {
  doctorsByIssue (requestURL, issue, user_key){
    $.getJSON(requestURL, {
      'user_key' : user_key,
      'query' : issue,
      'location' : 'or-portland',
      // 'limit' : 9,
    }, function(data) {
      // if (data.data && data.data.length > 0) {
      //   let doctors = [];
      //
      //   $.each(data.data, function(i, rep) {
      //     doctors.push(rep.profile);
      //     // doctors.push(rep.first_name);
      //     // doctors.push(rep.middle_name);
      //     // doctors.push(rep.last_name);
      //     // doctors.push(rep.title);
      //     // doctors.push(rep.bio);
      //   });
      // return doctors;
      // console.log(doctors);
      // }
      // else {
      //   return '<p>There are no doctors who cover this issue!</p>';
      // }
    });
  }
};
