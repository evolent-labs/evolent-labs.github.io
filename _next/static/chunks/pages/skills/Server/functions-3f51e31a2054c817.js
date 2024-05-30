(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[781],{2342:function(e,l,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/skills/Server/functions",function(){return s(3529)}])},6408:function(e,l,s){"use strict";var n=s(1527);s(959);let r={logo:(0,n.jsx)("span",{children:"Void Development"}),project:{link:"https://github.com/Void-Developments"},chat:{link:"https://discord.gg/SJJ9Uc9NAp"},docsRepositoryBase:"https://github.com/Void-Developments/voiddevelopments.github.io",footer:{text:"Void Development"}};l.Z=r},3529:function(e,l,s){"use strict";s.r(l),s.d(l,{__toc:function(){return t}});var n=s(1527),r=s(3730),i=s(5380),o=s(6408);s(132);var a=s(582);let t=[{depth:2,value:"addXp",id:"addxp"},{depth:2,value:"removeXp",id:"removexp"},{depth:2,value:"getSkillLevel",id:"getskilllevel"},{depth:2,value:"getSkillXp",id:"getskillxp"},{depth:2,value:"setSkillLevel",id:"setskilllevel"},{depth:2,value:"resetSkill",id:"resetskill"},{depth:2,value:"getAllSkills",id:"getallskills"}];function c(e){let l=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",span:"span",ul:"ul",li:"li",strong:"strong"},(0,a.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.h1,{children:"Server Exports"}),"\n",(0,n.jsx)(l.h2,{id:"addxp",children:"addXp"}),"\n",(0,n.jsx)(l.p,{children:"Adds a specified amount of XP to a player's skill."}),"\n",(0,n.jsx)(l.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsx)(l.code,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"exports.evolent_skills:"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"addXp"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"(playerId, skill, xpAmount)"})]})})}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:["playerId: ",(0,n.jsx)(l.code,{children:"number"})]}),"\n",(0,n.jsxs)(l.li,{children:["skill: ",(0,n.jsx)(l.code,{children:"string"})]}),"\n",(0,n.jsxs)(l.li,{children:["xpAmount: ",(0,n.jsx)(l.code,{children:"number"})]}),"\n"]}),"\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.strong,{children:"Example:"})}),"\n",(0,n.jsx)(l.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(l.code,{"data-language":"lua","data-theme":"default",children:[(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"RegisterCommand"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'addshootingskill'"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-parameter)"},children:"source"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-parameter)"},children:"args"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" target "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" args["}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"]"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"    exports.evolent_skills:"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"addXp"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"(target, "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'shooting'"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-constant)"},children:"50"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})}),"\n",(0,n.jsx)(l.h2,{id:"removexp",children:"removeXp"}),"\n",(0,n.jsx)(l.p,{children:"Removes a specified amount of XP to a player's skill."}),"\n",(0,n.jsx)(l.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsx)(l.code,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"exports.evolent_skills:"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"removeXp"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"(playerId, skill, xpAmount)"})]})})}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:["playerId: ",(0,n.jsx)(l.code,{children:"number"})]}),"\n",(0,n.jsxs)(l.li,{children:["skill: ",(0,n.jsx)(l.code,{children:"string"})]}),"\n",(0,n.jsxs)(l.li,{children:["xpAmount: ",(0,n.jsx)(l.code,{children:"number"})]}),"\n"]}),"\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.strong,{children:"Example:"})}),"\n",(0,n.jsx)(l.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(l.code,{"data-language":"lua","data-theme":"default",children:[(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"RegisterCommand"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'removedrivingskill'"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-parameter)"},children:"source"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-parameter)"},children:"args"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" target "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" args["}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"]"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"    exports.evolent_skills:"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"addXp"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"(target, "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'driving'"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-constant)"},children:"20"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})}),"\n",(0,n.jsx)(l.h2,{id:"getskilllevel",children:"getSkillLevel"}),"\n",(0,n.jsx)(l.p,{children:"Gets the current level of a player's skill."}),"\n",(0,n.jsx)(l.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsx)(l.code,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"exports.evolent_skills:"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"getSkillLevel"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"(playerId, skill)"})]})})}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:["playerId: ",(0,n.jsx)(l.code,{children:"number"})]}),"\n",(0,n.jsxs)(l.li,{children:["skill: ",(0,n.jsx)(l.code,{children:"string"})]}),"\n"]}),"\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.strong,{children:"Example:"})}),"\n",(0,n.jsx)(l.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(l.code,{"data-language":"lua","data-theme":"default",children:[(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" skillLevel "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" exports.evolent_skills:"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"getSkillLevel"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'driving'"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" skillLevel "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-constant)"},children:"10"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"then"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Player is above level 10!'"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,n.jsx)(l.span,{className:"line",children:(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})})]})}),"\n",(0,n.jsx)(l.h2,{id:"getskillxp",children:"getSkillXp"}),"\n",(0,n.jsx)(l.p,{children:"Gets the current XP of a player's skill."}),"\n",(0,n.jsx)(l.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsx)(l.code,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"exports.evolent_skills:"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"getSkillXp"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"(playerId, skill)"})]})})}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:["playerId: ",(0,n.jsx)(l.code,{children:"number"})]}),"\n",(0,n.jsxs)(l.li,{children:["skill: ",(0,n.jsx)(l.code,{children:"string"})]}),"\n"]}),"\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.strong,{children:"Example:"})}),"\n",(0,n.jsx)(l.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(l.code,{"data-language":"lua","data-theme":"default",children:[(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" skillXp "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" exports.evolent_skills:"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"getSkillXp"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'shooting'"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"(skillXp) "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-comment)"},children:"-- 182"})]})]})}),"\n",(0,n.jsx)(l.h2,{id:"setskilllevel",children:"setSkillLevel"}),"\n",(0,n.jsx)(l.p,{children:"Sets the level of a player's skill, recalculating the XP based on the level."}),"\n",(0,n.jsx)(l.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsx)(l.code,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"exports.evolent_skills:"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"setSkillLevel"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"(playerId, skill, level)"})]})})}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:["playerId: ",(0,n.jsx)(l.code,{children:"number"})]}),"\n",(0,n.jsxs)(l.li,{children:["skill: ",(0,n.jsx)(l.code,{children:"string"})]}),"\n",(0,n.jsxs)(l.li,{children:["level: ",(0,n.jsx)(l.code,{children:"number"})]}),"\n"]}),"\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.strong,{children:"Example:"})}),"\n",(0,n.jsx)(l.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(l.code,{"data-language":"lua","data-theme":"default",children:[(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"isTooDumb"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"(source) "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"then"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"    exports.evolent_skills:"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"setSkillLevel"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"(source, "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'driving'"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-constant)"},children:"50"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,n.jsx)(l.span,{className:"line",children:(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})})]})}),"\n",(0,n.jsx)(l.h2,{id:"resetskill",children:"resetSkill"}),"\n",(0,n.jsx)(l.p,{children:"Resets a player's skill to level 1 with 0 XP."}),"\n",(0,n.jsx)(l.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsx)(l.code,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"exports.evolent_skills:"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"resetSkill"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"(playerId, skill, level)"})]})})}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:["playerId: ",(0,n.jsx)(l.code,{children:"number"})]}),"\n",(0,n.jsxs)(l.li,{children:["skill: ",(0,n.jsx)(l.code,{children:"string"})]}),"\n"]}),"\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.strong,{children:"Example:"})}),"\n",(0,n.jsx)(l.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(l.code,{"data-language":"lua","data-theme":"default",children:[(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"isExploiting"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"(source) "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"then"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"    exports.evolent_skills:"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"resetSkill"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"(source, "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'sales'"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,n.jsx)(l.span,{className:"line",children:(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})})]})}),"\n",(0,n.jsx)(l.h2,{id:"getallskills",children:"getAllSkills"}),"\n",(0,n.jsx)(l.p,{children:"Gets all skills and their levels for a player."}),"\n",(0,n.jsx)(l.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsx)(l.code,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"exports.evolent_skills:"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"getAllSkills"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"(playerId)"})]})})}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:["playerId: ",(0,n.jsx)(l.code,{children:"number"})]}),"\n",(0,n.jsxs)(l.li,{children:["skill: ",(0,n.jsx)(l.code,{children:"string"})]}),"\n"]}),"\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.strong,{children:"Example:"})}),"\n",(0,n.jsx)(l.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(l.code,{"data-language":"lua","data-theme":"default",children:[(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" skills "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" exports.evolent_skills:"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"getAllSkills"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"(source)"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"for"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" skillName, skillData "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"in"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"pairs"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"(skills) "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"do"})]}),"\n",(0,n.jsxs)(l.span,{className:"line",children:[(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,n.jsx)(l.span,{style:{color:"var(--shiki-color-text)"},children:"(skillName, skillData.level, skillData.xp)"})]}),"\n",(0,n.jsx)(l.span,{className:"line",children:(0,n.jsx)(l.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})})]})})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:l}=Object.assign({},(0,a.a)(),e.components);return l?(0,n.jsx)(l,{...e,children:(0,n.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/skills/Server/functions.mdx",route:"/skills/Server/functions",pageMap:[{kind:"Meta",data:{index:"Introduction",skills:"Skills"}},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"skills",route:"/skills",children:[{kind:"Folder",name:"Server",route:"/skills/Server",children:[{kind:"MdxPage",name:"functions",route:"/skills/Server/functions"},{kind:"Meta",data:{functions:"Functions"}}]}]},{kind:"MdxPage",name:"skills",route:"/skills"}],flexsearch:{codeblocks:!0},title:"Server Exports",headings:t},pageNextRoute:"/skills/Server/functions",nextraLayout:i.ZP,themeConfig:o.Z};l.default=(0,r.j)(d)}},function(e){e.O(0,[774,597,888,179],function(){return e(e.s=2342)}),_N_E=e.O()}]);