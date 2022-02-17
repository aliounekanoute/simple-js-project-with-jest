import { encrypt, decrypt } from "../../src/cesar.js";



export const alassaneSowForm = () => {
    return `<div class="container mb-5 mt-5">
    <form action="">
        <h3>Renseignez une phrase</h3>
        <input type="text" name="phrase" id="phrase">

        <h3>Entrez un nombre entier</h3>
        <input type="text" name="nombre" id="nombre">

        <div>
            <button type="button" id="encrypt_button">Encrypter</button>
            <button type="button" id="decrypt_button">Decrypter</button>
        </div>

        <div id="result">

        </div>
        
    </form>
</div> `

}
export const handleAlassaneEncryptionButton = () => {
    const button = document.getElementById('encrypt_button')
    button.addEventListener('click', () => {
        const phrase = document.getElementById('phrase').value
        const nombre = document.getElementById('nombre').value
        const result = encrypt(phrase, parseInt(nombre))
        document.getElementById('result').innerHTML = result
    })


}

export const handleAlassaneDecryptionButton = () => {
    const button = document.getElementById('decrypt_button')
    button.addEventListener('click', () => {
        const phrase = document.getElementById('phrase').value
        const nombre = document.getElementById('nombre').value
        const result = decrypt(phrase, parseInt(nombre))
        console.log(result)
        document.getElementById('result').innerHTML = result
    })


}
