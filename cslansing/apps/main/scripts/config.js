require.config({
    paths: {
        jquery: 'jquery/dist/jquery',
        react: 'react/react-with-addons',
        text: 'requirejs-text/text',
        JSXTransformer: 'jsx-requirejs-plugin/js/JSXTransformer',
        jsx: 'jsx-requirejs-plugin/js/jsx'
    },
    jsx: {
        fileExtension: '.jsx'
    }
});

define(['jsx!index'], function (Index) {
    Index.render();
});
