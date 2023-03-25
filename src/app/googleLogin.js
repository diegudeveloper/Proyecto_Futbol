import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"
import { auth } from "./firebase.js"
import { showmessage } from "./showmessage.js"


const googleButton = document.querySelector('#googleLogin');

googleButton.addEventListener('click', async () => {

    const provider = new GoogleAuthProvider()

    try {
     const credentials = await signInWithPopup(auth, provider)
     console.log(credentials)
     
     const modal = bootstrap.Modal.getInstance(document.querySelector('#signinmodal'))
     modal.hide()
     
     showmessage('Welcome ' + credentials.user.displayName, 'success')


    } catch (error) {
        console.log(error)
    }    

})