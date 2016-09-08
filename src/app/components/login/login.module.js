// login.module.js

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import LoginComponent from './login.component';

let loginModule = angular.module('login', [
    uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('login', {
      url: '/',
      component: 'login'
    });
})

.component('login', LoginComponent)

.name; // name(string) is the module name

export default loginModule;