!function(){"use strict";function e(){var e=new commonmark.Parser,n=new commonmark.HtmlRenderer,t=e.parse(document.getElementById("markdown-content").textContent),o=n.render(t);document.getElementById("doc-target").innerHTML=o}document.addEventListener("DOMContentLoaded",e)}();