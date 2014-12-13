define(['react'], function (React) {
    var Hello = React.createClass({
        render: function() {
            return (
                <div>
                    Hello {this.props.name}
                </div>
            );
        }
    });

    return Hello;
});
