angular.module('starter.services', [])

.factory('Requests', function() {
  // Might use a resource here that returns a JSON array

var springBoot = "http://localhost:8080/";

  return {
    passwordRequest: function(scheme, number) {
      return "http://www.passwordrandom.com/query?command=password&scheme="+scheme+"&format=json&count="+number;
    }
  };
});
