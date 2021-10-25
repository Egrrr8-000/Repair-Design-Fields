$(document).ready(function() {
  $filters_on = 0;
  $selected_colors = 0;
  $color1 = "none";
  $color2 = "none";
  $color3 = "none";
  $selected_styles = 0;
  $selected_rooms = 0;

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
        $filters_on -= 1;
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

  $(".triangle_to_open_and_hide.open_hide_checked_rooms").on('click', function() {
    $('.checked_rooms_open').toggleClass('hidden');
    $('.open_hide_checked_rooms').toggleClass('checked_rooms_open_hidden');
  });

  $(".styles_labels_open label").on('click', function() {
    console.log("label clicked");
    if (this.classList.contains('any_one')) {
      document.getElementById('checked_styles_count').innerHTML="Любой";
      $('input[name="style_design"]').prop('checked', false);
      $selected_styles = 0;
    } else {
      $selected_styles = $(':input[name="style_design"]:checked').length;
      document.getElementById('checked_styles_count').innerHTML= $selected_styles + " выбрано";
    }
  });

  $(".checked_rooms label").on('click', function() {
    console.log("label clicked");
    if (this.classList.contains('any_one')) {
      document.getElementById('checked_rooms_count').innerHTML="Любая";
      $('input[name="checked_room"]').prop('checked', false);
      $selected_rooms = 0;
    } else {
      $selected_rooms = $(':input[name="checked_room"]:checked').length;
      document.getElementById('checked_rooms_count').innerHTML= $selected_rooms + " выбрано";
    }
  });

  $(document).on('click', function() {
    if ($('input[name="cost_mini"]').value != undefined  || $('input[name="cost_max"]').value != undefined) {
      $filters_on += 1;
      console.log("from input +1");
    }
    if ($selected_colors >= 1) {
      $filters_on += 1;
      console.log("from $selected_colors +1");
    }
    if ($selected_styles >= 1) {
      $filters_on += 1;
      console.log("from $selected_styles +1");
    }
    if ($selected_rooms >= 1) {
      $filters_on += 1;
      console.log("from $selected_rooms +1");
    }
    if ($filters_on >= 1) {
      $(".filters_on").addClass('show');
      $(".filters_off").addClass('hidden');
    } else {
      $(".filters_on").removeClass('show');
      $(".filters_off").removeClass('hidden');
    }
  });

});
