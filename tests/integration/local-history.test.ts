import path from 'path';
import fs from 'fs';
import rimraf from 'rimraf';
import executeCypress from './execute-cypress';

const historyDir = path.resolve(__dirname, 'local-history', '.history');
const disabledHistoryDir = path.resolve(__dirname, 'local-history-disabled', '.history');

describe('local history', () => {
  beforeEach(() => {
    if (fs.existsSync(historyDir)) {
      rimraf.sync(historyDir);
    }
  });

  it('stores a history file for a test run', async () => {
    expect(fs.existsSync(historyDir)).toEqual(false);

    // execute cypress in the subdirectory
    await executeCypress('local-history', 'run --quiet');

    expect(fs.existsSync(historyDir)).toEqual(true);

    const historyFiles = fs.readdirSync(historyDir);

    expect(historyFiles).toHaveLength(2);

    const groupsFound = { 'A.+': false, 'B.+': false };

    historyFiles.forEach((file) => {
      const history = JSON.parse(fs.readFileSync(path.resolve(historyDir, file)).toString());
      groupsFound[history.testResults[0].group as 'A.+' | 'B.+'] = true;

      expect(typeof history.time).toEqual('number');
      expect(history.testResults).toStrictEqual([
        {
          group: history.testResults[0].group,
          points: 1,
          maxPoints: 2,
          strategy: 'add',
          manualCheck: false,
          tests: [
            {
              name: 'Foo',
              points: 1,
              maxPoints: 1,
              successful: true,
              required: false,
              manualCheck: false,
            },
            {
              name: 'Bar',
              points: 0,
              maxPoints: 1,
              successful: false,
              required: false,
              manualCheck: false,
            },
          ],
        },
      ]);
    });

    expect(groupsFound['A.+']).toEqual(true);
    expect(groupsFound['B.+']).toEqual(true);
  }, 60000);

  it('is disabled by default', async () => {
    expect(fs.existsSync(disabledHistoryDir)).toEqual(false);

    // execute cypress in the subdirectory
    await executeCypress('local-history-disabled', 'run --quiet');

    expect(fs.existsSync(disabledHistoryDir)).toEqual(false);
  }, 60000);
});
