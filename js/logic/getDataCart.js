var isViewCartVisible = $('#cart-tab-view').is(':visible');
console.log(isViewCartVisible)

if(isViewCartVisible){
    getCart()
}

function getCart(){
    auth.onAuthStateChanged(user => {
      if (user) {
        db.ref('product').child("cart").child(user.uid).once("value", function(snapshot){
            var userDataCart = snapshot.val()
            console.log(userDataCart.total_amount)
            for(let i = 1; i < userDataCart.product.length; i++){
                console.log(userDataCart.product[i])
                var subTotal = userDataCart.product[i].quantity * userDataCart.product[i].price
                document.getElementById("tbody-cart").innerHTML += `
                <tr>
                <th scope="row">${userDataCart.product[i].quantity}</th>
                <td>
                <img src="${userDataCart.product[i].pict}" style="width: 50px; height: 50px;" alt="" class="" />
                </td>
                <td>Rp. ${userDataCart.product[i].price}</td>
                <td>Rp. ${userDataCart.product[i].quantity * userDataCart.product[i].price}</td>
                <td>
                <a class="delete-item" onclick="deleteItem('${userDataCart.product[i].id}','${userDataCart.total_amount}','${subTotal}')">
                    <i class='fa fa-trash' style='color: #fc5d35' ></i>
                </a>
                </td>
              </tr>`;
            }

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
        window.location.href = "../GoodFood/signIn.php"
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
            window.location.href = "../GoodFood"
        })
    })
}