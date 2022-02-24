import { Component } from "react";

import { attributes } from "../content/join.md";

import Navigation from "../components/Navigation";
import YellowButton from "../components/YellowButton";
import Footer from "../components/Footer";
import Head from "../components/Head";

import Discord from "../svg/Discord.svg";
import Discourse from "../svg/Discourse.svg";
import Github from "../svg/Github.svg";
import Medium from "../svg/Medium.svg";
import Youtube from "../svg/Youtube.svg";
import GoogleCalendar from "../svg/GoogleCalendar.svg";
import Gitbook from "../svg/Gitbook.svg";

export default class Index extends Component {
  render() {
    return (
      <>
        <Head
          title="Join the Token Engineering Commons!"
          description="Advancing the field of token engineering in a regenerative way. Stewarding the cultivation of resources to accelerate the creation of robustly engineered models, modular tools, standards and educational opportunities."
        />
        <Navigation />
        <div className="w-full leading-normal text-white bg-right-top bg-no-repeat bg-contain bg-tec-image-7">
          <div className="pb-20 tec-body-bg-gradient sm:pb-32 lg:pr-96">
            <div className="max-w-xl text-lg tec-container sm:mx-auto sm:text-xl">
              <h1 className="pt-10 pb-6 font-bold uppercase break-words tec-text-outline-blue-2 sm:tec-text-outline-blue-3 text-scale lg:text-9xl sm:pt-20 sm:pb-10">
                <span className="whitespace-nowrap">Join</span>{" "}
                <span className="whitespace-nowrap">The</span>{" "}
                <span className="whitespace-nowrap">Community</span>
              </h1>
              <h2>{attributes.heroSubHeader}</h2>
              <p>{attributes.heroBody}</p>
              <div className="mt-20 text-3xl font-bold uppercase sm:text-5xl tec-text-unicorn font-bai-jamjuree">
                {attributes.orientationHeader}
              </div>
              <div className="pt-6 mb-4 text-lg sm:mb-0 sm:text-xl">
                {attributes.orientationBody}
              </div>
              <YellowButton
                text="Connect and Learn"
                url="https://discord.tecommons.org/"
              />
            </div>
          </div>

          <div className="grid max-w-md grid-cols-1 gap-8 px-8 pb-10 mx-auto text-lg lg:gap-x-44 lg:gap-y-20 sm:max-w-4xl lg:max-w-5xl sm:text-xl sm:pb-28 sm:grid-cols-2">
            <div className="text-sm text-center">
              <Discord className="w-32 mx-auto pb-7 sm:h-48" />
              <div className="text-3xl font-bold uppercase sm:text-5xl tec-text-unicorn font-bai-jamjuree">
                Discord
              </div>
              <div className="pt-6 mb-4 text-lg sm:mb-0 sm:text-xl">
                {attributes.discord}
              </div>
              <div className="flex justify-center">
                <YellowButton
                  text="Join our Discord"
                  url="https://discord.tecommons.org/"
                />
              </div>
            </div>

            <div className="text-sm text-center">
              <Discourse className="w-32 mx-auto pb-7 sm:h-48" />
              <div className="text-3xl font-bold uppercase font-bai-jamjuree sm:text-5xl tec-text-unicorn">
                Forum
              </div>
              <div className="pt-6 mb-4 text-lg sm:mb-0 sm:text-xl">
                {attributes.forum}
              </div>
              <div className="flex justify-center">
                <YellowButton
                  text="Go to the forum"
                  url="https://forum.tecommons.org"
                />
              </div>
            </div>

            <div className="text-sm text-center">
              <Gitbook className="w-32 mx-auto pb-7 sm:h-48" />
              <div className="text-3xl font-bold uppercase font-bai-jamjuree sm:text-5xl tec-text-unicorn">
                Handbook
              </div>
              <div className="pt-6 mb-4 text-lg sm:mb-0 sm:text-xl">
                {attributes.gitbook}
              </div>
              <div className="flex justify-center">
                <YellowButton
                  text="Go to Handbook"
                  url="https://token-engineering-commons.gitbook.io/tec-handbook/"
                />
              </div>
            </div>

            <div className="text-sm text-center">
              <Github className="w-32 mx-auto pb-7 sm:h-48" />
              <div className="text-3xl font-bold uppercase font-bai-jamjuree sm:text-5xl tec-text-unicorn">
                Github
              </div>
              <div className="pt-6 mb-4 text-lg sm:mb-0 sm:text-xl">
                {attributes.github}
              </div>
              <div className="flex justify-center">
                <YellowButton
                  text="Go to Github"
                  url="https://github.com/CommonsBuild"
                />
              </div>
            </div>

            <div className="text-sm text-center">
              <Medium className="w-32 mx-auto pb-7 sm:h-48" />
              <div className="text-3xl font-bold uppercase font-bai-jamjuree sm:text-5xl tec-text-unicorn">
                Medium
              </div>
              <div className="pt-6 mb-4 text-lg sm:mb-0 sm:text-xl">
                {attributes.medium}
              </div>
              <div className="flex justify-center">
                <YellowButton
                  text="Go to Medium"
                  url="https://medium.com/@tecommons"
                />
              </div>
            </div>

            <div className="text-sm text-center">
              <Youtube className="w-32 mx-auto pb-7 sm:h-48" />
              <div className="text-3xl font-bold uppercase font-bai-jamjuree sm:text-5xl tec-text-unicorn">
                Youtube
              </div>
              <div className="pt-6 mb-4 text-lg sm:mb-0 sm:text-xl">
                {attributes.youtube}
              </div>
              <div className="flex justify-center">
                <YellowButton
                  text="Go to YouTube"
                  url="https://www.youtube.com/channel/UCagCOhMqMNU29rWx259-tcg/featured"
                />
              </div>
            </div>
          </div>
          <div className="pb-20 text-sm tec-container">
            <div className="flex flex-wrap justify-center max-w-4xl md:flex-nowrap md:mx-auto md:flex-row">
              <div>
                <GoogleCalendar className="w-32 pb-7 md:w-44" />
              </div>
              <div className="md:pl-16 lg:pl-28">
                <div className="text-3xl font-bold text-center uppercase font-bai-jamjuree md:text-left sm:text-5xl tec-text-unicorn">
                  TEC Calendar Events
                </div>
                <div className="pt-6 mb-4 text-lg text-center sm:mb-0 sm:text-xl md:text-left">
                  {attributes.google}
                </div>
                <div className="flex justify-center md:flex-none md:justify-start">
                  <YellowButton
                    text="Subscribe to our calendar"
                    url="https://calendar.google.com/calendar/embed?src=5mkep1ad1j860k6g7i7fr8plq0%40group.calendar.google.com"
                  />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}
