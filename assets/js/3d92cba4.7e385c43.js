"use strict";(self.webpackChunkkooku_log=self.webpackChunkkooku_log||[]).push([[7259],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(u,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2827:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return l}});var n=r(3117),o=(r(7294),r(3905));const a={title:"React v18 Concurrent mode",date:new Date("2022-03-17T00:00:00.000Z"),tags:["react"],keywords:["react 18","react","concurrent mode"]},c=void 0,i={permalink:"/blog/react18-concurrent-mode",editUrl:"https://github.com/kooku0/kooku0.github.io/edit/main/blog/react18-concurrent-mode.md",source:"@site/blog/react18-concurrent-mode.md",title:"React v18 Concurrent mode",description:"\uc544\uc9c1 React 18\uc774 \uc815\uc2dd \ub9b4\ub9ac\uc988\ub418\uc9c0 \uc54a\uc558\uc9c0\ub9cc React 18 Plan\uc744 \ud1b5\ud574 \uc5b4\ub5a4 \uae30\ub2a5\ub4e4\uc774 \ucd94\uac00\ub418\ub294\uc9c0 \ub300\ubd80\ubd84 \uc54c\uace0 \uc788\uc744 \uac83\uc774\ub77c\uace0 \uc0dd\uac01\ub429\ub2c8\ub2e4. \uc544\ub9c8 \uc2e4\uc81c\ub85c \uc0ac\uc6a9\ud558\uace0 \uc788\ub294 \ud300\ub4e4\ub3c4 \uc788\uc744 \uac83 \uac19\ub124\uc694.",date:"2022-03-17T00:00:00.000Z",formattedDate:"2022\ub144 3\uc6d4 17\uc77c",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:10.685,hasTruncateMarker:!0,authors:[],frontMatter:{title:"React v18 Concurrent mode",date:"2022-03-17T00:00:00.000Z",tags:["react"],keywords:["react 18","react","concurrent mode"]},prevItem:{title:"\ud504\ub860\ud2b8\uc5d4\ub4dc\uc5d0 SOLID \uc801\uc6a9\ud558\uae30",permalink:"/blog/\ud504\ub860\ud2b8\uc5d4\ub4dc\uc5d0-solid-\uc801\uc6a9\ud558\uae30"},nextItem:{title:"auto\ub85c \ubc84\uc804\uad00\ub9ac\uc640 \ubc30\ud3ec\uad00\ub9ac\ud558\uae30",permalink:"/blog/auto\ub85c-\ubc84\uc804\uad00\ub9ac\uc640-\ubc30\ud3ec\uad00\ub9ac\ud558\uae30"}},u={authorsImageUrls:[]},l=[],p={toc:l};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\uc544\uc9c1 React 18\uc774 \uc815\uc2dd \ub9b4\ub9ac\uc988\ub418\uc9c0 \uc54a\uc558\uc9c0\ub9cc ",(0,o.kt)("a",{parentName:"p",href:"https://ko.reactjs.org/blog/2021/06/08/the-plan-for-react-18.html"},"React 18 Plan"),"\uc744 \ud1b5\ud574 \uc5b4\ub5a4 \uae30\ub2a5\ub4e4\uc774 \ucd94\uac00\ub418\ub294\uc9c0 \ub300\ubd80\ubd84 \uc54c\uace0 \uc788\uc744 \uac83\uc774\ub77c\uace0 \uc0dd\uac01\ub429\ub2c8\ub2e4. \uc544\ub9c8 \uc2e4\uc81c\ub85c \uc0ac\uc6a9\ud558\uace0 \uc788\ub294 \ud300\ub4e4\ub3c4 \uc788\uc744 \uac83 \uac19\ub124\uc694."),(0,o.kt)("p",null,"react-18-plan \ube14\ub85c\uadf8\uc758 \uccab \ubb38\ub2e8\uc744 \uc77d\uc5b4\ubcf4\uba74 react 18\uc5d0\uc11c \uc5b4\ub5a4 \ubd80\ubd84\uc744 \uac15\uc870\ud558\uace0 \uc788\ub294\uc9c0 \ub098\uc635\ub2c8\ub2e4."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When it\u2019s released, React 18 will include out-of-the-box improvements (like automatic batching), new APIs (like startTransition), and a new streaming server renderer with built-in support for React.lazy."),(0,o.kt)("p",{parentName:"blockquote"},'\uc774\ub7ec\ud55c \uae30\ub2a5\ub4e4\uc774 \uac00\ub2a5\ud55c\uac74 "concurrent rendering"\uc774\ub77c\uace0 \ubd80\ub974\ub294 opt-in \ub9e4\ucee4\ub2c8\uc998\uc774 React 18\uc5d0 \ucd94\uac00\ub418\uc5c8\uae30 \ub54c\ubb38\uc774\ub2e4. \uc774\uac83\uc740 React\uac00 \ub3d9\uc2dc\uc5d0 \uc5ec\ub7ec \ubc84\uc804\uc758 UI\ub97c \uc900\ube44\ud560 \uc218 \uc788\uac8c\ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ubcc0\ud654\ub294 \uc778\uc9c0 \ubc94\uc704 \ubc16\uc5d0 \uc788\uc9c0\ub9cc \uc2e4\uc81c \uc131\ub2a5\uacfc \uc778\uc9c0 \uc131\ub2a5\uc744 \ubaa8\ub450 \uac1c\uc120\ud560 \uc218 \uc788\ub294 \uc0c8\ub85c\uc6b4 \uac00\ub2a5\uc131\uc744 \uc5f4\uc5b4\uc90d\ub2c8\ub2e4.')),(0,o.kt)("p",null,'\uae00\uc5d0\uc11c "concurrent rendering"\uc744 \uac15\uc870\ud558\uace0 \uc788\ub4ef\uc774 \uc774\ubc88 v18\uc758 \ud575\uc2ec\uc8fc\uc81c\ub294 concurrent rendering\uc785\ub2c8\ub2e4.'))}s.isMDXComponent=!0}}]);