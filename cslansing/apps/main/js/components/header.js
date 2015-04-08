define([
    'react'
    ], function (React) {

    var Header = React.createClass({
        render: function() {
            var linkNodes = this.props.links.map(function (link) {
                return (
                    <a href={link.url} target="_blank">
                        <i className={link.iconClass}></i> {link.name}
                    </a>
                );
            });

            return (
                <header className="jumbotron">
                    <h1>{this.props.title}</h1>
                    <nav>
                        {linkNodes}
                    </nav>
                </header>
            );
        }
    });

    return Header;
});
