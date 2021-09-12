$(document).ready(function() {
  $('#duckclicker').click(function() {
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

          });
        });
      });
$(document).ready(function() {
        $('#quoteclicker').click(function() {
      $.ajax({
            dataType: "json",
            url: "https://github.com/Rob--W/cors-anywhere/https://breaking-bad-quotes.herokuapp.com/v1/quotes", //https://github.com/Rob--W/cors-anywhere/
            success: function(results) {
              $('.quote').text(results["quoteText"]);
            },
            error: function(xhr,status,error) {
              console.log(error);
            }
        });
      });
});
