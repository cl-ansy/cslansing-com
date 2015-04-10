define([
    'react'
    ], function (React) {

    var Nav = React.createClass({
        render: function() {
            var links = [
                {
                    url: '/static/Chris_Lansing_Resume.pdf',
                    name: 'Résumé',
                },
            ];

            var linkNodes = links.map(function (link) {
                return (
                    <a href={link.url} target="_blank">
                        {link.name}
                    </a>
                );
            });

            return (
                <nav className="navigation">
                    {linkNodes}
                </nav>
            );
        }
    });

    return Nav;
});
