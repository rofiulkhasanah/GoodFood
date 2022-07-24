<?php
include('header.php');
include('header_nav.php');
?>
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
</div>
  <!-- end testimonial section -->

  <section class="client_section layout_padding">
    <div class="container">
    <h2 class="custom_heading">Tulis ulasanmu untuk product kami</h2>
    <form>
      <div class="mb-3">
        <label for="" class="form-label">Nama</label>
        <input type="text" class="form-control" id="name-testimonial">
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Ulasan</label>
        <textarea type="text" class="form-control" id="ulasan-testimonial" rows="5"></textarea>
      </div>
      <button type="submit" name="btnSendTestimonial" id="btnSendTestimonial" class="btn btn-primary" onclick="sendTestimonial()">Submit</button>
    </form>
    </div>
  </section>
  <?php include('footer.php'); ?>