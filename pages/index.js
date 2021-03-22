import Head from "next/head";
import { Component } from "react";
import { attributes, react as HomeContent } from "../content/home.md";
import Nav from "../components/Nav";
import YellowButton from "../components/YellowButton";

export default class Home extends Component {
  render() {
    let { title_mission, section_mission } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <Nav />
        <div className="title-bg">
          <div class="container w-full lg:max-w-5xl lg:mx-auto px-5 sm:px-10">
            <div class="w-full bai-jamjuree text-2xl sm:text-4xl text-white leading-normal">
              <h1 className="titol-head uppercase font-semibold text-5xl sm:text-8xl pt-10 sm:pt-20 pb-5 sm:pb-10">
                Token Engineering Commons
              </h1>
              Sustainable & Ethical Design for Token Ecosystems
              <YellowButton
                text="Build With Us"
                url="https://forum.tecommons.org/"
              />
            </div>
          </div>
          <div class="container w-full lg:max-w-5xl lg:mx-auto px-5 sm:px-10">
            <div class="w-full bai-jamjuree text-2xl sm:text-xl text-white leading-normal">
              <h1 className="titol-groc uppercase font-semibold text-5xl sm:text-8xl pt-10 sm:pt-20 pb-5 sm:pb-10">
                {title_mission}
              </h1>
              {section_mission}
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
