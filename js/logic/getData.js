var isViewAboutViewVisible = $('#view-about').is(':visible');
if (isViewAboutViewVisible) {
  getAboutGoodFood()
}

function getAboutGoodFood(){
  var headingAbout = document.getElementById("heading-about")
  var descAbout = document.getElementById("desc-about")
  var imageAbout = document.getElementById("image-about")
  db.ref('about').on("value", function(snapshot){
    var dataAbout = snapshot.val()
    headingAbout.innerText = `${dataAbout.heading}`
    descAbout.innerText = `${dataAbout.desc}`
    imageAbout.innerHTML = `
    <img src="${dataAbout.pict}" alt="" class="" />
    `;
  })
}

// Data produk
var isViewListProductVisible = $('#row-list-product').is(':visible');
console.log("produk " + isViewListProductVisible)
if (isViewListProductVisible) {
  getListProduct()
}

function getListProduct() {
  db.ref('product').child('list_product').once("value", function (snapshot) {
    var key = snapshot.key;
    var list_product = snapshot.val();

    for (let i = 0; i < Object.keys(list_product).length; i++) {
      var index = i+1
      document.getElementById("row-list-product").innerHTML += `
        <div class="col" name="product-${list_product[index].id}" id="col-list-product-${list_product[index].id}">
            <div class="layout_padding" id="layout_padding">
                <div class="card-deck" id="card-deck">
                    <div class="card" id="card">
                        <img class="card-img-top" id="img-product" src="${list_product[index].pict}" alt="Card image cap" />
                        <div class="card-body" id="card-body">
                            <h5 class="card-title" id="product-title" >${list_product[index].name}</h5>
                            <p class="card-text" id="product-desc">
                                ${list_product[index].desc}
                            </p>
                            <h5>
                            Rp. ${list_product[index].price}
                            </h5>
                            <br/>
                            <div class="quote_btn-container ml-0 ml-lg-4 d-flex justify-content-center cart-btn-item" id="cart-btn-item" name="cart-btn-item" onclick="addItem('${list_product[index].id}')">
                              <a >
                                <img src="images/cart.png" id="add-to-cart" name="add-to-cart" style="width:20px; height:20px;"></img>
                                <span>Add to cart</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
  });
}


// get cart

function addItem(idproduct) {
  auth.onAuthStateChanged(user => {
    if (user) {
      // cek data pada list product
      db.ref('product').child('list_product').once("value", function (snapshot) {
        var list_product = snapshot.val();
        const locUserCart = db.ref('product').child("cart").child(user.uid)
        const locUserCartProduct = db.ref('product').child("cart").child(user.uid).child("product")

        for (let index = 0; index < Object.keys(list_product).length; index++) { // loop data list product dengan idProduct
          if (list_product[index].id == idproduct) { // jika product sama dengan idproduct maka ditambahkan ke cart

            locUserCart.once("value", function (snapshotCart) {
              var dataCart = snapshotCart.val()
              if (dataCart == null) {
                locUserCart.set({
                  total_amount: list_product[index].price,
                  product: idproduct
                })
                  .then(response => {
                    locUserCartProduct.child(list_product[index].id).set(
                      {
                        id: `${list_product[index].id}`,
                        name: list_product[index].name,
                        pict: list_product[index].pict,
                        price: list_product[index].price,
                        desc: list_product[index].desc,
                        quantity: 1
                      }
                    ).then(res => {
                      alert("Berhasil ditambahkan")
                    }).catch(error => {
                      errorHandler(error)
                    })
                  }).catch(error => {
                    errorHandler(error)
                  })
              } else {
                // jika terdapat data
                for (let i = 0; i < dataCart.product.length; i++) { //loop untuk cek data cart produk
                  switch (dataCart.product[i].id) {
                    case idproduct:
                      var totalAmount = dataCart.total_amount + dataCart.product[i].price
                      locUserCart.update({
                        total_amount: totalAmount
                      })
                        .then(response => {
                          var qty = dataCart.product[i].quantity + 1
                          locUserCartProduct.child(dataCart.product[i].id).update({ quantity: qty })
                            .then(res => {
                              alert("Berhasil ditambahkan")
                            })
                            .catch(error => {
                              errorHandler(error)
                            })
                        })
                        .catch(error => {
                          errorHandler(error)
                        })
                      break;
                    default:
                      locUserCart.update({
                        total_amount: dataCart.total_amount + list_product[index].price
                      })
                        .then(response => {
                          locUserCartProduct.child(idproduct).set(
                            {
                              id: `${list_product[index].id}`,
                              name: list_product[index].name,
                              pict: list_product[index].pict,
                              price: list_product[index].price,
                              desc: list_product[index].desc,
                              quantity: 1
                            }
                          ).then(res => {
                            alert("Berhasil ditambahkan")
                          }).catch(error => {
                            errorHandler(error)
                          })
                        }).catch(error => {
                          errorHandler(error)
                        })
                      break;
                  }
                }
              }
            })
          }
        }
      })
    } else {
      alert("Silahkan login terlebih dahulu")
    }
  })
}

function deleteItem(idProduct, total_amount, price) {
  console.log(idProduct, total_amount, price)
  var user = auth.currentUser
  var locUserCart = db.ref('product').child("cart").child(user.uid)
  locUserCart.child("product").child(idProduct).remove()
    .then(resp => {
      var totalAmount = total_amount - price
      locUserCart.update({
        total_amount: totalAmount
      })
        .then(response => {
          alert("Berhasil menghapus")
          window.location.href = "../GoodFood/cart.php";
        })
        .catch(e => {
          errorHandler(e)
        })
    })
    .catch(e => {
      errorHandler(e)
    })
}

// Data testimonial
var isViewListTestimonialVisible = $('#list-testimonial').is(':visible');

if (isViewListTestimonialVisible) {
  getListTestimonial()
}

function getListTestimonial() {
  db.ref('testimonial').on("value", function (snapshot) {
    var key = snapshot.key;
    var dataTestimonial = snapshot.val();
    for (let i = 0; i < Object.keys(dataTestimonial).length; i++) {
      if (i == 0) {
        document.getElementById("list-testimonial").innerHTML += `
              <div class="carousel-item active">
                <div class="client_container layout_padding2">
                  <!-- <div class="client_img-box">
                    <img src="images/makanan/makanan.png" alt="" />
                  </div> -->
                  <div class="client_detail">
                    <h3>
                      ${dataTestimonial[Object.keys(dataTestimonial)[i]].name}
                    </h3>
                    <p class="custom_heading-text">
                    ${dataTestimonial[Object.keys(dataTestimonial)[i]].desc}
                    </p>
                  </div>
                </div>
              </div>
          `;
      } else {
        document.getElementById("list-testimonial").innerHTML += `
              <div class="carousel-item">
                <div class="client_container layout_padding2">
                  <!-- <div class="client_img-box">
                    <img src="images/makanan/makanan.png" alt="" />
                  </div> -->
                  <div class="client_detail">
                    <h3>
                    ${dataTestimonial[Object.keys(dataTestimonial)[i]].name}
                    </h3>
                    <p class="custom_heading-text">
                    ${dataTestimonial[Object.keys(dataTestimonial)[i]].desc}
                    </p>
                  </div>
                </div>
              </div>
          `;
      }
    }
  });
}

function sendTestimonial() {
  const name = $("#name-testimonial").val()
  const desc = $("#ulasan-testimonial").val()
  // var dataTestimonial = Object.keys(snapshot.val()).length;

  db.ref("testimonial").push().set({ name, desc })
    .then(response => {

      alert('Berhasil mengirim ulasan')
      window.location.href = "../GoodFood/testimonial.php";
    })
    .catch(e => {
      errorHandler(e)
    })
}

// get Blog

var isViewListBlogVisible = $('#list_blog').is(':visible');
console.log("blog " + isViewListBlogVisible)

if (isViewListBlogVisible) {
  getListBlog()
}

function getListBlog() {
  db.ref('blog').on("value", function (snapshot) {
    var key = snapshot.key;
    var list_blog = snapshot.val();
    // console.log(list_blog)

    for (let i = 0; i < Object.keys(list_blog).length; i++) {
      document.getElementById("list_blog").innerHTML += `
        <div class="inner_blog">
            <h4>${list_blog[Object.keys(list_blog)[i]].judul}</h4>
            <p align="justify">${list_blog[Object.keys(list_blog)[i]].desc}</p>
            <span>${list_blog[Object.keys(list_blog)[i]].date} - ${list_blog[Object.keys(list_blog)[i]].name}</span>
            <br>
            <hr>
        </div>
        `;
    }
  });
}


function sendBlog() {
  const name = $("#creator-blog").val()
  const judul = $("#judul-blog").val()
  const desc = $("#isi-blog").val()
  var today = new Date()
  var dateNow = today.toLocaleDateString()
  // var dataTestimonial = Object.keys(snapshot.val()).length;

  db.ref("blog").push().set({ judul, name, desc, date: dateNow })
    .then(response => {

      alert('Berhasil mengirim blog')
      window.location.href = "../GoodFood/blog.php";
    })
    .catch(e => {
      errorHandler(e)
    })
}
