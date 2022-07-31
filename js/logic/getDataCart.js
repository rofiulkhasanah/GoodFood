var isViewCartVisible = $('#cart-tab-view').is(':visible');
console.log("cart " + isViewCartVisible)

if(isViewCartVisible){
    getCart()
}

function getCart(){
    auth.onAuthStateChanged(user => {
      if (user) {
        var lengthData = 0
        db.ref('product').child("cart").child(user.uid).once("value", function(snapshot){
            var userDataCart = snapshot.val()
            lengthData = userDataCart.product.length - 1

            // var dataUser = snapshot.child("product").val();
            snapshot.child("product").forEach(child_data => {
                var dataUser = child_data.val()
                console.log("data " + JSON.stringify(dataUser.price))
                var subTotal = JSON.stringify(dataUser.quantity) * JSON.stringify(dataUser.price)
                document.getElementById("tbody-cart").innerHTML += `
                <tr>
                <th scope="row">${JSON.stringify(dataUser.quantity)}</th>
                <td>
                <img src="${dataUser.pict}" style="width: 50px; height: 50px;" alt="" class="" />
                </td>
                <td>Rp. ${JSON.stringify(dataUser.price)}</td>
                <td>Rp. ${JSON.stringify(dataUser.quantity) * JSON.stringify(dataUser.price)}</td>
                <td>
                <a class="delete-item" onclick="deleteItem('${dataUser.id}','${userDataCart.total_amount}','${subTotal}','${lengthData}')">
                    <i class='fa fa-trash' style='color: #fc5d35' ></i>
                </a>
                </td>
                </tr>`;
               })

             document.getElementById("tbody-total-amount").innerHTML = `
                <tr>
                <th>Total Semua</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>Rp. ${userDataCart.total_amount}</td>
                <td></td>
                <td></td>
                </tr>`;

            document.getElementById("next-payment-view").innerHTML = `
                <div class="quote_btn-container ml-0 ml-lg-4 d-flex justify-content-center" id="next-payment" name="next-payment">
                    <a name="payment-a" id="payment-a" onclick="nextPayment('${userDataCart.total_amount}')">
                    Lanjutkan Pembayaran
                    </a>
                </div>
                `;
            
        })
      }else{
        alert("Silahkan login terlebih dahulu")
        window.location.href = "../signIn.html"
      }
    })
}

function nextPayment(total_amount){
    var user = auth.currentUser
    var noInvoice = "GF" + Math.floor(10000000 + Math.random() * 90000000)
    var noVA = Math.floor(10000000 + Math.random() * 90000000)
    var adminFee = 0
    var totalPayment = total_amount + adminFee
    var newKey = db.ref('product').child("transaction").child(user.uid).push()
    // db.ref('product').child("transaction").child(user.uid).push().set({
    newKey.set({
        userId: user.uid,
        noInvoice: noInvoice,
        noVA: noVA,
        adminFee: adminFee,
        totalPayment: totalPayment,
        status: "menunggu pembayaran"
    }).then(response => {
        console.log(newKey.key)
        document.getElementById("no-invoice").innerText = `${noInvoice}`
        document.getElementById("no-va").innerText = `${noVA}`
        document.getElementById("total-payment").innerText = `Rp. ${totalPayment}`
        document.getElementById("view-invoice").style.display = "block"
        document.getElementById("done-payment-view").innerHTML = `
        <div class="quote_btn-container ml-0 ml-lg-4 d-flex justify-content-center">
            <a id="done-payment" name="done-payment" onclick="donePayment('${newKey.key}')" >
              Selesaikan Pembayaran
            </a>
        </div>`;
    })
    .catch(e => {
        errorHandler(e)
    })
}

function donePayment(key){
    var user = auth.currentUser
    db.ref('product').child("transaction").child(user.uid).child(key).update({
        status: "done"
    }).then(resp => {
        db.ref('product').child("cart").child(user.uid).remove().then(resp => {
            alert("Pembayaran berhasil")
            window.location.href = "../"
        })
    })
}