import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"
import { auth } from "./firebase.js"
import { showmessage } from "./showmessage.js"

const signinForm = document.querySelector('#login-form')

signinForm.addEventListener('submit', async (e)=> {
    e.preventDefault()

    const email = signinForm['login-email'].value;
    const password = signinForm['login-password'].value;

    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(credentials)

        const modal = bootstrap.Modal.getInstance(document.querySelector('#signinmodal'))
        modal.hide()

        showmessage('Bienvenido ' + credentials.user.email)

    } catch (error) {
        if (error.code === 'auth/wrong-password') {
            showmessage('El Password Introducido es Incorrrecto', 'error')
        }else if (error.code === 'auth/user-not-found') {
            showmessage('El Usuario No fue Encontrado', 'error')
        }else {
            showmessage(error.message, 'error')
        }
    }
})