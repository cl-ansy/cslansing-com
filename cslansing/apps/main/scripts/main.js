define(['react', 'components/Hello'], function (React, Hello) {
    return {
        render: function () {
            React.render(React.createElement(Hello, {
                name: "World"
            }),
            document.getElementById('content'));
        }
    };
});
