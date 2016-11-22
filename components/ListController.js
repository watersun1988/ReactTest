/**
 * Created by SP on 2016/11/16.
 */
var React = require('react');
var List = require('./List');
var ListStore = require('../stores/ListStore');
var ButtonAction = require('../actions/ButtonAction');

var ListController = React.createClass({
    getInitialState:function () {
        return {
            data: ListStore.getAll()
        }
    },

    componentDidMount:function () {
        ListStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        ListStore.removeChangeListener(this._onChange);
    },

    _onChange:function () {
        this.setState(
            {
                data:ListStore.getAll()
            });
    },

    toProductPage:function (id) {
        console.log("id:"+id);
        ButtonAction.showProduct(id);
    },
    render:function () {
        return(
        <List data={this.state.data} onClick={this.toProductPage}/>
        )
    }
});

module.exports = ListController;