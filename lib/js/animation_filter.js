$(document).ready(function() {
  $selected_colors = 3;
  $color1 = "none";
  $color2 = "none";
  $color3 = "none";
  $selected_styles = 0;

  // let p = document.createElement('p');
  // p.className = "checked_color";
  // p.innerHTML = "<p>Этот</p>";

  $(".cp__color").on('click', function() {
    if (!this.classList.contains('active')) {
      if ($selected_colors == 3 || this.classList.contains('any_3_colors')) {
        $(".cp__color").each(function() {
          $(this).removeClass('active');
        });
        document.getElementById('checked_colors_count').innerHTML="Любые";
        $('.checked_colors_count').removeClass('color_was_checked');
        $('.checked_colors_div').removeClass('checked_color');
        document.getElementById('color_1_inp').value = "";
        document.getElementById('color_2_inp').value = "";
        document.getElementById('color_3_inp').value = "";
        console.log("$color1", document.getElementById('color_1_inp').value);
        console.log("$color2", document.getElementById('color_2_inp').value);
        console.log("$color3", document.getElementById('color_3_inp').value);
        $selected_colors = 0;
        $color1 = "none";
        $color2 = "none";
        $color3 = "none";
      }

      if (!this.classList.contains('any_3_colors')) {
        if ($selected_colors == 0) {
          $color1 = this.id;
          document.getElementById('color_1_inp').value = this.id;
          console.log("$color1", document.getElementById('color_1_inp').value);
          document.getElementById('checked_colors_count').innerHTML="2 любых +";
          $('.checked_color_1').addClass('checked_color');
          $('.checked_color_1').attr('id', this.id);
          $('.checked_colors_count').addClass('color_was_checked');
          $('.none2').addClass('active');
          $('.none3').addClass('active');
        }
        if ($selected_colors == 1) {
          $color2 = this.id;
          document.getElementById('color_2_inp').value = this.id;
          console.log("$color2", document.getElementById('color_2_inp').value);
          document.getElementById('checked_colors_count').innerHTML="1 любой +";
          $('.checked_color_2').addClass('checked_color');
          $('.checked_color_2').attr('id', this.id);
          $('.checked_colors_count').addClass('color_was_checked');
          $('.none2').removeClass('active');
          $('.none3').addClass('active');
        }
        if ($selected_colors == 2) {
          $color2 = this.id;
          document.getElementById('color_3_inp').value = this.id;
          console.log("$color3", document.getElementById('color_3_inp').value);
          document.getElementById('checked_colors_count').innerHTML="";
          $('.checked_color_3').addClass('checked_color');
          $('.checked_color_3').attr('id', this.id);
          $('.checked_colors_count').addClass('color_was_checked');
          $('.none2').removeClass('active');
          $('.none3').removeClass('active');
        }

        $(this).addClass('active');
        $selected_colors += 1;
      }
    }
  });

  $(".triangle_to_open_and_hide.open_hide_colors").on('click', function() {
    $('.color_panel').toggleClass('hidden');
    $('.open_hide_colors').toggleClass('color_panel_hidden');
  });

  $(".triangle_to_open_and_hide.open_hide_design_styles").on('click', function() {
    $('.styles_labels_open').toggleClass('hidden');
    $('.open_hide_design_styles').toggleClass('styles_labels_hidden');
  });

  $(".styles_labels_open label").on('click', function() {
    console.log("label clicked");

  });
});
