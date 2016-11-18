/**
 * Created by SP on 2016/11/16.
 */
var React = require('react');
var HeaderDiv = require('./HeaderDiv');
var ListController = require('./ListController');
var TailDiv = require('./TailDiv');

var MainPage = React.createClass({
    render:function () {
        return(
            <div>
                <HeaderDiv/>
                <ListController/>
                <TailDiv/>
            </div>
        )
    }
});

module.exports = MainPage;