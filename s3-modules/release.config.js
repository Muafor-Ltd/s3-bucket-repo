module.exports = {
    branches: "main",
    repositoryUrl: "https://github.com/Muafor-Ltd/s3-bucket-repo.git",
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      '@semantic-release/git',
      '@semantic-release/github']
 }