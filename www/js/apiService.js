angular.module('JLock.services3', [])

.factory('Requests', function() {
  // Might use a resource here that returns a JSON array

    var springBoot = "http://localhost:8080/";
    var custom = "custom";
    var entries = "entries";
    var deleteEntry = "delete";
    var custom = "custom";
    var scheme = "";

  return {
    passwordRequest: function(number) {
      return "http://www.passwordrandom.com/query?command=password&scheme="+scheme+"&format=json&count="+number;
    },
    setScheme: function(newScheme) {
        scheme = newScheme;
    }
  };
});
