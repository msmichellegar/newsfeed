var handlers = require('./handlers.js');

module.exports = [

    {
        method: 'GET',
        path: '/',
        handler: handlers.load
    },

    {
        method: 'GET',
        path: '/home/{path*}',
        handler: handlers.home
    },

    {
        method: 'GET',
        path: '/twitter/{path*}',
        handler: handlers.twitter
    },

    {
        method: 'GET',
        path: '/static/{path*}',
        handler:  {
            directory: {
                path: './'
            }
        }
    }
];
