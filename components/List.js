/**
 * Created by SP on 2016/11/16.
 */
var React = require('react');
var ListNode = require('./ListNode')
var List = React.createClass({
    render:function () {
        var listnodes = this.props.data.map(function (node, i) {
            return(
                <li key={node.id} className="list-group-item">
                    <ListNode data={node} onClick={this.props.onClick}></ListNode>
                </li>
            );
        }.bind(this));
        return(
            <div className="panel-body">
                <ul className="list-group">
                    {listnodes}
                </ul>
            </div>
        )
    }
});

module.exports = List