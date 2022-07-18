"use strict";(self.webpackChunkkooku_log=self.webpackChunkkooku_log||[]).push([[9488],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,g=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return p}});var r=n(3117),a=(n(7294),n(3905));const o={title:"React v17",date:new Date("2021-04-20T00:00:00.000Z"),tags:["react"]},l=void 0,i={permalink:"/en/blog/react-v17",editUrl:"https://github.com/kooku0/kooku0.github.io/edit/main/blog/react-v17.md",source:"@site/blog/react-v17.md",title:"React v17",description:"2020\ub144 10\uc6d4 20\uc77c React v17\uc774 \ub9b4\ub9ac\uc988 \ub418\uc5c8\ub2e4.",date:"2021-04-20T00:00:00.000Z",formattedDate:"April 20, 2021",tags:[{label:"react",permalink:"/en/blog/tags/react"}],readingTime:3.67,hasTruncateMarker:!0,authors:[],frontMatter:{title:"React v17",date:"2021-04-20T00:00:00.000Z",tags:["react"]},prevItem:{title:"Use WebP images",permalink:"/en/blog/use-webp-images"},nextItem:{title:"DOMContentLoaded vs onLoad",permalink:"/en/blog/domcontentloaded-vs-onload"}},c={authorsImageUrls:[]},p=[{value:"No New Features",id:"no-new-features",level:2},{value:"Gradual Upgrades",id:"gradual-upgrades",level:2},{value:"Changes to Event Delegation",id:"changes-to-event-delegation",level:2},{value:"Other Breaking Changes",id:"other-breaking-changes",level:2},{value:"Reference",id:"reference",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"2020\ub144 10\uc6d4 20\uc77c React v17\uc774 \ub9b4\ub9ac\uc988 \ub418\uc5c8\ub2e4.\n\ub9ac\uc5d1\ud2b8 \uc774\uc804 \uc8fc\uc694 \ub9b4\ub9ac\uc988 \uc774\ud6c4 2\ub144 \ubc18\ub9cc\uc5d0 \ub9b4\ub9ac\uc988\ub418\ub294 \uac83\uc73c\ub85c \ub9ce\uc740 \uad00\uc2ec\ub4e4\uc774 \uc788\uc5c8\ub294\ub370 \uacfc\uc5f0 \uc5b4\ub5a4 \ub0b4\uc6a9\ub4e4\uc774 \ucd94\uac00\ub418\uc5c8\ub294\uc9c0 \uc0b4\ud3b4\ubcf4\uc790."),(0,a.kt)("h2",{id:"no-new-features"},"No New Features"),(0,a.kt)("p",null,"\ucc98\uc74c\uc5d0 \ubc1d\ud788\ub4ef\ud788 \uc0c8\ub86d\uac8c \ucd94\uac00\ub418\ub294 \uae30\ub2a5\ub4e4\uc740 \uc5c6\ub2e4.\n\uc774\ubc88 \ub9b4\ub9ac\uc988\ub294 ",(0,a.kt)("strong",{parentName:"p"},"\ub9ac\uc5d1\ud2b8\ub97c \ub354 \uc27d\uac8c upgrade")," \uac00\ub2a5\ud558\ub3c4\ub85d \ud558\ub294\ub370 \ucd08\uc810\uc774 \ub9de\ucdb0\uc84c\ub2e4."),(0,a.kt)("h2",{id:"gradual-upgrades"},"Gradual Upgrades"),(0,a.kt)("p",null,"15, 16 \ubc84\uc804\uc758 React\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\uc744 \ub54c 17 \ubc84\uc804\uc73c\ub85c \uc5c5\uadf8\ub808\uc774\ub4dc\ub97c \uc704\ud574\uc11c\ub294 \uc804\uccb4 app\uc744 \uc5c5\uadf8\ub808\uc774\ub4dc \ud588\uc5b4\uc57c\ud588\ub2e4.\n\ub9cc\uc57d \uc608\uc804\uc5d0 \uc791\uc131\ub418\uc5c8\uace0, \uc720\uc9c0\ubcf4\uc218\uac00 \uc81c\ub300\ub85c \uc774\ub8e8\uc5b4\uc9c0\uc9c0 \uc54a\uc740 \ucf54\ub4dc\uc77c \uacbd\uc6b0 \uc774\ub7ec\ud55c \uc5c5\uadf8\ub808\uc774\ub4dc\ub294 \ud798\ub4e4\uc5b4\uc9c8 \uc218 \uc788\uc73c\uba70 \uc774\ub7f4\ub54c \ub450\uac00\uc9c0 \ubc84\uc804\uc758 React\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc9c0\ub9cc Event \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\ub2e4.\nReact 17\uc5d0\uc11c \uc774\ub7ec\ud55c \ubb38\uc81c\uc810\ub4e4\uc744 \uc218\uc815\ud558\uc600\uc73c\uba70 React 18\uacfc \uac19\uc740 \ub2e4\uc74c \ubc84\uc804\uc774 \ub098\uc654\uc744 \ub54c \uc5c5\uadf8\ub808\uc774\ub4dc \uc2dc \ub354 \ub9ce\uc740 \uc635\uc158\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \ub418\uc5c8\ub2e4."),(0,a.kt)("p",null,"\uc774\uc804\ucc98\ub7fc \uc804\ubd80 \ud55c\uaebc\ubc88\uc5d0 \uc5c5\uadf8\ub808\uc774\ub4dc\ub97c \ud558\uac70\ub098, \ud558\uc704 \ub77c\uc6b0\ud130 \uba87 \uac1c\ub294 \uc774\uc804 \ubc84\uc804\uc744 \uc0ac\uc6a9\ud558\uac8c \ub458 \uc218\ub3c4 \uc788\uac8c \ub418\uc5c8\ub2e4. \uc774\ub97c Gradual Upgrades\ub77c\uace0 \ubd80\ub978\ub2e4.\n\ud558\uc9c0\ub9cc Gradual Upgrades\ub294 \ucd94\ucc9c\ub418\uc9c0\uc54a\uc73c\uba70 \uc55e\uc5d0 \uc124\uba85\ud55c \uc571 \uc804\ubd80\ub97c \uc5c5\uadf8\ub808\uc774\ub4dc\ud558\ub294 \uac83\uc744 \ucd94\ucc9c\ud55c\ub2e4."),(0,a.kt)("h2",{id:"changes-to-event-delegation"},"Changes to Event Delegation"),(0,a.kt)("p",null,"\uc55e\uc758 Gradual Upgrades\ub97c \uc124\uba85\ud558\uba74\uc11c \ub450\uac00\uc9c0 \ubc84\uc804\uc758 React\ub97c \uc0ac\uc6a9\ud560 \ub54c Event \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud560 \uc218\ub3c4 \uc788\ub2e4\uace0 \ud558\uc600\ub2e4.\nReact 17\uc5d0\uc11c\ub294 \uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574\uc11c(\ub450\uac00\uc9c0 React\ubc84\uc804\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \ud558\uae30\uc704\ud574) React event system\uc758 \ubcc0\uacbd\uc774 \ud544\uc694\ud558\uc600\ub2e4."),(0,a.kt)("p",null,"React 17\uc5d0\uc11c\ub294 event handler\ub97c ",(0,a.kt)("inlineCode",{parentName:"p"},"docuemnt"),"\uc5d0 \ub2ec\uc9c0\uc54a\uace0 React tree\uac00 \ub79c\ub354\ub418\ub294 root DOM container\uc5d0 \ub2ec\uc558\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'const rootNode = document.getElementById("root");\nReactDOM.render(<App />, rootNode);\n')),(0,a.kt)("p",null,"\uc774\uc804 \ubc84\uc804\ub4e4\uc5d0\uc11c\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"document.addEventListener()"),"\ub97c \uc0ac\uc6a9\ud588\ub2e4\uba74 React 17\ubd80\ud130\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"rootNode.addEventListener()"),"\ub97c \uc0ac\uc6a9\ud558\uac8c \ub41c\ub2e4."),(0,a.kt)("h2",{id:"other-breaking-changes"},"Other Breaking Changes"),(0,a.kt)("p",null,"\uc774\uc678\uc5d0 \uc5ec\ub7ec \uc790\uc798\uc790\uc798\ud55c \ubc84\uadf8\ub4e4\uc774 \uc218\uc815\ub418\uc5c8\ub294\ub370\n\ud55c \uac00\uc9c0 \ub208\uc5d0 \ub744\ub294 \uac83\uc774 \uc788\uc5b4 \uc18c\uac1c\ud558\ub824\uace0\ud55c\ub2e4. (\uc2e4\uc81c \ud504\ub85c\uc81d\ud2b8\ub97c \uc9c4\ud589\ud558\ub2e4 \ubc1c\uacac\ud55c \ubb38\uc81c\uc778\ub370 \uc774\ubc88 v17\uc5d0 \ucd94\uac00\ub418\uc5b4 \uae30\ubee4\ub2e4.)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add the ",(0,a.kt)("inlineCode",{parentName:"li"},"disableRemotePlayback")," property for ",(0,a.kt)("inlineCode",{parentName:"li"},"video")," elements. (@tombrowndev in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebook/react/pull/18619"},"#18619"),")")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"video")," Tag\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"p"},"disableRemotePlayback")," \uc18d\uc131\uc774 \ucd94\uac00\ub41c \uac83\uc778\ub370 ",(0,a.kt)("a",{parentName:"p",href:"(https://github.com/facebook/react/issues/18618)"},"Issue"),"\ub97c \uc0b4\ud3b4\ubcf4\uba74 \uc790\uc138\ud788 \uc54c \uc218 \uc788\ub2e4."),(0,a.kt)("p",null,"\uc6f9\ud398\uc774\uc9c0\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"p"},"video")," Tag\ub97c \uc774\uc6a9\ud574 \ub3d9\uc601\uc0c1\uc744 \ub123\uace0 \uc548\ub4dc\ub85c\uc774\ub4dc \ud734\ub300\ud3f0\uc73c\ub85c \uc811\uc18d\ud558\uba74 \ub3d9\uc601\uc0c1 \uc704\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"p"},"chromecast")," icon\uc774 \ubcf4\uc5ec\uc9c0\uac8c \ub41c\ub2e4. ",(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/28153166/android-chrome-chromecast-icon-over-html5-video-position"},"android-chrome-chromecast-icon-over-html5-video-position::stackoverflow")),(0,a.kt)("p",null,"\uc774\uac83\uc740 ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/disableRemotePlayback"},"MDN Web Docs"),"\uc5d0 \ub098\uc624\ub4ef ",(0,a.kt)("inlineCode",{parentName:"p"},"disableRemotePlayback"),"\uc744 true\ub85c \ub450\uba74 \uc5c6\uc568 \uc218 \uc788\ub294\ub370 React\uc5d0\uc11c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc558\ub2e4\uac00 \uc774\ubc88 v17\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \ub41c \uac83\uc774\ub2e4."),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://reactjs.org/blog/2020/10/20/react-v17.html"},"React v17.0"))))}d.isMDXComponent=!0}}]);