import { test } from 'node:test';
import assert from 'node:assert/strict';
import { topics, evaluate, summary, choices } from '../src/components/landing/kompass/model.ts';

for (const topic of topics) {
  test(`${topic.id}: reliable / irrelevant / unknown answers`, () => {
    assert.equal(evaluate(topic, Array(5).fill('yes')).kind, 'good');
    assert.equal(evaluate(topic, Array(5).fill('na')).kind, 'irrelevant');
    assert.equal(evaluate(topic, Array(5).fill('unknown')).kind, 'clarify');
    assert.throws(() => evaluate(topic, ['yes']));
    assert.throws(() => evaluate(topic, Array(5).fill('invalid')));
  });
  test(`${topic.id}: all 3125 answer combinations produce bounded, explained results`, () => {
    for (let n=0; n<3125; n++) {
      let x=n;
      const answers = Array.from({length:5}, () => {const a=choices[x%5].value; x=Math.floor(x/5); return a;});
      const result=evaluate(topic, answers);
      assert.ok(result.title && result.reason);
      assert.ok(result.steps.length>=1 && result.steps.length<=3);
      assert.ok(!summary(topic,answers,result).includes('undefined'));
      if (result.kind==='good') assert.ok(answers.every(a=>a==='yes'||a==='na'));
    }
  });
}
test('no enquiries means clarify acquisition before CRM', () => {
  const result=evaluate(topics.find(t=>t.id==='anfragen'), ['no','no','no','no','no']);
  assert.match(result.title,/Anfragen/);
  assert.doesNotMatch(result.metric,/Angebotsquote|Dashboard|geteilt durch/);
  assert.ok(!result.steps.join(' ').includes('Status'));
});
test('KPI source unknown does not produce a dashboard recommendation', () => {
  const result=evaluate(topics.find(t=>t.id==='kennzahlen'), ['yes','unknown','no','no','no']);
  assert.equal(result.kind,'clarify');
  assert.doesNotMatch(result.metric,/Angebotsquote|Dashboard|geteilt durch/);
});
test('recovery precedes file convenience', () => {
  const result=evaluate(topics[0], ['no','no','yes','no','yes']);
  assert.match(result.steps[0],/Sicherung/);
});

test('access issue checks permissions in result and export, not search time', () => {
  const answers = ['yes','yes','no','yes','unknown'];
  const result = evaluate(topics[0], answers);
  assert.match(result.metric, /sehen und bearbeiten/);
  assert.doesNotMatch(result.metric, /Suchzeit/);
  assert.ok(summary(topics[0], answers, result).includes(result.metric));
});
test('each isolated gap has a check tied to its recommended first step', () => {
  for (const topic of topics) {
    for (const [i, question] of topic.questions.entries()) {
      for (const value of ['no','partly','unknown']) {
        const answers = Array(5).fill('yes'); answers[i] = value;
        const result = evaluate(topic, answers);
        assert.equal(result.steps[0], question.action);
        assert.equal(result.metric, question.check);
        assert.ok(question.check.length > 20);
      }
    }
  }
});
