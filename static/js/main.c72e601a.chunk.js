(this["webpackJsonpshack-chose"]=this["webpackJsonpshack-chose"]||[]).push([[0],{38:function(t,n,e){"use strict";e.r(n);var r,c,i=e(0),o=e.n(i),a=e(17),s=e.n(a),l=e(3),u=e(7),d=e(4),h=e(2),j={colors:{background:"rgb(0, 18, 26)",mainText:"rgb(233, 242, 192)",mainTextContrast:"rgb(0, 18, 26)",primary:"rgb(41, 102, 163)",primaryDark:"rgb(33, 88, 143)",primaryPale:"rgb(42, 158, 221)",secondary:"rgb(255, 166, 0)",secondaryPale:"rgb(255, 191, 73)",ternary:"rgb(255, 91, 85)",ternaryPale:"rgb(253, 189, 181)"}},b=e(22),m=e(15),p=e(1),x=Object(h.c)(u.b)(r||(r=Object(l.a)(["\n    ","\n    color: ",";\n    text-decoration: none;\n    cursor: pointer;\n"])),(function(t){var n=t.p;return n.scale&&"transform: scale(".concat(n.scale,");")}),(function(t){return t.theme.colors.mainText})),g=function(t){return Object(p.jsxs)(x,{p:t,to:"/",children:[Object(p.jsx)("h2",{children:"shack chose"}),Object(p.jsxs)("p",{children:["atelier boutique ",Object(p.jsx)("b",{children:"\xe9ph\xe9m\xe8re"})]})]})};!function(t){t[t.Mobile=700]="Mobile",t[t.Desktop=2048]="Desktop"}(c||(c={}));var O,f,v,y,k,w=(O=c.Mobile,"@media screen and (max-width: ".concat(O.valueOf(),"px)"));var D,T,L,C,P,I,q,E,J,F,M,R=[{name:"no\xebl",url:"/noel"},{name:"projet",url:"/projet"},{name:"artistes",url:"/artistes"},{name:"contact",url:"/contact"}],U=function(){var t,n,e=Object(i.useState)(!1),r=Object(b.a)(e,2),c=r[0],o=r[1],a=function(){return o(!1)},s=Object(i.useRef)(null);return t=s,n=a,Object(i.useEffect)((function(){var e=function(e){var r;e.target instanceof Element&&!(null===t||void 0===t||null===(r=t.current)||void 0===r?void 0:r.contains(e.target))&&n()};return document.addEventListener("click",e,!0),function(){document.removeEventListener("click",e,!0)}})),Object(p.jsxs)(z,{children:[Object(p.jsx)(g,{}),Object(p.jsx)(S,{ref:s,menuOpened:c,children:R.map((function(t,n){return Object(p.jsx)("li",{children:Object(p.jsx)(B,{to:t.url,onClick:a,children:t.name})},n)}))}),Object(p.jsx)(G,{onClick:function(){return o(!c)},children:c?Object(p.jsx)(m.a,{}):Object(p.jsx)(m.b,{})})]})},z=h.c.nav(f||(f=Object(l.a)(["\n    background: linear-gradient(90deg, "," 0%, "," 100%);\n    height: ","px;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 1.2rem;\n\tpadding: 15px 15px;\n"])),(function(t){return t.theme.colors.primary}),(function(t){return t.theme.colors.primaryPale}),90),S=h.c.ul(v||(v=Object(l.a)(["\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\tlist-style: none;\n\n\tli {\n\t\ttext-align: center;\n\t}\n\n\t"," {\n        width: 33%;\n        left: -33%;\n\n        position: absolute;\n        top: ","px;\n        height: calc(50% - ","px);\n        flex-direction: column;\n        justify-content: space-around;\n\t\tgap: 20px;\n        background-color: ",";\n\n        transition: transform 0.5s ease;\n\t\ttransform: translateX(",");\n\t}\n"])),w,90,90,(function(t){return t.theme.colors.primaryDark}),(function(t){return t.menuOpened?"100%":"0%"})),B=Object(h.c)(u.b)(y||(y=Object(l.a)(["\n    text-decoration: none;\n    color: ",";\n    padding: 0.5rem 1rem;\n\n\t:hover, :active {\n\t\tcursor: pointer;\n\t\tbackground-color: ",";\n\t\tborder-radius: 4px;\n\t}\n\n\t"," {\n\t\theight: auto;\n\t\ttext-align: center;\n\n\t\t:hover, :active{\n\t\t\tbackground-color: ",";\n\t\t}\n\t}\n"])),(function(t){return t.theme.colors.mainText}),(function(t){return t.theme.colors.primaryDark}),w,(function(t){return t.theme.colors.primaryPale})),G=h.c.div(k||(k=Object(l.a)(["\n    display: none;\n\n\t"," {\n        display: block;\n\t\ttransform: scale(1.3);\n\t\tpadding: 10px;\n\t\tcolor: ",";\n\n\t\t:hover, :active {\n\t\t\tcolor: ",";\n\t\t\tcursor: pointer;\n\t\t}\n\t}\n"])),w,(function(t){return t.theme.colors.mainTextContrast}),(function(t){return t.theme.colors.mainText})),H=[{surname:"Sylvie",name:"Jodoin",shortDescr:"Lorem Ipsum Dolor",longDescr:"",pictureUrl:"https://picsum.photos/id/1006/200/300",galleryRoute:"/artist/chantale"},{surname:"Chantale",name:"Desjardins",shortDescr:"Lorem Ipsum Dolor",longDescr:"",pictureUrl:"https://picsum.photos/id/1005/200/300",galleryRoute:"/artist/chantale"},{surname:"Isabelle",name:"",shortDescr:"Lorem Ipsum Dolor",longDescr:"",pictureUrl:"https://picsum.photos/id/1011/200/300",galleryRoute:"/artist/isabelle"}],Q=h.c.ul(D||(D=Object(l.a)(["\n\tdisplay: flex;\n\tjustify-content: space-around;\n\tflex-wrap: wrap;\n"]))),V=h.c.li(T||(T=Object(l.a)(["\n\tpadding: 20px 20px;\n\tlist-style: none;\n\n\t:hover {\n\t\ttransform: scale(0.98);\n\t\tcursor: pointer;\n\t}\n\n\t// Link\n\ta {\n\t\ttext-decoration: none;\n\t\tcolor: ",";\n\t}\n\n\timg {\n\t\tborder-radius: 15px;\n\t}\n\n\th2 {\n\t\tpadding: 5px 5px;\n\t}\n"])),(function(t){return t.theme.colors.mainText})),X=function(){return Object(p.jsx)(Q,{children:H.map((function(t,n){return Object(p.jsx)(V,{children:Object(p.jsxs)(u.b,{to:t.galleryRoute,children:[Object(p.jsx)("img",{src:t.pictureUrl,alt:"".concat(t.surname," ").concat(t.name)}),Object(p.jsx)("h2",{children:t.surname}),Object(p.jsx)("p",{children:t.shortDescr})]})})}))})},A=h.c.div(L||(L=Object(l.a)(["\n\twidth: 100%;\n\theight: 100%;\n\ttext-align: center;\n\tcolor: ",";\n"])),(function(t){return t.theme.colors.mainText})),K=h.c.img(C||(C=Object(l.a)(["\n    overflow: hidden;\n\twidth: 100%;\n\tmax-height: 200px;\n"]))),N=h.c.h1(P||(P=Object(l.a)(["\n\tfont-size: 3em;\n\tpadding: 10px 10px;\n"]))),W=h.c.p(I||(I=Object(l.a)(["\n\tmargin: 20px 12%;\n"]))),Y=function(t){return Object(p.jsxs)(A,{children:[Object(p.jsx)(K,{src:"https://picsum.photos/id/10/1024/300"}),Object(p.jsxs)("section",{children:[Object(p.jsx)(N,{children:"Lorem Ipsum"}),Object(p.jsx)(W,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]}),Object(p.jsx)(X,{})]})},Z=h.c.div(q||(q=Object(l.a)(["\n\twidth: 100%;\n\theight: 100%;\n"]))),$=function(t){return Object(p.jsx)(Z,{children:Object(p.jsx)("p",{children:"this is a test"})})},_=h.c.footer(E||(E=Object(l.a)(["\n\tbackground-color: ",";\n    color: ",";\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tmargin-top: 30px;\n    padding: 20px 20px;\n"])),(function(t){return t.theme.colors.primaryDark}),(function(t){return t.theme.colors.mainText})),tt=function(t){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(_,{children:[Object(p.jsx)(g,{scale:.7}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:"Gevrai Jodoin-Tremblay"}),Object(p.jsx)("div",{children:"Joel Jr. Vanier"}),Object(p.jsx)("div",{children:"\xa9 2021"})]})]})})};var nt=h.c.div(J||(J=Object(l.a)(["\n  display: flex;\n  flex-flow: column;\n  min-height: 100%;\n  width: 100%;\n"]))),et=h.c.div(F||(F=Object(l.a)(["\n    width: 100%;\n    flex: 1; // take remaining vertical space in page\n"]))),rt=Object(h.b)(M||(M=Object(l.a)(["\n\n  * {\n    box-sizing: border-box;\n    min-width: 0;\n    min-height: 0;\n    margin: 0;\n    padding: 0;\n    font-family: 'Quicksand', sans-serif;\n  }\n\n  // HTML root\n  :root {\n    background-color: ",";\n    height: 100%;\n    width: 100%;\n  }\n\n  // Page root (react)\n  #root {\n    height: 100%;\n    width: 100%;\n  }\n\n  body {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    height: 100%;\n    width: 100%;\n  }\n"])),(function(t){return t.theme.colors.background})),ct=function(){return Object(p.jsxs)(h.a,{theme:j,children:[Object(p.jsx)(rt,{theme:j}),Object(p.jsx)(u.a,{children:Object(p.jsxs)(nt,{children:[Object(p.jsx)(U,{}),Object(p.jsx)(et,{children:Object(p.jsxs)(d.c,{children:[Object(p.jsxs)(d.a,{exact:!0,path:"/",children:[" ",Object(p.jsx)(Y,{})," "]}),Object(p.jsx)(d.a,{path:"/noel",children:"  "}),Object(p.jsx)(d.a,{path:"/projet",children:"  "}),Object(p.jsx)(d.a,{path:"/artistes",children:"  "}),Object(p.jsxs)(d.a,{path:"/contact",children:[" ",Object(p.jsx)($,{})," "]})]})}),Object(p.jsx)(tt,{})]})})]})},it=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,39)).then((function(n){var e=n.getCLS,r=n.getFID,c=n.getFCP,i=n.getLCP,o=n.getTTFB;e(t),r(t),c(t),i(t),o(t)}))};s.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(ct,{})}),document.getElementById("root")),it()}},[[38,1,2]]]);
//# sourceMappingURL=main.c72e601a.chunk.js.map