
function sendRequests() {
      var url = "https://jsonplaceholder.typicode.com/comments";
      pid = 2;
      axios.get(url, {
            params: {
                  postId: pid
            }
      })
            .then(function (response) {
                  // getting emails pf the commenters 
                  var comments = response.data
                  comments.forEach(element => {
                        console.log(element.email);
                  });
            })
            .catch(handleErrors);
}

function handleErrors(error) {
      console.log(error);
      if (error.response) {
            // errors like 404, 503, the url may be valid but the page cannot be found
            console.log("Problem with Response: " + error.response.status);
      } else if (error.request) {
            // the url is invalid 
            console.log("Problem with Request!");
      } else {
            console.log("Error", error.message);
      }
}

sendRequests();