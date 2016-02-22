$(document).ready(function() {
    var instagramToken = window.location.pathname.split('/')[2];

    $.ajax({
        url: "/instagram/" + instagramToken,
        complete: function(data) {
            displayPics(data);
            enableContentHiding();
        }
    });

    $.ajax({
        url: "/twitter/msmichellegar",
        complete: function(data) {
            displayTweets(data);
            enableContentHiding();
        }
    });

});

function displayPics(data) {

    console.log(data.responseJSON.data)

    for (var i=0; i<data.responseJSON.data.length; i++) {

        if (data.responseJSON.data[i].videos) {
            $("#news").append("<div class='update'><p class='close'>x</p><p>" + data.responseJSON.data[i].created_time + "</p><p>" + data.responseJSON.data[i].caption.text + "</p><video controls><source src='" + data.responseJSON.data[i].videos.low_resolution.url + "' type='video/mp4'></source></video></div>");
        } else {
            $("#news").append("<div class='update'><p class='close'>x</p><p>" + data.responseJSON.data[i].created_time + "</p><p>" + data.responseJSON.data[i].caption.text + "</p><img src='" + data.responseJSON.data[i].images.standard_resolution.url + "'>" + "</div>");
        }

    }

}

function displayTweets(data) {

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
