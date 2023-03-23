import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"
import { auth } from './firebase.js'

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
        modal.hite()
    } catch (error) {
        console.log(error.message);
        console.log(error.code);

        if (error.code === 'auth/email-already-in-use') {
            alert('Email already in use')
        }else if (error.code === 'auth/invalid-email') {
            alert('invalid email')
        }else if (error.code === 'auth/weak-password') {
            alert('password is too weak')
        } else if (error.code) {
            alert('Algo salio Mal')
        }
    }
})