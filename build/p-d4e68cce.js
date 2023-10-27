/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0-next.9
 */
import{d as _}from"./p-973faa32.js";import"./p-a2b8d6f6.js";import"./p-623bd617.js";import"./p-d2216e3b.js";import"./p-9c138760.js";import"./p-f8ee0d71.js";import"./p-2e1b2031.js";import"./p-3f10228f.js";import"./p-6294fd29.js";import"./p-cbd4dd1e.js";import"./p-dca33159.js";import"./p-2bc2c05a.js";import"./p-0c0a5f97.js";import"./p-4f05830a.js";import"./p-b660b11c.js";import"./p-d2980760.js";import"./p-756d283a.js";import"./p-90c940c9.js";var r="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),t="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),m="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),p="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),o=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function s(_,r,t){var m,p;return"m"===t?r?"минута":"минуту":_+" "+(m=+_,p={mm:r?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"}[t].split("_"),m%10==1&&m%100!=11?p[0]:m%10>=2&&m%10<=4&&(m%100<10||m%100>=20)?p[1]:p[2])}var i=function(_,m){return o.test(m)?r[_.month()]:t[_.month()]};i.s=t,i.f=r;var e=function(_,r){return o.test(r)?m[_.month()]:p[_.month()]};e.s=p,e.f=m;var d={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:i,monthsShort:e,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:s,mm:s,h:"час",hh:s,d:"день",dd:s,M:"месяц",MM:s,y:"год",yy:s},ordinal:function(_){return _},meridiem:function(_){return _<4?"ночи":_<12?"утра":_<17?"дня":"вечера"}};_.locale(d,null,!0);export default d;