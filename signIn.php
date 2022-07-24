<?php ?>
<!doctype html>
<html lang="en">

<head>
	<title>Good Food</title>
	<link rel="shortcut icon" href="images/icon-large.png">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<link href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap" rel="stylesheet">

	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

	<link rel="stylesheet" href="style-login/css/style.css">

</head>

<body>
	<section class="ftco-section">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-7 col-lg-5">
					<div class="login-wrap p-4 p-md-5">
						<div class="d-flex align-items-center justify-content-center">
							<figure>
								<img src="images/icon-app.png" class="icon-app" alt="icon" width="200px" height="130px">
							</figure>
						</div>
						<h3 class="mb-4" style="color: #FC9C86; font-family: Georgia, 'Times New Roman', Times, serif;">
							Sign In</h3>
						<form action="#" class="login-form" method="post">
							<div class="form-group d-flex">
								<input type="email" name="email" id="email" class="form-control rounded-left"
									placeholder="Username" required>
							</div>
							<div class="form-group d-flex">
								<input type="password" name="password" id="password" class="form-control rounded-left"
									placeholder="Password" required>
							</div>
							<div class="form-group">
								<button type="submit" class="form-control btn btn-primary rounded submit px-3" id="btnsignin" name="btnsignin">Sign
									In</button>
							</div>
							</div>
							<div>
								<a href="signUp.php"
									style="color: #FC9C86; text-decoration: none; text-align: center; margin-top: 50px;">Don’t
									have an account? Sign Up</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- <script type="module">
    // Import the functions you need from the SDKs you need
    import {initializeApp} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
    import {
        getAuth,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut
    } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
    import {getDatabase, set, ref, update} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

	const firebaseConfig = {
    apiKey: "AIzaSyBFXRcAcQHlRMCay6-O001xbPeOIAiq97I",
    authDomain: "goodfood-6d6c4.firebaseapp.com",
    projectId: "goodfood-6d6c4",
    storageBucket: "goodfood-6d6c4.appspot.com",
    messagingSenderId: "257462296124",
    appId: "1:257462296124:web:1cc0dc6491c2f8d149ed39",
    measurementId: "G-X23GWG8Z4G"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const database = getDatabase(app);


$("#btnsignin").click(function (e) {
    e.preventDefault();
    const email = $("#email").val();
    const password = $("#password").val();
    // authDB().once("value", snapshot => {
    //     for(const uname in snapshot.val()){
    //         const data = snapshot.val()[uname];
    //         if(username === data.username && password === data.password){
    //             window.location.href = "../index.php";
    //         }
    //     }
    // })

    signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...

                // save log in details into real time database
                var lgDate = new Date();
                update(ref(database, 'users/' + user.uid), {
                    last_login: lgDate,
                })
                    .then(() => {
                        // Data saved successfully!
                        alert('user logged in successfully');
						window.location.href = "../GoodFood/index.php";
						document.getElementById("home-login").innerHTML = 
						`<a id="home-logout">
						${user.username}
						</a>`;
                    })
                    .catch((error) => {
                        // The write failed...
                        alert(error);
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
        });

$("#btnlogout").click(function (e) {
    e.preventDefault();
    const email = $("#email").val();
    const password = $("#password").val();
    // authDB().once("value", snapshot => {
    //     for(const uname in snapshot.val()){
    //         const data = snapshot.val()[uname];
    //         if(username === data.username && password === data.password){
    //             window.location.href = "../index.php";
    //         }
    //     }
    // })
    signOut(auth).then(() => {
        // Sign-out successful.
        alert("logout success");
        window.location.href = "../GoodFood/index.php";
 }).catch((error) => {
     // An error happened.
     alert(error.message);
 });
});


</script> -->


<script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-auth.js"></script>
  <!-- <script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-firestore.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-functions.js"></script> -->
  <script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-analytics.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-database.js"></script>

  <script src="js/logic/config.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="http://cdn.datatables.net/1.10.7/js/jquery.dataTables.min.js"></script>

  <script src="js/logic/authV2.js"></script>
  <!-- <script src="js/logic/signin.js"></script> -->


<!-- <script src="js/logic/config.js"></script> -->

<!-- <script src="js/logic/auth.js"></script> -->
	<script src="style-login/js/jquery.min.js"></script>
	<script src="style-login/js/popper.js"></script>
	<script src="style-login/js/bootstrap.min.js"></script>
	<script src="style-login/js/main.js"></script>

</body>

</html>