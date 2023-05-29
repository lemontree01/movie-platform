import { generateDevServer } from "./generateDevServer";
import { generateLoaders } from "./generateLoaders";
import { generatePlugins } from "./generatePlugins";
import { generateResolvers } from "./generateResolvers";
import { BuildOptions } from "./types";
import webpack from "webpack";

export function generateConfig(options: BuildOptions): webpack.Configuration {
  const { paths, mode, isDev } = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.output,
      clean: true,
    },
    plugins: generatePlugins(options),
    module: {
      rules: generateLoaders(options),
    },
    resolve: generateResolvers(),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? generateDevServer(options) : undefined,
  };
}
