import istanbul from '@cypress/code-coverage/task';

module.exports = (on, config) => {
  on('task', istanbul);
  return config;
};
