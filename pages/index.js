import Head from "next/head";
import { Component } from "react";
import ReactMarkdown from "react-markdown";

import { attributes } from "../content/home.md";
import Nav from "../components/Nav";
import YellowButton from "../components/YellowButton";

export default class Home extends Component {
  render() {
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <Nav />
        <div className="w-full tec-bg-gradient-2">
          <div className="bg-tec-image-1 bg-no-repeat bg-right-top bg-contain pb-32">
            <div className="lg:max-w-6xl lg:mx-auto px-10 sm:px-15">
              <div className="container bai-jamjuree text-2xl sm:text-3xl lg:text-4xl text-white leading-normal">
                <h1 className="tec-text-outline-blue uppercase break-words font-semibold text-5xl sm:text-7xl lg:text-8xl pt-10 sm:pt-20 pb-5 sm:pb-10">
                  Token Engineering Commons
                </h1>
                Sustainable & Ethical Design for Token Ecosystems{" "}
                <YellowButton
                  text="Build With Us"
                  url="https://forum.tecommons.org/"
                />
              </div>
            </div>
          </div>

          <div className="bg-tec-image-2 bg-no-repeat bg-right-top bg-cover pb-32">
            <div className="container max-w-2xl px-10 sm:px-0 sm:flex sm:flex-row sm:mx-auto">
              <div className="text-right sm:w-1/2 sm:pr-16 lg:pr-24">
                <h2 className="bai-jamjuree text-lg sm:text-xl lg:text-2xl pb-8 sm:pb-5 text-white leading-normal">
                  To·ken En·gi·neer·ing{" "}
                  <span className="whitespace-nowrap">/ˈtōkən/</span>{" "}
                  <span className="whitespace-nowrap">/enjəˈniriNG/</span>
                </h2>
              </div>
              <div className="sm:w-1/2 bai-jamjuree text-sm sm:text-base text-white leading-normal">
                <ReactMarkdown className="tec-tengineering-list">
                  {attributes.tengineeringBody}
                </ReactMarkdown>
              </div>
            </div>

            <div className="container max-w-2xl px-10 sm:px-0 sm:flex sm:flex-row sm:mx-auto pb-32">
              <div className="text-right sm:w-1/2 sm:pr-16 lg:pr-24">
                <h2 className="bai-jamjuree text-lg sm:text-xl lg:text-2xl pb-8 sm:pb-5 text-white leading-normal">
                  Com·mons <span className="whitespace-nowrap">/ˈkämənz/</span>
                </h2>
              </div>
              <div className="sm:w-1/2 bai-jamjuree text-sm sm:text-base text-white leading-normal">
                <ReactMarkdown className="tec-tengineering-list">
                  {attributes.commonsBody}
                </ReactMarkdown>
              </div>
            </div>

            <div className="bg-tec-image-3 bg-no-repeat bg-right-top bg-contain">
              <div className="bg-tec-image-4 bg-no-repeat bg-right-top bg-auto">
                <div className="container w-full max-w-xl sm:mx-auto px-10 sm:px-0">
                  <div className="w-full bai-jamjuree text-lg sm:text-xl text-white leading-normal">
                    <h1 className="tec-text-outline-unicorn uppercase break-words font-semibold text-5xl sm:text-8xl pb-5 sm:pb-10">
                      {attributes.missionHeader}
                    </h1>
                    <ReactMarkdown>{attributes.missionBody}</ReactMarkdown>
                    <YellowButton
                      text="Join The Mission"
                      url="https://forum.tecommons.org/"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-10 py-10 text-yellow-400 bg-green-700 text-3xl">
            🤖 Not done at all below this point.
          </div>

          <div className="container w-full lg:max-w-5xl lg:mx-auto px-5 sm:px-10">
            <div className="w-full bai-jamjuree text-2xl sm:text-xl text-white leading-normal">
              <h1 className="tec-text-outline-unicorn uppercase break-words font-semibold text-5xl sm:text-8xl pt-10 sm:pt-20 pb-5 sm:pb-10">
                {attributes.defiHeader}
              </h1>
              <ReactMarkdown>{attributes.defiBody}</ReactMarkdown>
              <YellowButton
                text="Join The Mission"
                url="https://forum.tecommons.org/"
              />
            </div>
          </div>
          <div className="container w-full lg:max-w-5xl lg:mx-auto px-5 sm:px-10">
            <div className="w-full bai-jamjuree text-2xl sm:text-xl text-white leading-normal">
              <h1 className="tec-text-outline-unicorn uppercase break-words font-semibold text-5xl sm:text-8xl pt-10 sm:pt-20 pb-5 sm:pb-10">
                {attributes.radHeader}
              </h1>
              <ReactMarkdown>{attributes.radBody}</ReactMarkdown>
              <YellowButton
                text="Join The Mission"
                url="https://forum.tecommons.org/"
              />
            </div>
          </div>
          <div className="container w-full lg:max-w-5xl lg:mx-auto px-5 sm:px-10">
            <div className="w-full bai-jamjuree text-2xl sm:text-xl text-white leading-normal">
              <h1 className="tec-text-outline-unicorn uppercase break-words font-semibold text-5xl sm:text-8xl pt-10 sm:pt-20 pb-5 sm:pb-10">
                {attributes.communityHeader}
              </h1>
              <ReactMarkdown>{attributes.communityBody}</ReactMarkdown>
              <YellowButton
                text="Join The Mission"
                url="https://forum.tecommons.org/"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
