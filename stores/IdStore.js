/**
 * Created by SP on 2016/11/20.
 */
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var IdStore = assign({}, EventEmitter.prototype, {
    id: '0',

    getAll: function () {
        return this.id;
    },

    setId:function (id) {
        this.id = id;
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

module.exports = IdStore;