// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState("");
  const [html, setHtml] = useState("");

  const handleInputChange = async (e) => {
    const mdText = e.target.value;
    setMarkdown(mdText);

    try {
      const response = await axios.post("http://localhost:4000/convert", {
        markdown: mdText,
      });
      setHtml(response.data.html);
    } catch (error) {
      console.error("Error converting markdown:", error);
    }
  };

  return (
    <div className="App">
      <textarea
        className="editor"
        value={markdown}
        onChange={handleInputChange}
        placeholder="Type your markdown here..."
      />
      <div className="preview" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export default App;
