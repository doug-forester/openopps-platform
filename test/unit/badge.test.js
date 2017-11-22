const assert = require('chai').assert;
const Badge = require('../../api/badge/service');

describe('Testing badge service awardForTaskCompletion()', function () {
  var task = { id: 1 };
  var tests = [
    {
      message: 'A user that completed 1 task should be awarded the newcomer badge.',
      method: 'awardForTaskCompletion',
      args: [task, { id: 1, completedTasks: 1 }],
      expected: 'newcomer',
    },
    {
      message: 'A user that completed 3 tasks should be awarded the maker badge.',
      method: 'awardForTaskCompletion',
      args: [task, { id: 1, completedTasks: 3 }],
      expected: 'maker',
    },
    {
      message: 'A user that completed 5 tasks should be awarded the game changer badge.',
      method: 'awardForTaskCompletion',
      args: [task, { id: 1, completedTasks: 5 }],
      expected: 'game changer',
    },
    {
      message: 'A user that completed 10 tasks should be awarded the disruptor badge.',
      method: 'awardForTaskCompletion',
      args: [task, { id: 1, completedTasks: 10 }],
      expected: 'disruptor',
    },
    {
      message: 'A user that completed 15 tasks should be awarded the partner badge.',
      method: 'awardForTaskCompletion',
      args: [task, { id: 1, completedTasks: 15 }],
      expected: 'partner',
    },
    {
      message: 'A user that has completed 2 tasks should not be awarded any badge.',
      method: 'awardForTaskCompletion',
      args: [task, { id: 1, completedTasks: 2 }],
      expected: undefined,
    },
    {
      message: 'A user that has completed 4 tasks should not be awarded any badge.',
      method: 'awardForTaskCompletion',
      args: [task, { id: 1, completedTasks: 4 }],
      expected: undefined,
    },
    {
      message: 'A user that has completed 7 tasks should not be awarded any badge.',
      method: 'awardForTaskCompletion',
      args: [task, { id: 1, completedTasks: 7 }],
      expected: undefined,
    },
    {
      message: 'A user that has completed 12 tasks should not be awarded any badge.',
      method: 'awardForTaskCompletion',
      args: [task, { id: 1, completedTasks: 12 }],
      expected: undefined,
    },
  ];

  tests.forEach(function (test) {
    it(test.message, function () {
      var res = Badge[test.method].apply(null, test.args);
      assert.equal(res ? res.type : res, test.expected);
    });
  });
});
