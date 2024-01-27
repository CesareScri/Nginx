import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-javascript";
import { toast } from "sonner";

interface CodeSnippetProps {
  code: string;
  language: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, language }) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Reset icon after 2 seconds
        toast("Code snippet copied!", {
          description: "Your code has been copied to your clipboard.",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        });
      })
      .catch((err) => console.error("Could not copy text: ", err));
  };

  return (
    <div className="text-holder">
      <div className="flex items-center justify-between">
        <p className="text-zinc-400">{language}</p>
        <i
          className={
            isCopied
              ? "bi bi-check-circle-fill text-green-500"
              : "bi bi-clipboard cursor-pointer"
          }
          onClick={handleCopy}
        ></i>
      </div>
      <div className="text-body">
        <pre>
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeSnippet;
