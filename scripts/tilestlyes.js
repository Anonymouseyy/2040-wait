// Automatically add style object to html to automatically create ranges of colors
const rangeEnds = [10, 100, 500, 1000, 2048];
const styles = ['background: #eee4da;', 'color: #f9f6f2; background: #f67c5f;', 'color: #f9f6f2; background: #edcc61; box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.31746), inset 0 0 0 1px rgba(255, 255, 255, 0.19048); font-size: 45px;',
'color: #f9f6f2; background: #edc53f; box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.47619), inset 0 0 0 1px rgba(255, 255, 255, 0.28571); font-size: 35px;', 'color: #f9f6f2; background: #edc22e; box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.55556), inset 0 0 0 1px rgba(255, 255, 255, 0.33333); font-size: 35px;'];

let lastRangeEnd = 0;
const styleEl = document.createElement('style');
for (let i = 0; i < rangeEnds.length; i++) {
  for (let j = lastRangeEnd + 1; j < rangeEnds[i]; j++) {
    styleEl.innerHTML += '.tile.tile-' + j + ' .tile-inner,';
  }
  styleEl.innerHTML += '.tile.tile-' + rangeEnds[i] + ' .tile-inner{' + styles[i] + '}';
  lastRangeEnd = rangeEnds[i];
}
document.querySelector('head').append(styleEl);