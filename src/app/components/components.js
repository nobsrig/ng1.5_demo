import angular from 'angular';
import Login from './login/login.module';

let componentModule = angular.module('components', [
  
  Login
  
])

.name;

export default componentModule;