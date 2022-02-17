import {
    adonsou_robertForm,
    handleRobertEncryptionButton,
    handleRobertDecryptionButton
} from './src/adonsou_yao_robert/tp.js'

import {
  ecksonGlitho,
  handleEncryptionButton,
  handleDecryptionButton
} from './src/eckson_glitho/tp.js'

import {
    alassaneSowForm,
    handleAlassaneEncryptionButton,
    handleAlassaneDecryptionButton
} from './src/alassane_sow/tp.js'

const SignInForm = () => {
    return `<div class="container mb-5 mt-5">
          <form id="sign-in-form">
              <div class="uk-card uk-card-default uk-width-*">

                  <div class="uk-card-header text-center">
                      <h3 class="uk-card-title">Login page</h3>
                  </div>

                  <div class="uk-card-body">
                      <p class="text-danger text-center hidden" id="error-msg"></p>
                      <div class="form-group">
                          <label for="username">Email</label>
                          <input type="text" id="username" class="form-control uk-input" name="login">
                      </div>
                      <div class="form-group">
                          <label for="password">Password</label>
                          <input id="password" type="password" class="form-control uk-input" name="password">
                      </div>
                  </div>

                  <div class="uk-card-footer">
                      <div class="row">
                          <button type="submit" class="btn uk-button-primary btn-block" >Login</button>
                      </div>
                  </div>

              </div>
          </form>
        </div>`
}

const MainPage = () => {
    return `<div class="container mb-5 mt-5 main-page">
          <div class="uk-card uk-card-default uk-width-1-1@m mb-3">
            <div class="uk-card-header text-center">
                <h3 class="uk-card-title">Jotaro kujo</h3>
            </div>
            <div class="uk-card-body text-center">
              <img src="jotaro1.png" alt="No picture" class="img-fluid img-thumbnail">

            </div>
          </div>
        </div>`
}

const removeClassFromElement = (elementId, className) => {
    const element = document.getElementById(elementId)
    element.classList.remove(className)
}

const addClassToElement = (elementId, className) => {
    const element = document.getElementById(elementId)
    element.classList.add(className)
}

const addContentToElement = (elementId, content) => {
    const element = document.getElementById(elementId)
    element.innerHTML = content
}

const handleSignInForm = () => {
    const $formWrapper = document.querySelector('#sign-in-form')

    $formWrapper.addEventListener('submit', (e) => {
        e.preventDefault()

        const username = document.getElementById('username').value
        const password = document.getElementById('password').value

        if (username == 'alioune' && password == 'passer') {
            addContentToElement('error-msg', '')
            addClassToElement('error-msg', 'hidden')
            document.querySelector('#app').innerHTML = MainPage()
        } else {
            const message = 'Username or password incorrect'
            addContentToElement('error-msg', message)
            removeClassFromElement('error-msg', 'hidden')
        }
    })
}

const ViteDocumentation = () => {
    return `
<h1>Hello Vite!</h1>
<a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
}

document.querySelector('#app').innerHTML = SignInForm()

handleSignInForm()

const robertExercise = () => {
    const button = document.createElement('div')
    button.innerHTML = `<button type="button" id="robert_button" class="btn uk-button-primary btn-block">Robert adonsou </button>`
    document.querySelector('#buttons').appendChild(button) 
    const robert_button = document.getElementById('robert_button')
    robert_button.addEventListener('click', () => {
        document.querySelector('#app').innerHTML = adonsou_robertForm()
        handleRobertEncryptionButton()
        handleRobertDecryptionButton()
    })
}

robertExercise()

const ecksonExercise = () => {
    const button = document.createElement('div')
    button.innerHTML = `<div class="row mt-2"><button name="ecksonButton" id="ecksonButton" class="btn uk-button-primary btn-block" >Eckson Glitho</button></div>`
    document.querySelector('#buttons').appendChild(button) 
    const ecksonButton = document.getElementById('ecksonButton')
    ecksonButton.addEventListener('click', () => {
        document.querySelector('#app').innerHTML = ecksonGlitho()
        handleEncryptionButton()
        handleDecryptionButton()
    })
}

ecksonExercise()

const alassaneExercise = () => {
    const button = document.createElement('div')
    button.innerHTML = `<div class="row mt-2"><button type="button" id="alassane_button" class="btn btn-primary">Alassane Sow </button></div>`
    document.querySelector('#buttons').appendChild(button) 
    const alassane_button = document.getElementById('alassane_button')
    alassane_button.addEventListener('click', () => {
        document.querySelector('#app').innerHTML = alassaneSowForm()
        handleAlassaneEncryptionButton()
        handleAlassaneDecryptionButton()
    })
}

alassaneExercise()
