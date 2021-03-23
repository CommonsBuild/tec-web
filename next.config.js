module.exports = {
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    });
    cfg.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return cfg;
  },
  images: {
    loader: "imgix",
    path: "/",
  },
};
