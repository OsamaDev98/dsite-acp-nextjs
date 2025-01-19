import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useRef, useState } from "react";
import "./ckeditor5.css";

const CustomEditor = ({ editorId, value, onChange }) => {
  const editorContainerRef = useRef(null);
  const editorRef = useRef(null);
  const [editorData, setEditorData] = useState("");

  ClassicEditor.defaultConfig = {
    licenseKey: "GPL",
  };

  const editorConfig = {
    toolbar: {
      items: [
        "undo",
        "redo",
        "|",
        "heading",
        "fontColor",
        "|",
        "bold",
        "italic",
        "removeFormat",
        "alignment",
        "bulletedList",
        "numberedList",
        "|",
        "insertImage",
        "link",
        "mediaEmbed",
        "insertTable",
      ],
      shouldNotGroupWhenFull: false,
    },
    // plugins: [
    //   Alignment,
    //   Autoformat,
    //   AutoImage,
    //   Autosave,
    //   Bold,
    //   Essentials,
    //   FontColor,
    //   FontSize,
    //   GeneralHtmlSupport,
    //   Heading,
    //   Image,
    //   ImageBlock,
    //   ImageCaption,
    //   ImageInline,
    //   ImageInsertViaUrl,
    //   ImageResize,
    //   ImageStyle,
    //   ImageTextAlternative,
    //   ImageToolbar,
    //   ImageUpload,
    //   Italic,
    //   Link,
    //   LinkImage,
    //   List,
    //   ListProperties,
    //   MediaEmbed,
    //   Paragraph,
    //   RemoveFormat,
    //   Style,
    //   Table,
    //   TableCaption,
    //   TableCellProperties,
    //   TableColumnResize,
    //   TableProperties,
    //   TableToolbar,
    //   TextPartLanguage,
    //   TextTransformation,
    //   Undo,
    // ],
    heading: {
      options: [
        {
          model: "paragraph",
          title: "Paragraph",
          class: "ck-heading_paragraph",
        },
        {
          model: "heading1",
          view: "h1",
          title: "Heading 1",
          class: "ck-heading_heading1",
        },
        {
          model: "heading2",
          view: "h2",
          title: "Heading 2",
          class: "ck-heading_heading2",
        },
        {
          model: "heading3",
          view: "h3",
          title: "Heading 3",
          class: "ck-heading_heading3",
        },
        {
          model: "heading4",
          view: "h4",
          title: "Heading 4",
          class: "ck-heading_heading4",
        },
        {
          model: "heading5",
          view: "h5",
          title: "Heading 5",
          class: "ck-heading_heading5",
        },
        {
          model: "heading6",
          view: "h6",
          title: "Heading 6",
          class: "ck-heading_heading6",
        },
      ],
    },
    image: {
      toolbar: [
        "toggleImageCaption",
        "imageTextAlternative",
        "|",
        "imageStyle:inline",
        "imageStyle:wrapText",
        "imageStyle:breakText",
        "|",
        "resizeImage",
      ],
    },
    initialData: "",
    link: {
      addTargetToExternalLinks: true,
      defaultProtocol: "https://",
      decorators: {
        toggleDownloadable: {
          mode: "manual",
          label: "Downloadable",
          attributes: {
            download: "file",
          },
        },
      },
    },
    list: {
      properties: {
        styles: true,
        startIndex: true,
        reversed: true,
      },
    },
    placeholder: "Type or paste your content here!",
    style: {
      definitions: [
        {
          name: "Article category",
          element: "h3",
          classes: ["category"],
        },
        {
          name: "Title",
          element: "h2",
          classes: ["document-title"],
        },
        {
          name: "Subtitle",
          element: "h3",
          classes: ["document-subtitle"],
        },
        {
          name: "Info box",
          element: "p",
          classes: ["info-box"],
        },
        {
          name: "Side quote",
          element: "blockquote",
          classes: ["side-quote"],
        },
        {
          name: "Marker",
          element: "span",
          classes: ["marker"],
        },
        {
          name: "Spoiler",
          element: "span",
          classes: ["spoiler"],
        },
        {
          name: "Code (dark)",
          element: "pre",
          classes: ["fancy-code", "fancy-code-dark"],
        },
        {
          name: "Code (bright)",
          element: "pre",
          classes: ["fancy-code", "fancy-code-bright"],
        },
      ],
    },
    table: {
      contentToolbar: [
        "tableColumn",
        "tableRow",
        "mergeTableCells",
        "tableProperties",
        "tableCellProperties",
      ],
    },
  };

  return (
    <div className="main-container-editor">
      <div
        className="editor-container editor-container_classic-editor editor-container_include-style editor-container_include-word-count"
        ref={editorContainerRef}
      >
        <div className="editor-container__editor">
          <div ref={editorRef}>
            <CKEditor
              id={editorId}
              editor={ClassicEditor}
              config={editorConfig}
              data={value || ""}
              onChange={(e, editor) => {
                const data = editor.getData();
                setEditorData(data);
                onChange(data);
                // console.log({ e, editor, data });
              }}
              // onReady={(editor) => {
              //   console.log("Editor is ready!", editor);
              // }}
              // onBlur={(e, editor) => {
              //   console.log("Blur.", editor);
              // }}
              // onFocus={(e, editor) => {
              //   console.log("Focus.", editor);
              // }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomEditor;
