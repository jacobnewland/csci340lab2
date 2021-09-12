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
            url: "https://movie-quote-api.herokuapp.com/v1/quote/?censored",
            success: function(results) {
              $('.quote').text(results["quote"]);
            },
            error: function(xhr,status,error) {
              console.log(error);
            }
        });
      });
});
