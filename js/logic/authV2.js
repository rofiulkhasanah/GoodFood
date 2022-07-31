auth.onAuthStateChanged(user => {
	if (user) {
		console.log(user)
		
		var isTestimonialFormVisible = $('#layout-testimonial').is(':visible');
		if (isTestimonialFormVisible) {
			showTestimonialForm()
		}
		
		var isBlogFormVisible = $('#layout-blog').is(':visible');
		if (isBlogFormVisible) {
			showBlogForm()
		}
		userLoggedIn(user)
	} else {
		console.log("tidak ada akun signin")
		document.getElementById("layout-testimonial").style.display = "none"
		document.getElementById("layout-blog").innerHTML = ``;
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

	var isTestimonialFormVisible = $('#layout-testimonial').is(':visible');
	if (isTestimonialFormVisible) {
		document.getElementById("layout-testimonial").style.display = "none"
	}
	
	var isBlogFormVisible = $('#layout-blog').is(':visible');
	if (isBlogFormVisible) {
		document.getElementById("layout-blog").innerHTML = ``;
	}
	
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

function showTestimonialForm(){
	document.getElementById("layout-testimonial").innerHTML =`
	<div class="container">
	<h2 class="custom_heading">Tulis ulasanmu untuk product kami</h2>
	<form>
	  <div class="mb-3">
		<label for="" class="form-label">Nama</label>
		<input type="text" class="form-control" id="name-testimonial" required>
	  </div>
	  <div class="mb-3">
		<label for="" class="form-label">Ulasan</label>
		<textarea type="text" class="form-control" id="ulasan-testimonial" rows="5" required></textarea>
	  </div>
	  <button type="submit" name="btnSendTestimonial" id="btnSendTestimonial" class="btn btn-primary" onclick="sendTestimonial()">Submit</button>
	</form>
	</div>`;
}

function showBlogForm(){
	document.getElementById("layout-blog").innerHTML =`
	<div class="container">
          <h2 class="custom_heading">You can share everything !!!</h2>
          <form method="post">
            <div class="mb-3">
              <label for="" class="form-label">Creator</label>
              <input type="text" class="form-control" id="creator-blog">
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Judul</label>
              <input type="text" class="form-control" id="judul-blog">
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Cerita</label>
              <textarea type="text" class="form-control" id="isi-blog" rows="5"></textarea>
            </div>
            <div class="quote_btn-container ml-0 ml-lg-4 d-flex justify-content-center">
              <a onclick="sendBlog()">
                Kirim Blog
              </a>
            </div>
          </form>
        </div>`;
}