module.exports = {
  branches: ['master', 'release'],
  npmPublish: false,
  // We're initiating the release from
  // our local machine.
  ci: false,
  plugins: [
    // Analyzes commit messages and
    // determines the version
    '@semantic-release/commit-analyzer',
    // Builds release notes from commit messages
    '@semantic-release/release-notes-generator',
    // Updates the version
    '@semantic-release/npm',
    'semantic-release-react-native',
    [
      // Commits, tags, and pushes
      '@semantic-release/git',
      {
        assets: [
          'ios/**/Info.plist',
          'ios/**/*.pbxproj',
          'android/app/build.gradle',
          'package.json',
        ],
        message:
          'chore(release): ${nextRelease.version} \n\n${nextRelease.notes}',
      },
    ],
    // Creates the release on GitHub
    // and posts release notes
    '@semantic-release/github',
  ],
};
