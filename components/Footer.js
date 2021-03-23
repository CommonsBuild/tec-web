import Image from "next/image";

import Discord from "../svg/Discord.svg";
import Discourse from "../svg/Discourse.svg";
import Github from "../svg/Github.svg";
import Medium from "../svg/Medium.svg";
import Youtube from "../svg/Youtube.svg";
import Twitter from "../svg/Twitter.svg";

const Footer = () => {
  return (
    <div className="w-full px-10 text-lg sm:text-xl leading-normal pb-10 sm:pb-20">
      <div className="pb-12 sm:pb-20">
        <Image
          className="inline-block"
          src="/images/TEC-Logotype.png"
          width="111"
          height="50"
          alt="TEC"
        />
        <div className="w-full sm:w-auto inline-block text-sm sm:text-base pt-6 sm:pt-0 sm:pl-14 text-gray-400">
          Sustainable & Ethical Design for Token Ecosystems.
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 max-w-3xl">
        <a
          href="https://discord.gg/VSD3fbCn"
          target="_blank"
          className="text-white hover:text-white"
        >
          <div className="w-16 text-sm text-center">
            <Discord className="w-10 mx-auto pb-2" />
            Discord
          </div>
        </a>
        <a
          href="https://forum.tecommons.org/"
          target="_blank"
          className="text-white hover:text-white"
        >
          <div className="w-16 text-sm text-center">
            <Discourse className="w-10 mx-auto pb-2" />
            Forum
          </div>
        </a>
        <a
          href="https://github.com/TECommons/"
          target="_blank"
          className="text-white hover:text-white"
        >
          <div className="w-16 text-sm text-center">
            <Github className="w-10 mx-auto pb-2" />
            Github
          </div>
        </a>
        <a
          href="https://medium.com/@tecommons"
          target="_blank"
          className="text-white hover:text-white"
        >
          <div className="w-16 text-sm text-center">
            <Medium className="w-10 mx-auto pb-2" />
            Medium
          </div>
        </a>
        <a
          href="https://www.youtube.com/channel/UCagCOhMqMNU29rWx259-tcg/featured"
          target="_blank"
          className="text-white hover:text-white"
        >
          <div className="w-16 text-sm text-center">
            <Youtube className="w-10 mx-auto pb-2" />
            Youtube
          </div>
        </a>
        <a
          href="https://twitter.com/tecmns"
          target="_blank"
          className="text-white hover:text-white"
        >
          <div className="w-16 text-sm text-center">
            <Twitter className="w-10 mx-auto pb-2" />
            Twitter
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
