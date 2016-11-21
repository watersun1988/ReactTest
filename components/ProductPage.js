/**
 * Created by SP on 2016/11/20.
 */
var React = require('react');
var ListNode = require('./ListNode')

var ProductPage = React.createClass({
    render:function () {
        return(
            <div className="panel-body">
                <ListNode data={this.props.data}></ListNode>
                <span>img</span>
            </div>
        )
    }
});

module.exports=ProductPage;