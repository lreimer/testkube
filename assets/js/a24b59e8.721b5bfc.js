"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[3206],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(r),d=i,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},25414:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const a={},o=void 0,s={unversionedId:"cli-reference/testkube_update_test",id:"cli-reference/testkube_update_test",title:"testkube_update_test",description:"testkube update test",source:"@site/docs/5-cli-reference/testkube_update_test.md",sourceDirName:"5-cli-reference",slug:"/cli-reference/testkube_update_test",permalink:"/testkube/cli-reference/testkube_update_test",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/5-cli-reference/testkube_update_test.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"testkube_update_executor",permalink:"/testkube/cli-reference/testkube_update_executor"},next:{title:"testkube_update_testsource",permalink:"/testkube/cli-reference/testkube_update_testsource"}},u={},c=[{value:"testkube update test",id:"testkube-update-test",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],l={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"testkube-update-test"},"testkube update test"),(0,i.kt)("p",null,"Update test"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Update Test Custom Resource"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"testkube update test [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      --artifact-dir stringArray                   artifact dirs for container executor\n      --artifact-storage-class-name string         artifact storage class name for container executor\n      --artifact-volume-mount-path string          artifact volume mount path for container executor\n      --command stringArray                        command passed to image in container executor\n      --copy-files stringArray                     file path mappings from host to pod of form source:destination\n      --env stringToString                         envs in a form of name1=val1 passed to executor (default [])\n      --execution-name string                      execution name, if empty will be autogenerated\n      --executor-args stringArray                  executor binary additional arguments\n  -f, --file string                                test file - will try to read content from stdin if not specified\n      --git-branch string                          if uri is git repository we can set additional branch parameter\n      --git-commit string                          if uri is git repository we can use commit id (sha) parameter\n      --git-path string                            if repository is big we need to define additional path to directory/file to checkout partially\n      --git-token string                           if git repository is private we can use token as an auth parameter\n      --git-token-secret stringToString            git token secret in a form of secret_name1=secret_key1 for private repository (default [])\n      --git-uri string                             Git repository uri\n      --git-username string                        if git repository is private we can use username as an auth parameter\n      --git-username-secret stringToString         git username secret in a form of secret_name1=secret_key1 for private repository (default [])\n      --git-working-dir string                     if repository contains multiple directories with tests (like monorepo) and one starting directory we can set working directory parameter\n  -h, --help                                       help for test\n      --http-proxy string                          http proxy for executor containers\n      --https-proxy string                         https proxy for executor containers\n  -i, --image string                               image for container executor\n      --image-pull-secrets stringArray             secret name used to pull the image in container executor\n      --job-template string                        job template file path for extensions to job template\n  -l, --label stringToString                       label key value pair: --label key1=value1 (default [])\n  -n, --name string                                unique test name - mandatory\n      --schedule string                            test schedule in a cronjob form: * * * * *\n      --secret-env stringToString                  secret envs in a form of secret_key1=secret_name1 passed to executor (default [])\n  -s, --secret-variable stringToString             secret variable key value pair: -s key1=value1 (default [])\n      --secret-variable-reference stringToString   secret variable references in a form name1=secret_name1=secret_key1 (default [])\n      --source string                              source name - will be used together with content parameters\n      --test-content-type string                   content type of test one of string|file-uri|git-file|git-dir\n      --timeout int                                duration in seconds for test to timeout. 0 disables timeout.\n  -t, --type string                                test type (defaults to postman-collection)\n      --uri string                                 URI of resource - will be loaded by http GET\n  -v, --variable stringToString                    variable key value pair: -v key1=value1 (default [])\n      --variables-file string                      variables file path, e.g. postman env file - will be passed to executor if supported\n")),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  -a, --api-uri string     api uri, default value read from config if set (default "http://localhost:8088")\n  -c, --client string      client used for connecting to Testkube API one of proxy|direct (default "proxy")\n      --namespace string   Kubernetes namespace, default value read from config if set (default "testkube")\n      --oauth-enabled      enable oauth (default true)\n      --verbose            show additional debug messages\n')),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/testkube/cli-reference/testkube_update"},"testkube update"),"\t - Update resource")))}p.isMDXComponent=!0}}]);