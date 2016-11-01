angular.module('starter.services', [])

    .factory('Settings', function () {

        var fingerprintVerification = true;
        var autoComplete = true;
        var reminderDate = new Date();

        return {
            setSettings: function (fp, ac, rd) {
                fingerprintVerification = fp;
                autoComplete = ac;
                reminderDate = rd;
            }
        };
    });
