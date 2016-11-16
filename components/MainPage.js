/**
 * Created by SP on 2016/11/16.
 */
var React = require('react');
var HeaderDiv = require('./HeaderDiv');
var ListController = require('./ListController');

var MainPage = React.createClass({
    render:function () {
        return(
            <div>
                <HeaderDiv/>
                <ListController/>
            </div>
        )
    }
});

module.exports = MainPage;