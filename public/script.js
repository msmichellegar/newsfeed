$(document).ready(function() {

    $("#twitter").keyup(function() {
        var username = $("#twitter").val();

        $.ajax({
            url: "/twitter/" + username,
            complete: function(data) {
                parseTweets(data);
            }
        });

    });

});

function parseTweets(data) {
    $("#news").html("");
    for (var i=0; i<data.responseJSON.length; i++) {
        $("#news").append("<p>" + data.responseJSON[i].text + "</p>");
    }

}
