import { useState, useEffect } from "react";
import "./App.css";
import Editor from "./components/Editor";

function App() {
  const [htmlCode, setHtml] = useState("html", "");
  const [cssCode, setCss] = useState("css", "");
  const [jsCode, setJs] = useState("js", "");
  const [result, setResult] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log(cssCode)
      setResult(`
        <html>
          <body>${htmlCode}</body>
          <style>${cssCode}</style>
          <script>${jsCode}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [htmlCode, cssCode, jsCode]);

  return (
    <>
      <div className="Editorcontainer">
       
       <Editor value={htmlCode} setValue={setHtml} heading="HTML" />
       <Editor value={cssCode} setValue={setCss} heading="CSS" />
       <Editor value={jsCode} setValue={setJs} heading="JAVASCRIPT" />
      </div>
      <div className="codecontainer" style={{ marginTop: "100px", height: "600px", width: "600px" }}>
        <iframe
          srcDoc={result}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </>
  );
}

export default App;
