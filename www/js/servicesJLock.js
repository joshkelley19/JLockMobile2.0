angular.module('starter.services', [])

.factory('Entries', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var entries = [{
    website: "Facebook.com",
    userName: "joshkelley19",
    password: "cleancode"
  }, {
    website: "Myspace.com",
    userName: "joshkelley19",
    password: "myspacepassword"
  }, {
    website: "Youtube.com",
    userName: "joshkelley19",
    password: "youtubepassword"
  }, {
    website: "Instagram.com",
    userName: "joshkelley19",
    password: "instagrampassword"
  }, {
    website: "Ionic.com",
    userName: "joshkelley19",
    password: "ionicpassword"
  }, {
    website: "Whatsapp.com",
    userName: "joshkelley19",
    password: "whatsapppassword"
  }, {
    website: "Linkedin.com",
    userName: "joshkelley19",
    password: "linkedinpassword"
  }, {
    website: "Google.com",
    userName: "joshkelley19",
    password: "googlepassword"
  }, {
    website: "Hotmail.com",
    userName: "joshkelley19",
    password: "hotmailpassword"
  }];

  return {
    all: function() {
      return entries;
    },
  add: function() {
    
  },
    get: function(entryWebsite) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].website === entryWebsite) {
          return entries[i];
        }
      }
      return null;
    }
  };
});
