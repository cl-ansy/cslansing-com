require.config({
    paths: {
        jquery: 'jquery/dist/jquery',
        react: 'react/react'
    }
});

define(['react'], function (React) {
    var Hello = React.createClass({displayName: 'Hello',
        render: function() {
            return React.createElement("div", null, "Hello ", this.props.name);
        }
    });

    React.render(React.createElement(Hello, {name: "World"}), document.body);
});
