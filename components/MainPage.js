/**
 * Created by SP on 2016/11/16.
 */
var React = require('react');
var HeaderDiv = require('./HeaderDiv');
var ListController = require('./ListController');
var TailDiv = require('./TailDiv');
var ProductPageCtl = require('./ProductPageCtl');
var IdStore= require('../stores/IdStore');


var MainPage = React.createClass({
    getInitialState:function () {
        return {
            id: IdStore.getAll()
        }
    },

    componentDidMount:function () {
        IdStore.addChangeListener(this._onChange)
    },

    componentWillUnmount: function() {
        IdStore.removeChangeListener(this._onChange);
    },

    _onChange:function () {
        this.setState(
            {
                id:IdStore.getAll()
            });
    },

    render:function () {
        var Page;
        console.log("MainPage id:"+this.state.id);
        if(this.state.id == '0'){
            Page = (<ListController/>);
        }
        else {
            Page = (<ProductPageCtl id={this.state.id}/>);
        }
        return(
            <div>
                <HeaderDiv/>
                {Page}
                <TailDiv/>
            </div>
        )
    }
});

module.exports = MainPage;