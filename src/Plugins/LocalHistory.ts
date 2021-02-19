import fs from 'fs';
import path from 'path';
import uniqid from 'uniqid';
import TaskConfig from '@skills17/task-config';
import { TestRun } from '@skills17/test-result';

/**
 * Store a test run in a history file
 */
export const storeTestRun = (config: TaskConfig, testRun: TestRun): void => {
  const historyDir = path.resolve(config.getProjectRoot(), '.history');
  const historyFile = path.resolve(historyDir, `${uniqid()}.json`);

  // create history dir if it doesn't exist
  if (!fs.existsSync(historyDir)) {
    fs.mkdirSync(historyDir);
  }

  // write history file
  fs.writeFileSync(
    historyFile,
    JSON.stringify(
      { time: Math.round(new Date().getTime() / 1000), ...testRun.toJSON() },
      undefined,
      2,
    ),
  );
};

/**
 * Record a test run and store it in a history file
 */
export default function storeLocalHistory(testInfo: [string, string, boolean, boolean][]): null {
  // load task config
  const config = new TaskConfig();
  config.loadFromFileSync();
  const testRun = config.createTestRun();

  // exit if local history is disabled
  if (!config.isLocalHistoryEnabled()) {
    return null;
  }

  // record test run
  testInfo.forEach((test) => {
    testRun.recordTest(...test);
  });

  storeTestRun(config, testRun);

  return null;
}
