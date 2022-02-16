const { client } = require("nightwatch")

module.exports = {
    test: client => {
        client
            .url('http://localhost:5501/vite-project/index.html')
            .click('#ecksonButton')
            .assert.visible('#crypter')
            .setValue('#messageCrypter', 'maman')
            .setValue('#clefCryptage', '12')
            .click('#crypter')
            .assert.containsText('#result', 'ymymz')
            .assert.visible('#decrypter')
            .setValue('#messageDecrypter', 'ymymz')
            .setValue('#clefDecryptage', '12')
            .click('#decrypter')
            .assert.containsText('#resultt', 'maman')            
            .end()
    }
}
