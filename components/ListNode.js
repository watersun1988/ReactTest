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
        var fontColor = (this.props.data.increase.charAt(0) == '-' ? 'green':'red');
        //console.log('fontcolor:'+fontColor);
        return(
            <div onClick={this._onClick}>
                <span>{this.props.data.product}</span>
                <span style={{float:'right',color:fontColor}}>{this.props.data.increase}</span>
                <span style={{float:'right',verticalAlign:'middle',marginRight:'5px'}}>{this.props.data.price}</span>
            </div>
        )
    }
});

module.exports = ListNode;