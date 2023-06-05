import path from 'path';
import webpack, { RuleSetRule } from 'webpack'

export default ({config}: {config: webpack.Configuration}) => {
  config.resolve?.modules?.push(path.resolve(__dirname, '..', 'src')) 
  config.resolve?.extensions?.push('.ts', '.tsx')
  config.module?.rules?.push({
    test: /\.s[ac]ss$/i,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: /\.module\.scss$/,
            localIdentName:'[path][name]__[local]--[hash:base64:5]'
              
          }
        }
      },
      'sass-loader'
    ]
  })
  config.plugins?.push(new webpack.DefinePlugin({ IS_DEV: true }))
  //@ts-expect-error
  config.module!.rules = config.module?.rules?.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return {...rule, exclude: /\.svg$/}
    }
    return rule
  }) 
  config.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack']
  })
  return config
}