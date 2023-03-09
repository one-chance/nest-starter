module.exports = {
  types: [
    { value: 'feat', name: 'feat:\t\tAdding a new feature' },
    { value: 'fix', name: 'fix:\t\tFixing a bug' },
    { value: 'docs', name: 'docs:\t\tModifying documentation' },
    {
      value: 'style',
      name: 'style:\tChanging code style (no feature updates)',
    },
    {
      value: 'refactor',
      name: 'refactor:\tImproving the code structure or organization',
    },
    {
      value: 'remove',
      name: 'remove:\tDeleting unnecessary code or files',
    },
    {
      value: 'test',
      name: 'test:\t\tChanging code related to testing',
    },
    {
      value: 'chore',
      name: 'chore:\tUpdating build tools or Configuring development environments',
    },
  ],
  allowCustomScopes: false,
  allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['breaking', 'footer', 'scope'],
  subjectLimit: 100,
};
