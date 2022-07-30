auth.onAuthStateChanged(user => {
	if (user) {
		console.log(user)
		userLoggedIn(user)
	} else {
		console.log("tidak ada akun signin")
	}
})

const signUpUser = (email, pass, fullname, datebirth, username) => {
	auth.createUserWithEmailAndPassword(email, pass)
	.then(res => {
		var user = res.user;
	
		console.log(user)
		db.ref("users").child(user.uid).set({email, pass, fullname, username, datebirth})
		.then(response => {
			console.log(response)
			alert('Berhasil mendaftar akun')
			window.location.href = "../signIn.html"
		})
		.catch(e => {
			errorHandler(e)
		})
	})
	.catch(err => {
		errorHandler(err)
	})
}

const signInUser = (email, pass) => {
	auth.signInWithEmailAndPassword(email, pass)
	.then(res => {
		// No need of handling anything here auth.onAuthStateChanged function got this
		window.location.href = "../";
	})
	.catch(err => {
		errorHandler(err)
	})
}

const signOutUser = () => {
	auth.signOut()
	.then(() => {
		alert("Anda telah logout")
		userLoggedOut()
	})
	.catch(err => {
		console.log(err)
		errorHandler(err)
	})
}

// Listener

const userLoggedIn = (user) => {
	document.getElementById("displayName").innerText = `${user.email}`
	document.getElementById("home-login").style.display = "none"
	document.getElementById("home-logout").style.display = "block"
	document.getElementById("navName").style.display = "block"
}

const userLoggedOut = () => {
    document.getElementById("displayName").innerText = ``
	document.getElementById("home-login").style.display = "block"
	document.getElementById("home-logout").style.display = "none"
    document.getElementById("navName").style.display = "none"
	window.location.href = "../";
}


const errorHandler = (err) => {
	alert(err.message)
}


// On Click

$("#btnsignup").click(function (e) {
    e.preventDefault()

    const fullname = $("#fullname").val()
    const username = $("#username").val()
    const datebirth = $("#datebirth").val()
    const email = $("#email").val()
    const password = $("#password").val()

    signUpUser(email, password, fullname, datebirth, username)
})

$("#btnsignin").click(function (e) {
    e.preventDefault()
    const email = $("#email").val()
    const password = $("#password").val()
    
    signInUser(email, password)
})

$("#home-logout").click(function (e) {
    e.preventDefault()
    signOutUser()
})