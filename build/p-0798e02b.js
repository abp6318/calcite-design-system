/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0-next.9
 */
import{d as _}from"./p-973faa32.js";import"./p-a2b8d6f6.js";import"./p-623bd617.js";import"./p-d2216e3b.js";import"./p-9c138760.js";import"./p-f8ee0d71.js";import"./p-2e1b2031.js";import"./p-3f10228f.js";import"./p-6294fd29.js";import"./p-cbd4dd1e.js";import"./p-dca33159.js";import"./p-2bc2c05a.js";import"./p-0c0a5f97.js";import"./p-4f05830a.js";import"./p-b660b11c.js";import"./p-d2980760.js";import"./p-756d283a.js";import"./p-90c940c9.js";var p={name:"bg",weekdays:"неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),weekdaysShort:"нед_пон_вто_сря_чет_пет_съб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),months:"януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),monthsShort:"янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),weekStart:1,ordinal:function(_){var p=_%100;if(p>10&&p<20)return _+"-ти";var m=_%10;return 1===m?_+"-ви":2===m?_+"-ри":7===m||8===m?_+"-ми":_+"-ти"},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},relativeTime:{future:"след %s",past:"преди %s",s:"няколко секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дена",M:"месец",MM:"%d месеца",y:"година",yy:"%d години"}};_.locale(p,null,!0);export default p;