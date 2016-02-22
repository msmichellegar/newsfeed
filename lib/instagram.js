var ig = require('instagram-node').instagram();

ig.use({
    client_id: process.env.IG_CLIENT_ID,
    client_secret: process.env.IG_CLIENT_SECRET
});

module.exports = {

    getUrl : function(request, callback) {
        var url = ig.get_authorization_url(process.env.IG_REDIRECT_URI);
        callback(url);
    },

    handleAuth : function(code, callback) {
        ig.authorize_user(code, process.env.IG_REDIRECT_URI, function(err, results) {
            if (err) {
                console.log(err);
            } else {
                callback(results.access_token);
            }
        });
    }

};
