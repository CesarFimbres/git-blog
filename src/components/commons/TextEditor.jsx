/* ! Steps to configure ckEditor Custom builds

  1. get in https://ckeditor.com/ckeditor-5/online-builder/ and configure your custom build & download 

  2. Run the following command using node
  npm install @ckeditor/ckeditor5-react

  2. Copy the content of ckeditor5 to the root of your project like bellow 
  ├── ckeditor5
  │   ├── build
  │   ├── sample
  │   ├── src
  │   ├── ...
  │   ├── package.json
  │   └── webpack.config.js
  ├── node_modules
  ├── public
  ├── src
  ├── ...
  └── package.json

  3. Run the following command using node
  npm add file:./ckeditor5

  4. Copy & customize the components to be loaded

  5. Run the following command using node to apply HTML format
  npm i html-react-parser
*/

import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import parse from 'html-react-parser';

const editorConfiguration = {
	toolbar: {
		items: [
			"heading",
			"|",
			"fontFamily",
			"fontSize",
			"fontColor",
			"fontBackgroundColor",
			"bold",
			"italic",
			"underline",
			"blockQuote",
			"insertTable",
			"|",
			"alignment",
			"bulletedList",
			"numberedList",
			"outdent",
			"indent",
			"horizontalLine",
			"|",
			"link",
			"imageInsert",
			// "imageUpload",
			"mediaEmbed",
			"findAndReplace",
			"undo",
			"redo",
			"|",
			"removeFormat",
			"specialCharacters",
		],
		shouldNotGroupWhenFull: true,
	},
  image: {
    toolbar: [
      'imageTextAlternative',
      'imageStyle:inline',
      'imageStyle:block',
      'imageStyle:side',
      'linkImage'
    ]
  },
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells',
      'tableCellProperties',
      'tableProperties'
    ]
  },
  heading: {
    options: [
      { model: "paragraph", title: "Paragraph", class: "ck-heading_paragraph" },
      { model: "heading1", view: "h1", title: "Heading 1", class: "ck-heading_heading1" },
      { model: "heading2", view: "h2", title: "Heading 2", class: "ck-heading_heading2" },
      { model: "heading3", view: "h3", title: "Heading 3", class: "ck-heading_heading3" },
      { model: "heading4", view: "h4", title: "Heading 4", class: "ck-heading_heading4" },
      // { model: "heading5", view: "h5", title: "Heading 5", class: "ck-heading_heading5" },
      // { model: "heading6", view: "h6", title: "Heading 6", class: "ck-heading_heading6" },
    ],
  },
  placeholder: "Demuestre su pasión por el blog, comience a escribir... 😉",
  language: "es",
};

function TextEditor() {

  const [text, setText] = useState('')

  return (
    <>
      <div className="editor">
        <CKEditor
          // editor={ClassicEditor}
          editor={Editor}
          config={editorConfiguration}
          data={text}
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            setText(data);
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </div>

      <div>
        <h2>Así va quedando tu publicación publicación</h2>
        <div className="editor">
          {parse(text)}
        </div>
      </div>
    </>
  );
}

export default TextEditor;

/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
 */
