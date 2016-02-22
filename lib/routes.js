var handlers = require('./handlers.js');

module.exports = [

    {
        method: 'GET',
        path: '/',
        handler: handlers.load
    },

    {
        method: 'GET',
        path: '/feed/{path*}',
        handler: handlers.feed
    },

    {
        method: 'GET',
        path: '/twitter/{path*}',
        handler: handlers.twitter
    },

    {
        method: 'GET',
        path: '/instagram/{path*}',
        handler: handlers.instagram
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
