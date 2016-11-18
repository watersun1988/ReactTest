/**
 * Created by SP on 2016/11/18.
 */
var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();
var ListStore = require('../stores/ListStore');

AppDispatcher.register(function (action) {
    switch (action.actionType){
        case 'REFRESH_LIST':
            ListStore.emitChange();
            break;
        default:
    }
});

module.exports=AppDispatcher;