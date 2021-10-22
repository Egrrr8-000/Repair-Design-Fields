$(document).ready(function() {
  $selected_colors = 3;
  $color1 = "none";
  $color2 = "none";
  $color3 = "none";

  let p = document.createElement('p');
  p.className = "checked_color";
  p.innerHTML = "<p>v</p>";

  $(".cp__color").on('click', function() {
    if (!this.classList.contains('active')) {
      if ($selected_colors == 3) {
        $(".cp__color").each(function() {
          $(this).removeClass('active');
        });
        document.getElementById('checked_colors_count').innerHTML="выбрано 0";
        $selected_colors = 0;
        $color1 = "none";
        $color2 = "none";
        $color3 = "none";
      }

      if ($selected_colors == 0) {
        $color1 = this.id;
        document.getElementById('color_1_inp').value = this.id;
        console.log("$color1", document.getElementById('color_1_inp').value);
        document.getElementById('checked_colors_count').innerHTML="выбрано 1";
        $('.none2').addClass('active');
        $('.none3').addClass('active');
      }
      if ($selected_colors == 1) {
        $color2 = this.id;
        document.getElementById('color_2_inp').value = this.id;
        console.log("$color2", document.getElementById('color_2_inp').value);
        document.getElementById('checked_colors_count').innerHTML="выбрано 2";
        $('.none2').removeClass('active');
        $('.none3').addClass('active');
      }
      if ($selected_colors == 2) {
        $color2 = this.id;
        document.getElementById('color_3_inp').value = this.id;
        console.log("$color3", document.getElementById('color_3_inp').value);
        document.getElementById('checked_colors_count').innerHTML="выбрано 3";
        $('.none2').removeClass('active');
        $('.none3').removeClass('active');
      }
      $(this).addClass('active');
      if (!this.classList.contains('none')) {
        this.append(p);
      }

      $selected_colors += 1;
    }

    // if (this.classList.contains('active')) {
    //
    // }
  });
});
