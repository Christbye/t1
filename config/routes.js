/**
 * Created by christ on 2017/5/10.
 */
var controller = require('../src/controllers');

module.exports = function (app) {
    app.get('/user',controller.user.list);
};