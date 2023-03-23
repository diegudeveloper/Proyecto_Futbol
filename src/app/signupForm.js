import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"
import { auth } from './firebase.js'
import { showmessage } from './showmessage.js'

const signupForm = document.querySelector('#signupform');

signupForm.addEventListener('submit', async (e)=> {
    e.preventDefault()

    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value

    console.log(email, password);

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredentials);

        //cierra el modal de signup
        const signupModal = document.querySelector('#signupmodal')
        const modal = bootstrap.Modal.getInstance(signupModal)
        modal.hide()

        showmessage('Welcome ' + userCredentials.user.email)


    } catch (error) {
        console.log(error.message);
        console.log(error.code);

        if (error.code === 'auth/email-already-in-use') {
            showmessage('El Email indicado ya existe', 'error')
        }else if (error.code === 'auth/invalid-email') {
            showmessage('Invalid email', 'error')
        }else if (error.code === 'auth/weak-password') {
            showmessage('El Password no ocumple con las caracteristicas necesarias', 'error')
        } else if (error.code) {
            showmessage(error.message, 'error')
        }
    }
})