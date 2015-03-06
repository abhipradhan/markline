/*global commonmark*/
(function () {
  'use strict';

  function markline() {
    var reader = new commonmark.Parser(),
      writer = new commonmark.HtmlRenderer(),
      parsed = reader.parse(document.getElementById("markdown-content").textContent),
      result = writer.render(parsed);

    document.getElementById("doc-target").innerHTML = result;
  }
  
  document.addEventListener("DOMContentLoaded", markline);
}());