define([
    'react',
    'jsx!components/section',
    ], function (React, Section) {

    var Content = React.createClass({
        render: function() {
            return (
                <main>
                    <Section
                        header="About"
                        content="asdf" />
                    <Section
                        header="Blog"
                        content="asdf" />
                    <Section
                        header="Projects"
                        content="asdf" />
                </main>
            );
        }
    });

    return Content;
});
