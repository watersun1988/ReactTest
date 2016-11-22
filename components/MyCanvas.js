/**
 * Created by SP on 2016/11/22.
 */
var React = require('react');

var MyCanvas = React.createClass({
    componentDidMount:function () {
        var datas = this.props.data;
        var canvas = this.refs.mycanvas;
        var context = canvas.getContext('2d');
        console.log("datas length:"+this.props.data.product);
        for(var i in datas){
            console.log('time:'+datas[i].time+' price:'+datas[i].price);
        }
        context.fillRect(0,0,100,100);
        context.strokeRect(120,0,100,100);
    },
    render:function () {
        return(
            <div>
                <canvas ref='mycanvas'></canvas>
            </div>
        )
    }
});

module.exports = MyCanvas;