'use strict';

(function () {

    /*
    |------------------------------------------------------------------------------
    | Initialize Framework7
    | For more parameters visit https://framework7.io/docs/init-app.html
    |------------------------------------------------------------------------------
    */

    window.myApp = new Framework7({
        cache: false,
        init: false,
        material: true,
        modalTitle: 'Open Market Token',
        notificationCloseButtonText: 'OK',
        scrollTopOnNavbarClick: true
    });

    /*
    |------------------------------------------------------------------------------
    | Initialize Main View
    |------------------------------------------------------------------------------
    */

    window.mainView = myApp.addView('.view-main');

    /*
    |------------------------------------------------------------------------------
    | Assign Dom7 Global Function to a variable $$ to prevent conflicts with other
    | libraries like jQuery or Zepto.
    |------------------------------------------------------------------------------
    */

    window.$$ = Dom7;

})();

/*
|------------------------------------------------------------------------------
| Function performed on every AJAX request
|------------------------------------------------------------------------------
*/

$$(document).on('ajaxStart', function (e) {
    myApp.showIndicator();
});

$$(document).on('ajaxComplete', function (e) {
    myApp.hideIndicator();
});

/*
|------------------------------------------------------------------------------
| Set last saved color and layout theme
|------------------------------------------------------------------------------
*/

$$(document).on('pageInit', function (e) {
    if (sessionStorage.getItem('nectarMaterialThemeColor')) {
        $$('body').removeClass('theme-red theme-pink theme-purple theme-deeppurple theme-indigo theme-blue theme-lightblue theme-cyan theme-teal theme-green theme-lightgreen theme-lime theme-yellow theme-amber theme-orange theme-deeporange theme-brown theme-gray theme-bluegray theme-white theme-black');
        $$('body').addClass('theme-' + sessionStorage.getItem('nectarMaterialThemeColor'));
    }

    if (sessionStorage.getItem('nectarMaterialThemeLayout')) {
        switch (sessionStorage.getItem('nectarMaterialThemeLayout')) {
            case 'dark':
                $$('body').removeClass('layout-dark');
                $$('body').addClass('layout-' + sessionStorage.getItem('nectarMaterialThemeLayout'));
                break;
            default:
                $$('body').removeClass('layout-dark');
                break;
        }
    }
});

var appVersion = '1.0.2';
var savedAppVersion = localStorage.getItem('app_version');

if (appVersion !== savedAppVersion) {
    localStorage.removeItem('user_id');
    localStorage.removeItem('api_key');
    localStorage.setItem('app_version', appVersion);
}

sessionStorage.setItem('nectarMaterialThemeLayout', 'light');
sessionStorage.setItem('nectarMaterialThemeColor', 'indigo');

localStorage.setItem('api_host', 'http://185.51.246.70');
//localStorage.setItem('api_host', 'http://127.0.0.1:8000');