<?php?>

  <!-- footer section -->
  <section class="container-fluid footer_section">
    <p>
      Copyright &copy; 
    </p>
  </section>
  </div>
  <!-- footer section -->
  <script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-auth.js"></script>
  <!-- <script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-firestore.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-functions.js"></script> -->
  <script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-analytics.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-database.js"></script>

  <script src="js/logic/config.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="http://cdn.datatables.net/1.10.7/js/jquery.dataTables.min.js"></script>

<script src="js/logic/getData.js"></script>
<script src="js/logic/getDataCart.js"></script>
<script src="js/logic/authV2.js"></script>
<script src="js/logic/counter.js"></script>

  <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
  <script type="text/javascript" src="js/bootstrap.js"></script>
  <script>
        document.onreadystatechange = function() {
            if (document.readyState !== "complete") {
                document.querySelector(
                  "body").style.visibility = "hidden";
                document.querySelector(
                  "#loader").style.visibility = "visible";
            } else {
                document.querySelector(
                  "#loader").style.display = "none";
                document.querySelector(
                  "body").style.visibility = "visible";
            }
        };
    </script>
</body>

</html>
