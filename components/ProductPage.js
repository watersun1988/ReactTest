/**
 * Created by SP on 2016/11/20.
 */
var React = require('react');
var ListNode = require('./ListNode');
var MyCanvas = require('./MyCanvas');

var ProductPage = React.createClass({
    render:function () {
        return(
            <div className="panel-body">
                <ListNode data={this.props.data}></ListNode>
                <MyCanvas data={this.props.data}/>
            </div>
        )
    }
});

module.exports=ProductPage;