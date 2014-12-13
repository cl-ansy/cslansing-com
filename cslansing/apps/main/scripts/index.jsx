define(['react', 'jsx!components/Hello'], function (React, Hello) {
    return {
        render: function () {
            React.render(
                <Hello name="World" />,
                document.getElementById('content')
            );
        }
    };
});
