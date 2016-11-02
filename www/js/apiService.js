angular.module('JLock.services3', [])

.factory('Requests', function() {
  // Might use a resource here that returns a JSON array
    var api = [{
        springBoot : "http://localhost:8080/",
        custom : "custom/",
        entries : "entries/",
        deleteEntry : "delete/",
        scheme : ""
    }];

  return {
      getRequests : function () {
          return api[0];
      },
    passwordRequest: function(number) {
      return "http://www.passwordrandom.com/query?command=password&scheme="+scheme+"&format=json&count="+number;
    },
    setScheme: function(newScheme) {
        scheme = newScheme;
    },
      deletePasswordEntry: function () {
          
      }
  };
});
