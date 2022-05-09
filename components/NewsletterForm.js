import React from "react";

const Spinner = () => {
  return (
    <>
      <svg
        class="animate-spin inline-block -mt-1 mr-2 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      Subscribing
    </>
  );
};

const NewletterForm = () => {
  const [email, setEmail] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [finished, setFinished] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("🤖 Error");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (finished) return;
    if (email.length === 0) return;
    const url = "/.netlify/functions/newsletter";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    };
    setLoading(true);
    fetch(url, requestOptions)
      .then((response) => {
        if (response.status !== 200) {
          if (response.status === 409)
            setErrorMessage("🤖 Already signed");
          setSuccess(false);
          return;
        }
        setSuccess(true);
      })
      .catch((error) => {
        setSuccess(false);
      })
      .finally(() => {
        setLoading(false);
        setFinished(true);
      });
  };

  return (
    <div className="w-full pb-5 pl-5 pr-5 md:max-w-md md:pb-7">
      <div className="pb-5">Sign up for newsletter</div>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row">
        <input
          type="email"
          className="flex-grow p-4 mb-5 mr-0 font-semibold text-gray-300 uppercase bg-gray-800 border-t border-b border-l border-white sm:mb-0 sm:w-auto"
          placeholder="Your email address"
          onChange={handleEmailChange}
          value={email}
        />
        <button
          className="p-4 px-4 font-semibold text-gray-800 uppercase bg-white"
          type="submit"
        >
          {loading ? (
            <Spinner />
          ) : finished ? (
            success ? (
              "✅ Done"
            ) : (
              <span className="text-red-500">{ errorMessage }</span>
            )
          ) : (
            "Subscribe"
          )}
        </button>
      </form>
    </div>
  );
};

export default NewletterForm;
