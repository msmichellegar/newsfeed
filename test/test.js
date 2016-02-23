var test = require("tape");
var server = require('../server.js');
var twitter = require('../lib/twitter.js');
var twitter = require('../lib/instagram.js');

test("'/' returns 302 statusCode", function (t) {
    server.inject({method: 'GET', url: '/'}, function (res) {
        t.equal(res.statusCode, 302, 'redirection successful');
        t.end();
    });
});

test("'/feed' returns 200 statusCode", function (t) {
    server.inject({method: 'GET', url: '/feed'}, function (res) {
        t.equal(res.statusCode, 200, 'homepage found');
        t.end();
    });
});

test("'/twitter' returns 200 statusCode", function (t) {
    server.inject({method: 'GET', url: '/twitter'}, function (res) {
        t.equal(res.statusCode, 200, 'server request successful');
        t.end();
    });
});

test("'/static/{file*}' returns 200 statusCode", function (t) {
    server.inject({method: 'GET', url: '/static/public/main.css'}, function (res) {
        t.equal(res.statusCode, 200, 'static file retrieved');
        t.end();
    });
});

test("CONSUMER_KEY is defined'", function (t) {
    t.notEqual(process.env.CONSUMER_KEY, undefined, 'env variable set');
    t.end();
});

test("CONSUMER_SECRET is defined'", function (t) {
    t.notEqual(process.env.CONSUMER_KEY, undefined, 'env variable set');
    t.end();
});

test("ACCESS_KEY is defined'", function (t) {
    t.notEqual(process.env.CONSUMER_KEY, undefined, 'env variable set');
    t.end();
});

test("ACCESS_TOKEN_SECRET is defined'", function (t) {
    t.notEqual(process.env.CONSUMER_KEY, undefined, 'env variable set');
    t.end();
});

test("IG_CLIENT_ID is defined'", function (t) {
    t.notEqual(process.env.IG_CLIENT_ID, undefined, 'env variable set');
    t.end();
});

test("IG_CLIENT_SECRET is defined'", function (t) {
    t.notEqual(process.env.IG_CLIENT_SECRET, undefined, 'env variable set');
    t.end();
});

test("twitter.getTweets() returns array", function (t) {
    twitter.getTweets("msmichellegar", function(data) {
        t.equal(Array.isArray(data), true, 'returns array');
        t.end();
    });
});

test("twitter.getTweets() returns array of 5 items", function (t) {
    twitter.getTweets("msmichellegar", function(data) {
        t.equal(data.length, 5, 'array is 5 items long');
        t.end();
    });
});
