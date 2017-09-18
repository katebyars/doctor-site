
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
    });
  }
};
