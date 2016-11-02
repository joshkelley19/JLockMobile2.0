angular.module('JLock.services', [])

.factory('Account', function() {
  // Might use a resource here that returns a JSON array

var account = {
    userName: "",
    password: "",
    firstName: "",
    lastName: "",
    entries: [""]
  };

  return {
    setAccount: function (u, p, f, l, e) {
        account.userName = u;
        account.password = p;
        account.firstName = f;
        account.lastName = l;
        account.entries = e;
        
    }
  };
});
