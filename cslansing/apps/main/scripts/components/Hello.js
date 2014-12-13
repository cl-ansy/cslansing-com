define(['react'], function (React) {
    var Hello = React.createClass({displayName: 'Hello',
        render: function() {
            return React.DOM.div(null, 'Hello ', this.props.name);
        }
    });

    return Hello;
});
