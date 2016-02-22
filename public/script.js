$(document).ready(function() {
    var instagramToken = window.location.pathname.split('/')[2];

    // $.ajax({
    //     url: "https://api.instagram.com/v1/users/1655822653/media/recent/?count=5?access_token=" + instagramToken,
    //     complete: function(data) {
    //         console.log(data);
    //     }
    // });

    $.ajax({
        url: "/twitter/msmichellegar",
        complete: function(data) {
            parseTweets(data);
            enableContentHiding();
        }
    });

});

function parseTweets(data) {

    $("#news").html("");
    for (var i=0; i<data.responseJSON.length; i++) {

        if (data.responseJSON[i].extended_entities) {

            $("#news").append("<div class='update'><p class='close'>x</p><p>" + data.responseJSON[i].created_at + "</p><p>" + data.responseJSON[i].text + "</p><img src='" + data.responseJSON[i].extended_entities.media[0].media_url + "'/></div>");

        } else {
            $("#news").append("<div class='update'><p class='close'>x</p><p>" + data.responseJSON[i].created_at + "</p><p>" + data.responseJSON[i].text + "</p></div>");
        }
    }

}

function enableContentHiding() {

    $(".close").click(function() {
        // console.log();
        $(this.parentNode).fadeOut();
    });
}
