/**
 * Created by SP on 2016/11/16.
 */
var React = require('react');
var SearchBar = require('./SearchBar');

var SearchBarContoller = React.createClass({
    toSearchPage:function (data) {
        console.log("search value:"+data);
    },
    render:function () {
        return(
            <SearchBar onClick={this.toSearchPage}/>
        )
    }
});

module.exports = SearchBarContoller;