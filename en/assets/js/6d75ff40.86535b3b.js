"use strict";(self.webpackChunkkooku_log=self.webpackChunkkooku_log||[]).push([[2135],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=u(n),m=o,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||a;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6442:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return u}});var r=n(3117),o=(n(7294),n(3905));const a={title:"React\uc5d0\uc11c side effect\ub97c \uad00\ub9ac\ud558\ub294 \ubc95",date:new Date("2021-11-05T00:00:00.000Z"),cover:"",tags:["\uc544\ud0a4\ud14d\ucc98"],keywords:["\uc544\ud0a4\ud14d\ucc98","\ud504\ub860\ud2b8\uc5d4\ub4dc \ucef4\ud3ec\ub10c\ud2b8","\ud504\ub860\ud2b8\uc5d4\ub4dc \uc544\ud0a4\ud14d\ucc98"]},i=void 0,p={permalink:"/en/blog/react\uc5d0\uc11c-side-effect\ub97c-\uad00\ub9ac\ud558\ub294-\ubc95",editUrl:"https://github.com/kooku0/kooku0.github.io/edit/main/blog/react\uc5d0\uc11c-side-effect\ub97c-\uad00\ub9ac\ud558\ub294-\ubc95.md",source:"@site/blog/react\uc5d0\uc11c-side-effect\ub97c-\uad00\ub9ac\ud558\ub294-\ubc95.md",title:"React\uc5d0\uc11c side effect\ub97c \uad00\ub9ac\ud558\ub294 \ubc95",description:"\uc694\uc998 \uc2a4\uce7c\ub77c\ub85c \ubc30\uc6b0\ub294 \ud568\uc218\ud615 \ud504\ub85c\uadf8\ub798\ubc0d \ucc45\uc744 \uc77d\uace0 \uc788\uc2b5\ub2c8\ub2e4.",date:"2021-11-05T00:00:00.000Z",formattedDate:"November 5, 2021",tags:[{label:"\uc544\ud0a4\ud14d\ucc98",permalink:"/en/blog/tags/\uc544\ud0a4\ud14d\ucc98"}],readingTime:4.485,hasTruncateMarker:!0,authors:[],frontMatter:{title:"React\uc5d0\uc11c side effect\ub97c \uad00\ub9ac\ud558\ub294 \ubc95",date:"2021-11-05T00:00:00.000Z",cover:"",tags:["\uc544\ud0a4\ud14d\ucc98"],keywords:["\uc544\ud0a4\ud14d\ucc98","\ud504\ub860\ud2b8\uc5d4\ub4dc \ucef4\ud3ec\ub10c\ud2b8","\ud504\ub860\ud2b8\uc5d4\ub4dc \uc544\ud0a4\ud14d\ucc98"]},prevItem:{title:"\ucef4\ud3ec\ub10c\ud2b8 \uc751\uc9d1\ub3c4",permalink:"/en/blog/\ucef4\ud3ec\ub10c\ud2b8-\uc751\uc9d1\ub3c4"},nextItem:{title:"\ub9c8\uc774\ud06c\ub85c\uc11c\ube44\uc2a4 \uc544\ud0a4\ud14d\ucc98\ub97c \ubaa8\ub178\ub808\ud3ec\ub85c \uad00\ub9ac\ud558\uae30",permalink:"/en/blog/\ub9c8\uc774\ud06c\ub85c\uc11c\ube44\uc2a4-\uc544\ud0a4\ud14d\ucc98\ub97c-\ubaa8\ub178\ub808\ud3ec\ub85c-\uad00\ub9ac\ud558\uae30"}},c={authorsImageUrls:[]},u=[{value:"Pure Component\ub97c \ub9cc\ub4dc\ub294 \ubc95",id:"pure-component\ub97c-\ub9cc\ub4dc\ub294-\ubc95",level:2}],l={toc:u};function s(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\uc694\uc998 ",(0,o.kt)("inlineCode",{parentName:"p"},"\uc2a4\uce7c\ub77c\ub85c \ubc30\uc6b0\ub294 \ud568\uc218\ud615 \ud504\ub85c\uadf8\ub798\ubc0d")," \ucc45\uc744 \uc77d\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5740).Z,width:"307",height:"400"})),(0,o.kt)("p",null,"\uc544\uc9c1 2\uc7a5 \ubc16\uc5d0 \uc77d\uc9c0 \uc54a\uc558\uc9c0\ub9cc, \uae30\uc5b5\uc5d0 \ub0a8\ub294 \ubb38\uc7a5\ub4e4\uc774 \uba87 \uac1c \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\ud568\uc218\ud615 \ud504\ub85c\uadf8\ub798\ubc0d\uc740 \ubd80\uc218 \ud6a8\uacfc\uac00 \uc5c6\ub294 \uc21c\uc218 \ud568\uc218\ub4e4\ub85c\ub9cc\uc744 \uc774\uc6a9\ud574 \ud504\ub85c\uadf8\ub7a8\uc744 \uad6c\ucd95\ud558\ub294 \uac83\uc744 \uc758\ubbf8\ud55c\ub2e4."),(0,o.kt)("p",{parentName:"admonition"},"\ubd80\uc218 \ud6a8\uacfc\uac00 \uc5c6\ub2e4\ub294 \uac83\uc740 \uc8fc\uc5b4\uc9c4 \uac12\uc5d0 \ub300\ud574 \uc774 \ud568\uc218\ub294 \ud56d\uc0c1 \uac19\uc740 \uac12\uc744 \ub3cc\ub824\uc8fc\ub294 \uac83\uc744 \ubcf4\uc7a5\ud55c\ub2e4. \uadf8\ub9ac\uace0 \uadf8 \uc774\uc678\uc758 \uc77c\uc740 ",(0,o.kt)("strong",{parentName:"p"},"\uc804\ud600")," \uc77c\uc5b4\ub098\uc9c0 \uc54a\ub294\ub2e4."),(0,o.kt)("p",{parentName:"admonition"},"\uc21c\uc218\ud568\uc218\ub294 \ud558\ub098\uc758 \ube14\ub799\ubc15\uc2a4\uc774\ub2e4. \uc785\ub825\uc740 \ud56d\uc0c1 \ud568\uc218\uc5d0 \ub300\ud55c \uc778\uc218\ub4e4\ub85c\ub9cc \uc8fc\uc5b4\uc9c4\ub2e4. \uadf8\ub9ac\uace0 \ud568\uc218\ub294 \uacb0\uacfc\ub97c \uacc4\uc0b0\ud574\uc11c \ub3cc\ub824\uc904 \ubfd0, \uadf8\uac83\uc774 \uc5b4\ub5bb\uac8c \uc4f0\uc774\ub294\uc9c0\ub294 \uc2e0\uacbd \uc4f0\uc9c0 \uc54a\ub294\ub2e4. \uc774\ub7ec\ud55c \uad00\uc2ec\uc0ac\uc758 \ubd84\ub9ac \ub355\ubd84\uc5d0 \uacc4\uc0b0 \ub17c\ub9ac\uc758 \uc7ac\uc0ac\uc6a9\uc131\uc774 \ub192\uc544\uc9c4\ub2e4.")),(0,o.kt)("p",null,'\uc774 \ucc45\uc5d0\uc11c\ub294 \uc21c\uc218\ud568\uc218\ub97c \ub9cc\ub4e4\uae30 \uc704\ud574 "\uc5b4\uca54 \uc218 \uc5c6\uc774 \uc0ac\uc6a9\ud558\uac8c \ub418\ub294 \ubd80\uc218\ud6a8\uacfc\ub4e4\uc740 \ud568\uc218\uc758 \ubc16\uc73c\ub85c \ubc00\uc5b4\ub0b4\uace0 \ud568\uc218\uac00 \ud558\ub294 \uc77c\uc744 \ucd5c\ub300\ud55c \uc791\uac8c \ub4e4\uc5b4\ub77c. \uadf8\ub798\uc57c \ud568\uc218\ub97c \uc7ac\uc0ac\uc6a9\ud560 \uc218 \uc788\uace0 \ud14c\uc2a4\ud2b8\ub3c4 \uc6a9\uc774\ud558\ub2e4"\uace0 \ub9d0\ud569\ub2c8\ub2e4.'),(0,o.kt)("p",null,"\uc774\ub54c \ud568\uc218\ud615 \ud504\ub85c\uadf8\ub798\ubc0d\uc758 \ucca0\ud559\uc744 \ud504\ub860\ud2b8\uc5d4\ub4dc\uc5d0 \uc801\uc6a9\ud574\ubcf4\uace0 \uc2f6\ub2e4\ub294 \uc0dd\uac01\uc774 \ub4e4\uc5c8\uc2b5\ub2c8\ub2e4. \uc0ac\uc2e4 React\uc5d0\uc11c\ub294 \uc774\ubbf8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Pure Component"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Container and Presentational Pattern"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"redux-saga"),"\ub97c \ubcf4\uba74 \uc54c\ub4ef\uc774 \uc774\ubbf8 \uc21c\uc218\uc5d0 \ub300\ud55c \uac1c\ub150\uc774 \ub9ce\uc774 \ub4e4\uc5b4\uc640 \uc788\uae34 \ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"React.memo"),"\uc640 ",(0,o.kt)("inlineCode",{parentName:"p"},"Pure Component"),'\ub97c \ub9cc\ub4e4\uc5b4 \ubd88\ud544\uc694\ud55c re-rendering\ub97c \ub9c9\uac8c \ud55c\ub2e4\ub358\uac00, Bussiness Logic\uacfc View\ub97c \ub2f4\ub2f9\ud558\ub294 Component\ub97c \ubd84\ub9ac\ud55c\ub2e4\ub358\uac00 (\uc720\uc9c0\ubcf4\uc218\uc131\uacfc\ub3c4 \uc5f0\uad00\uc774 \uc788\uaca0\uc9c0\ub9cc View\ub97c \ub2f4\ub2f9\ud558\ub294 Component\uc5d0\uc11c side effect\ub97c \uc77c\uc73c\ud0a4\ub294 \uac83\ub4e4\uc744 component \ubc16\uc73c\ub85c \ubc00\uc5b4\ub0b4 Container Component\uc5d0\uc11c \uad00\ub9ac\ud558\uac8c \ud558\ub294 \uc5ed\ud560\ub3c4 \uc788\ub2e4\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4.) Redux\uc5d0\uc11c\ub294 \uc0c1\ud0dc\uad00\ub9ac\ub9cc \ud558\uace0 \uadf8 \uc678\uc758 \ube44\ub3d9\uae30 \uc791\uc5c5, api \ud1b5\uc2e0, \uc5d0\ub7ec\ucc98\ub9ac\uc640 \uac19\uc740 \ubd80\uc218\ud6a8\uacfc\ub97c \uc77c\uc73c\ud0a4\ub294 \uc791\uc5c5\ub4e4\uc740 redux-saga\uc5d0\uc11c \ub530\ub85c \uad00\ub9ac\ud558\ub3c4\ub85d \ub9d0\uc774\uc8e0. (\uc2e4\uc81c\ub85c redux-saga \uacf5\uc2dd\ubb38\uc11c\uc758 \uccab\ud654\uba74\uc774 "An intuitive Redux side effect manager." \uc785\ub2c8\ub2e4.)'),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://redux-saga.js.org/"},"https://redux-saga.js.org/")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4439).Z,width:"1272",height:"446"})),(0,o.kt)("p",null,"functional programming\uc774 pure function\ub4e4\uc758 \uc870\ud569\uc73c\ub85c \ud504\ub85c\uadf8\ub7a8\uc744 \uad6c\uc131\ud55c\ub2e4\uace0\ub294 \ud558\uc9c0\ub9cc \ubd80\uc218\ud6a8\uacfc\uac00 \uc5c6\ub294 \ud504\ub85c\uadf8\ub7a8\uc740 \uc5c6\ub2e4\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4. functional programming\uc740 \ucf54\ub4dc\ubb38\ub9e5\uc5d0\uc11c \ubc1c\uc0dd\ud558\ub294 \uacf5\ud1b5\uc758 \ud328\ud134\uc744 \ud568\uc218\ub85c \ub9cc\ub4e4\uc5b4 \uc7ac\uc0ac\uc6a9\ud558\uac8c \ud568\uc744 \ubaa9\uc801\uc73c\ub85c \ub454\ub2e4\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4. \uc774\ub54c\uc758 \ud568\uc218\ub294 \uc21c\uc218\ud568\uc218\uaca0\uc8e0.\n\uadf8\ub9ac\uace0 \ud504\ub860\ud2b8\uc5d0\uc11c\ub3c4 \uacf5\ud1b5\uc801\uc73c\ub85c \uc0ac\uc6a9\ub418\ub294 \ucef4\ud3ec\ub10c\ud2b8\ub97c pure component\ub85c \ub9cc\ub4e6\uc73c\ub85c\uc368 \uc7ac\uc0ac\uc6a9\uc774 \uac00\ub2a5\ud558\uac8c \ud558\uace0 \ud14c\uc2a4\ud2b8\ud558\uae30 \uc27d\uac8c \ub9cc\ub4e4\uae30 \uc704\ud574 functional programming\uc758 \ucca0\ud559\uc774 \ud544\uc694\ud558\ub2e4\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"pure-component\ub97c-\ub9cc\ub4dc\ub294-\ubc95"},"Pure Component\ub97c \ub9cc\ub4dc\ub294 \ubc95"),(0,o.kt)("p",null,"\ucc45\uc5d0\uc11c \ub098\uc654\ub4ef\uc774 component\uc5d0\uc11c side effect\uac00 \ubc1c\uc0dd\ud558\ub294 \ubd80\ubd84\ub4e4\uc744 \ucd5c\ub300\ud55c \ubc16\uc73c\ub85c \ubc00\uc5b4\ub0b4\uc57c \ud569\ub2c8\ub2e4. container component\ub85c side-effect\ub97c \ubaa8\ub450 \ube7c\uac70\ub098, custom hooks\uc5d0\uc11c \ucc98\ub9ac\ud558\uac8c \ud574\uc57c\ud569\ub2c8\ub2e4. \ub9cc\uc57d redux\ub97c \uc0ac\uc6a9\ud55c\ub2e4\uba74 redux-saga\uc5d0\uc11c \ucc98\ub9ac\ud558\uac8c \ud574\uc57c\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc774\ub807\uac8c \ud558\uba74 props\uc5d0 \ub300\ud574 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc5b4\ub5bb\uac8c \ub80c\ub354\ub9c1\ub420\uc9c0 \uc608\uc0c1\ud560 \uc218 \uc788\uace0 \ud14c\uc2a4\ud2b8\ud558\uae30\ub3c4 \uc26c\uc6cc\uc9d1\ub2c8\ub2e4. props\uc5d0 \ub530\ub77c \uae00\uc790\ub098 style\uc758 \uacb0\uacfc\ub9cc \ud14c\uc2a4\ud2b8\ud558\uba74 \ub429\ub2c8\ub2e4."))}s.isMDXComponent=!0},5740:function(e,t,n){t.Z=n.p+"assets/images/functional-book-b556ffc40ee23b9467b7ab65a3b5b2d4.jpeg"},4439:function(e,t,n){t.Z=n.p+"assets/images/redux-saga-d35f4575d06e55f99c254238e9a71ff8.png"}}]);