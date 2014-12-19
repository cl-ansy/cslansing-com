define([
    'react',
    'jsx!index'
    ], function (React, Index) {
    return {
        render: function () {
            React.render(
                <Index />,
                document.body
            );
        }
    };
});
