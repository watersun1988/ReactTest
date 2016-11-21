/**
 * Created by SP on 2016/11/16.
 */
var React = require('react');
var SearchBarController = require('./SearchBarController');

var HeaderDiv = React.createClass({
    render:function () {
        return(
            <div className="panel panel-heading">
                <h4 style={{float:'left'}}>hello</h4>
                <SearchBarController/>
            </div>
        );
    }
});

module.exports = HeaderDiv;