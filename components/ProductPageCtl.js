/**
 * Created by SP on 2016/11/20.
 */
var React = require('react');
var ProductPage = require('./ProductPage')
var ListStore = require('../stores/ListStore');

var ProductPageCtl = React.createClass({
    getInitialState:function () {
        return {
            data: {}
        }
    },
    componentDidMount:function () {
        $.get("../product/"+this.props.id,function (res) {
            this.setState({
                data:res.result
            });
        }.bind(this));
    },
    render:function () {
        return(
            <ProductPage data={this.state.data}/>
        );
    }
});

module.exports=ProductPageCtl;