/**
 * Created by SP on 2016/11/20.
 */
var React = require('react');
var ProductPage = require('./ProductPage')
var ListStore = require('../stores/ListStore');

var ProductPageCtl = React.createClass({
    getInitialState:function () {
        return {
            data: ListStore.getId(this.props.id)
        }
    },
    componentDidMount:function () {

    },
    render:function () {
        return(
            <ProductPage data={this.state.data}/>
        );
    }
});

module.exports=ProductPageCtl;