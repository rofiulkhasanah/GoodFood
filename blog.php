<?php
include('header.php');
include('header_nav.php');
?>
<!-- Start blog section -->
  <section class="service_section layout_padding">
    <div class="container">
      <h2 class="custom_heading">Blog</h2>
      <hr>
      <br>
      <div class="container" id="list_blog">
      </div>

      <br>
  <hr>
  <br>

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
      <div class="quote_btn-container ml-0 ml-lg-4 d-flex justify-content-center" >
        <a onclick="sendBlog()">
        Kirim Blog
        </a>
      </div>
    </form>
    </div>
    </div>
  </section>
  <!-- end blog section -->
  <?php include('footer.php'); ?>