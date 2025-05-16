const isGithubPages = process.env.GITHUB_PAGES === 'true';

module.exports = {
  output: 'export',
  assetPrefix: isGithubPages ? '/portfolio/' : '',
  basePath: isGithubPages ? '/portfolio' : '',
}
