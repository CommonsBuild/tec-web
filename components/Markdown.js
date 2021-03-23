import ReactMarkdown from "react-markdown";

const Markdown = (props) => {
  return (
    <ReactMarkdown className="tec-markdown">{props.children}</ReactMarkdown>
  );
};

export default Markdown;
