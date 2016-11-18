/**
 * Created by SP on 2016/11/18.
 */
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ListStore = assign({}, EventEmitter.prototype, {
    items: [
        { id:'1',
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
        this.items[0].price+='0';
        return this.items;
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