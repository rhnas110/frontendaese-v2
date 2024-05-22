import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";

export const CodeBlock = ({ children, ...props }) => {
  return <SyntaxHighlighter {...props}>{children}</SyntaxHighlighter>;
};
