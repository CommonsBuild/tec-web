import { useRouter } from "next/router";

const YellowButton = ({ text, url, outline }) => {
  const router = useRouter();

  const handleClick = () => {
    if (url.startsWith("http")) {
      window.open(url, "_blank");
      return;
    }
    router.push(url);
  };

  const colour = outline
    ? "text-tec-yellow border border-tec-yellow"
    : "bg-tec-yellow text-black";
  const className = `${colour} block font-bai-jamjuree font-semibold uppercase semibold focus:outline-none  text-sm sm:text-base py-2.5 px-7 my-5 sm:my-10`;

  return (
    <button type="button" className={className} onClick={handleClick}>
      <span className="whitespace-nowrap">{text}</span>
    </button>
  );
};

export default YellowButton;
