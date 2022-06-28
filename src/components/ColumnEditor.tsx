import * as React from "react";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor, Viewer } from "@toast-ui/react-editor";

const initData = "<p>텍스트 내용</p>";

export default function ColumnEditor() {
  const editor_ref = React.useRef<Editor>(null);

  const [editor, setEditor] = React.useState({ html: "", md: "" });

  const handleSubmit = () => {
    const editor_instance = editor_ref.current?.getInstance();
    if (editor_instance) {
      setEditor({
        html: editor_instance?.getHTML(),
        md: editor_instance?.getMarkdown(),
      });
    }
  };
  React.useEffect(() => {
    handleSubmit();
  }, []);
  return (
    <div className="editor">
      <br />
      <Viewer />
      <Editor
        ref={editor_ref}
        initialValue={initData}
        initialEditType="wysiwyg"
        events={{ change: handleSubmit }}
      />
    </div>
  );
}
