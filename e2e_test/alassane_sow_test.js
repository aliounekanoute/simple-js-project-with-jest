module.exports = {
    test: client => {
        client
            .url('http://localhost:5501/vite-project/index.html')
            .click('#alassane_button')
            .assert.visible('#encrypt_button')
            .setValue('#phrase', 'bonjour')
            .setValue('#nombre', '15')
            .click('#encrypt_button')
            .assert.containsText('#result', 'qdcydjg')
            .assert.visible('#decrypt_button')
            .setValue('#phrase', 'qdcydjg')
            .setValue('#nombre', '15')
            .click('#decrypt_button')
            .assert.containsText('#result', 'bonjour')
            .end()
    }
}
