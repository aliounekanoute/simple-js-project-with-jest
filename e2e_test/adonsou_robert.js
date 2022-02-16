const { client } = require("nightwatch")

module.exports = {
    test: client => {
        client
            .url('http://localhost:4173/')
            .assert.visible('#phrase')
            .assert.visible('#nombre')
            .assert.visible('#encrypt_button')
            .assert.visible('#decrypt_button')
            .setValue("#phrase", 'robert')
            .setValue("#nombre", '14')
            .click('#encrypt_button')
            .assert.containsText('#result', 'fcpsfh')
            .setValue("#phrase", 'fcpsfh')
            .setValue("#nombre", '14')
            .click('#decrypt_button')
            .assert.containsText('#result', 'robert')
            .end()
    }
}