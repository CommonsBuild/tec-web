import React, { Component } from "react";

import { attributes } from "../content/workgroups.md";

import Footer from "../components/Footer";
import Head from "../components/Head";
import Navigation from "../components/Navigation";
import Workgroup from "../components/Workgroup";

import Markdown from "../components/Markdown";

export default class Index extends Component {
  render() {
    return (
      <>
        <Head
          title="Join the Token Engineering Commons!"
          description="Advancing the field of token engineering in a regenerative way. Stewarding the cultivation of resources to accelerate the creation of robustly engineered models, modular tools, standards and educational opportunities."
        />
        <Navigation />
        <div className="w-full tec-bg-gradient-2">
          <div className="text-center tec-container sm:mx-auto">
            <h1 className="pt-10 pb-6 font-bold uppercase break-words tec-text-outline-blue-2 sm:tec-text-outline-blue-3 text-scale-12 lg:text-8xl sm:pt-20 sm:pb-10 font-bai-jamjuree">
              <span className="whitespace-nowrap">Working</span>{" "}
              <span className="whitespace-nowrap">Groups</span>{" "}
            </h1>
          </div>

          <div className="text-xl text-left text-white px-7 pb-7 tec-container sm:mx-auto font-extralight tec-wg-hero-body lg:text-2xl font-inter">
            <Markdown>{attributes.heroBody}</Markdown>
          </div>

          <div className="grid max-w-md grid-cols-1 gap-5 pb-16 mx-auto lg:gap-x-10 lg:gap-y-10 md:max-w-4xl lg:max-w-5xl md:grid-cols-2">
            {attributes.workgroups.map((wg, key) => (
              <Workgroup wg={wg} key={key} />
            ))}
          </div>

          <Footer />
        </div>
      </>
    );
  }
}
