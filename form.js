// Until a Formspree form id is set, the request form opens WhatsApp with the details filled in.
(function () {
  var form = document.getElementById('request');
  if (!form || form.action.indexOf('FORM_ID') === -1) return;
  var de = document.documentElement.lang === 'de';
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = form.elements;
    var lines = [
      de ? 'Hallo Alexandros, Anfrage über die Website:' : 'Hello Alexandros, request from the website:',
      (de ? 'Name: ' : 'Name: ') + f.name.value,
      (de ? 'Kontakt: ' : 'Contact: ') + f.contact.value,
      (de ? 'Datum: ' : 'Date: ') + (f.date.value || '-'),
      (de ? 'Gäste: ' : 'Guests: ') + (f.guests.value || '-'),
      (de ? 'Ort: ' : 'Location: ') + (f.location.value || '-'),
      f.message.value
    ];
    window.location.href = 'https://wa.me/306975985318?text=' + encodeURIComponent(lines.join('\n'));
  });
})();
