/**
 * Created by SP on 2016/11/18.
 */
var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();
var ListStore = require('../stores/ListStore');
var IdStore = require('../stores/IdStore');

AppDispatcher.register(function (action) {
    switch (action.actionType){
        case 'REFRESH_LIST':
            ListStore.getMyProduct();
            //ListStore.emitChange();
            break;
        case 'SEARCH':
            ListStore.searchProduct(action.text);
            ListStore.emitChange();
            break;
        case 'TO_PRODUCT':
            IdStore.setId(action.text);
            IdStore.emitChange();
            break;
        default:
    }
});

module.exports=AppDispatcher;