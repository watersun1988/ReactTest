/**
 * Created by SP on 2016/11/18.
 */
var React = require('react');

var Button = React.createClass({
    render:function () {
        return(
            <a onClick={this.props.onClick}>
                <span>{this.props.value}</span>
            </a>
        );
    }
});

module.exports = Button;