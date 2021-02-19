import storeLocalHistory from './LocalHistory';

// register all plugins
const plugin = (on: (task: string, config: unknown) => void): void => {
  on('task', {
    storeLocalHistory,
  });
};

export default plugin;
