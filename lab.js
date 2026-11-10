// Practice-area filter for the study list. Without JavaScript every study stays visible.
(function () {
  var buttons = document.querySelectorAll('.lab-filters button');
  var studies = document.querySelectorAll('.study');
  var count = document.getElementById('study-count');
  function apply(area) {
    var shown = 0;
    studies.forEach(function (s) {
      var match = area === 'all' || (' ' + s.getAttribute('data-areas') + ' ').indexOf(' ' + area + ' ') !== -1;
      s.hidden = !match;
      if (match) shown++;
    });
    buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-filter') === area)); });
    if (count) count.textContent = shown;
  }
  buttons.forEach(function (b) { b.addEventListener('click', function () { apply(b.getAttribute('data-filter')); }); });
})();
