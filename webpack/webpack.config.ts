import path from "path";
import { Configuration } from "webpack";
import { generateConfig } from "./generateConfig";
import { BuildEnv, BuildPaths } from "./types";

export default (env: BuildEnv): Configuration => {
  const defaultPath = [__dirname, ".."];

  const paths: BuildPaths = {
    entry: path.resolve(...defaultPath, "src", "index.tsx"),
    output: path.resolve(...defaultPath, "build"),
    html: path.resolve(...defaultPath, "public", "index.html"),
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
