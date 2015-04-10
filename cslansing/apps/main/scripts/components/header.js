define([
    'react'
    ], function (React) {

    var Header = React.createClass({
        render: function() {
            var title = 'Chris Lansing',
                subtitle = 'Software Engineer';

            var links = [
                {
                    url: 'https://www.facebook.com/chris.lansing.98',
                    iconClass: 'fa fa-facebook-square',
                },
                {
                    url: 'https://plus.google.com/u/0/107904017027887656465/posts',
                    iconClass: 'fa fa-google-plus',
                },
                {
                    url: 'https://github.com/cslansing',
                    iconClass: 'fa fa-github',
                },
                {
                    url: 'https://www.linkedin.com/profile/view?id=205579495',
                    iconClass: 'fa fa-linkedin',
                }
            ];

            var linkNodes = links.map(function (link) {
                return (
                    <li>
                        <a className="social-link" href={link.url} target="_blank">
                            <span className={link.iconClass}></span>
                        </a>
                    </li>
                );
            });

            return (
                <header>
                    <h1 className="title">{title}</h1>
                    <h2 className="subtitle">{subtitle}</h2>
                    <ul className="social-links">{linkNodes}</ul>
                </header>
            );
        }
    });

    return Header;
});
