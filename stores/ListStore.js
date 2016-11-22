/**
 * Created by SP on 2016/11/18.
 */
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ListStore = assign({}, EventEmitter.prototype, {
    items: [
    ],

    getAll: function () {
        if(this.items.length == 0){
            this.getMyProduct();
        }
        return this.items;
    },

    getId:function (id) {
        for(var i=0;i<this.items.length;i++){
            if(this.items[i].id == id){
                break;
            }
        }
        return this.items[i];
    },

    getMyProduct:function () {
        $.get('../main',function (data) {
            console.log("data:"+data.reason);
            ListStore.items = data.result.data;
            ListStore.emitChange();
        });
    },

    searchProduct:function (value) {
        $.get('../search/'+value,function (data) {
            this.items = data.result.data;
            this.emitChange();
        }.bind(this))
    },

    emitChange: function () {
        this.emit('change');
    },

    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }
});

module.exports = ListStore;