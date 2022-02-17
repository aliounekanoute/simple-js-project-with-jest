module.exports = {
    test: client => {
        client
            .url('http://127.0.0.1:5501/vite-project/index.html')
            .waitForElementVisible('#app', 10 * 1000)
            .assert.visible('#makosso_lee')
            .click('#makosso_lee')
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
