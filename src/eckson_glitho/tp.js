import { encrypt, decrypt } from "../../src/cesar.js";
export const ecksonGlitho = ()=>{

    return`<!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta id="viewport" content="width=device-width, initial-scale=1.0">
        <title>chiffrement de cesare</title>
    
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    
        <style>
            body{
                background: url('src/eckson_glitho/1054066.jpg');
                background-size: cover;
                background-repeat: no-repeat;
                font-family: Arial, Helvetica, sans-serif;
            }
    
            .container{
                max-width: 380px;
                margin: auto;
                margin-top: 30px;
                background-color: rgba(0, 0, 0, 0.8);
                text-align: center;
                border-radius: 20px;
                padding: 40px;
                color: #fff;
                box-sizing: border-box;
            }
    
            h2{
                color: #fff;
                text-align: center;
                text-transform: capitalize;
                font-weight: bold;
            }
    
            input{
                width: 100%;
                margin: 10px 0;
                outline: none;
                background-color: transparent;
                color: #fff;
                padding: 10px 6px;
                font-size: 18px;
                font-weight: bold; 
                box-sizing: border-box;
                border: none;
                border-bottom: 1px #fff solid;
            }
    
            button{
                width: 80%;
                border-radius: 12px;
                padding: 10px;
                background-color: rgb(24, 76, 196);
                color: #fff;
                font-size: 15px;
                font-weight: bold;
                outline: none;
                cursor: pointer;
                margin-top: 30px;
                margin: 0, 10px, 0, 10px;
            }
    
            .container2{
                max-width: 380px;
                margin: auto;
                margin-top: 10px;
                margin-bottom: 40px;
                background-color: rgba(0, 0, 0, 0.8);
                text-align: center;
                border-radius: 20px;
                padding: 40px;
                color: #fff;
                box-sizing: border-box;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h2>cryptage</h2>
            <input type="text" id="messageCrypter" <input type="text" id="crypter's" placeholder="Message à crypter" required> <br>
            <input type="number" id="clefCryptage"  placeholder="Clef de cryptage" required> <br>
            <button id="crypter"> CRYPTER </button> <br>
            <p id="result"> </p>
        </div>
    
        <div class="container2">
            <h2>Décryptage</h2>
            <input type="text" id="messageDecrypter" placeholder="Message à décrypter" required> <br>
            <input type="number" id="clefDecryptage" placeholder="Clef de cryptage" required> <br>
            <button id="decrypter"> DECRYPTER </button>
            <p id="resultt"> </p>
        </div>
    </body>
    </html>`
}

export const handleEncryptionButton = () => {
    const buttoncrypter = document.getElementById('crypter')
    buttoncrypter.addEventListener('click', () => {
        const message = document.getElementById('messageCrypter').value
        const clef = document.getElementById('clefCryptage').value
        const result = encrypt(message, parseInt(clef))
        document.getElementById('result').innerHTML = result
    })


}

export const handleDecryptionButton = () => {
    const buttondecrypter = document.getElementById('decrypter')
    buttondecrypter.addEventListener('click', () => {
        const message = document.getElementById('messageDecrypter').value
        const clef = document.getElementById('clefDecryptage').value
        const result = decrypt(message, parseInt(clef))
        document.getElementById('resultt').innerHTML = result
    })


}

ecksonGlitho()
//handleEncryptionButton()
