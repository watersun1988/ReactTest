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
};

module.exports=ButtonAction;