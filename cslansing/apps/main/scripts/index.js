define([
    'react',
    'jsx!components/header',
    'jsx!components/hello'
    ], function (React, Header, Hello) {
        var Index = React.createClass({
            render: function() {
                return (

<div className="content">
    <Header />
    <Hello name="world" />
</div>

                );
            }
        });

    return Index;
});
