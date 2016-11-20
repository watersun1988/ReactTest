/**
 * Created by SP on 2016/11/18.
 */
var AppDispatcher = require('../dispatcher/AppDispatcher');

var ButtonAction = {
    refreshList:function () {
        AppDispatcher.dispatch({
            actionType:'REFRESH_LIST'
        });
    },
    searchProduct:function (value) {
        AppDispatcher.dispatch({
            actionType:'SEARCH',
            text:value
        });
    },
    showProduct:function (id) {
        console.log('show product:'+id);
        AppDispatcher.dispatch({
            actionType:'TO_PRODUCT',
            text:id
        });
    },
    gotoMainPage:function () {
        AppDispatcher.dispatch({
            actionType:'TO_PRODUCT',
            text:'0'
        });
    }
};

module.exports=ButtonAction;