/**
 * 数字千分位
 */
export const formatterThousands = (value) => {
  if (value === undefined) return;
  if (typeof value !== 'string') {
    value = value.toString();
  }
  value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  return value;
};
export const toThousands = (value) => {
  if (typeof value === 'undefined' || value === null || value === '') {
    return '';
  } else if (typeof value !== 'Number') {
    value = parseFloat(value);
    let num = Math.round(parseFloat(value));
    value = num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
  }
  return value;
};

// 取两位小数 四舍五入
export const toDecimal = (x) => {
  var f = parseInt(x);
  if (isNaN(f)) {
    return false;
  }
  var f = Math.round(x * 100) / 100;
  let s = f.toString();
  let rs = s.indexOf('.');
  if (rs < 0) {
    rs = s.length;
    s += '.';
  }
  while (s.length <= rs + 2) {
    s += '0';
  }
  return s;
}

/**
 * 取一位小数 四舍五入
 */
export const toDecimal2 = (x) => {
  let num = Math.round(x * 10) / 10;
  if (num.toString().indexOf('.') < 0) {
    num = num.toString() + '.0';
  }
  return num;
}
