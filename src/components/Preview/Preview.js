import { useContext, useMemo } from "react";
import style from "./Preview.module.css";
import { EditorContext } from "../../context/context";

const Preview = () => {
  const { html, css, js } = useContext(EditorContext);

  const document = useMemo(() => {
    if (!html && !css && !js) {
      return;
    }

    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
  ${css}
   </style>
</head>
<body>
  ${html}
  <script>
  ${js}</script>
</body>
</html>`;
  }, [html, css, js]);

  return (
    <div className={style.content}>
      {document ? (
        <iframe title="preview" className={style.preview} srcDoc={document} />
      ) : (
        <div className={style.loading}>Сode will be displayed here</div>
      )}
    </div>
  );
};

export default Preview;
