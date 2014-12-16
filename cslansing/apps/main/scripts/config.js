require.config({
    paths: {
        jquery: 'jquery/dist/jquery',
        react: 'react/react',
        text: 'requirejs-text/text',
        JSXTransformer: 'jsx-requirejs-plugin/js/JSXTransformer',
        jsx: 'jsx-requirejs-plugin/js/jsx'
    }
});

define(['jsx!main'], function (Main) {
    Main.render();
});
