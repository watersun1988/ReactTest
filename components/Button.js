/**
 * Created by SP on 2016/11/18.
 */
var React = require('react');

var Button = React.createClass({
    render:function () {
        return(
            <a onClick={this.props.onClick} className="btn btn-default" style={{margin:'5px'}}>{this.props.value}</a>
        );
    }
});

module.exports = Button;