$(document).ready(function() {

    initialise();

});

function initialise() {
    var instagramToken = window.location.pathname.split('/')[2];

    // get instagram data
    $.ajax({
        url: "/instagram/" + instagramToken,
        complete: function(pics) {
            var instagramData = pics.responseJSON.data;

            // get twitter data
            $.ajax({
                url: "/twitter/msmichellegar",
                complete: function(tweets) {
                    var twitterData = tweets.responseJSON;

                    // display the data
                    displayData(instagramData, twitterData);

                    // enable content hiding functionality
                    enableContentHiding();
                }
            });

        }
    });

}


function displayData(instagramData, twitterData) {
    var combinedData = instagramData.concat(twitterData);
    var sortedData = sortByDate(combinedData);

    // iterate through array of sorted data
    sortedData.map(function(data) {

        // if data is from instagram, display as picture
        if (data.filter) {
            displayPic(data);

        // if data is from twitter, display as tweet
        } else {
            displayTweet(data);
        }

    });


}

function displayPic(data) {

    // if data contains a video, append the following
    if (data.videos) {
        $("#news").append("<div class='update'><p class='close'>x</p><p>" + data.created_time + "</p><p>" + data.caption.text + "</p><video controls><source src='" + data.videos.low_resolution.url + "' type='video/mp4'></source></video></div>");

    // if data contains a simple image, append the following
    } else {
        $("#news").append("<div class='update'><p class='close'>x</p><p>" + data.created_time + "</p><p>" + data.caption.text + "</p><img src='" + data.images.standard_resolution.url + "'>" + "</div>");
    }

}

function displayTweet(data) {

    // if data contains an image, append the following
    if (data.extended_entities) {
        $("#news").append("<div class='update'><p class='close'>x</p><p>" + data.created_at + "</p><p>" + data.text + "</p><img src='" + data.extended_entities.media[0].media_url + "'/></div>");

    // if data contains simple text, append the following
    } else {
        $("#news").append("<div class='update'><p class='close'>x</p><p>" + data.created_at + "</p><p>" + data.text + "</p></div>");
    }

}

function sortByDate(dataArray) {

    // sort array by timestamp
    dataArray.sort(function(a, b) {
        var dateA;
        var dateB;

        // determine dateA according to content souce (insta vs twitter)
        if (a.filter) {
            dateA = a.created_time;
        } else {
            dateA = moment(new Date(a.created_at)).unix();
        }

        // determine dateB according to content souce (insta vs twitter)
        if (b.filter) {
            dateB = b.created_time;
        } else {
            dateB = moment(new Date(b.created_at)).unix();
        }

        return dateB - dateA;

    });

    return dataArray;

}

function enableContentHiding() {

    // hide a content div when close button clicked
    $(".close").click(function() {
        $(this.parentNode).fadeOut();
    });
}
