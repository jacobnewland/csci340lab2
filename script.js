// $(document).ready(function() {
//   $("#randomizer-button").click(function() {
//     $(document).ready(function() {
//   $('#clicker').click(function() {
//     $.ajax({
//       dataType: "json",
//       url: "https://random-d.uk/api",
//       success: function(results) {
//         console.log(results["url"]);
//
//           $('#duck').attr("src", results["url"]);
//
//       },
//       error: function(xhr,status,error) {
//         console.log(error);
//       }
//     });
//   //   $.ajax({
//   //     dataType: "jsonp",
//   //     jsonpCallback: "parseQuote",
//   //     url: "https://breaking-bad-quotes.herokuapp.com/v1/quotes",
//   //     success: function(results) {
//   //       $('.quote').text(results["quoteText"]);
//   //     },
//   //     error: function(xhr,status,error) {
//   //       console.log(error);
//   //     }
//   // });
// });
//   });
//     });
//
// });

$(document).ready(function() {
  $('#clicker').click(function() {
    $.ajax({
      dataType: "json",
      url: "https://random-d.uk/api/random",
      success: function(results) {
        console.log(results["url"]);
        if (results["url"].endsWith(".mp4")) {
          $('#duck').attr("src", "Psyduck.png");
        } else {
          $('#duck').attr("src", results["url"]);
        }
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  });
});
