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
        console.log(error);
    }
})