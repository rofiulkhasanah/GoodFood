<?php ?>

<header class="header_section">
      <div class="container">
        <nav class="navbar navbar-expand-lg custom_nav-container pt-3">
          <a class="navbar-brand" href="index.php">
            <img src="images/icon-app.png" alt="" class="icon-app"/>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="d-flex ml-auto flex-column flex-lg-row align-items-center">
              <ul class="navbar-nav  ">
                <li class="nav-item active">
                  <a class="nav-link" href="index.php">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="about.php">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="testimonial.php">Testimonial</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="blog.php">Blog</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="cart.php">
                    <img src="images/cart.png" style="width:25px; height: 25px;" alt="" class=""/>
                  </a>
                </li>
                <li class="nav-item" id="navName" name="navName" style="display: none;">
                  <a class="nav-link" id="displayName" name="displayName" href=""></a>
                </li>
              </ul>
            </div>
            <div class="quote_btn-container ml-0 ml-lg-4 d-flex justify-content-center">
              <a id="home-login" name="home-login" href="signIn.php">
                Log In
              </a>
              <a id="home-logout" name="home-logout" href="#" style="display:none;">
                Log out
              </a>
            </div>
            </div>
        </nav>
      </div>
    </header>