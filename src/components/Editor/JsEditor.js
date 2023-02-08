import { useContext } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-noconflict/ext-language_tools";
import { EditorContext } from "../../context/context";

const JsEditor = () => {
  const { js, setJs } = useContext(EditorContext);
  return (
    <AceEditor
      placeholder="Write JavaScript"
      mode="javascript"
      theme="monokai"
      name="editor_javascript"
      value={js}
      onChange={(value) => setJs(value)}
      fontSize="16px"
      width={"100%"}
      height={"100%"}
      showPrintMargin={true}
      showGutter={false}
      highlightActiveLine={true}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        tabSize: 2,
      }}
    />
  );
};

export default JsEditor;
