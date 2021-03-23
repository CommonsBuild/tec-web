import Head from "next/head";
import { Component } from "react";

import { attributes } from "../content/home.md";

import Navigation from "../components/Navigation";
import YellowButton from "../components/YellowButton";
import Markdown from "../components/Markdown";
import Footer from "../components/Footer";
import Collaborators from "../components/Collaborators";

export default class Home extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Sustainable & Ethical Design for Token Ecosystems</title>
          <meta
            name="title"
            content="Token Engineering Commons – Sustainable & Ethical Design for Token Ecosystems"
          />
          <meta
            name="description"
            content="Advancing the field of token engineering in a regenerative way. Stewarding the cultivation of resources to accelerate the creation of robustly engineered models, modular tools, standards and educational opportunities."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://tecommons.org" />
          <meta
            property="og:title"
            content="Token Engineering Commons – Sustainable & Ethical Design for Token Ecosystems"
          />
          <meta
            property="og:description"
            content="Advancing the field of token engineering in a regenerative way. Stewarding the cultivation of resources to accelerate the creation of robustly engineered models, modular tools, standards and educational opportunities."
          />
          <meta
            property="og:image"
            content="https://tecommons.org/images/Share.jpg"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://tecommons.org" />
          <meta
            property="twitter:title"
            content="Token Engineering Commons – Sustainable & Ethical Design for Token Ecosystems"
          />
          <meta
            property="twitter:description"
            content="Advancing the field of token engineering in a regenerative way. Stewarding the cultivation of resources to accelerate the creation of robustly engineered models, modular tools, standards and educational opportunities."
          />
          <meta
            property="twitter:image"
            content="https://tecommons.org/images/Share.jpg"
          />
        </Head>
        <Navigation />
        <div className="w-full tec-bg-gradient-2 bai-jamjuree text-white">
          <div className="bg-tec-image-1 bg-no-repeat bg-right-top bg-contain pb-20 sm:pb-32">
            <div className="container lg:max-w-6xl lg:mx-auto px-10 sm:px-15 text-xl sm:text-3xl lg:text-4xl leading-normal">
              <h1 className="tec-text-outline-blue uppercase break-words font-semibold text-4xl sm:text-7xl lg:text-8xl pt-10 sm:pt-20 pb-6 sm:pb-10">
                Token Engineering Commons
              </h1>
              <p>Sustainable & Ethical Design for Token Ecosystems </p>
              <YellowButton
                text="Build With Us"
                url="https://forum.tecommons.org/"
              />
            </div>
          </div>

          <div className="bg-tec-image-2 bg-no-repeat bg-right-top bg-cover pb-20 sm:pb-32">
            <div className="container max-w-2xl px-10 sm:px-0 sm:flex sm:flex-row sm:mx-auto">
              <div className="text-right sm:w-1/2 sm:pr-16 lg:pr-24">
                <a name="about" />
                <h2 className=" text-lg sm:text-xl lg:text-2xl pb-8 leading-normal">
                  To·ken En·gi·neer·ing{" "}
                  <span className="whitespace-nowrap">/ˈtōkən/</span>{" "}
                  <span className="whitespace-nowrap">/enjəˈniriNG/</span>
                </h2>
              </div>
              <div className="sm:w-1/2  text-sm sm:text-base  leading-normal">
                <Markdown>{attributes.tengineeringBody}</Markdown>
              </div>
            </div>

            <div className="container max-w-2xl px-10 sm:px-0 sm:flex sm:flex-row sm:mx-auto pb-20 sm:pb-32">
              <div className="text-right sm:w-1/2 sm:pr-16 lg:pr-24">
                <h2 className=" text-lg sm:text-xl lg:text-2xl pb-8  leading-normal">
                  Com·mons <span className="whitespace-nowrap">/ˈkämənz/</span>
                </h2>
              </div>
              <div className="sm:w-1/2  text-sm sm:text-base  leading-normal">
                <Markdown>{attributes.commonsBody}</Markdown>
              </div>
            </div>

            <div className="bg-tec-image-3 bg-no-repeat bg-right-top bg-contain">
              <div className="bg-tec-image-4 bg-no-repeat bg-right-top bg-auto">
                <div className="container w-full max-w-xl sm:mx-auto px-10 sm:px-0  text-lg sm:text-xl  leading-normal">
                  <a name="mission" />
                  <h1 className="tec-text-outline-unicorn uppercase break-words font-semibold text-5xl sm:text-8xl pb-6 sm:pb-10">
                    {attributes.missionHeader}
                  </h1>
                  <Markdown>{attributes.missionBody}</Markdown>
                  <YellowButton
                    text="Join The Mission"
                    url="https://forum.tecommons.org/"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-tec-image-5 bg-no-repeat bg-right-top bg-contain pb-20 sm:pb-32">
            <div className="bg-tec-image-6 bg-no-repeat bg-right-top bg-auto pb-20 sm:pb-32">
              <div className="container w-full max-w-3xl sm:mx-auto px-10 sm:px-0  text-2xl sm:text-xl leading-normal text-center">
                <h1 className="tec-text-outline-unicorn uppercase break-words font-semibold text-5xl sm:text-8xl pb-6 sm:pb-10">
                  {attributes.defiHeader}
                </h1>
                <Markdown>{attributes.defiBody}</Markdown>
              </div>
            </div>

            <div className="container max-w-3xl px-10 sm:px-0 sm:flex sm:flex-row sm:mx-auto">
              <div className="sm:text-right sm:w-1/2">
                <h2 className="tec-text-outline-blue break-words font-semibold text-3xl sm:text-5xl pb-6 sm:pb-10">
                  <Markdown>{attributes.radHeader}</Markdown>
                </h2>
              </div>
              <div className="sm:w-1/2  text-base sm:text-lg leading-normal sm:pl-8 lg:pl-16 sm:pr-10 lg:pr-0">
                <Markdown>{attributes.commonsBody}</Markdown>
                <YellowButton
                  text="Build With Us"
                  url="https://forum.tecommons.org/"
                />
              </div>
            </div>
          </div>

          <div className="bg-tec-image-7 bg-no-repeat bg-right-top bg-contain pb-20 sm:pb-32">
            <div className="container w-full sm:max-w-lg lg:max-w-xl px-10 sm:px-0 sm:pl-10 lg:pl-32  text-lg sm:text-xl leading-normal">
              <a name="community" />
              <h1 className="tec-text-outline-unicorn uppercase break-words font-semibold text-4xl sm:text-7xl pb-6 sm:pb-10">
                {attributes.communityHeader}
              </h1>
              <Markdown>{attributes.communityBody}</Markdown>
              <YellowButton
                text="Join The Community"
                url="https://forum.tecommons.org/"
              />
            </div>
          </div>

          <div className="bg-tec-image-8 bg-no-repeat bg-right-top bg-cover">
            <div className=" container w-full sm:max-w-lg lg:max-w-2xl px-10 sm:px-0 sm:pl-10 lg:pl-32  text-lg sm:text-xl leading-normal pb-20 sm:pb-32">
              <a name="ecosystem" />
              <h1 className="tec-text-outline-blue uppercase break-words font-semibold text-4xl sm:text-7xl pb-6 sm:pb-10">
                Ecosystem
              </h1>
              <p>Collaborators – Supporters – Ecosystem – Friends</p>
            </div>

            <Collaborators />

            <div className="px-10 sm:px-0 sm:pl-10 lg:pl-32 pb-20 sm:pb-32">
              <YellowButton
                text="Join The Ecosystem"
                url="https://forum.tecommons.org/"
              />
            </div>
            <Footer />
          </div>
        </div>
      </>
    );
  }
}
