
Meteor.methods({
    'lti.launchReceived'(launchData) {
        console.log('Launch-Daten erhalten:', launchData);
    },
});