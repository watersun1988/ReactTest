/**
 * Created by SP on 2016/11/18.
 */
var React = require('react');
var RefreshBnCtl = require('./RefreshBnCtl');
var MainBnCtl = require('./MainBnCtl');

var TailDiv = React.createClass({
    render:function () {
        return(
            <div className="navbar navbar-fixed-bottom" style={{backgroundColor:'#D6123E'}}>
                <MainBnCtl/>
                <RefreshBnCtl/>
            </div>
        )
    }
});

module.exports = TailDiv;