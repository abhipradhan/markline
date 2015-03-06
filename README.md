# MarkLine

*MarkLine* is an HTML template for unified markdown editing and viewing. It enables an edit-refresh cycle for markdown editing.

## Usage:

  - Open the *dist/markline.html* file
  - Look for the *&lt;script>* tag with the id *markdown-content*. It is right in the document *&lt;head>*
  - Type in your markdown here.
  - Open the **same HTML file** in a browser to see the results right there.

Markline essentially eliminates the need to maintain a markdown version of your document and a converted HTML version. The markdown is the single source of truth.

### More features

  - Markline works **offline**. The [commonmark.js](https://github.com/jgm/commonmark.js) markdown-to-HTML converter is included *inline* in this document.
  - There is some minimal styling also applied - again *inline*.
  - Progressive enhancement if you are connected to the internet (fancy fonts, syntax highlighing using [highlight.js](https://highlightjs.org)).
  - Because of all these features, MarkLine is a *single file*. Basically you can distribute the document the way you share an MS Word doc etc.
  
Of course you can have code highlighting too

```
public static void main(String [] args){
    System.out.println("Hello World!");
}
```

