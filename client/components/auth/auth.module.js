'use strict';

angular.module('redmartApp.auth', ['redmartApp.constants', 'redmartApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
