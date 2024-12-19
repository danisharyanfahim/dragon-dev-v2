"use client";
import React, { useState } from "react";
import { FaCheck, FaRegClipboard } from "react-icons/fa6";
import SyntaxHighlighter from "react-syntax-highlighter";
import { CodeContainerProps } from "../interfaces/blog";
import { nord } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeContainer: React.FC<CodeContainerProps> = ({
  fileName,
  language,
  code,
}) => {
  const [copied, setCopied] = useState(false);
  const copyToClipBoard = () => {
    navigator.clipboard.writeText(code); //Copies to clipboard
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 400);
  };

  return (
    <section className="code-container">
      <div className="top-bar">
        <p>{fileName}</p>
        {copied ? (
          <button>
            <p>
              <FaCheck />
              {" Copied!"}
            </p>
          </button>
        ) : (
          <button onClick={() => copyToClipBoard()}>
            <p>
              <FaRegClipboard />
              {" Copy"}
            </p>
          </button>
        )}
      </div>
      <SyntaxHighlighter
        className="code-highlighter"
        language={language}
        style={nord}
        showLineNumbers={true}
        customStyle={{
          padding: "1rem",
          background:
            "linear-gradient(135deg, rgba(30, 30, 45), rgba(20, 20, 35))",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </section>
  );
};

export default CodeContainer;
