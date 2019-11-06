// $('a[href^="#"]').on('click', function(event) {
//   console.log("event",event)
//   var target = $(this.getAttribute('href'));
//   console.log("target",target)
//   if (target.length) {
//     console.log("target.length",target.length)
//     event.preventDefault();
//     $('html, body').animate({
//       scrollTop: target.offset().top
//     }, 1000);
//   }
// });