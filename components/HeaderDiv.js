/**
 * Created by SP on 2016/11/16.
 */
var React = require('react');
var SearchBarController = require('./SearchBarController');

var HeaderDiv = React.createClass({
    render:function () {
        return(
            <div>
                <span>hello</span>
                <SearchBarController/>
            </div>
        );
    }
});

module.exports = HeaderDiv;