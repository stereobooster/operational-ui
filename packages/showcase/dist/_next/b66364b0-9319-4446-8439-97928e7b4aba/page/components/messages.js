
          window.__NEXT_REGISTER_PAGE('/components/messages', function() {
            var comp = module.exports=webpackJsonp([38],{1233:function(e,t,n){e.exports=n(1234)},1234:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(o),i=n(10),s=n(214),r=a(s),c=n(213),p=a(c),u=n(13),m=a(u),f=[{name:"onClose",description:"Called when close icon is clicked. Icon is not rendered at all if this prop is not specified.",defaultValue:"",type:"() => void",optional:!0},{name:"children",description:"Message contents, can be any html element/React fragment.",defaultValue:"",type:"ReactElement",optional:!0}];t.default=function(e){return l.createElement(m.default,{pathname:e.url.pathname},l.createElement(i.Card,null,l.createElement("p",null,"Messages are the primitive building blocks for notification systems common in frontend applications. A single message simply includes some body (any html/React element) and an optional close icon."),l.createElement("h2",null,"Usage"),l.createElement(p.default,{snippet:'\n<Message color="info">\n  This is an important message from the New York City Police Department. Keep your belongings in sight at all times. Protect yourself. If you see a suspicious activity on the platform or train, do not keep it to yourself. Tell a police officer or an MTA employee. Remain alert and have a safe day!\n</Message>\n',components:{Message:i.Message}}),l.createElement("h2",null,"Props"),l.createElement(r.default,{props:f})))}}},[1233]);
            return { page: comp.default }
          })
        