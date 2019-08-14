/**
 * Created By WebStorm.
 * author jiangshunxin
 * date 2018-12-26
 */
export const initDateStr = function (type = 'month', year = '', month = '', day = '') {
  let date = new Date();
  let currentYearValue = date.getFullYear(); // 当前年
  let currentMonthValue = date.getMonth() + 1; // 当前月
  let currentDayValue = date.getDate(); // 当前日
  let yearValue = year || currentYearValue;
  let monthValue = month || currentMonthValue;
  let dayValue = day || currentDayValue;
  let str = `${yearValue}${monthValue < 10 ? '0' + monthValue : monthValue}`;
  if (type === 'day') str += dayValue < 10 ? '0' + dayValue : dayValue;
  // return str;
  return fixedDate(type);
};

export const fixedDate = function (type = 'month') {
  return type === 'month' ? '201811' : '20181130';
};
