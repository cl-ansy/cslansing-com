define([
    'react'
    ], function (React) {

    var Section = React.createClass({
        render: function() {
            return (
                <section>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.content}</p>
                </section>
            );
        }
    });

    return Section;
});
