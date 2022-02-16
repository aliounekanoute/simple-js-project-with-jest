module.exports = {
    test: client => {
        client
            .url('http://localhost:4173')
            .waitForElementVisible('#app', 10 * 1000)
            .assert.visible('#caesarApp')
            .assert.visible('#message')
            .assert.visible('#key')
            .assert.visible('#encrypt_button')
            .assert.visible('#decrypt_button')
            .assert.visible('#result')
            .setValue('#message', 'maman')
            .setValue('#key', '12')
            .click('#encrypt_button')
            .assert.containsText('#result', 'ymymz')
            .setValue('#message', 'ymymz')
            .setValue('#key', '12')
            .click('#decrypt_button')
            .assert.containsText('#result', 'maman')
            .end()
    }
}