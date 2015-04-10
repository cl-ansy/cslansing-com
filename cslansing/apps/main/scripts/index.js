define([
    'react',
    'jsx!components/header',
    'jsx!components/nav',
    'jsx!components/main',
    'jsx!components/aside',
    'jsx!components/footer'
    ], function (React, Header, Nav, Main, Aside, Footer) {

    var Index = React.createClass({
        render: function() {
            return (
                <div className="react-wrapper">
                    <Header
                        title="Chris Lansing" />
                    <div className="content">
                        <Nav />
                        <Main />
                    </div>
                </div>
            );
        }
    });

    return Index;
});
