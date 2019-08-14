const colorData = {
  type0: [
    '#FFA200',
    '#FFCD00',
    '#ff6600',
    '#104BA9'
  ],
  type1: [
    '#FF6600',
    '#FF8533',
    '#FF9A55',
    '#FFB583',
    '#FCBE00',
    '#FFCD34',
    '#FFE299',
    '#007ED7',
    '#00C0FF',
    '#75DDFF',
    '#B5FFFE'
  ],
  type2: [
    '#FF6600',
    '#FF8939',
    '#FFB07B',
    '#FFC69F',
    '#FFD7C7',
    '#FFEDE9',

    '#EFA500',
    '#FFB806',
    '#FFDA00',
    '#FFFB5F',
    '#FFF6A6',
    '#FFFAD7',

    '#006BD6',
    '#007ED7',
    '#00A1F2',
    '#1FCAFF',
    '#55E7FF',
    '#85F9FF',
    '#C5FFFF',
    '#FFFFFF'
  ],
  type3: [
    '#E6E6E6',
    '#ff6600',
    '#FFC69F',
    '#EFA500',
    '#FFF6A6',
    '#104BA9',
    '#C5FFFF'
  ]
};

// 返回_系统共用图表颜色
const getEchartsColor = (type) => {
  let colorArray = [];
  if (type) {
    colorArray = colorData[type];
  } else {
    colorArray = colorData.type1;
  }
  return colorArray;
};

export {
  getEchartsColor
};
