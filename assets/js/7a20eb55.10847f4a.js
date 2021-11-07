"use strict";(self.webpackChunkkooku_log=self.webpackChunkkooku_log||[]).push([[909],{3905:function(e,t,n){n.d(t,{Zo:function(){return k},kt:function(){return s}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},k=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),m=p(n),s=a,d=m["".concat(c,".").concat(s)]||m[s]||u[s]||i;return n?r.createElement(d,l(l({ref:t},k),{},{components:n})):r.createElement(d,l({ref:t},k))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7210:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return k},toc:function(){return u},default:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={slug:"react-fiber",title:"React fiber & reconciliation",date:new Date("2021-04-04T00:00:00.000Z"),cover:"../images/react-fiber-cover.jpeg",tags:["react"]},c="React reconciliation",p={permalink:"/blog/react-fiber",editUrl:"https://github.com/kooku0/kooku0.github.io/edit/main/blog/react-fiber.md",source:"@site/blog/react-fiber.md",title:"React fiber & reconciliation",description:'Reconciliation\uc740 React\uc758 "\ube44\uad50(diffing)" \uc54c\uace0\ub9ac\uc998\uc785\ub2c8\ub2e4. \uc774 \ube44\uad50 \uc54c\uace0\ub9ac\uc998 \ub355\ubd84\uc5d0 \ucef4\ud3ec\ub10c\ud2b8\uc758 \uac31\uc2e0\uc774 \uc608\uce21 \uac00\ub2a5\ud574\uc9c0\uba74\uc11c\ub3c4 \uace0\uc131\ub2a5 \uc571\uc774\ub77c\uace0 \ubd88\ub7ec\ub3c4 \uc190\uc0c9\uc5c6\uc744 \ub9cc\ud07c \ucda9\ubd84\ud788 \ube60\ub978 \uc571\uc744 \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4',date:"2021-04-04T00:00:00.000Z",formattedDate:"2021\ub144 4\uc6d4 4\uc77c",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:12.485,truncated:!0,authors:[],prevItem:{title:"Resource Priority",permalink:"/blog/resource-priority"},nextItem:{title:"Third-party JavaScript performance",permalink:"/blog/third-party-javascript-performance-with-script-async-defer"}},k={authorsImageUrls:[]},u=[{value:"React rendering logic",id:"react-rendering-logic",children:[],level:3},{value:"Overview",id:"overview",children:[],level:2},{value:"\ube44\uad50 \uc54c\uace0\ub9ac\uc998 (Diffing Algorithm)",id:"\ube44\uad50-\uc54c\uace0\ub9ac\uc998-diffing-algorithm",children:[{value:"\uc5d8\ub9ac\uba3c\ud2b8\uc758 \ud0c0\uc785\uc774 \ub2e4\ub978 \uacbd\uc6b0",id:"\uc5d8\ub9ac\uba3c\ud2b8\uc758-\ud0c0\uc785\uc774-\ub2e4\ub978-\uacbd\uc6b0",children:[],level:3},{value:"DOM \uc5d8\ub9ac\uba3c\ud2b8\uc758 \ud0c0\uc785\uc774 \uac19\uc740 \uacbd\uc6b0",id:"dom-\uc5d8\ub9ac\uba3c\ud2b8\uc758-\ud0c0\uc785\uc774-\uac19\uc740-\uacbd\uc6b0",children:[],level:3}],level:2},{value:"\uc790\uc2dd\uc5d0 \ub300\ud55c \uc7ac\uadc0\uc801 \ucc98\ub9ac",id:"\uc790\uc2dd\uc5d0-\ub300\ud55c-\uc7ac\uadc0\uc801-\ucc98\ub9ac",children:[{value:"Keys",id:"keys",children:[],level:3}],level:2},{value:"What is fiber?",id:"what-is-fiber",children:[],level:2},{value:"Incremental rendering",id:"incremental-rendering",children:[],level:2},{value:"Phase 1 (render / reconciliation)",id:"phase-1-render--reconciliation",children:[],level:2},{value:"Phase 2 (commit)",id:"phase-2-commit",children:[],level:2},{value:"Reference",id:"reference",children:[],level:2}],m={toc:u};function s(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'Reconciliation\uc740 React\uc758 "\ube44\uad50(diffing)" \uc54c\uace0\ub9ac\uc998\uc785\ub2c8\ub2e4. \uc774 \ube44\uad50 \uc54c\uace0\ub9ac\uc998 \ub355\ubd84\uc5d0 \ucef4\ud3ec\ub10c\ud2b8\uc758 \uac31\uc2e0\uc774 \uc608\uce21 \uac00\ub2a5\ud574\uc9c0\uba74\uc11c\ub3c4 \uace0\uc131\ub2a5 \uc571\uc774\ub77c\uace0 \ubd88\ub7ec\ub3c4 \uc190\uc0c9\uc5c6\uc744 \ub9cc\ud07c \ucda9\ubd84\ud788 \ube60\ub978 \uc571\uc744 \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4'),(0,i.kt)("h3",{id:"react-rendering-logic"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/kooku0/kooku-s-log/blob/main/content/blog/react/react-reconciliation-%26-fiber.md#react-rendering-logic"}),"React rendering logic"),(0,i.kt)("p",null,"\ub9ac\uc561\ud2b8 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ud654\uba74\uc5d0 \ub80c\ub354\ub9c1 \ub418\ub294 \uacfc\uc815\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\ub9ac\uc561\ud2b8\uc758 JSX\uac00\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"React.createElement"),"\ub85c \ubc14\ubca8\uc5d0 \uc758\ud574 \ud2b8\ub79c\uc2a4\ud30c\uc77c\ub9c1\ub428"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"React.createElement"),"\ud568\uc218 \ud638\ucd9c\uc5d0 \uc758\ud574 \ub9ac\uc561\ud2b8 \uc5d8\ub9ac\uba3c\ud2b8 \ud2b8\ub9ac\uac00 \ubc18\ud658\ub428"),(0,i.kt)("li",{parentName:"ol"},"React\uc758\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"reconciliation"),"\xa0\uc54c\uace0\ub9ac\uc998\uc5d0 \uc758\ud574 \ub9ac\uc561\ud2b8 \uc5d8\ub9ac\uba3c\ud2b8 \ud2b8\ub9ac\ub97c \uc7ac\uadc0\uc801\uc73c\ub85c \uc21c\ud68c\ud558\uba74\uc11c \uc774\uc804 \ud2b8\ub9ac\uc640 \ud604\uc7ac \ud2b8\ub9ac\uc758 \ubcc0\uacbd\uc0ac\ud56d\uc744 \ube44\uad50\ud55c\ub2e4\uc74c \ubcc0\uacbd\ub41c \ubd80\ubd84\ub9cc \uc2e4\uc81c DOM\uc5d0 \ubc18\uc601\ud568 (Virtual-DOM)")),(0,i.kt)("h2",{id:"overview"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/kooku0/kooku-s-log/blob/main/content/blog/react/react-reconciliation-%26-fiber.md#overview"}),"Overview"),(0,i.kt)("p",null,'React\ub97c \uc0ac\uc6a9\ud558\ub2e4 \ubcf4\uba74, "',(0,i.kt)("inlineCode",{parentName:"p"},"render()"),'\xa0\ud568\uc218\ub294 React \uc5d8\ub9ac\uba3c\ud2b8 \ud2b8\ub9ac\ub97c \ub9cc\ub4dc\ub294 \uac83\uc774\ub2e4." \ub77c\uace0 \uc0dd\uac01\uc774 \ub4dc\ub294 \uc21c\uac04\uc774 \uc788\uc2b5\ub2c8\ub2e4. state\ub098 props\uac00 \uac31\uc2e0\ub418\uba74\xa0',(0,i.kt)("inlineCode",{parentName:"p"},"render()"),"\ud568\uc218\ub294 \uc0c8\ub85c\uc6b4 React \uc5d8\ub9ac\uba3c\ud2b8 \ud2b8\ub9ac\ub97c \ubc18\ud658\ud558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \uc774\ub54c React\ub294 \ubc29\uae08 \ubc18\ud658\ub41c \ud2b8\ub9ac\uc5d0 \ub9de\uac8c \uac00\uc7a5 \ud6a8\uacfc\uc801\uc73c\ub85c UI\ub97c \uac31\uc2e0\ud558\ub294 \ubc29\ubc95\uc744 \uc54c\uc544\uc57c\ud560 \ud544\uc694\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ud558\ub098\uc758 \ud2b8\ub9ac\ub97c \uac00\uc9c0\uace0 \ub2e4\ub978 \ud2b8\ub9ac\ub85c \ubcc0\ud658\ud558\uae30 \uc704\ud55c \ucd5c\uc18c\ud55c\uc758 \uc5f0\uc0b0 \uc218\ub97c \uad6c\ud558\ub294 \uc54c\uace0\ub9ac\uc998 \ubb38\uc81c\ub97c \ud480\uae30 \uc704\ud55c \uc77c\ubc18\uc801\uc778 \ud574\uacb0\ucc45\ub4e4\uc740 n\uac1c\uc758 \uc5d8\ub9ac\uba3c\ud2b8\uac00 \uc788\ub294 \ud2b8\ub9ac\uc5d0 \ub300\ud574 O(n^3)\uc758 \ubcf5\uc7a1\ub3c4\ub97c \uac00\uc9d1\ub2c8\ub2e4."),(0,i.kt)("p",null,"React\uc5d0 \uc774 \uc54c\uace0\ub9ac\uc998\uc744 \uc801\uc6a9\ud55c\ub2e4\uba74, 1000\uac1c\uc758 \uc5d8\ub9ac\uba3c\ud2b8\ub97c \uadf8\ub9ac\uae30 \uc704\ud574 10\uc5b5 \ubc88\uc758 \ube44\uad50 \uc5f0\uc0b0\uc744 \uc218\ud589\ud574\uc57c\ud569\ub2c8\ub2e4. \uc774\ub97c \ub300\uccb4\ud558\uae30 \uc704\ud574 React\ub294 \ub450 \uac00\uc9c0 \uac00\uc815\uc744 \uae30\ubc18\ud558\uc5ec O(n) \ubcf5\uc7a1\ub3c4\uc758 \ud734\ub9ac\uc2a4\ud2f1 \uc54c\uace0\ub9ac\uc998\uc744 \uad6c\ud604\ud588\uc2b5\ub2c8\ub2e4."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\uc11c\ub85c \ub2e4\ub978 \ud0c0\uc785\uc758 \ub450 \uc5d8\ub9ac\uba3c\ud2b8\ub294 \uc11c\ub85c \ub2e4\ub978 \ud2b8\ub9ac\ub97c \ub9cc\ub4e4\uc5b4\ub0b8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},"\uac1c\ubc1c\uc790\uac00\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"key"),"\xa0prop\uc744 \ud1b5\ud574, \uc5ec\ub7ec \ub80c\ub354\ub9c1 \uc0ac\uc774\uc5d0\uc11c \uc5b4\ub5a4 \uc790\uc2dd \uc5d8\ub9ac\uba3c\ud2b8\uac00 \ubcc0\uacbd\ub418\uc9c0 \uc54a\uc544\uc57c \ud560\uc9c0 \ud45c\uc2dc\ud574 \uc904 \uc218 \uc788\ub2e4.")),(0,i.kt)("p",null,"\uc2e4\uc81c\ub85c \uac70\uc758 \ubaa8\ub4e0 \uc0ac\uc6a9 \uc0ac\ub840\uc5d0\uc11c \uc774 \uac00\uc815\ub4e4\uc740 \ub4e4\uc5b4\ub9de\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"\ube44\uad50-\uc54c\uace0\ub9ac\uc998-diffing-algorithm"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/kooku0/kooku-s-log/blob/main/content/blog/react/react-reconciliation-%26-fiber.md#%EB%B9%84%EA%B5%90-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-diffing-algorithm"}),"\ube44\uad50 \uc54c\uace0\ub9ac\uc998 (Diffing Algorithm)"),(0,i.kt)("p",null,"\ub450 \uac1c\uc758 \ud2b8\ub9ac\ub97c \ube44\uad50\ud560 \ub54c, React\ub294 \ub450 \uc5d8\ub9ac\uba3c\ud2b8\uc758 \ub8e8\ud2b8(root) \uc5d8\ub9bc\uba3c\ud2b8\ubd80\ud130 \ube44\uad50\ud569\ub2c8\ub2e4. \uc774\ud6c4\uc758 \ub3d9\uc791\uc740 \ub8e8\ud2b8 \uc5d8\ub9ac\uba3c\ud2b8 \ud0c0\uc785\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc9d1\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"\uc5d8\ub9ac\uba3c\ud2b8\uc758-\ud0c0\uc785\uc774-\ub2e4\ub978-\uacbd\uc6b0"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/kooku0/kooku-s-log/blob/main/content/blog/react/react-reconciliation-%26-fiber.md#%EC%97%98%EB%A6%AC%EB%A8%BC%ED%8A%B8%EC%9D%98-%ED%83%80%EC%9E%85%EC%9D%B4-%EB%8B%A4%EB%A5%B8-%EA%B2%BD%EC%9A%B0"}),"\uc5d8\ub9ac\uba3c\ud2b8\uc758 \ud0c0\uc785\uc774 \ub2e4\ub978 \uacbd\uc6b0"),(0,i.kt)("p",null,"\ub450 \ub8e8\ud2b8 \uc5d8\ub9ac\uba3c\ud2b8\uc758 \ud0c0\uc785\uc774 \ub2e4\ub974\uba74, React\ub294 \uc774\uc804 \ud2b8\ub9ac\ub97c \ubc84\ub9ac\uace0 \uc644\uc804\ud788 \uc0c8\ub85c\uc6b4 \ud2b8\ub9ac\ub97c \uad6c\ucd95\ud569\ub2c8\ub2e4.\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"<a>"),"\xa0\uc5d0\uc11c\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"<img>"),"\ub85c \ubc14\ub00c\ub294 \ub4f1 \ud2b8\ub9ac \uc804\uccb4\ub97c \uc7ac\uad6c\ucd95\ud558\ub294 \uacbd\uc6b0\uc785\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ud2b8\ub9ac\ub97c \ubc84\ub9b4 \ub54c \uc774\uc804 DOM \ub178\ub4dc\ub4e4\uc740 \ubaa8\ub450 \ud30c\uad34\ub429\ub2c8\ub2e4. \ucef4\ud3ec\ub10c\ud2b8 \uc778\uc2a4\ud134\uc2a4\ub294\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"componentWillUnmount()"),"\uac00 \uc2e4\ud589\ub429\ub2c8\ub2e4. \uc0c8\ub85c\uc6b4 \ud2b8\ub9ac\uac00 \ub9cc\ub4e4\uc5b4 \uc9c8 \ub54c, \uc0c8\ub85c\uc6b4 DOM \ub178\ub4dc\ub4e4\uc774 DOM\uc5d0 \uc0bd\uc785\ub429\ub2c8\ub2e4. \uadf8\uc5d0 \ub530\ub77c \ucef4\ud3ec\ub10c\ud2b8 \uc778\uc2a4\ud134\uc2a4\ub294\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"componentDidWillMount()"),"\uac00 \uc2e4\ud589\ub429\ub2c8\ub2e4. \uc774\uc804 \ud2b8\ub9ac\uc640 \uc5f0\uad00\ub41c \ubaa8\ub4e0 state\ub294 \uc0ac\ub77c\uc9d1\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ub8e8\ud2b8 \uc5d8\ub9ac\uba3c\ud2b8 \uc544\ub798\uc758 \ubaa8\ub4e0 \ucef4\ud3ec\ub10c\ud2b8\ub3c4 \uc5b8\ub9c8\uc6b4\ud2b8\ub418\uace0 \uadf8 state\ub3c4 \uc0ac\ub77c\uc9d1\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \uc544\ub798\uc640 \uac19\uc740 \ube44\uad50\uac00 \uc77c\uc5b4\ub098\uba74,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<div>\n  <Counter />\n</div>\n\n<span>\n  <Counter />\n</span>\n")),(0,i.kt)("p",null,"\uc774\uc804\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Counter"),"\ub294 \uc0ac\ub77c\uc9c0\uace0, \uc0c8\ub85c \ub2e4\uc2dc \ub9c8\uc6b4\ud2b8\uac00 \ub420 \uac83\uc785\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"dom-\uc5d8\ub9ac\uba3c\ud2b8\uc758-\ud0c0\uc785\uc774-\uac19\uc740-\uacbd\uc6b0"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/kooku0/kooku-s-log/blob/main/content/blog/react/react-reconciliation-%26-fiber.md#dom-%EC%97%98%EB%A6%AC%EB%A8%BC%ED%8A%B8%EC%9D%98-%ED%83%80%EC%9E%85%EC%9D%B4-%EA%B0%99%EC%9D%80-%EA%B2%BD%EC%9A%B0"}),"DOM \uc5d8\ub9ac\uba3c\ud2b8\uc758 \ud0c0\uc785\uc774 \uac19\uc740 \uacbd\uc6b0"),(0,i.kt)("p",null,"\uac19\uc740 \ud0c0\uc785\uc758 \ub450 React DOM \uc5d8\ub9ac\uba3c\ud2b8\ub97c \ube44\uad50\ud560 \ub54c, React\ub294 \ub450 \uc5d8\ub9ac\uba3c\ud2b8\uc758 \uc18d\uc131\uc744 \ud655\uc778\ud558\uc5ec, \ub3d9\uc77c\ud55c \ub0b4\uc5ed\uc740 \uc720\uc9c0\ud558\uace0 \ubcc0\uacbd\ub41c \uc18d\uc131\ub4e4\ub9cc \uac31\uc2e0\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div className="before" title="stuff" />\n\n<div className="after" title="stuff" />\n')),(0,i.kt)("p",null,"\uc774 \ub450 \uc5d8\ub9ac\uba3c\ud2b8\ub97c \ube44\uad50\ud558\uba74, React\ub294 \ud604\uc7ac DOM \ub178\ub4dc \uc0c1\uc5d0\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"className"),"\ub9cc \uc218\uc815\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"style"),"\uc774 \uac31\uc2e0\ub420 \ub54c, React\ub294 \ub610\ud55c \ubcc0\uacbd\ub41c \uc18d\uc131\ub9cc\uc744 \uac31\uc2e0\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<div style={{color: 'red', fontWeight: 'bold'}} />\n\n<div style={{color: 'green', fontWeight: 'bold'}} />\n")),(0,i.kt)("p",null,"\uc704 \ub450 \uc5d8\ub9ac\uba3c\ud2b8 \uc0ac\uc774\uc5d0\uc11c \ubcc0\uacbd\ub420 \ub54c,\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"fontWeight"),"\ub294 \uc218\uc815\ud558\uc9c0 \uc54a\uace0\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"color"),"\uc18d\uc131 \ub9cc\uc744 \uc218\uc815\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"DOM \ub178\ub4dc\uc758 \ucc98\ub9ac\uac00 \ub05d\ub098\uba74, React\ub294 \uc774\uc5b4\uc11c \ud574\ub2f9 \ub178\ub4dc\uc758 \uc790\uc2dd\ub4e4\uc744 \uc7ac\uadc0\uc801\uc73c\ub85c \ucc98\ub9ac\ud569\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"\uc790\uc2dd\uc5d0-\ub300\ud55c-\uc7ac\uadc0\uc801-\ucc98\ub9ac"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/kooku0/kooku-s-log/blob/main/content/blog/react/react-reconciliation-%26-fiber.md#%EC%9E%90%EC%8B%9D%EC%97%90-%EB%8C%80%ED%95%9C-%EC%9E%AC%EA%B7%80%EC%A0%81-%EC%B2%98%EB%A6%AC"}),"\uc790\uc2dd\uc5d0 \ub300\ud55c \uc7ac\uadc0\uc801 \ucc98\ub9ac"),(0,i.kt)("p",null,"DOM \ub178\ub4dc\uc758 \uc790\uc2dd\ub4e4\uc744 \uc7ac\uadc0\uc801\uc73c\ub85c \ucc98\ub9ac\ud560 \ub54c, React\ub294 \uae30\ubcf8\uc801\uc73c\ub85c \ub3d9\uc2dc\uc5d0 \ub450 \ub9ac\uc2a4\ud2b8\ub97c \uc21c\ud68c\ud558\uace0 \ucc28\uc774\uc810\uc774 \uc788\uc73c\uba74 \ubcc0\uacbd\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4, \uc790\uc2dd\uc758 \ub05d\uc5d0 \uc5d8\ub9ac\uba3c\ud2b8\ub97c \ucd94\uac00\ud558\uba74, \ub450 \ud2b8\ub9ac \uc0ac\uc774\uc758 \ubcc0\uacbd\uc740 \uc798 \uc791\ub3d9\ud560 \uac83\uc785\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<ul>\n  <li>first</li>\n  <li>second</li>\n</ul>\n\n<ul>\n  <li>first</li>\n  <li>second</li>\n  <li>third</li>\n</ul>\n")),(0,i.kt)("p",null,"React\ub294 \ub450 \ud2b8\ub9ac\uc5d0\uc11c\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"<li>first</li>"),"\uac00 \uc77c\uce58\ud558\ub294 \uac83\uc744 \ud655\uc778\ud558\uace0,\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"<li>second</li>"),"\uac00 \uc77c\uce58\ud558\ub294 \uac83\uc744 \ud655\uc778\ud569\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \ub9c8\uc9c0\ub9c9\uc73c\ub85c\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"<li>third</li>"),"\ub97c \ud2b8\ub9ac\uc5d0 \ucd94\uac00\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ud558\uc9c0\ub9cc \uc704\uc640 \uac19\uc774 \ub2e8\uc21c\ud558\uac8c \uad6c\ud604\ud558\uba74, \ud2b8\ub9ac\uc758 \ub9e8 \uc55e\uc5d0 \uc5d8\ub9ac\uba3c\ud2b8\ub97c \ucd94\uac00\ud558\ub294 \uacbd\uc6b0 \uc131\ub2a5\uc774 \uc88b\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \uc544\ub798\uc758 \ub450 \ud2b8\ub9ac \ubcc0\ud658\uc740 \ud615\ud3b8\uc5c6\uc774 \uc791\ub3d9\ud569\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<ul>\n  <li>Duke</li>\n  <li>Villanova</li>\n</ul>\n\n<ul>\n  <li>Connecticut</li>\n  <li>Duke</li>\n  <li>Villanova</li>\n</ul>\n")),(0,i.kt)("p",null,"React\ub294\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"<li>Duke</li>"),"\uc640\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"<li>Villanova</li>"),"\xa0\uc885\uc18d \ud2b8\ub9ac\ub97c \uadf8\ub300\ub85c \uc720\uc9c0\ud558\ub294 \ub300\uc2e0 \ubaa8\ub4e0 \uc790\uc2dd\uc744 \ubcc0\uacbd\ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ube44\ud6a8\uc728\uc740 \ubb38\uc81c\uac00 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"keys"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/kooku0/kooku-s-log/blob/main/content/blog/react/react-reconciliation-%26-fiber.md#keys"}),"Keys"),(0,i.kt)("p",null,"\uc774\ub7ec\ud55c \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574, React\ub294\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"key"),"\xa0\uc18d\uc131\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4. \uc790\uc2dd\ub4e4\uc774 key\ub97c \uac00\uc9c0\uace0 \uc788\ub2e4\uba74, React\ub294 key\ub97c \ud1b5\ud574 \uae30\uc874 \ud2b8\ub9ac\uc640 \uc774\ud6c4 \ud2b8\ub9ac\uc758 \uc790\uc2dd\ub4e4\uc774 \uc77c\uce58\ud558\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \uc704 \ube44\ud6a8\uc728\uc801\uc778 \uc608\uc2dc\uc5d0\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"key"),"\ub97c \ucd94\uac00\ud558\uc5ec \ud2b8\ub9ac\uc758 \ubcc0\ud658 \uc791\uc5c5\uc774 \ud6a8\uc728\uc801\uc73c\ub85c \uc218\ud589\ub418\ub3c4\ub85d \uc218\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<ul>\n  <li key="2015">Duke</li>\n  <li key="2016">Villanova</li>\n</ul>\n\n<ul>\n  <li key="2014">Connecticut</li>\n  <li key="2015">Duke</li>\n  <li key="2016">Villanova</li>\n</ul>\n')),(0,i.kt)("p",null,"\uc774\ub97c \uc704\ud574 \ub370\uc774\ud130 \uad6c\uc870\uc5d0 ID\ub77c\ub294 \uc18d\uc131\uc744 \ucd94\uac00\ud574\uc8fc\uac70\ub098 \ub370\uc774\ud130 \uc77c\ubd80\uc5d0 \ud574\uc2dc\ub97c \uc801\uc6a9\ud574\uc11c key\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud574\ub2f9 key\ub294 \uc624\ub85c\uc9c0 \ud615\uc81c \uc0ac\uc774\uc5d0\uc11c\ub9cc \uc720\uc77c\ud558\uba74 \ub418\uace0, \uc804\uc5ed\uc5d0\uc11c \uc720\uc77c\ud560 \ud544\uc694\ub294 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ucd5c\ud6c4\uc758 \uc218\ub2e8\uc73c\ub85c \ubc30\uc5f4\uc758 \uc778\ub371\uc2a4\ub97c key\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub9cc\uc57d \ud56d\ubaa9\ub4e4\uc774 \uc7ac\ubc30\uc5f4\ub418\uc9c0 \uc54a\ub294\ub2e4\uba74 \uc774 \ubc29\ubc95\ub3c4 \uc798 \ub3d9\uc791\ud560 \uac83\uc774\uc9c0\ub9cc, \uc7ac\ubc30\uc5f4\ub418\ub294 \uacbd\uc6b0 \ube44\ud6a8\uc728\uc801\uc73c\ub85c \ub3d9\uc791\ud560 \uac83\uc785\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc778\ub371\uc2a4\ub97c key\ub85c \uc0ac\uc6a9 \uc911 \ubc30\uc5f4\uc774 \uc7ac\ubc30\uc5f4\ub418\uba74 \ucef4\ud3ec\ub10c\ud2b8\uc758 state\uc640 \uad00\ub828\ub41c \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ucef4\ud3ec\ub10c\ud2b8 \uc778\uc2a4\ud134\uc2a4\ub294 key\ub97c \uae30\ubc18\uc73c\ub85c \uac31\uc2e0\ub418\uace0 \uc7ac\uc0ac\uc6a9\ub429\ub2c8\ub2e4. \uc778\ub371\uc2a4\ub97c key\ub85c \uc0ac\uc6a9\ud558\uba74, \ud56d\ubaa9\uc758 \uc21c\uc11c\uac00 \ubc14\ub00c\uc5c8\uc744 \ub54c key \ub610\ud55c \ubc14\ub014 \uac83\uc785\ub2c8\ub2e4. \uadf8 \uacb0\uacfc\ub85c, \ucef4\ud3ec\ub10c\ud2b8\uc758 state\uac00 \uc5c9\ub9dd\uc774 \ub418\uac70\ub098 \uc758\ub3c4\ud558\uc9c0 \uc54a\uc740 \ubc29\uc2dd\uc73c\ub85c \ubc14\ub014 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h1",{id:"react-fiber"},(0,i.kt)("a",{parentName:"h1",href:"https://github.com/kooku0/kooku-s-log/blob/main/content/blog/react/react-reconciliation-%26-fiber.md#react-fiber"}),"React Fiber"),(0,i.kt)("p",null,"React Fiber\ub294 React v16\uc5d0 \ud3ec\ud568\ub41c \uc0c8\ub85c\uc6b4 reconciliation algorithm \uc785\ub2c8\ub2e4."),(0,i.kt)("p",null,"React's core algorithm\uc744 \ub300\ubd80\ubd84 \uac08\uc544\uc5ce\uc740 2\ub144 \uc774\uc0c1\uc758 \uc5f0\uad6c\ub85c \ub9cc\ub4e4\uc5b4\uc9c4 \uc54c\uace0\ub9ac\uc998\uc73c\ub85c React Fiber\uc758 \ubaa9\ud45c\ub294 animation, layout, gestures\uc640 \uac19\uc740 \uc601\uc5ed\uc5d0 \ub300\ud55c rendering\uc744 \ud5a5\uc0c1\uc2dc\ud0a4\ub294 \uac83 \uc785\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc8fc\uc694 \ud2b9\uc9d5\uc740\xa0",(0,i.kt)("strong",{parentName:"p"},"incremental rendering"),"\uc73c\ub85c rendering work\ub97c \ub369\uc5b4\ub9ac\ub85c \ucabc\uac20 \ud6c4 \uc5ec\ub7ec \ud504\ub808\uc784\uc5d0\uc11c \uc801\uc808\ud788 \uc218\ud589\uc2dc\ud0a4\ub294 \uac83 \uc785\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc8fc\uc694 \ud3ec\uc778\ud2b8\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"UI\uc5d0\uc11c \ubaa8\ub4e0 \uc5c5\ub370\uc774\ud2b8\ub97c \uc989\uc2dc \uc801\uc6a9\ud560 \ud544\uc694\uac00 \uc5c6\ub2e4. \uc2e4\uc81c\ub85c \uadf8\ub807\uac8c \ud558\uba74 frame drop\uacfc \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc774 \uc800\ud558\ub420 \uc218 \uc788\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uc5c5\ub370\uc774\ud2b8\ub9c8\ub2e4 \uc6b0\uc120\uc21c\uc704\uac00 \ub2e4\ub974\ub2e4. \uc560\ub2c8\uba54\uc774\uc158\uc740 data update \ubcf4\ub2e4 \ub354 \ube68\ub9ac \uc644\ub8cc\ub418\uc5b4\uc57c\ud55c\ub2e4.")),(0,i.kt)("h2",{id:"what-is-fiber"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/kooku0/kooku-s-log/blob/main/content/blog/react/react-reconciliation-%26-fiber.md#what-is-fiber"}),"What is fiber?"),(0,i.kt)("p",null,"UI\ub97c \ub2e4\ub8f0 \ub54c, \ub108\ubb34 \ub9ce\uc740 \uc791\uc5c5\uc774 \ud55c \ubc88\uc5d0 \uc2e4\ud589\ub420 \ub54c \ubb38\uc81c\uac00 \uc0dd\uae30\uae30 \ub9c8\ub828\uc785\ub2c8\ub2e4. \uc774\ub7f4 \ub54c animation\uc744 \uc218\ud589\ud558\uac8c \ub418\uba74 frame drop \uacfc \uc0ac\uc6a9\uc790\uc5d0\uac8c \ud22d\ud22d \ub04a\uae30\uac8c \ubcf4\uc5ec\uc9c0\uac8c \ub429\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 \uc791\uc5c5\ub4e4\uc5d0 \ub300\ud574 \uc6b0\uc120\uc21c\uc704\ub97c \ub9e4\uae30\uace0\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"requestIdleCallback"),"\uc740 \uc720\ud734 \uae30\uac04 \ub3d9\uc548 \ub0ae\uc740 \uc6b0\uc120\uc21c\uc704 \ud568\uc218\ub97c \ud638\ucd9c\ud558\ub3c4\ub85d \uc608\uc57d\ud558\uace0\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"requestAnimationFrame"),"\uc740 \ub2e4\uc74c animation\uc5d0\uc11c \ud638\ucd9c\ud560 \ub192\uc740 \uc6b0\uc120 \uc21c\uc704 \ud568\uc218\ub97c \uc608\uc57d\ud558\uba74 \ub429\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc774\ub7ec\ud55c API\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c\ub294\xa0",(0,i.kt)("strong",{parentName:"p"},"Incremental rendering"),"\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. rendering \uacfc\uc815\uc5d0\ub294 \ub2e8 \ud558\ub098\uc758 call stack\uc5d0\ub9cc \uc0ac\uc6a9\ud558\uae30\uc5d0 \uc2a4\ud0dd\uc774 \ube44\uc6cc\uc9c8 \ub54c\uae4c\uc9c0 \ub2e4\ub978 \uc791\uc5c5\uc744 \uc218\ud589\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,i.kt)("p",null,"UI rendering\uc744 \ucd5c\uc801\ud654\ud558\uae30 \uc704\ud574 call stack\uc758 \ub3d9\uc791\uc744 \uc0ac\uc6a9\uc790 \ub9c8\uc74c\ub300\ub85c \uc815\uc758\ud560 \uc218 \uc788\ub2e4\uba74 \uc88b\uc9c0 \uc54a\uc744\uae4c\uc694? call stack\uc744 \ub9c8\uc74c\ub300\ub85c \uc911\ub2e8\ud558\uace0 stack frame\uc744 \uc218\ub3d9\uc73c\ub85c \uc870\uc791\ud560 \uc218 \uc788\ub2e4\uba74 \uc88b\uc9c0 \uc54a\uc744\uae4c\uc694? \uc774\uac83\uc774 React Fiber\uc758 \ubaa9\uc801\uc785\ub2c8\ub2e4. Fiber\ub294 React \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \ud2b9\ud654\ub41c stack\uc758 \uc7ac\uad6c\ud604\uc73c\ub85c\xa0",(0,i.kt)("strong",{parentName:"p"},"virtual stack frame"),"\uc73c\ub85c \uc0dd\uac01\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"incremental-rendering"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/kooku0/kooku-s-log/blob/main/content/blog/react/react-reconciliation-%26-fiber.md#incremental-rendering"}),"Incremental rendering"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"pause work and come back to it later"),(0,i.kt)("li",{parentName:"ul"},"assign priority to different types of work"),(0,i.kt)("li",{parentName:"ul"},"reuse previously completed work"),(0,i.kt)("li",{parentName:"ul"},"abort work if it's no longer needed")),(0,i.kt)("p",null,"Fiber\uc5d0\uc11c\ub294\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"requestIdleCallback"),"\uc744 \ud65c\uc6a9\ud574\uc11c \ub3d9\uc791\uc911\uc778 React \ucf54\ub4dc\ub97c \ub9e4\ubc88 \ubd80\ub974\uace0, \uc8fc\uc5b4\uc9c4 \uc2dc\uac04\uc744 \ucd08\uacfc\ud55c\ub2e4\uba74 \uba48\ucd94\uace0 \ub354 \uc911\uc694\ud55c \uc77c\uc5d0 \uc591\ubcf4\ud569\ub2c8\ub2e4. \ub354 \uc911\uc694\ud55c \uc77c\uc774 \ub05d\ub098\uba74 \ub2e4\uc2dc \ub3cc\uc544\uc640\uc11c \ub098\uba38\uc9c0 \uc791\uc5c5\uc744 \uc644\ub8cc\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc5b4\ub290 \uc2dc\uc810\uc5d0\uc11c\ub098 \uc791\uc5c5\uc744 \uba48\ucd9c \uc218 \uc788\uc5b4\uc57c \ud55c\ub2e4\ub294 \uac83\uc740 task\uac00 \uc798\uac8c \ucabc\uac1c\uc9c8 \uc218 \uc788\uc5b4\uc57c \uac00\ub2a5\ud574 \ubcf4\uc785\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uc774\ub7ec\ud55c \uc791\uc5c5\uc774 Incremental task \uc785\ub2c8\ub2e4."),(0,i.kt)("h1",{id:"phases"},(0,i.kt)("a",{parentName:"h1",href:"https://github.com/kooku0/kooku-s-log/blob/main/content/blog/react/react-reconciliation-%26-fiber.md#phases"}),"Phases"),(0,i.kt)("h2",{id:"phase-1-render--reconciliation"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/kooku0/kooku-s-log/blob/main/content/blog/react/react-reconciliation-%26-fiber.md#phase-1-render--reconciliation"}),"Phase 1 (render / reconciliation)"),(0,i.kt)("p",null,"interrupible"),(0,i.kt)("h2",{id:"phase-2-commit"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/kooku0/kooku-s-log/blob/main/content/blog/react/react-reconciliation-%26-fiber.md#phase-2-commit"}),"Phase 2 (commit)"),(0,i.kt)("p",null,"no interruptible"),(0,i.kt)("h2",{id:"reference"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/kooku0/kooku-s-log/blob/main/content/blog/react/react-reconciliation-%26-fiber.md#reference"}),"Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ko.reactjs.org/docs/reconciliation.html"},"react - reconciliation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=ZCuYPiUIONs"},"Lin Clark - A Cartoon Intro to Fiber - React Conf 2017")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/acdlite/react-fiber-architecture"},"react-fiber-architecture"))))}s.isMDXComponent=!0}}]);