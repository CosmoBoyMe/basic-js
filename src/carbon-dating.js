const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if ((typeof sampleActivity) === 'number') {
    return false
  }

  if((typeof sampleActivity) !== 'string' || isNaN(sampleActivity)) {
    return false
  }

  if(sampleActivity > 15 || sampleActivity < 1) {
    return false
  }

  const activity = Math.log(MODERN_ACTIVITY / sampleActivity);
  const rateReaction = (0.693 / HALF_LIFE_PERIOD);
  const time = activity / rateReaction;
  return Math.ceil(time);
}

module.exports = {
  dateSample
};
