import { Component } from "react";

import { attributes } from "../content/home.md";

import Navigation from "../components/Navigation";
import YellowButton from "../components/YellowButton";
import Markdown from "../components/Markdown";
import Footer from "../components/Footer";
import Collaborators from "../components/Collaborators";
import Head from "../components/Head";

export default class Index extends Component {
  render() {
    return (
      <>
        <Head
          title="Token Engineering Commons – Sustainable & Ethical Design for Token Ecosystems"
          description="Advancing the field of token engineering in a regenerative way. Stewarding the cultivation of resources to accelerate the creation of robustly engineered models, modular tools, standards and educational opportunities."
        />
        <Navigation />
        <div className="w-full leading-normal text-white tec-bg-gradient-2 font-bai-jamjuree">
          <div className="pb-20 bg-right-top bg-no-repeat bg-contain bg-tec-image-1 sm:pb-32">
            <div className="text-xl tec-container sm:text-3xl lg:text-4xl">
              <h1 className="pt-10 pb-6 font-bold uppercase break-words tec-text-outline-blue-2 sm:tec-text-outline-blue-3 text-scale lg:text-9xl sm:pt-20 sm:pb-10">
                <span className="whitespace-nowrap">Token</span>{" "}
                <span className="whitespace-nowrap">Engineering</span>{" "}
                <span className="whitespace-nowrap">Commons</span>
              </h1>
              <p>Sustainable & Ethical Design for Token Ecosystems </p>
              <YellowButton text="Build With Us" url="/join" />
            </div>
          </div>

          <div className="pb-20 bg-right-top bg-no-repeat bg-cover bg-tec-image-2 sm:pb-32">
            <div className="max-w-2xl tec-container sm:flex sm:flex-row sm:mx-auto">
              <div className="text-right sm:w-1/2 sm:pr-16 lg:pr-24">
                <a name="about" />
                <h2 className="pb-8 text-lg sm:text-xl lg:text-2xl">
                  To·ken En·gi·neer·ing{" "}
                  <span className="whitespace-nowrap">/ˈtōkən/</span>{" "}
                  <span className="whitespace-nowrap">/enjəˈniriNG/</span>
                </h2>
              </div>
              <div className="text-sm sm:w-1/2 sm:text-base">
                <Markdown>{attributes.tengineeringBody}</Markdown>
              </div>
            </div>

            <div className="max-w-2xl pb-20 tec-container sm:flex sm:flex-row sm:mx-auto sm:pb-32">
              <div className="text-right sm:w-1/2 sm:pr-16 lg:pr-24">
                <h2 className="pb-8 text-lg sm:text-xl lg:text-2xl">
                  Com·mons <span className="whitespace-nowrap">/ˈkämənz/</span>
                </h2>
              </div>
              <div className="text-sm sm:w-1/2 sm:text-base">
                <Markdown>{attributes.commonsBody}</Markdown>
              </div>
            </div>

            <div className="bg-right-top bg-no-repeat bg-contain bg-tec-image-3">
              <div className="bg-right-top bg-no-repeat bg-auto bg-tec-image-4">
                <div className="max-w-xl text-lg tec-container sm:mx-auto sm:text-xl">
                  <a name="mission" />
                  <h1 className="pb-6 text-5xl font-semibold uppercase break-words tec-text-outline-unicorn-2 sm:tec-text-outline-unicorn-4 sm:text-8xl sm:pb-10">
                    {attributes.missionHeader}
                  </h1>
                  <Markdown>{attributes.missionBody}</Markdown>
                  <YellowButton text="Join The Mission" url="/join" />
                </div>
              </div>
            </div>
          </div>

          <div className="pb-20 bg-right-top bg-no-repeat bg-contain bg-tec-image-5 sm:pb-32">
            <div className="pb-20 bg-right-top bg-no-repeat bg-auto bg-tec-image-6 sm:pb-32">
              <div className="max-w-3xl text-2xl text-center tec-container sm:mx-auto sm:text-xl">
                <h1 className="pb-6 text-5xl font-semibold uppercase break-words tec-text-outline-unicorn-2 sm:tec-text-outline-unicorn-4 sm:text-8xl sm:pb-10">
                  {attributes.defiHeader}
                </h1>
                <Markdown>{attributes.defiBody}</Markdown>
              </div>
            </div>

            <div className="max-w-3xl tec-container sm:flex sm:flex-row sm:mx-auto">
              <div className="sm:text-right sm:w-1/2">
                <h2 className="pb-6 text-3xl font-semibold break-words tec-text-outline-blue-1 sm:tec-text-outline-blue-2 sm:text-5xl sm:pb-10">
                  <Markdown>{attributes.radHeader}</Markdown>
                </h2>
              </div>
              <div className="text-base sm:w-1/2 sm:text-lg sm:pl-8 lg:pl-16 sm:pr-10 lg:pr-0">
                <Markdown>{attributes.commonsBody}</Markdown>
                <YellowButton text="Build With Us" url="/join" />
              </div>
            </div>
          </div>

          <div className="pb-20 bg-right-top bg-no-repeat bg-contain bg-tec-image-7 sm:pb-32">
            <div className="max-w-xl text-lg tec-container sm:mx-auto sm:text-xl lg:pr-32">
              <a name="community" />
              <h1 className="pb-6 text-4xl font-semibold uppercase break-words tec-text-outline-unicorn-2 sm:tec-text-outline-unicorn-4 sm:text-7xl sm:pb-10">
                {attributes.communityHeader}
              </h1>
              <Markdown>{attributes.communityBody}</Markdown>
              <YellowButton text="Join The Community" url="/join" />
            </div>
          </div>

          <div className="bg-right-top bg-no-repeat bg-cover bg-tec-image-8">
            <div className="pb-20 text-lg tec-container lg:pr-72 sm:text-xl sm:pb-24 lg:max-w-4xl">
              <a name="ecosystem" />
              <h1 className="pb-6 text-4xl font-semibold uppercase break-words tec-text-outline-blue-1 sm:tec-text-outline-blue-2 sm:text-7xl sm:pb-10">
                Ecosystem
              </h1>
              <p>Collaborators – Supporters – Ecosystem – Friends</p>
            </div>

            <Collaborators />

            <div className="pb-20 tec-container lg:max-w-4xl">
              <YellowButton text="Join The Ecosystem" url="/join" />
            </div>
            <Footer />
          </div>
        </div>
      </>
    );
  }
}
