<script>
      api = 'https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi/';
      $(document).ready(function () {
        $.ajax({
          url: api,
          success: function (res) {
            $('#kota').html(res[10].provinsi);
            $('#kasus').html(res[10].kasus);
            $('#dirawat').html(res[10].dirawat);
            $('#sembuh').html(res[10].sembuh);
            $('#meninggal').html(res[10].meninggal);
          },
        });
      });
    </script>
