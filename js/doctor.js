
let apiKey = require('./../.env').apiKey;
export let Doctor = {

  doctorsByIssue (requestURL, issue, user_key){
    $.getJSON(requestURL, {
      'user_key' : user_key,
      'query' : issue,
      'location' : 'or-portland',
      // 'limit' : 9,
    }, function(data) {
      console.log(data);

      if (data.data && data.data.length > 0 {
        let doctors = '<p>Here are your results</p>';

        $.each(data.results, function(i, rep) {
          doctors += '<p>';
          doctors += rep.image_url;
          doctors += rep.first_name + ' ' + rep.middle_name+ ' ' +  rep.last_name+ ' ' +  rep.title;
          doctors += rep.bio;
          doctors += '</p>';
        }
      });
    return doctors;
    else {
      return null;
    }
    });
  }
};
