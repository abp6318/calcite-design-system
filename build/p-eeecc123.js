/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0-next.9
 */
import{d as _}from"./p-973faa32.js";import"./p-a2b8d6f6.js";import"./p-623bd617.js";import"./p-d2216e3b.js";import"./p-9c138760.js";import"./p-f8ee0d71.js";import"./p-2e1b2031.js";import"./p-3f10228f.js";import"./p-6294fd29.js";import"./p-cbd4dd1e.js";import"./p-dca33159.js";import"./p-2bc2c05a.js";import"./p-0c0a5f97.js";import"./p-4f05830a.js";import"./p-b660b11c.js";import"./p-d2980760.js";import"./p-756d283a.js";import"./p-90c940c9.js";var m="січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),p="січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_"),r=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function t(_,m,p){var r,t;return"m"===p?m?"хвилина":"хвилину":"h"===p?m?"година":"годину":_+" "+(r=+_,t={ss:m?"секунда_секунди_секунд":"секунду_секунди_секунд",mm:m?"хвилина_хвилини_хвилин":"хвилину_хвилини_хвилин",hh:m?"година_години_годин":"годину_години_годин",dd:"день_дні_днів",MM:"місяць_місяці_місяців",yy:"рік_роки_років"}[p].split("_"),r%10==1&&r%100!=11?t[0]:r%10>=2&&r%10<=4&&(r%100<10||r%100>=20)?t[1]:t[2])}var s=function(_,t){return r.test(t)?m[_.month()]:p[_.month()]};s.s=p,s.f=m;var o={name:"uk",weekdays:"неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),weekdaysShort:"ндл_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),months:s,monthsShort:"січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),weekStart:1,relativeTime:{future:"за %s",past:"%s тому",s:"декілька секунд",m:t,mm:t,h:t,hh:t,d:"день",dd:t,M:"місяць",MM:t,y:"рік",yy:t},ordinal:function(_){return _},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY р.",LLL:"D MMMM YYYY р., HH:mm",LLLL:"dddd, D MMMM YYYY р., HH:mm"}};_.locale(o,null,!0);export default o;