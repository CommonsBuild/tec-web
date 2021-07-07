import { Component } from "react";
import { useRouter } from "next/router";

// import * as fs from 'fs';

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Head from "../../components/Head";

const Workgroup = (props) => {
  const router = useRouter();
  const { workgroup } = router.query;
  const { title, description } = props.attributes;
  return (
    <>
      <Head
        title="Join the Token Engineering Commons!"
        description="Advancing the field of token engineering in a regenerative way. Stewarding the cultivation of resources to accelerate the creation of robustly engineered models, modular tools, standards and educational opportunities."
      />
      <Navigation />
      <div className="w-full leading-normal text-white bg-right-top bg-no-repeat bg-contain bg-tec-image-7 font-bai-jamjuree">
        <div className="pb-20 tec-body-bg-gradient sm:pb-32 lg:pr-96">
          <div className="max-w-xl text-lg tec-container sm:mx-auto sm:text-xl">
            <h1 className="pt-10 pb-6 font-bold uppercase break-words tec-text-outline-blue-2 sm:tec-text-outline-blue-3 text-scale lg:text-9xl sm:pt-20 sm:pb-10">
              <span className="whitespace-nowrap">{title}</span>{" "}
            </h1>
            {description}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

const path = require("path");
const fs = require("fs");
const fm = require("front-matter");

export const getStaticProps = async (context) => {
  const { workgroup } = context.params;
  const filePath = path.join(
    process.cwd(),
    `./content/workgroups/${workgroup}.md`
  );
  const md = fs.readFileSync(filePath, "utf8");
  const props = fm(md);
  return { props: props };
};

export async function getStaticPaths() {
  const dirPath = path.join(process.cwd(), `./content/workgroups/`);
  const files = fs.readdirSync(dirPath);
  const paths = files.map((file) => {
    return { params: { workgroup: file.slice(0, -3) } };
  });
  return {
    paths: paths,
    fallback: false,
  };
}

export default Workgroup;
