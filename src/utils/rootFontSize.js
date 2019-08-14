/**
 * Created By WebStorm.
 * author jiangshunxin
 * date 2018-12-22
 */
const viewPort = window.innerWidth || window.outerWidth;
let rootFontSize = 12;
if (viewPort <= 1480) rootFontSize = 12;
if (viewPort >= 1481 && viewPort <= 1760) rootFontSize = 14;
if (viewPort >= 1761 && viewPort <= 2240) rootFontSize = 16;
if (viewPort >= 2241 && viewPort <= 3200) rootFontSize = 18;
if (viewPort >= 3201) rootFontSize = 22;
export default rootFontSize;
