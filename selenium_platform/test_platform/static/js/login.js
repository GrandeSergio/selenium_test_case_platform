$(document).ready(function() {
  var toastHTML = '';
  if (typeof toastMessages !== 'undefined') {
    toastMessages.forEach(function(message) {
      toastHTML += '<div class="toast align-items-center text-white bg-primary border-0 animated-toast" role="alert" aria-live="assertive" aria-atomic="true">' +
        '<div class="d-flex">' +
          '<div class="toast-body">' +
            message +
          '</div>' +
          '<button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>' +
        '</div>' +
      '</div>';
    });
  }
  var toastContainer = $(toastHTML);
  $('body').append(toastContainer);
  toastContainer.toast('show');
});