import { test } from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFileSync } from 'node:fs';
import { parseTheme, themeInitScript } from '../src/components/landing/theme.ts';

test('before-paint preference restoration tolerates invalid and blocked storage', () => {
  for (const value of ['light', 'dark', 'system', null, 'invalid']) {
    const document = { documentElement: { dataset: {} } };
    vm.runInNewContext(themeInitScript, { document, localStorage: { getItem: () => value } });
    assert.equal(document.documentElement.dataset.theme, value === 'light' || value === 'dark' ? value : undefined);
    assert.equal(parseTheme(value), value === 'light' || value === 'dark' ? value : 'system');
  }
  const document = { documentElement: { dataset: {} } };
  vm.runInNewContext(themeInitScript, { document, localStorage: { getItem() { throw new Error('blocked'); } } });
  assert.equal(document.documentElement.dataset.theme, undefined);
});

const luminance = hex => {
  const rgb = hex.match(/\w\w/g).map(v => parseInt(v,16)/255).map(v => v <= .04045 ? v/12.92 : ((v+.055)/1.055)**2.4);
  return rgb[0]*.2126 + rgb[1]*.7152 + rgb[2]*.0722;
};
const contrast = (a,b) => { const x=luminance(a), y=luminance(b); return (Math.max(x,y)+.05)/(Math.min(x,y)+.05); };
test('theme text and accents meet 4.5:1 on their reading surfaces', () => {
  const css=readFileSync(new URL('../app/theme.css',import.meta.url),'utf8');
  for (const selector of [':root {', ':root[data-theme="dark"] {']) {
    const block=css.slice(css.indexOf(selector)).split('}')[0];
    const color=name => block.match(new RegExp(`--${name}: #(\\w{6});`))[1];
    for(const background of ['color-bg','theme-panel','theme-band','jamoko-paper']) {
      for(const text of ['jamoko-text','jamoko-text-dim','jamoko-gold','jamoko-teal']) {
        assert.ok(contrast(color(background),color(text)) >= 4.5, `${selector} ${text} on ${background}`);
      }
    }
  }
  assert.ok(contrast('001821','e5c58b')>=4.5);
  assert.ok(contrast('001821','1ac7a4')>=4.5);
});
