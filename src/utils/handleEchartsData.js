/**
 * 主要处理饼状图数据
 * @param data 数据源
 * @param name 字段名
 * @param value 数值
 * @param nameJ 第二个name名称
 */
const handlePie = (data, name, value, nameJ) => {
  let handleEchartData = {};
  let seriesDataArray = [];
  let legendDataArray = [];
  if (data && data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      let obj = {};
      obj.value = data[i][value];
      obj.name = data[i][name];
      if (nameJ) {
        obj.nameJ = data[i][nameJ];
      }
      seriesDataArray.push(obj);
      legendDataArray.push(data[i][name]);
    }
  }
  handleEchartData.seriesData = seriesDataArray;
  handleEchartData.legendData = legendDataArray;
  return handleEchartData;
};
/**
 * 处理x轴数据
 * @param data 数据源
 * @param name name文本名称
 * @param isSubstr 是否截取name文本名称的前四位
 * @returns {Array} 返回的数组
 */
const handleAxis = (data, name, isSubstr = false) => {
  let axisDataArray = [];
  if (data && data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      if (isSubstr) {
        let currentValue = data[i][name].substr(0, 4);
        // let currentValue = data[i][name];
        axisDataArray.push(currentValue);
      } else {
        axisDataArray.push(data[i][name]);
      }
    }
  }
  return axisDataArray;
};
/**
 * 图表数据处理
 * @param data 字段名
 * @param value 数值
 * @param name name文本名称
 * @param nameT
 */
const handleEchartsData = (data, value, name, nameT) => {
  let handleEchartData = {};
  let seriesDataArray = [];
  let legendDataArray = [];
  if (data && data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      let obj = {};
      if (nameT) {
        obj.nameT = data[i][nameT];
      }
      obj.value = data[i][value];
      obj.name = data[i][name];
      seriesDataArray.push(obj);
      legendDataArray.push(data[i][name]);
    }
  }
  handleEchartData.seriesData = seriesDataArray;
  handleEchartData.legendData = legendDataArray;
  return handleEchartData;
};

export {
  handlePie,
  handleAxis,
  handleEchartsData
};
