_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[36],{"0oBi":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.isDarkMode=function(){if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)return!0;return!1},t.useDarkMode=function(){const[e,t]=o.default.useState(!1);return(0,c.default)((()=>{const e=window.matchMedia("(prefers-color-scheme: dark)"),a=()=>{t(window.matchMedia("(prefers-color-scheme: dark)").matches)};return a(),e.addListener(a),()=>{e.removeListener(a)}}),[]),e};var o=n(a("mXGw")),c=n(a("YO29"))},"63Ad":function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"6f/q":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("mXGw")),c=n(a("pWCa")),l=a("I08b"),r=a("GDok"),d=a("nZpd"),s=a("AFBu"),m=a("0oBi");var i=({children:e,...t})=>{const a=o.default.useState(!1);o.default.useEffect((()=>{if("undefined"!==typeof document)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)};function e(e){"/"===e.key&&(document.getElementById("search").focus(),e.preventDefault())}}),[]);const n=(0,m.useDarkMode)();return o.default.createElement(d.MobileMenuContext.Provider,{value:t.menuState||a},o.default.createElement(c.default,null,o.default.createElement("link",{rel:"shortcut icon",media:"(prefers-color-scheme:dark)",href:(0,s.formatPath)(n?"favicon-dark.png":"favicon.png")})),o.default.createElement(l.SkipNavLink,null),o.default.createElement("div",{id:"ignite",className:"min-h-screen flex flex-col bg-white dark:bg-gray-1000"},o.default.createElement(r.NavBar,{sections:JSON.parse('["docs","blog"]'),hasHomePage:"true"}),e))};t.default=i},"9a2Q":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/generated/chrome",function(){return a("XQ2C")}])},AFBu:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.formatPath=function(e){return o.default.join("/auto",`/${e.replace(/\.mdx$/,"")}`)},t.postFixHTML=function(e){return e;if(e.startsWith("#"))return e;if(o.default.basename(e).includes("#"))return e.replace("#",".html#");return`${e}.html`};var o=n(a("O2/E"))},C3pV:function(e,t,a){"use strict";(function(e){var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.Sidebar=t.SidebarActiveItem=void 0;var o=n(a("mXGw")),c=n(a("5dyF")),l=n(a("pWCa")),r=n(a("O2/E")),d=n(a("PDtE")),s=a("/FXl"),m=a("dAGg"),i=a("nZpd"),u=a("AFBu");const p=o.default.createContext({pathname:"",sidebarFileLocation:""});t.SidebarActiveItem=p;const b=({href:e,children:t})=>{const a=o.default.useContext(p),{SidebarLink:n}=(0,s.useMDXComponents)(),l=r.default.join(a.sidebarFileLocation,e);let d=e;return a.sidebarFileLocation&&(d=l,d.endsWith("/index")&&(d=d.replace("/index","")),d.endsWith("/")&&(d=d.slice(0,-1))),o.default.createElement(c.default,{passHref:!0,href:(0,u.postFixHTML)(d)},o.default.createElement(n,{isActive:a.pathname.replace("/index","")===(0,u.formatPath)(d)},t))};t.Sidebar=({links:t,folder:n})=>{const[c]=o.default.useContext(i.MobileMenuContext),f=`/${n}`,x=(e=>{try{return a("f+ue")("./pages"+e+"/_sidebar.mdx").default}catch(t){try{return a("NDOZ")("./pages"+e+"/_sidebar.js").default}catch(t){}}})(f),O=(t=>{const a=(0,m.useRouter)(),n="phase-production-build"!==e.env.NEXT_PHASE&&a.pathname.includes("/auto")?r.default.relative("/auto",a.pathname):r.default.relative("/",a.pathname);let o=t.find((e=>e.__resourcePath.replace(".mdx","")===n));return o||(o=t.find((e=>{const t=e.__resourcePath.replace(".mdx","");return t.endsWith("index")&&a.pathname.includes(t.replace("/index",""))}))),{title:o.title||"auto",pathname:(0,u.formatPath)(o.__resourcePath)}})(t),{SidebarItemWrapper:j,SidebarLink:E,SidebarTitle:h,SidebarDivider:g,SidebarList:N,Sidebar:y,...v}=(0,s.useMDXComponents)();return o.default.createElement(p.Provider,{value:{...O,sidebarFileLocation:x?f:""}},o.default.createElement(s.MDXProvider,{components:{...v,li:j,ul:N,a:b,p:h,hr:g}},o.default.createElement(l.default,null,o.default.createElement("title",null,O.title.replace(/\\`/g,"`"))),o.default.createElement(y,{className:(0,d.default)(!c&&"hidden","lg:block")},x?o.default.createElement(x,null):o.default.createElement(N,null,t.map((e=>o.default.createElement(j,{key:e.__resourcePath},o.default.createElement(b,{href:e.__resourcePath},e.title))))))))}}).call(this,a("5IsQ"))},GDok:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.NavBar=void 0;var o=n(a("8VmE")),c=n(a("mXGw")),l=n(a("5dyF")),r=a("V5Fo"),d=a("/FXl"),s=n(a("PDtE")),m=a("nZpd"),i=a("AFBu");const u=({className:e,...t})=>c.default.createElement("svg",(0,o.default)({className:(0,s.default)("fill-current w-5 h-5",e),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},t),c.default.createElement("path",{d:"M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"})),p=()=>{const{SearchInput:e}=(0,d.useMDXComponents)();return c.default.createElement("div",{className:"h-full flex items-center w-full lg:w-auto lg:flex-1 lg:mr-4 lg:pr-4"},c.default.createElement(e,null))};t.NavBar=({sections:e,hasHomePage:t})=>{const[a,n]=c.default.useContext(m.MobileMenuContext),{Logo:o,NavBarWrapper:s,NavBar:b,NavBarItem:f,MobileMenuButton:x}=(0,d.useMDXComponents)();return c.default.createElement(c.default.Fragment,null,c.default.createElement(s,null,c.default.createElement(b,null,t?c.default.createElement(l.default,{passHref:!0,href:(0,i.postFixHTML)("/index")},c.default.createElement(o,null)):c.default.createElement(o,null),c.default.createElement("div",{className:"w-full h-full flex items-center lg:flex flex-1 lg:pl-12 lg:pr-6 lg:mx-auto"},c.default.createElement(p,null),c.default.createElement(x,{open:a,setOpen:n,className:"lg:hidden"}),c.default.createElement("div",{className:"hidden lg:flex h-full"},e.map((e=>c.default.createElement(l.default,{passHref:!0,key:e,href:(0,i.postFixHTML)(`/${e}`)},c.default.createElement(f,null,(0,r.titleCase)(e))))),c.default.createElement(f,{href:"https://github.com/intuit/auto",target:"_blank","aria-label":"Open on GitHub"},c.default.createElement(u,null)))))),a&&c.default.createElement("div",{className:"lg:hidden"},e.map((e=>c.default.createElement(l.default,{passHref:!0,key:e,href:(0,i.postFixHTML)(`/${e}`)},c.default.createElement(f,null,(0,r.titleCase)(e))))),c.default.createElement(f,{href:"https://github.com/intuit/auto",target:"_blank"},c.default.createElement(u,{className:"mr-2"}),"Open on GitHub")))}},TJl4:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.OpenGraphTags=void 0;var o=n(a("mXGw")),c=a("dAGg"),l=n(a("ghLh")),r=n(a("pWCa"));t.OpenGraphTags=({title:e,description:t,image:a})=>{const n=(0,c.useRouter)(),d=(0,l.default)("https://intuit.github.io/auto",n.pathname);return o.default.createElement(r.default,null,o.default.createElement("title",null,e),t&&o.default.createElement("meta",{name:"description",content:t}),o.default.createElement("meta",{property:"og:url",content:d}),o.default.createElement("meta",{property:"og:type",content:"website"}),o.default.createElement("meta",{property:"og:title",content:e}),t&&o.default.createElement("meta",{name:"og:description",content:t}),a&&o.default.createElement("meta",{name:"og:image",content:a}),d&&o.default.createElement("meta",{property:"twitter:domain",content:new URL(d).hostname}),o.default.createElement("meta",{property:"twitter:url",content:d}),o.default.createElement("meta",{name:"twitter:title",content:e}),t&&o.default.createElement("meta",{name:"twitter:description",content:t}),a&&o.default.createElement("meta",{name:"twitter:image",content:a}))}},XQ2C:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return m})),a.d(t,"default",(function(){return p}));var n=a("Fcif"),o=a("dV/x"),c=a("mXGw"),l=a.n(c),r=a("/FXl"),d=a("pu0P"),s=a.n(d),m=(l.a.createElement,{title:"Chrome Web Store",layout:"docs",description:void 0,date:null,author:"",email:"",__resourcePath:"docs/generated/chrome.mdx",__scans:{}}),i={frontMatter:m},u=s.a;function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.mdx)(u,Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"This plugin allows you to automate the publishing of chrome extensions"),Object(r.mdx)("blockquote",null,Object(r.mdx)("p",{parentName:"blockquote"},"Example Repo: ",Object(r.mdx)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/hipstersmoothie/auto-chrome"}),"here"))),Object(r.mdx)("h2",{id:"prerequisites"},Object(r.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#prerequisites"}),"Prerequisites")),Object(r.mdx)("p",null,"To publish to the chrome web store you will need the following secrets set in your environment. See ",Object(r.mdx)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/DrewML/chrome-webstore-upload/blob/master/How%20to%20generate%20Google%20API%20keys.md"}),"here")," for a guide one how to get these values."),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"CLIENT_ID")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"CLIENT_SECRET")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"REFRESH_TOKEN"))),Object(r.mdx)("h2",{id:"installation"},Object(r.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#installation"}),"Installation")),Object(r.mdx)("p",null,"This plugin is not included with the ",Object(r.mdx)("inlineCode",{parentName:"p"},"auto")," CLI installed via NPM. To install:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-bash syntax-light",style:{background:"#fff"}}),Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"npm i --save-dev @auto-it/chrome"),"\n",Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#6A737D"}}),"# or"),"\n",Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"yarn add -D @auto-it/chrome"),"\n"),Object(r.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-bash syntax-light syntax-dark",style:{background:"#24292e"}}),Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"npm i --save-dev @auto-it/chrome"),"\n",Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#6A737D"}}),"# or"),"\n",Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"yarn add -D @auto-it/chrome"),"\n")),Object(r.mdx)("blockquote",null,Object(r.mdx)("p",{parentName:"blockquote"},'WARNING: You can only use one "package manager" at a time!\nMixing them will lead to undesired results.')),Object(r.mdx)("h2",{id:"usage"},Object(r.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#usage"}),"Usage")),Object(r.mdx)("p",null,"You must first pack/zip your plugin before running ",Object(r.mdx)("inlineCode",{parentName:"p"},"auto"),"."),Object(r.mdx)("p",null,"These environment variables tell ",Object(r.mdx)("inlineCode",{parentName:"p"},"auto")," what to publish."),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"EXTENSION_ID - your chrome extensions unique ID (REQUIRED)"),Object(r.mdx)("li",{parentName:"ul"},"EXTENSION_BUILD - Path to either a zip file, or a directory to be zip. defaults to ",Object(r.mdx)("inlineCode",{parentName:"li"},"extension.zip"))),Object(r.mdx)("p",null,"Or you can set these values in the autorc:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json syntax-light",style:{background:"#fff"}}),Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"{"),"\n",Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"  "),Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#005CC5"}}),'"plugins"'),Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),": ["),"\n",Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"    ["),"\n",Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"      "),Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#032F62"}}),'"chrome"'),Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),","),"\n",Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"      {"),"\n",Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"        "),Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#005CC5"}}),'"id"'),Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),": "),Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#032F62"}}),'"1234"'),Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),","),"\n",Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"        "),Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#005CC5"}}),'"build"'),Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),": "),Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#032F62"}}),'"path/to/zip/or/folder"'),Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),","),"\n",Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"        "),Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#005CC5"}}),'"manifest"'),Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),": "),Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#032F62"}}),'"path/tp/manifest.json"'),"\n",Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"      }"),"\n",Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"    ]"),"\n",Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"  ]"),"\n",Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"}"),"\n"),Object(r.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json syntax-light syntax-dark",style:{background:"#24292e"}}),Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"{"),"\n",Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"  "),Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#79B8FF"}}),'"plugins"'),Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),": ["),"\n",Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"    ["),"\n",Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"      "),Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#9ECBFF"}}),'"chrome"'),Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),","),"\n",Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"      {"),"\n",Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"        "),Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#79B8FF"}}),'"id"'),Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),": "),Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#9ECBFF"}}),'"1234"'),Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),","),"\n",Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"        "),Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#79B8FF"}}),'"build"'),Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),": "),Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#9ECBFF"}}),'"path/to/zip/or/folder"'),Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),","),"\n",Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"        "),Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#79B8FF"}}),'"manifest"'),Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),": "),Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#9ECBFF"}}),'"path/tp/manifest.json"'),"\n",Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"      }"),"\n",Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"    ]"),"\n",Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"  ]"),"\n",Object(r.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"}"),"\n")),Object(r.mdx)("blockquote",null,Object(r.mdx)("p",{parentName:"blockquote"},"\u26a0\ufe0f You must have a manifest.json for this plugin to work.")))}p.isMDXComponent=!0},nZpd:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.MobileMenuContext=void 0;const o=n(a("mXGw")).default.createContext([!1,()=>{}]);t.MobileMenuContext=o},pu0P:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("mXGw")),c=n(a("O2/E")),l=a("/FXl"),r=n(a("PDtE")),d=a("I08b"),s=a("C3pV"),m=n(a("6f/q")),i=n(a("x3GE")),u=a("TJl4");const p=/([^`]*)`([^`]*)`(.*)/m;var b=({children:e,frontMatter:t})=>{const[a,n]=o.default.useState(!1),b=(0,l.useMDXComponents)(),f=t.__resourcePath.split("/")[0],x=(0,i.default)(),O=JSON.parse('["index.mdx","blog/both-worlds.mdx","blog/npm-canary-scope.mdx","blog/pr-in-progress.mdx","blog/using-shipit.mdx","blog/v8.mdx","blog/why.mdx","docs/_sidebar.mdx","docs/index.mdx","docs/build-platforms/circleci.mdx","docs/build-platforms/github-actions.mdx","docs/build-platforms/jenkins.mdx","docs/build-platforms/travis.mdx","docs/configuration/autorc.mdx","docs/configuration/non-npm.mdx","docs/configuration/plugins.mdx","docs/configuration/troubleshooting.mdx","docs/generated/all-contributors.mdx","docs/generated/brew.mdx","docs/generated/canary.mdx","docs/generated/changelog.mdx","docs/generated/chrome.mdx","docs/generated/cocoapods.mdx","docs/generated/comment.mdx","docs/generated/conventional-commits.mdx","docs/generated/crates.mdx","docs/generated/create-labels.mdx","docs/generated/defaultLabelsRenderer.mdx","docs/generated/docker.mdx","docs/generated/exec.mdx","docs/generated/first-time-contributor.mdx","docs/generated/gem.mdx","docs/generated/gh-pages.mdx","docs/generated/git-tag.mdx","docs/generated/gradle.mdx","docs/generated/info.mdx","docs/generated/init.mdx","docs/generated/jira.mdx","docs/generated/label.mdx","docs/generated/latest.mdx","docs/generated/magic-zero.mdx","docs/generated/maven.mdx","docs/generated/microsoft-teams.mdx","docs/generated/next.mdx","docs/generated/npm.mdx","docs/generated/omit-commits.mdx","docs/generated/omit-release-notes.mdx","docs/generated/pr-body-labels.mdx","docs/generated/pr-body.mdx","docs/generated/pr-check.mdx","docs/generated/pr-status.mdx","docs/generated/release.mdx","docs/generated/released.mdx","docs/generated/s3.mdx","docs/generated/shipit.mdx","docs/generated/slack.mdx","docs/generated/twitter.mdx","docs/generated/upload-assets.mdx","docs/generated/version.mdx","docs/generated/vscode.mdx","docs/plugins/changelog-hooks.mdx","docs/plugins/configuration-hooks.mdx","docs/plugins/hook-api-docs.mdx","docs/plugins/init-hooks.mdx","docs/plugins/log-parse-hooks.mdx","docs/plugins/release-lifecycle-hooks.mdx","docs/plugins/writing-plugins.mdx","docs/plugins/writing-publishing-plugins.mdx","docs/welcome/getting-started.mdx","docs/welcome/quick-merge.mdx"]').map((e=>c.default.relative("./",e))).filter((e=>e.startsWith(f))).map((e=>x.find((t=>t.__resourcePath===e))));return o.default.createElement(o.default.Fragment,null,o.default.createElement(u.OpenGraphTags,t),o.default.createElement(m.default,{menuState:[a,n]},o.default.createElement("div",{className:"flex-1 w-full lg:max-w-6xl mx-auto flex"},o.default.createElement(s.Sidebar,{links:O,folder:f}),o.default.createElement(d.SkipNavContent,null),o.default.createElement("main",{className:(0,r.default)("DocSearch-content","pt-8 pb-16 px-4 sm:px-6 xl:px-12 lg:mx-auto w-full","flex-1 overflow-hidden","lg:block",a&&"hidden")},t.title&&o.default.createElement(b.h1,null,function(e,t){if(!t)return;const a=[];let n=t.replace(/\\`/g,"`");for(;p.test(n);){const[,t,c,l]=n.match(p);a.push(t),a.push(o.default.createElement(e.inlineCode,null,c)),n=l}return a.push(n),o.default.createElement("div",null,a)}(b,t.title)),e))))};t.default=b},x3GE:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;let n=[];try{const e=a("jmz1");n=e.keys().map(e)}catch(c){0}var o=()=>{try{return n}catch(c){return[]}};t.default=o}},[["9a2Q",0,1,2,3,4]]]);