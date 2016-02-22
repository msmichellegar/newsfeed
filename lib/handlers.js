var api = require("./api.js");

module.exports = {

    home: function(request, reply) {
        reply.file('./public/index.html');
    }

};
