import Image from "next/image";

import Discord from "../svg/Discord.svg";
import Discourse from "../svg/Discourse.svg";
import Github from "../svg/Github.svg";
import Medium from "../svg/Medium.svg";
import Youtube from "../svg/Youtube.svg";
import Twitter from "../svg/Twitter.svg";
import Gitbook from "../svg/Gitbook.svg";

import LogoText from "../svg/TEC-Logo-Text-Light.svg";

import NewsletterForm from "./NewsletterForm";

const Footer = () => {
  return (
    <div className="px-2 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8 sm:py-6 lg:py-8">
      <div className="pb-12 pl-4 ">
        <LogoText className="inline-block w-28" />
        <div className="inline-block w-full pt-6 text-sm text-gray-400 sm:w-auto sm:text-base sm:pt-0 sm:pl-14 sm:align-bottom">
          Sustainable & Ethical Design for Token Ecosystems.
        </div>
      </div>
      <div className="md:flex md:items-center md:justify-between">
        <div className="grid w-full grid-flow-row grid-cols-3 gap-4 pb-10 lg:grid-cols-7 md:max-w-xl md:pt-7 md:pr-10 md:pb-0">
          <a
            href="https://discord.tecommons.org/"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-white"
          >
            <div className="text-sm text-center">
              <Discord className="w-10 h-12 pb-2 mx-auto" />
              Discord
            </div>
          </a>
          <a
            href="https://forum.tecommons.org/"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-white"
          >
            <div className="text-sm text-center">
              <Discourse className="w-10 h-12 pb-2 mx-auto" />
              Forum
            </div>
          </a>
          <a
            href="https://github.com/CommonsBuild"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-white"
          >
            <div className="text-sm text-center">
              <Github className="w-10 h-12 pb-2 mx-auto" />
              Github
            </div>
          </a>
          <a
            href="https://medium.com/token-engineering-commons"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-white"
          >
            <div className="text-sm text-center">
              <Medium className="w-10 h-12 pb-2 mx-auto" />
              Medium
            </div>
          </a>
          <a
            href="https://www.youtube.com/channel/UCagCOhMqMNU29rWx259-tcg/featured"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-white"
          >
            <div className="text-sm text-center">
              <Youtube className="w-10 h-12 pb-2 mx-auto" />
              Youtube
            </div>
          </a>
          <a
            href="https://twitter.com/tecmns"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-white"
          >
            <div className="text-sm text-center">
              <Twitter className="w-10 h-12 pb-2 mx-auto" />
              Twitter
            </div>
          </a>
          <a
            href="https://token-engineering-commons.gitbook.io"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-white"
          >
            <div className="text-sm text-center">
              <Gitbook className="w-10 h-12 pb-2 mx-auto" />
              Handbook
            </div>
          </a>
        </div>
        <NewsletterForm />
      </div>
    </div>
  );
};

export default Footer;
