
const path = require('path');
const lti = require('ltijs').Provider

lti.registerPlatform({
    url: 'https://saltire.lti.app/platform',
    name: 'Mein Test-LMS',
    clientId: 'saltire.lti.app',
    authenticationEndpoint: 'https://saltire.lti.app/platform/auth',
    accesstokenEndpoint: 'https://saltire.lti.app/platform/token/sb9477b6b0b82d810d32d2baf39c9f477',
    authConfig: { method: 'JWK_SET', key: 'https://saltire.lti.app/platform/jwks/s4cb3d039c10f7d6cc31500f85c8131bb' }
});

lti.onConnect((token, req, res) => {
    console.log(token)
    res.send('Erfolgreich verbunden mit LTI-Plattform!')
})

lti.deploy()
