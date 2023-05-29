import path from "path";
import { Configuration } from "webpack";
import { generateConfig } from "./generateConfig";
import { BuildEnv, BuildPaths } from "./types";

export default (env: BuildEnv): Configuration => {

  const paths: BuildPaths = {
    context: path.resolve(__dirname, '..'),
    entry: path.resolve( "src", "index.tsx"),
    output: path.resolve("build"),
    html: path.resolve( "public", "index.html"),
    src: path.resolve("src")
  };

  const mode = env.mode ?? "development";
  const isDev = mode === "development";
  const port = env.port ?? 3000;

  const config: Configuration = generateConfig({
    mode,
    paths,
    isDev,
    port,
  });
  return config;
};
