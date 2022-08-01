"use strict";(self.webpackChunkfe_mentor_designo_react=self.webpackChunkfe_mentor_designo_react||[]).push([[655],{7105:function(e,a,t){t.r(a),t.d(a,{default:function(){return T}});var n=t(7213),r=t(3598),o=t(4684),s=t(4706),l=t(3836),i=t(9160),c=t(9459),u=t(9269),d={"contact-form":"ContactForm_contact-form__eY7F+",content:"ContactForm_content__CiF1c",form:"ContactForm_form__Jl43c","form-control":"ContactForm_form-control__9ocC9","error-text":"ContactForm_error-text__1FTHB","form-actions":"ContactForm_form-actions__CD1mB"},m=t(8152),h=t(2791),p={value:"",isTouched:!1},x=function e(a,t){return"INPUT"===t.type?{value:t.value,isTouched:a.isTouched}:"BLUR"===t.type?{isTouched:!0,value:a.value}:"RESET"===t.type?{isTouched:!1,value:""}:e},f=function(e){var a=(0,h.useReducer)(x,p),t=(0,m.Z)(a,2),n=t[0],r=t[1],o=e(n.value),s=!o&&n.isTouched;return{value:n.value,isValid:o,hasError:s,valueChangeHandler:function(e){r({type:"INPUT",value:e.target.value})},inputBlurHandler:function(){r({type:"BLUR"})},reset:function(){r({type:"RESET"})}}};var v=t.p+"static/media/icon-error.fd5e1ede84a613c61261af737d2bf0c7.svg",g=t(184),j=/^[a-zA-Z,'.\-\s]+$/g,b=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,C=/^[0-9\b]+$/,_=function(e){return e.match(j)},y=function(e){return""!==e.trim()},N=function(e){return e.match(b)},k=function(e){return e.match(C)},B=function(e){var a=e.children,t=(0,g.jsx)("img",{src:v,alt:"error"}),n=f(_),r=n.value,o=n.isValid,s=n.hasError,l=n.valueChangeHandler,i=n.inputBlurHandler,m=n.reset,h=f(N),p=h.value,x=h.isValid,j=h.hasError,b=h.valueChangeHandler,C=h.inputBlurHandler,B=h.reset,T=f(y&&k),H=T.value,w=T.isValid,z=T.hasError,E=T.valueChangeHandler,Z=T.inputBlurHandler,F=T.reset,R=f(y),U=R.value,V=R.isValid,L=R.hasError,M=R.valueChangeHandler,S=R.inputBlurHandler,$=R.reset,A=!1;o&&x&&w&&V&&(A=!0);return(0,g.jsxs)(u.Z,{type:"bg-pattern-big-circle",classes:d["contact-form"],children:[(0,g.jsx)("div",{className:"".concat(d.content," flow"),children:a}),(0,g.jsxs)("form",{className:d.form,onSubmit:function(e){e.preventDefault(),A&&(alert("Thank you for contacting us!"),m(),B(),F(),$())},children:[(0,g.jsx)("div",{className:d["control-group"],children:(0,g.jsxs)("div",{className:d["form-control"],children:[(0,g.jsx)("input",{type:"text",id:"name",name:"name",placeholder:"Name",value:r,onChange:l,onBlur:i}),s&&(0,g.jsxs)("p",{className:d["error-text"],children:["Must be a valid name!",t]})]})}),(0,g.jsx)("div",{className:d["control-group"],children:(0,g.jsxs)("div",{className:d["form-control"],children:[(0,g.jsx)("input",{type:"email",id:"email",name:"email",value:p,onChange:b,onBlur:C,placeholder:"Email Address"}),j&&(0,g.jsxs)("p",{className:d["error-text"],children:["Must be a valid email!",t]})]})}),(0,g.jsx)("div",{className:d["control-group"],children:(0,g.jsxs)("div",{className:d["form-control"],children:[(0,g.jsx)("input",{type:"text",id:"phone",name:"phone",value:H,onChange:E,onBlur:Z,placeholder:"Phone"}),z&&(0,g.jsxs)("p",{className:d["error-text"],children:["Must be a valid phone number!",t]})]})}),(0,g.jsx)("div",{className:d["control-group"],children:(0,g.jsxs)("div",{className:d["form-control"],children:[(0,g.jsx)("textarea",{name:"message",id:"message",rows:"5",resize:"none",placeholder:"Your Message",onChange:M,onBlur:S,value:U}),L&&(0,g.jsxs)("p",{className:d["error-text"],children:["Can't be empty!",t]})]})}),(0,g.jsx)("div",{className:d["form-actions"],children:(0,g.jsx)(c.Z,{classes:"btn-light",disabled:!A,type:"button",children:"Submit"})})]})]})},T=function(){return(0,g.jsxs)(n.Z,{classes:"about flow",leafClass:"leaf-bottom",title:"Contact - Designo",children:[(0,g.jsx)("section",{children:(0,g.jsx)("div",{className:"container mobile-no-pad",children:(0,g.jsxs)(B,{children:[(0,g.jsx)("h1",{children:"Contact Us"}),(0,g.jsx)("p",{children:"Ready to take it to the next level? Let\u2019s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that\u2019s relatable to your users, drop us a line."})]})})}),(0,g.jsx)("section",{children:(0,g.jsx)("div",{className:"container",children:(0,g.jsx)(o.Z,{items:[{link:"/locations",image:s.Z,location:"Canada"},{link:"/locations",image:l.Z,location:"Australia"},{link:"/locations",image:i.Z,location:"United Kingdom"}]})})}),(0,g.jsx)("section",{className:"cta-box-bottom",children:(0,g.jsx)("div",{className:"container",children:(0,g.jsx)(r.Z,{title:"Let\u2019s talk about your project",text:"Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.",link:"/contact",linkText:"Get in touch"})})})]})}}}]);
//# sourceMappingURL=655.6f505e34.chunk.js.map