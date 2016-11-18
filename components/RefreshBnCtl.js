/**
 * Created by SP on 2016/11/18.
 */
var React = require('react');
var Button = require('./Button');
var ButtonAction = require('../actions/ButtonAction');

var RefreshBnCtl = React.createClass({
    refreshFun:function (e) {
        e.preventDefault();
        console.log("refresh");
        ButtonAction.refreshList();
    },
    render:function () {
        return(
            <Button onClick={this.refreshFun} value="Refresh"/>
        )
    }
});

module.exports = RefreshBnCtl;