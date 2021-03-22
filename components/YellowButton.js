const YellowButton = ({ text, url }) => {
  const handleClick = () => {
    window.open(url, "_blank");
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
