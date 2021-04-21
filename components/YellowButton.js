import { useRouter } from "next/router";

const YellowButton = ({ text, url }) => {
  const router = useRouter();

  const handleClick = () => {
    if (url.startsWith("http")) {
      window.open(url, "_blank");
      return;
    }
    router.push(url);
  };

  return (
    <button
      type="button"
      className="block bai-jamjuree font-semibold uppercase semibold bg-tec-yellow focus:outline-none text-black text-base sm:text-lg py-2.5 px-10 my-5 sm:my-10"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default YellowButton;
