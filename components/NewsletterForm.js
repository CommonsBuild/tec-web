import React from "react";

const NewletterForm = () => {
  const [email, setEmail] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = "/.netlify/functions/newsletter";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    };
    fetch(url, requestOptions)
      .then((response) => {
        setSubmitted(true);
        setSuccess(true);
      })
      .catch((error) => {
        setSubmitted(true);
        setSuccess(false);
      });
  };

  return (
    <div className="w-full pb-5 pl-5 pr-5 md:max-w-md md:pb-7">
      <div className="pb-5">Sign up for newsletter</div>
      {submitted ? (
        success ? (
          <div className="text-xl font-semibold">
            ✅ Thank you for subscribing!
          </div>
        ) : (
          <div className="text-xl font-semibold">
            🤖 There was an error, try again later.
          </div>
        )
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row">
          <input
            type="email"
            className="flex-grow p-4 mb-5 mr-0 font-semibold text-gray-300 uppercase bg-gray-800 border-t border-b border-l border-white sm:mb-0 sm:w-auto"
            placeholder="Your email address"
            onChange={handleEmailChange}
            value={email}
          />
          <button
            className="p-4 px-8 font-semibold text-gray-800 uppercase bg-white"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
};

export default NewletterForm;
