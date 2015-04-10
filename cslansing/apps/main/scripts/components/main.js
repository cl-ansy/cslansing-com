define([
    'react',
    'jsx!components/sections/about',
    ], function (React, About) {

    var Main = React.createClass({
        render: function() {
            return (
                <main>
                    <About />
                </main>
            );
        }
    });

    return Main;
});
