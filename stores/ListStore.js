/**
 * Created by SP on 2016/11/18.
 */
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ListStore = assign({}, EventEmitter.prototype, {
    items: [
        {   id:'1',
            product:'glod',
            price:'123',
            increase:'1%'
        },
        {
            id:'2',
            product:'ch glod',
            price:'200',
            increase:'2%'
        }
    ],

    getAll: function () {
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
        this.items[0].price+='0';
    },

    searchProduct:function (value) {
        this.items[0].price+=value;
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