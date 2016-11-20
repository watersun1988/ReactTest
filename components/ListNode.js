/**
 * Created by SP on 2016/11/16.
 */
var React = require('react');

var ListNode = React.createClass({
    _onClick:function (e) {
        e.preventDefault();
        if(this.props.onClick)
            return this.props.onClick(this.props.data.id);
        else
            return;
    },
    render:function () {
        return(
            <a onClick={this._onClick}>
                <span>{this.props.data.product}</span>
                <span>{this.props.data.price}</span>
                <span>{this.props.data.increase}</span>
            </a>
        )
    }
});

module.exports = ListNode;