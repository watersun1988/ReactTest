/**
 * Created by SP on 2016/11/22.
 */
var React = require('react');

var MyCanvas = React.createClass({
    componentDidMount:function () {

    },
    componentWillReceiveProps:function (newProps) {
        console.log('MyCanvas componentWillReceiveProps:');
        var datas = newProps.data;
        var canvas = this.refs.mycanvas;
        var context = canvas.getContext('2d');
        context.strokeRect(0,0,300,300);
        context.moveTo(10,10);
        for(var i in datas){
            context.lineTo(datas[i].time,datas[i].price)
        }
        context.lineWidth = 2;
        context.strokeStyle = "#F5270B";
        context.stroke();
    },
    render:function () {
        return(
            <div>
                <canvas ref='mycanvas' height='350px'></canvas>
            </div>
        )
    }
});

module.exports = MyCanvas;