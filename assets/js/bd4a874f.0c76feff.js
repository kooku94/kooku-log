"use strict";(self.webpackChunkkooku_log=self.webpackChunkkooku_log||[]).push([[6945],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return k}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=p(n),k=a,f=m["".concat(u,".").concat(k)]||m[k]||s[k]||o;return n?r.createElement(f,i(i({ref:e},c),{},{components:n})):r.createElement(f,i({ref:e},c))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5283:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var r=n(3117),a=(n(7294),n(3905));const o={title:"4\uc7a5 \uc7ac\uc0ac\uc6a9 \uac00\ub2a5\ud55c, \ubaa8\ub4c8\uc801\uc778 \ucf54\ub4dc"},i=void 0,l={unversionedId:"books/functional-programming-in-javascript/04",id:"books/functional-programming-in-javascript/04",title:"4\uc7a5 \uc7ac\uc0ac\uc6a9 \uac00\ub2a5\ud55c, \ubaa8\ub4c8\uc801\uc778 \ucf54\ub4dc",description:"- \ud568\uc218 \uccb4\uc778\uacfc \ud568\uc218 \ud30c\uc774\ud504\ub77c\uc778 \ube44\uad50",source:"@site/docs/books/functional-programming-in-javascript/04.md",sourceDirName:"books/functional-programming-in-javascript",slug:"/books/functional-programming-in-javascript/04",permalink:"/docs/books/functional-programming-in-javascript/04",draft:!1,editUrl:"https://github.com/kooku0/kooku0.github.io/edit/main/docs/books/functional-programming-in-javascript/04.md",tags:[],version:"current",frontMatter:{title:"4\uc7a5 \uc7ac\uc0ac\uc6a9 \uac00\ub2a5\ud55c, \ubaa8\ub4c8\uc801\uc778 \ucf54\ub4dc"},sidebar:"books",previous:{title:"3\uc7a5 \uc790\ub8cc\uad6c\uc870\ub294 \uc801\uac8c, \uc77c\uc740 \ub354 \ub9ce\uc774",permalink:"/docs/books/functional-programming-in-javascript/03"}},u={},p=[{value:"4.1 \uba54\uc11c\ub4dc \uccb4\uc778 \ub300 \ud568\uc218 \ud30c\uc774\ud504\ub77c\uc778",id:"41-\uba54\uc11c\ub4dc-\uccb4\uc778-\ub300-\ud568\uc218-\ud30c\uc774\ud504\ub77c\uc778",level:2},{value:"4.1.1 \uba54\uc11c\ub4dc\ub97c \uc5ec\ub7ff \uccb4\uc774\ub2dd",id:"411-\uba54\uc11c\ub4dc\ub97c-\uc5ec\ub7ff-\uccb4\uc774\ub2dd",level:3},{value:"4.1.2 \ud568\uc218\ub97c \ud30c\uc774\ud504\ub77c\uc778\uc5d0 \ub098\uc5f4",id:"412-\ud568\uc218\ub97c-\ud30c\uc774\ud504\ub77c\uc778\uc5d0-\ub098\uc5f4",level:3},{value:"4.2 \ud568\uc218 \ud638\ud658 \uc694\uac74",id:"42-\ud568\uc218-\ud638\ud658-\uc694\uac74",level:2},{value:"4.2.1 \ud615\uc2dd\uc774 \ud638\ud658\ub418\ub294 \ud568\uc218",id:"421-\ud615\uc2dd\uc774-\ud638\ud658\ub418\ub294-\ud568\uc218",level:3},{value:"4.2.2 \ud568\uc218\uc758 \ud56d\uc218: \ud29c\ud50c",id:"422-\ud568\uc218\uc758-\ud56d\uc218-\ud29c\ud50c",level:3}],c={toc:p};function s(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"\uc774 \uc7a5\uc758 \ub0b4\uc6a9",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\ud568\uc218 \uccb4\uc778\uacfc \ud568\uc218 \ud30c\uc774\ud504\ub77c\uc778 \ube44\uad50"),(0,a.kt)("li",{parentName:"ul"},"\ud568\uc218\ud615 \ub77c\uc774\ube0c\ub7ec\ub9ac \ub78c\ub2e4JS \uc18c\uac1c"),(0,a.kt)("li",{parentName:"ul"},"\ucee4\ub9c1, \ubd80\ubd84 \uc801\uc6a9, \ud568\uc218 \ubc14\uc778\ub529 \uac1c\ub150 \ud0d0\uad6c"),(0,a.kt)("li",{parentName:"ul"},"\ud568\uc218 \ud569\uc131\uc73c\ub85c \ubaa8\ub4c8\uc801\uc778 \ud504\ub85c\uadf8\ub7a8 \uc81c\uc791"),(0,a.kt)("li",{parentName:"ul"},"\ud568\uc218 \uc870\ud569\uae30\ub85c \ud504\ub85c\uadf8\ub7a8\uc758 \ud750\ub984\uc744 \uac1c\uc120"))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"[The Systems Bible]","(General Systemantics Press, 2012) \uc911\uc5d0\uc11c"),(0,a.kt)("div",{style:{textAlign:"center"}},'"\uc798 \uc791\ub3d9\ud558\ub294 \ubcf5\uc7a1\ud55c \uc2dc\uc2a4\ud15c\uc740 \uc2ed\uc911\ud314\uad6c \uc798 \uc791\ub3d9\ud588\ub358 \ub2e8\uc21c\ud55c \uc2dc\uc2a4\ud15c\uc5d0\uc11c \uc9c4\ud654\ud55c \uacbd\uc6b0\uac00 \ub9ce\ub2e4."')),(0,a.kt)("p",null,"\ub300\uaddc\ubaa8 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \ub9e4\uc6b0 \uc911\uc694\ud55c \ud2b9\uc131 \uc911 \ud558\ub098\uc778 ",(0,a.kt)("strong",{parentName:"p"},"\ubaa8\ub4c8\uc131"),"\uc740, \ud504\ub85c\uadf8\ub7a8\uc744 \ub354 \uc791\uace0 \ub3c5\ub9bd\uc801\uc778 \ubd80\ubd84\uc73c\ub85c \ub098\ub20c \uc218 \uc788\ub294 \uc815\ub3c4\ub97c \ub73b\ud569\ub2c8\ub2e4. \ubaa8\ub4c8\uc801 \ud504\ub85c\uadf8\ub7a8\uc740 \uc790\uc2e0\uc744 \uad6c\uc131\ud558\ub294 \ubd80\uc18d\ub4e4\ub85c\ubd80\ud130 \uc790\uc2e0\uc758 \uc758\ubbf8\ub97c \ub3c4\ucd9c\ud560 \uc218 \uc788\ub2e4\ub294 \uc810\uc5d0\uc11c \ub69c\ub837\uc774 \uad6c\ubd84\ub429\ub2c8\ub2e4. \ubaa8\ub4c8\uc131\uc740 \uac1c\ubc1c\uc790\uc758 \uc0dd\uc0b0\uc131\uc744 \ub192\uc77c \ubfd0\ub9cc \uc544\ub2c8\ub77c \ucf54\ub4dc \uc720\uc9c0\ubcf4\uc218\uc131 \ubc0f \uac00\ub3c5\uc131\uc744 \ud5a5\uc0c1\uc2dc\ud0a4\ub294 \ub370\uc774\ub3c4 \ub3c4\uc6c0\uc774 \ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ud504\ub85c\uadf8\ub798\ubc0d \uc138\uacc4\uc5d0\uc11c\ub294 \ub300\ubd80\ubd84 \ubb38\uc81c\ub97c \ub354 \uc791\uc740 \uc870\uac01\uc73c\ub85c \ucabc\uac20 \ud6c4, \uc774\ub4e4\uc744 \ub2e4\uc2dc \uc7ac\uad6c\uc131\ud558\uc5ec \ud574\ubc95\uc744 \uc644\uc131\ud558\ub294 \ubc29\uc2dd\uc744 \uc120\ud638\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"3\uc7a5\uc5d0\uc11c\ub294 \uace0\uc218\uc900 \ud568\uc218\ub97c \uc368\uc11c \ud558\ub098\uc758 \ub798\ud37c \uac1d\uccb4\ub97c \uc911\uc2ec\uc73c\ub85c \ub2e8\ub2e8\ud788 \uacb0\ud569\ub41c \uba54\uc11c\ub4dc \uccb4\uc778\uc73c\ub85c \ubb38\uc81c\ub97c \ud574\uacb0\ud588\uc2b5\ub2c8\ub2e4. 4\uc7a5\uc5d0\uc11c\ub294 \ud568\uc218 \ud569\uc131\uc744 \ud1b5\ud574 \ub290\uc2a8\ud558\uac8c \uacb0\ud569\ub41c \ud30c\uc774\ud504\ub77c\uc778\uc744 \ub9cc\ub4e4\uace0, \ubcf4\ub2e4 \uc720\uc5f0\ud55c \ub3c5\ub9bd\uc801\uc778 \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc744 \uc7ac\ub8cc \uc0bc\uc544 \uc804\uccb4 \ud504\ub85c\uadf8\ub7a8\uc744 \uad6c\ucd95\ud558\uaca0\uc2b5\ub2c8\ub2e4. \ucef4\ud3ec\ub10c\ud2b8 \uac01\uc790\ub85c\ub294 \ubcc4\ub85c \uac00\uce58\uac00 \uc5c6\uc9c0\ub9cc \uc11c\ub85c \ubb49\uce58\uba74 \uc791\uac8c\ub294 \ud568\uc218, \ud06c\uac8c\ub294 \uc628\uc804\ud55c \ubaa8\ub4c8 \ud615\ud0dc\ub85c \ub9cc\ub4e4\uc5b4 \uc804\uccb4 \ud504\ub85c\uadf8\ub7a8\uc5d0 \uc758\ubbf8\ub97c \ubd80\uc5ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ucf54\ub4dc \ubaa8\ub4c8\ud654\ub294 \uc26c\uc6b4 \uc791\uc5c5\uc774 \uc544\ub2d9\ub2c8\ub2e4. \uc120\uc5b8\uc801 \ud568\uc218 \ud30c\uc774\ud504\ub77c\uc778\uc744 \ud1b5\ud574 \ubb34\uc778\uc218 \ud615\ud0dc\ub85c \ubb38\uc81c\ub97c \ud574\uacb0\ud558\ub824\uba74 \uba3c\uc800 \ucf54\ub4dc\ub97c \uc801\uc815 \uc218\uc900\uc73c\ub85c \ucd94\uc0c1\ud654\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"41-\uba54\uc11c\ub4dc-\uccb4\uc778-\ub300-\ud568\uc218-\ud30c\uc774\ud504\ub77c\uc778"},"4.1 \uba54\uc11c\ub4dc \uccb4\uc778 \ub300 \ud568\uc218 \ud30c\uc774\ud504\ub77c\uc778"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ud30c\uc774\ud504\ub77c\uc774\ub2dd"),"\uc740 \ud568\uc218\ub97c \uc5f0\uacb0\ud558\ub294 \ub610 \ub2e4\ub978 \uae30\ubc95\uc785\ub2c8\ub2e4. \ud568\uc218\ud615 \ud504\ub85c\uadf8\ub798\ubc0d\uc5d0\uc11c \ud568\uc218\ub780 \uc785\ub825 \ud615\uc2dd\uacfc \ucd9c\ub825 \ud615\uc2dd \uac04\uc758 \uc218\ud559\uc801\uc778 \ub9e4\ud551\uc744 \ub73b\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ud568\uc218 \uccb4\uc774\ub2dd\uacfc \ud30c\uc774\ud504\ub77c\uc774\ub2dd\uc744 \uc774\ud574\ud558\ub824\uba74 \ud568\uc218\ub97c \ud615\uc2dd\uac04\uc758 \ub9e4\ud551\uc73c\ub85c \ubc14\ub77c\ubcf4\uc544\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uba54\uc11c\ub4dc\ub97c \uccb4\uc774\ub2dd (\ub2e8\ub2e8\ud55c \uacb0\ud569, \uc81c\ud55c\ub41c \ud45c\ud604\uc131)"),(0,a.kt)("li",{parentName:"ul"},"\ud568\uc218 \ud30c\uc774\ud504\ub77c\uc778\uc744 \ubc30\uc5f4 (\ub290\uc2a8\ud55c \uacb0\ud569, \uc720\uc5f0\uc131)")),(0,a.kt)("h3",{id:"411-\uba54\uc11c\ub4dc\ub97c-\uc5ec\ub7ff-\uccb4\uc774\ub2dd"},"4.1.1 \uba54\uc11c\ub4dc\ub97c \uc5ec\ub7ff \uccb4\uc774\ub2dd"),(0,a.kt)("p",null,"\uc554\uc2dc\uc801\uc73c\ub85c \uc0dd\uc131\ub41c LodashWrapper \uac1d\uccb4\ub97c \ub9e4\uac1c\ub85c \uc774\ub4e4 \ud568\uc218\ub97c \uc11c\ub85c \uccb4\uc774\ub2dd\ud558\uba74 \ubb3c\ubc11\uc5d0\uc11c \uc804\ud600 \uc0c8\ub85c\uc6b4 \uc790\ub8cc\uad6c\uc870\ub97c \ub9cc\ub4ed\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'_chain(names)\n  .filter(isValid)\n  .map((s) => s.replace(/_/, " "))\n  .uniq()\n  .map(_.startCase)\n  .sort()\n  .value();\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'\ub4a4\uc5d0 "\uc810(.)"\uc744 \ubd99\uc5ec \ub85c\ub300\uc2dcJS\uc758 \ub2e4\ub978 \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4.')),(0,a.kt)("p",null,"\uba85\ub839\ud615 \ucf54\ub4dc\uc5d0 \ube44\ud574 \ubd84\uba85\ud788 \uad6c\uc870\uc801\uc73c\ub85c \ud5a5\uc0c1\ub410\uace0 \uac00\ub3c5\uc131\ub3c4 \uc88b\uc544\uc84c\uc2b5\ub2c8\ub2e4. \ub2e4\ub9cc, \uc790\uc2e0\uc744 \uc18c\uc720\ud55c \uac1d\uccb4\uc5d0 \ubd80\uc790\uc5f0\uc2a4\ub7fd\uac8c \ub9e4\uc5ec \uc788\uc5b4 \uc544\uc27d\uac8c\ub3c4 \uccb4\uc778\uc5d0\uc11c \uc2e4\ud589 \uac00\ub2a5\ud55c \uba54\uc11c\ub4dc \uac00\uc9d3\uc218\uac00 \uc904\uace0 \ucf54\ub4dc\uc758 \ud45c\ud604\uc131\ub3c4 \uc81c\uc57d\uc744 \ubc1b\uc2b5\ub2c8\ub2e4. \ub610\ud55c \ub2e4\ub978(\ub610\ub294 \uc9c1\uc811 \ub9cc\ub4e0) \ub77c\uc774\ube0c\ub7ec\ub9ac \ud568\uc218\ub97c \uc27d\uac8c \uc5f0\uacb0\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uace0\uc218\uc900\uc5d0\uc11c \ubcf4\uba74 \ubc30\uc5f4 \uba54\uc11c\ub4dc\uc758 \uc21c\ucc28\uc5f4\uc740 ","[\uadf8\ub9bc 4-3]","\uacfc \uac19\uc774 \ucc98\ub9ac\ub429\ub2c8\ub2e4. \uc5ec\uae30\uc11c \uccb4\uc778\uc744 \ub04a\uc5b4 \ubc84\ub9ac\uace0 \ub3c5\ub9bd\uc801\uc778 \ud568\uc218\uc5f4\uc744 \uc790\uc720\ub86d\uac8c \ubc30\uc5f4\ud560 \uc218 \uc788\uc73c\uba74 \uc88b\uaca0\uad70\uc694. \uadf8\ub798\uc11c \ud568\uc218 \ud30c\uc774\ud504\ub77c\uc778\uc774 \ud544\uc694\ud55c \uac83\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(9841).Z,width:"1154",height:"325"})),(0,a.kt)("h3",{id:"412-\ud568\uc218\ub97c-\ud30c\uc774\ud504\ub77c\uc778\uc5d0-\ub098\uc5f4"},"4.1.2 \ud568\uc218\ub97c \ud30c\uc774\ud504\ub77c\uc778\uc5d0 \ub098\uc5f4"),(0,a.kt)("p",null,"\ud568\uc218\ud615 \ud504\ub85c\uadf8\ub798\ubc0d\uc5d0\uc11c\ub294 \uba54\uc11c\ub4dc \uccb4\uc774\ub2dd\uc758 \ud55c\uacc4\uc5d0\uc11c \ubc97\uc5b4\ub098, \ucd9c\uc2e0\uc5d0 \uad00\uacc4\uc5c6\uc774 \uc5b4\ub5a4 \ud568\uc218\ub77c\ub3c4 \uc720\uc5f0\ud558\uac8c \uacb0\ud569\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,a.kt)("strong",{parentName:"p"},"\ud30c\uc774\ud504\ub77c\uc778"),"\uc774\ub780 \ud55c \ud568\uc218\uc758 \ucd9c\ub825\uc774 \ub2e4\uc74c \ud568\uc218\uc758 \uc785\ub825\uc774 \ub418\uac8c\ub054 \ub290\uc2a8\ud558\uac8c \ubc30\uc5f4\ud55c, \ubc29\ud5a5\uc131 \ud568\uc218 \uc21c\ucc28\uc5f4\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(981).Z,width:"1145",height:"290"})),(0,a.kt)("p",null,"\uccb4\uc774\ub2dd\uc740 \uac1d\uccb4 \uba54\uc11c\ub4dc\ub97c \ud1b5\ud574 \ud568\uc218\ub4e4\uc744 \ub2e8\ub2e8\ud788 \uacb0\ud569\ud558\uc9c0\ub9cc, \ud30c\uc774\ud504\ub77c\uc778\uc740 \ud568\uc218 \uc785\ucd9c\ub825\uc744 \uc11c\ub85c \uc5f0\uacb0 \uc9c0\uc5b4 \ub290\uc2a8\ud558\uac8c \uacb0\ud569\ub41c \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub9cc\ub4ed\ub2c8\ub2e4. \ub2e8, \ud568\uc218\uc758 \ud56d\uc218\uc640 \ud615\uc2dd\uc774 \ud638\ud658\ub418\uc9c0 \uc54a\uc73c\uba74 \uc5f0\uacb0\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"42-\ud568\uc218-\ud638\ud658-\uc694\uac74"},"4.2 \ud568\uc218 \ud638\ud658 \uc694\uac74"),(0,a.kt)("p",null,"\uac1d\uccb4\uc9c0\ud5a5 \ud504\ub85c\uadf8\ub7a8\uc5d0\uc11c\ub294 \ud30c\uc774\ud504\ub77c\uc778\uc744 \ud2b9\uc815\ud55c \uacbd\uc6b0(\ubcf4\ud1b5 \uc778\uc99dauthentication/\uc778\uac00authorization \ucc98\ub9ac)\uc5d0 \ub4dc\ubb38\ub4dc\ubb38 \uc0ac\uc6a9\ud558\uc9c0\ub9cc, \ud568\uc218\ud615 \ud504\ub85c\uadf8\ub798\ubc0d\uc5d0\uc11c\ub294 \ud30c\uc774\ud504\ub77c\uc778\uc774 \ud504\ub85c\uadf8\ub7a8\uc744 \uad6c\ucd95\ud558\ub294 \uc720\uc77c\ud55c \uc218\ub2e8\uc785\ub2c8\ub2e4. \uc774 \uacc4\uc0b0 \ub2e8\uacc4\uac00 \ucf54\ub4dc\uc5d0\uc11c\ub294 \ud568\uc218\ub85c \ud45c\ud604\ub418\ub294\ub370\uc694. \uac01 \ud568\uc218\ub294 \ub450 \uac00\uc9c0 \uce21\uba74\uc5d0\uc11c \uc785\ub825\uacfc \ucd9c\ub825\uc774 \uc11c\ub85c \ud638\ud658\ub3fc\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\ud615\uc2dd"),": \ud55c \ud568\uc218\uc758 \ubc18\ud658 \ud615\uc2dd\uacfc \uc218\uc2e0 \ud568\uc218\uc758 \uc778\uc218 \ud615\uc2dd\uc774 \uc77c\uce58\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\ud56d\uc218"),": \uc218\uc2e0 \ud568\uc218\ub294 \uc55e \ub2e8\uacc4 \ud568\uc218\uac00 \ubc18\ud658\ud55c \uac12\uc744 \ucc98\ub9ac\ud558\uae30 \uc704\ud574 \uc801\uc5b4\ub3c4 \ud558\ub098 \uc774\uc0c1\uc758 \ub9e4\uac1c \ubcc0\uc218\ub97c \uc120\uc5b8\ud574\uc57c \ud569\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"421-\ud615\uc2dd\uc774-\ud638\ud658\ub418\ub294-\ud568\uc218"},"4.2.1 \ud615\uc2dd\uc774 \ud638\ud658\ub418\ub294 \ud568\uc218"),(0,a.kt)("p",null,"\ud615\uc2dd\uc740 \ud2c0\ub9bc\uc5c6\uc774 \uc911\uc694\ud55c \uc774\uc288\uc9c0\ub9cc, \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub294 \ud568\uc218\uac00 \ucde8\ud558\ub294 \uc778\uc218 \uac1c\uc218\uc758 \ud638\ud658 \uc5ec\ubd80\uac00 \ub354 \uc911\uc694\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"422-\ud568\uc218\uc758-\ud56d\uc218-\ud29c\ud50c"},"4.2.2 \ud568\uc218\uc758 \ud56d\uc218: \ud29c\ud50c"),(0,a.kt)("p",null,"FP\uc5d0\uc11c\ub294 \ud568\uc218"))}s.isMDXComponent=!0},9841:function(t,e,n){e.Z=n.p+"assets/images/4.3-269afe77a13ff5132f715413607d8b6e.jpeg"},981:function(t,e,n){e.Z=n.p+"assets/images/4.4-e842da9459f99e79d63a10aac7b7a73e.jpeg"}}]);