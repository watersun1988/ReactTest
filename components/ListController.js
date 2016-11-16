/**
 * Created by SP on 2016/11/16.
 */
var React = require('react');
var List = require('./List');

var tmpData = [
    { id:'1',
     product:'glod',
    price:'123',
    increase:'1%'
    },
    {
        id:'2',
        product:'ch glod',
        price:'200',
        increase:'2%'
    }
];

var ListController = React.createClass({
    getInitialState:function () {
        return {
            data: []
        }
    },

    componentDidMount:function () {
        this.setState(
            {
                data:tmpData
            });
    },

    toProductPage:function (id) {
        console.log("id:"+id);
    },
    render:function () {
        return(
        <List data={this.state.data} onClick={this.toProductPage}/>
        )
    }
});

module.exports = ListController;