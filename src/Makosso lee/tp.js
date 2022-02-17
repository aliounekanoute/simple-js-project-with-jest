import { encrypt, decrypt } from "../cesar.js";



export const LeeForm = () => {
    return `
<div class="caesarApp">
    <div class="jumbotron jumbotron-fluid mb-2 mx-5">
        <div class="container">
          <h1 class="display-4 text-light">César Word Crypter</h1>
          <p class="lead text-light">This is a small application to show how to perform Caesar's encrypted method .</p>
        </div>
      </div>

      <div class="col">
        <div class="container col-7">
            <img src="assets/flutterBird1.png" alt="flutterBird">
           
            <div class="container">
                <div class="row align-items-start">
                  <div class="col pt-1">
                    <div class="container rounded-pill mb-4">
                        <h4 class="text-light">Test César app bellow</h4> 
                    </div>
                  </div>
                
                  </div>
                </div>
            </div>
        </div>


    <div class="container mb-5 mt-5">
    

    <div class="col-7 container">
    <div class="container">
        <div class="row align-items-start">
            <div class="col">
                <div class="mb-3">
                    <label for="message" class="form-label">Type your message here</label>
                    <textarea class="form-control" name="message" id="message" rows="3"></textarea>
                    
                </div>
                <label for="key" class="form-label">Enter your key</label>
                <div class="col-3">
                <input type="number" class="form-control mb-3" name="key" id="key" placeholder="3">
               

                </div>
            </div>
        </div>
    </div>
      <div class="container mb-3">
          <div class="row justify-content-around mt-1">
              <div class="col">
                <button type="button" id="encrypt_button" class="btn btn-dark">Encrypt</button>
              </div>
              <div class="col-5">
              <div>
              
          </div>
              </div>
            
              <div class="col">
                <button type="button" id="decrypt_button" class="btn btn-success">Decrypt</button>
              </div>
          </div>
      </div>
      <div class="mb-5">
        <label for="sortie" class="form-label">Result</label>
        <textarea class="form-control"  id="result" name="sortie" rows="3"></textarea>
        
      </div>
    </div>

    <div class="jumbotron jumbotron-fluid mx-5 text-center">
        <div class="container">
            <p class="lead text-light">LEEEIGHT corporation .</p>
        </div>
      </div>
</div>
        
        `

}


export const handleLeeEncryptionButton = () => {
    const button = document.getElementById('encrypt_button')
    button.addEventListener('click', () => {
        const message = document.getElementById('message').value
        const key = document.getElementById('key').value
        const result = encrypt(message, parseInt(key))
        document.getElementById('result').innerHTML = result
    })


}

export const handleLeeDecryptionButton = () => {
    const button = document.getElementById('decrypt_button')
    button.addEventListener('click', () => {
        const message = document.getElementById('message').value
        const key = document.getElementById('key').value
        const result = decrypt(message, parseInt(key))
        console.log(result)
        document.getElementById('result').innerHTML = result
    })


}
