<?php
include('header.php');
?>

<div class="hero_area">
  <?php
  include('header_nav.php');
  ?>
    <!-- slider section -->
    <section class=" slider_section position-relative">
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="slider_item-box">
              <div class="slider_item-container">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="slider_item-detail" name="view-about" id="view-about">
                        <div>
                          <h1 name="heading-about" id="heading-about">
                          </h1>
                          <p name="desc-about" id="desc-about">
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="slider_img-box">
                        <div name="image-about" id="image-about">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- end slider section -->
  </div>

  <!-- product section -->

  <section class="service_section layout_padding">
    <div class="container">
        <div class="row" id="row-list-product" name="row-list-product">

        </div>
        <br/>
        <hr/>
    </div>
  </section>
  <!-- end product section -->

  <!-- testimonial section -->
  <section class="client_section layout_padding">
    <div class="container">
      <h2 class="custom_heading">Testimonial</h2>
      <p class="custom_heading-text">
        Berikut merupakan ulasan dari pelanggan Good Food
      </p>
      <div>
        <div id="carouselExampleControls-2" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner" id="list-testimonial">
          </div>
          <div class="custom_carousel-control">
            <a class="carousel-control-prev" href="#carouselExampleControls-2" role="button" data-slide="prev">
              <span class="" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls-2" role="button" data-slide="next">
              <span class="" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  </section>
  <!-- end testimonial section -->
  <?php include('footer.php'); ?>