require.config({
    paths: {
        jquery: 'jquery/dist/jquery',
        react: 'react/react',
        text: 'requirejs-text/text',
        JSXTransformer: 'jsx-requirejs-plugin/js/JSXTransformer',
        jsx: 'jsx-requirejs-plugin/js/jsx'
    }
});

define(['react', 'jsx!index'], function (React, Index) {
    React.render(React.createElement(Index), document.body);
});
