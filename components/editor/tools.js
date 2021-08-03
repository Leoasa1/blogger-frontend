import Embed from "@editorjs/embed";
import Paragraph from "@editorjs/paragraph";
import List from "@editorjs/list";
import LinkTool from "@editorjs/link";
import Image from "@editorjs/image";
import Code from "@editorjs/code";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
// import SimpleImage from "@editorjs/simple-image";

const constants = {
  embed: Embed,
  header: Header,
  paragraph: Paragraph,
  list: List,
  code: Code,
  linkTool: LinkTool,
  quote: Quote,
  marker: Marker,
  checklist: CheckList,
  delimiter: Delimiter,
  image: {
    class: Image,
    config: {
      endpoints: {
        byFile: "http://localhost:1337/", // Your backend file uploader endpoint
        byUrl: "http://localhost:1337/", // Your endpoint that provides uploading by Url
      },
    },
  },
};

export default constants;
