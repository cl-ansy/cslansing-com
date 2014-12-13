require.config({
    paths: {
        jquery: 'jquery/dist/jquery',
        react: 'react/react'
    }
});

define(['main'], function (Main) {
    Main.render();
});
