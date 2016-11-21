/**
 * Created by SP on 2016/11/16.
 */
var React = require('react');

var SearchBar = React.createClass({
    _onClick:function (e) {
        e.preventDefault();
        this.props.onClick(this.refs.searchInput.value);
    },
    render:function () {
        return(
            <div style={{float:'right'}}>
                <input type="text" ref="searchInput"/>
                <a onClick={this._onClick} className="btn btn-default">Search</a>
            </div>
        )
    }
});

module.exports = SearchBar;