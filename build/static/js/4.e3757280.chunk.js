(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{137:function(e,t,n){"use strict";var r,o,c,a=n(141),i="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function u(){c=!1}function s(e){if(e){if(e!==r){if(e.length!==i.length)throw new Error("Custom alphabet for shortid must be "+i.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter((function(e,t,n){return t!==n.lastIndexOf(e)}));if(t.length)throw new Error("Custom alphabet for shortid must be "+i.length+" unique characters. These characters were not unique: "+t.join(", "));r=e,u()}}else r!==i&&(r=i,u())}function l(){return c||(c=function(){r||s(i);for(var e,t=r.split(""),n=[],o=a.nextValue();t.length>0;)o=a.nextValue(),e=Math.floor(o*t.length),n.push(t.splice(e,1)[0]);return n.join("")}())}e.exports={get:function(){return r||i},characters:function(e){return s(e),r},seed:function(e){a.seed(e),o!==e&&(u(),o=e)},lookup:function(e){return l()[e]},shuffled:l}},139:function(e,t,n){"use strict";e.exports=n(140)},140:function(e,t,n){"use strict";var r=n(137),o=n(142),c=n(146),a=n(147)||0;function i(){return o(a)}e.exports=i,e.exports.generate=i,e.exports.seed=function(t){return r.seed(t),e.exports},e.exports.worker=function(t){return a=t,e.exports},e.exports.characters=function(e){return void 0!==e&&r.characters(e),r.shuffled()},e.exports.isValid=c},141:function(e,t,n){"use strict";var r=1;e.exports={nextValue:function(){return(r=(9301*r+49297)%233280)/233280},seed:function(e){r=e}}},142:function(e,t,n){"use strict";var r,o,c=n(143);n(137);e.exports=function(e){var t="",n=Math.floor(.001*(Date.now()-1567752802062));return n===o?r++:(r=0,o=n),t+=c(7),t+=c(e),r>0&&(t+=c(r)),t+=c(n)}},143:function(e,t,n){"use strict";var r=n(137),o=n(144),c=n(145);e.exports=function(e){for(var t,n=0,a="";!t;)a+=c(o,r.get(),1),t=e<Math.pow(16,n+1),n++;return a}},144:function(e,t,n){"use strict";var r,o="object"===typeof window&&(window.crypto||window.msCrypto);r=o&&o.getRandomValues?function(e){return o.getRandomValues(new Uint8Array(e))}:function(e){for(var t=[],n=0;n<e;n++)t.push(Math.floor(256*Math.random()));return t},e.exports=r},145:function(e,t){e.exports=function(e,t,n){for(var r=(2<<Math.log(t.length-1)/Math.LN2)-1,o=-~(1.6*r*n/t.length),c="";;)for(var a=e(o),i=o;i--;)if((c+=t[a[i]&r]||"").length===+n)return c}},146:function(e,t,n){"use strict";var r=n(137);e.exports=function(e){return!(!e||"string"!==typeof e||e.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(e)}},147:function(e,t,n){"use strict";e.exports=0},150:function(e,t,n){},151:function(e,t,n){},152:function(e,t,n){},153:function(e,t,n){},154:function(e,t,n){"use strict";var r=n(155);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(156)),c=n(1),a=(0,o.default)((0,c.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=a},155:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},156:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(157)},157:function(e,t,n){"use strict";n.r(t),n.d(t,"capitalize",(function(){return r.a})),n.d(t,"createChainedFunction",(function(){return o})),n.d(t,"createSvgIcon",(function(){return O})),n.d(t,"debounce",(function(){return g})),n.d(t,"deprecatedPropType",(function(){return w})),n.d(t,"isMuiElement",(function(){return S})),n.d(t,"ownerDocument",(function(){return y})),n.d(t,"ownerWindow",(function(){return z})),n.d(t,"requirePropFactory",(function(){return C})),n.d(t,"setRef",(function(){return M})),n.d(t,"unstable_useEnhancedEffect",(function(){return N.a})),n.d(t,"unstable_useId",(function(){return I})),n.d(t,"unsupportedProp",(function(){return R})),n.d(t,"useControlled",(function(){return A})),n.d(t,"useEventCallback",(function(){return _.a})),n.d(t,"useForkRef",(function(){return V.a})),n.d(t,"useIsFocusVisible",(function(){return F.a})),n.d(t,"unstable_ClassNameGenerator",(function(){return P.a}));var r=n(25);var o=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return null==t?e:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];e.apply(this,r),t.apply(this,r)}}),(function(){}))},c=n(5),a=n(0),i=n(17),u=(n(35),n(6)),s=n(132),l=n(36),f=n(28),d=n(121),p=n(133);function h(e){return Object(d.a)("MuiSvgIcon",e)}Object(p.a)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var b=n(1),m=["children","className","color","component","fontSize","htmlColor","titleAccess","viewBox"],v=Object(f.a)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,"inherit"!==n.color&&t["color".concat(Object(r.a)(n.color))],t["fontSize".concat(Object(r.a)(n.fontSize))]]}})((function(e){var t,n,r=e.theme,o=e.ownerState;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:r.transitions.create("fill",{duration:r.transitions.duration.shorter}),fontSize:{inherit:"inherit",small:r.typography.pxToRem(20),medium:r.typography.pxToRem(24),large:r.typography.pxToRem(35)}[o.fontSize],color:null!=(t=null==(n=r.palette[o.color])?void 0:n.main)?t:{action:r.palette.action.active,disabled:r.palette.action.disabled,inherit:void 0}[o.color]}})),j=a.forwardRef((function(e,t){var n=Object(l.a)({props:e,name:"MuiSvgIcon"}),o=n.children,a=n.className,f=n.color,d=void 0===f?"inherit":f,p=n.component,j=void 0===p?"svg":p,x=n.fontSize,O=void 0===x?"medium":x,g=n.htmlColor,w=n.titleAccess,S=n.viewBox,y=void 0===S?"0 0 24 24":S,z=Object(i.a)(n,m),C=Object(c.a)({},n,{color:d,component:j,fontSize:O,viewBox:y}),M=function(e){var t=e.color,n=e.fontSize,o=e.classes,c={root:["root","inherit"!==t&&"color".concat(Object(r.a)(t)),"fontSize".concat(Object(r.a)(n))]};return Object(s.a)(c,h,o)}(C);return Object(b.jsxs)(v,Object(c.a)({as:j,className:Object(u.a)(M.root,a),ownerState:C,focusable:"false",viewBox:y,color:g,"aria-hidden":!w||void 0,role:w?"img":void 0,ref:t},z,{children:[o,w?Object(b.jsx)("title",{children:w}):null]}))}));j.muiName="SvgIcon";var x=j;function O(e,t){var n=function(n,r){return Object(b.jsx)(x,Object(c.a)({"data-testid":"".concat(t,"Icon"),ref:r},n,{children:e}))};return n.muiName=x.muiName,a.memo(a.forwardRef(n))}var g=n(164).a;var w=function(e,t){return function(){return null}};var S=function(e,t){return a.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)},y=n(149).a,z=n(163).a;n(69);var C=function(e,t){return function(){return null}},M=n(58).a,N=n(138),k=n(14),E=0;var I=function(e){var t=a.useState(e),n=Object(k.a)(t,2),r=n[0],o=n[1],c=e||r;return a.useEffect((function(){null==r&&o("mui-".concat(E+=1))}),[r]),c};var R=function(e,t,n,r,o){return null};var A=function(e){var t=e.controlled,n=e.default,r=(e.name,e.state,a.useRef(void 0!==t).current),o=a.useState(n),c=Object(k.a)(o,2),i=c[0],u=c[1];return[r?t:i,a.useCallback((function(e){r||u(e)}),[])]},_=n(45),V=n(53),F=n(59),P=n(76)},166:function(e,t,n){"use strict";n.r(t);var r=n(14),o=n(0),c=n(15),a=n(139),i=n.n(a),u=n(21),s=function(e){return e.contacts.contacts},l=function(e){return e.filter},f=function(e){var t=s(e),n=l(e).toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))},d=n(135),p=n(165),h=(n(150),n(1));var b=function(){var e=Object(o.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1],l=Object(o.useState)(""),f=Object(r.a)(l,2),b=f[0],m=f[1],v=Object(c.b)(),j=Object(c.c)(s),x=function(){a(""),m("")};return Object(h.jsxs)("form",{className:"contact-form",onSubmit:function(e){e.preventDefault();var t={id:i()(),name:n,number:b};j.map((function(e){return e.name})).includes(t.name)?alert("".concat(t.name," is already in contacts")):v(Object(u.a)(t)),x()},children:[Object(h.jsx)(p.a,{className:"input",id:"input-name",type:"text",name:"name",value:n,onChange:function(e){a(e.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",placeholder:"Enter name",required:!0}),Object(h.jsx)(p.a,{className:"input",id:"input-tel",type:"tel",name:"number",value:b,onChange:function(e){m(e.target.value)},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",placeholder:"Enter number",required:!0}),Object(h.jsx)(d.a,{type:"submit",variant:"contained",children:"Add contact"})]})},m=n(60),v=(n(151),function(){var e=Object(c.c)(l),t=Object(c.b)();return Object(h.jsx)("div",{className:"filter-container",children:Object(h.jsx)(p.a,{className:"input",id:"filter",type:"text",name:"filter",value:e,onChange:function(e){return t(Object(m.a)(e.target.value))},placeholder:"Find contacts by name"})})}),j=(n(152),function(e){var t=e.children;return Object(h.jsx)("ul",{className:"contact-list",children:t})}),x=n(71),O=n(154),g=n.n(O),w=(n(153),function(){var e=Object(c.c)(f),t=Object(c.c)((function(e){return e.contacts.isLoading})),n=Object(c.b)();return Object(o.useEffect)((function(){n(Object(u.c)())}),[n]),Object(h.jsxs)(h.Fragment,{children:[t&&Object(h.jsx)(x.a,{}),e.map((function(e){var t=e.id,r=e.name,o=e.number;return Object(h.jsxs)("li",{className:"contact-item",children:[Object(h.jsxs)("p",{children:[r,": ",o]}),Object(h.jsx)(d.a,{type:"button",variant:"outlined",startIcon:Object(h.jsx)(g.a,{}),onClick:function(){return n(Object(u.b)(t))},children:"Delete"})]},t)}))]})});t.default=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"phonebook-wrapper",children:[Object(h.jsx)("div",{className:"contact-form-wrapper",children:Object(h.jsx)(b,{})}),Object(h.jsxs)("div",{className:"contacts-wrapper",children:[Object(h.jsx)("h2",{className:"isHidden",children:"Contacts"}),Object(h.jsx)(v,{}),Object(h.jsx)(j,{children:Object(h.jsx)(w,{})})]})]})})}}}]);
//# sourceMappingURL=4.e3757280.chunk.js.map