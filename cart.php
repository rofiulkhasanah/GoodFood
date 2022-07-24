<?php
include('header.php');
include('header_nav.php');
?>
<!-- Start cart section -->
  <section class="service_section layout_padding" name="cart-tab-view" id="cart-tab-view">
    <div class="container">
      <h2 class="custom_heading">Cart</h2>
      <br>

      <section>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Qty</th>
              <th scope="col">Pict</th>
              <th scope="col">Harga</th>
              <th scope="col">Total</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody name="tbody-cart" id="tbody-cart">
          </tbody>
        </table>
      </section>
      <section>
        <table class="table">
        <thead>
          </thead>
          <tbody id="tbody-total-amount">
          </tbody>
        </table>
      </section>
    </div>
    <br>

    <div id="next-payment-view" name="next-payment-view"></div>

    <div class="container" name="view-invoice" id="view-invoice" style="display: none;">
      <br>
      <section>
        <h4>Invoice</h4>
        <hr>
        <table class="table table-borderless">
          <thead>
          </thead>
          <tbody>
            <tr>
              <td>No Invoice</td>
              <td name="no-invoice" id="no-invoice"></td>
            </tr>
            <tr>
              <td>No Virtual Account</td>
              <td name="no-va" id="no-va">00000</td>
            </tr>
            <tr>
              <td>Biaya Layanan</td>
              <td colspan="2">Gratis</td>
            </tr>
            <tr>
              <td>Total yang harus dibayar</td>
              <td colspan="2" name="total-payment" id="total-payment">Rp. 000000</td>
            </tr>
          </tbody>
        </table>
        <br>
        <div name="done-payment-view" id="done-payment-view"></div>
      </section>
    </div>
  </section>  <!-- end cart section -->
  <?php include('footer.php'); ?>