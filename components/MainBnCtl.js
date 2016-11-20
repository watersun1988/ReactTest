/**
 * Created by SP on 2016/11/20.
 */
var React = require('react');
var Button = require('./Button');
var ButtonAction = require('../actions/ButtonAction');

var MainBnCtl = React.createClass({
    mainFun:function (e) {
        e.preventDefault();
        console.log("Main");
        ButtonAction.gotoMainPage();
    },
    render:function () {
        return(
            <Button onClick={this.mainFun} value="Main"/>
        )
    }
});

module.exports = MainBnCtl;