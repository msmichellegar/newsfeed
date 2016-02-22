$(document).ready(function() {

    $.ajax({
        url: "/instagram",
        complete: function(data) {
            console.log(data);
        }
    });

    $.ajax({
        url: "/twitter/msmichellegar",
        complete: function(data) {
            parseTweets(data);
        }
    });

});

function parseTweets(data) {
    $("#news").html("");
    for (var i=0; i<data.responseJSON.length; i++) {
        $("#news").append("<p>" + data.responseJSON[i].created_at + " " + data.responseJSON[i].text + "</p>");
    }

}
