"use strict";

// Format options (Country Select)
var optionFormat = function (item) {
  if (!item.id) {
    return item.text;
  }

  var span = document.createElement('span');
  var imgUrl = item.element.getAttribute('value');
  var template = '';

  template += '<img src="assets/media/flags-circle/' + imgUrl + '.svg" class="rounded-circle h-30px me-2" alt="image"/>';
  template += item.text;
  span.innerHTML = template;
  return $(span);
}
var optionFormat2 = function (item) {
  if (!item.id) {
    return item.text;
  }

  var span = document.createElement('span');
  var imgUrl = item.element.getAttribute('value');
  var template = '';

  template += '<img src="assets/media/format/' + imgUrl + '.svg" class=" h-20px me-2" alt="image"/>';
  template += item.text;
  span.innerHTML = template;
  return $(span);
}

// Init Country Select2 
$('#select2_country').select2({
  templateSelection: optionFormat,
  templateResult: optionFormat
});

$('#choose-format').select2({
  templateSelection: optionFormat2,
  templateResult: optionFormat2
});

// Country select2 change 
$('#select2_country').on('select2:select', function (e) {
  var data = e.params.data;
  if(data.id == 'arab_region') {
    $('#aside_tab_country').hide();
    $('#aside_tab_regional').show();
    $('[href="#smt_regional"]').tab('show');
  }
  else {
    $('#aside_tab_regional').hide();
    $('#aside_tab_country').show();
    $('#aside_tab_country a').click();
    $('[href="#smt_country"]').tab('show');
  }
});



// Close buttons for Aside and Menu
$('#kt_aside_close').click(function () {
  $(".drawer-overlay").click();
});
$('#kt_menu_close').click(function () {
  $(".drawer-overlay").click();
});


// Aside buttons highlight
$("#myTabContent a.btn").click(function(){
  $("#myTabContent a.btn").attr("aria-expanded", false)
  $(this).attr("aria-expanded", true)
})


//clear file input value
function clearFileInput(a){
  $(a).val('');
}


$(".filters_aside_toggle_2").click(function(){
  var drawerElement = document.querySelector("#filters_aside");
  var drawer = KTDrawer.getInstance(drawerElement);
  drawer.toggle();
})







// $(document).ready(function() {
//   $('.filterizr-filter li').click(function() {
//      $('.filterizr-filter li').removeClass('filtr-active');
//      $(this).addClass('filtr-active');
//   });
//   var filterizd = $('.filtr-container').filterizr();
// });



// "use strict";
// var KTSigninGeneral = (function () {
//     var t, e, i;
//     return {
//         init: function () {
//             (t = document.querySelector("#sign_in_form")),
//                 (e = document.querySelector("#sign_in_submit")),
//                 (i = FormValidation.formValidation(t, {
//                     fields: {
//                         email: { validators: { notEmpty: { message: "Email address is required" }, 
//                         emailAddress: { message: "The value is not a valid email address" } } },
//                         password: { validators: { notEmpty: { message: "The password is required" } } },
//                     },
//                     plugins: { trigger: new FormValidation.plugins.Trigger(), bootstrap: new FormValidation.plugins.Bootstrap5({ rowSelector: ".fv-row" }) },
//                 })),
//                 e.addEventListener("click", function (n) {
//                     n.preventDefault(),
//                         i.validate().then(function (i) {
//                             "Valid" == i
//                                 ? (e.setAttribute("data-kt-indicator", "on"),
//                                   (e.disabled = !0),
//                                   setTimeout(function () {
//                                       e.removeAttribute("data-kt-indicator"),
//                                           (e.disabled = !1),
//                                           Swal.fire({ text: "You have successfully logged in!", icon: "success", buttonsStyling: !1, confirmButtonText: "Ok, got it!", customClass: { confirmButton: "btn btn-primary" } }).then(function (e) {
//                                               if (e.isConfirmed) {
//                                                   (t.querySelector('[name="email"]').value = ""), (t.querySelector('[name="password"]').value = "");
//                                                   var i = t.getAttribute("data-kt-redirect-url");
//                                                   i && (location.href = i);
//                                               }
//                                           });
//                                   }, 2e3))
//                                 : Swal.fire({
//                                       text: "Sorry, looks like there are some errors detected, please try again.",
//                                       icon: "error",
//                                       buttonsStyling: !1,
//                                       confirmButtonText: "Ok, got it!",
//                                       customClass: { confirmButton: "btn btn-primary" },
//                                   });
//                         });
//                 });
//         },
//     };
// })();
// KTUtil.onDOMContentLoaded(function () {
//     KTSigninGeneral.init();
// });
