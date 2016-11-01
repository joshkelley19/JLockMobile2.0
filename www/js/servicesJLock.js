angular.module('starter.services', [])

.factory('Player', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var account = {
    userName: "joshkelley19",
    password: "cleancode",
    entries: [""]
  };

  return {
    all: function() {
      return account.entries;
    },
  add: function(entriesFromDB) {
      account.entries = entriesFromDB;
  },
    get: function(entryWebsite) {
      for (var i = 0; i < entries.length; i++) {
        if (account.entries[i].website === entryWebsite) {
          return account.entries[i];
        }
      }
      return null;
    }
  };
});
