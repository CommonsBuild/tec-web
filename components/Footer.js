import Image from "next/image";

import Discord from "../svg/Discord.svg";
import Discourse from "../svg/Discourse.svg";
import Github from "../svg/Github.svg";
import Medium from "../svg/Medium.svg";
import Youtube from "../svg/Youtube.svg";
import Twitter from "../svg/Twitter.svg";

const Footer = () => {
  return (
    <div className="w-full px-10 pb-10 text-lg leading-normal sm:text-xl sm:pb-20">
      <div className="pb-12 sm:pb-20 sm:pl-8">
        <Image
          className="inline-block"
          src="/images/TEC-Logotype.png"
          width="111"
          height="50"
          alt="TEC"
        />
        <div className="inline-block w-full pt-6 text-sm text-gray-400 sm:w-auto sm:text-base sm:pt-0 sm:pl-14">
          Sustainable & Ethical Design for Token Ecosystems.
        </div>
      </div>
      <div className="grid w-full grid-flow-row grid-cols-3 gap-4 sm:grid-cols-6 sm:max-w-3xl">
        <a
          href="https://discord.gg/VSD3fbCn"
          target="_blank"
          className="text-white hover:text-white"
        >
          <div className="text-sm text-center">
            <Discord className="w-10 pb-2 mx-auto" />
            Discord
          </div>
        </a>
        <a
          href="https://forum.tecommons.org/"
          target="_blank"
          className="text-white hover:text-white"
        >
          <div className="text-sm text-center">
            <Discourse className="w-10 pb-2 mx-auto" />
            Forum
          </div>
        </a>
        <a
          href="https://github.com/TECommons/"
          target="_blank"
          className="text-white hover:text-white"
        >
          <div className="text-sm text-center">
            <Github className="w-10 pb-2 mx-auto" />
            Github
          </div>
        </a>
        <a
          href="https://medium.com/@tecommons"
          target="_blank"
          className="text-white hover:text-white"
        >
          <div className="text-sm text-center">
            <Medium className="w-10 pb-2 mx-auto" />
            Medium
          </div>
        </a>
        <a
          href="https://www.youtube.com/channel/UCagCOhMqMNU29rWx259-tcg/featured"
          target="_blank"
          className="text-white hover:text-white"
        >
          <div className="text-sm text-center">
            <Youtube className="w-10 pb-2 mx-auto" />
            Youtube
          </div>
        </a>
        <a
          href="https://twitter.com/tecmns"
          target="_blank"
          className="text-white hover:text-white"
        >
          <div className="text-sm text-center">
            <Twitter className="w-10 pb-2 mx-auto" />
            Twitter
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
