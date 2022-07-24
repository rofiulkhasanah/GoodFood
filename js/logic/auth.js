
$("#btnsignup").click(function (e) {
    e.preventDefault();

    const fullname = $("#fullname").val();
    const username = $("#username").val();
    const datebirth = $("#datebirth").val();
    const email = $("#email").val();
    const password = $("#password").val();

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ... user.uid
        set(ref(database, 'users/' + user.uid), {
            email: email,
            password: password,
            fullname: fullname,
            username: username,
            datebirth: datebirth
        })
            .then(() => {
                // Data saved successfully!
                alert('user created successfully');

            })
            .catch((error) => {
                // The write failed...
                alert(error);
            });
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert(errorMessage);
    });
});

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
        window.location.href = "../index.php";
 }).catch((error) => {
     // An error happened.
     alert(error.message);
 });
});