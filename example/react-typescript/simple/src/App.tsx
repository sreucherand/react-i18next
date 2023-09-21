import './i18n/config';
import i18next from 'i18next';

function App() {

  const result1 = i18next.t('arrayJoin', { joinArrays: '+' });
  // -> "line1+line2+line3"

  const result2 = i18next.t('arrayJoinWithInterpolation', { myVar: 'interpolate', joinArrays: ' ' });
  // -> "you can interpolate"

  const result3 = i18next.t('arrayOfObjects.0.name');
  // -> "tom"

  return null
}

export default App;
