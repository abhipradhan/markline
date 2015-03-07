/*global commonmark*/
(function () {
  'use strict';

  function initMarkline(){
    var btnEdit = document.getElementById("btn-edit");
    btnEdit.addEventListener("click", edit);
    
    var btnRender = document.getElementById("btn-render");
    btnRender.addEventListener("click", render);
    
    render();
  }
  
  function render(event) {
    var reader = new commonmark.Parser(),
      writer = new commonmark.HtmlRenderer(),
      inputMarkdown = document.getElementById("input-markdown").value,
      parsed = reader.parse(inputMarkdown),
      result = writer.render(parsed);

    if(event) {
      event.preventDefault();
    }
    document.getElementById("doc-target").innerHTML = result;
    setVisibility(document.getElementById("markline-edit"), false);
    setVisibility(document.getElementById("markline-render"), true);
  }
  
  function edit(event) {
    event.preventDefault();
    setVisibility(document.getElementById("markline-edit"), true);
    setVisibility(document.getElementById("markline-render"), false);
  }
  
  function setVisibility(node, show) {
    node.style.display = show ? 'block' : 'none';
  }
  
  document.addEventListener("DOMContentLoaded", initMarkline);
}());
