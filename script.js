$(document).ready(function() {
  $('#clicker').click(function() {
    $.ajax({
      dataType: "json",
      url: "https://cors-anywhere.herokuapp.com/https://random-d.uk/api/random",  //https://cors-anywhere.herokuapp.com/corsdemo
      success: function(results) {
        console.log(results["url"]);https://cors-anywhere.herokuapp.com/
        if (results["url"].endsWith(".mp4")) {
          $('#duck').attr("src", "duckhunt.png");
        } else {
          $('#duck').attr("src", results["url"] );
        }
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
      $.ajax({
            dataType: "json",
            url: "https://cors-anywhere.herokuapp.com/corsdemo/https://breaking-bad-quotes.herokuapp.com/v1/quotes", //https://cors-anywhere.herokuapp.com/corsdemo
            success: function(results) {
              $('.quote').text(results["quoteText"]);
            },
            error: function(xhr,status,error) {
              console.log(error);
            }
        });

    });
  });
});
