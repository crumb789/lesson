(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"84f7":function(e,s,t){"use strict";t.r(s);var n=t("7a23"),o={class:"container-sm"},a={class:"header"},i={class:"header-wrapper"},l={key:0,class:"bi bi-pencil"},c={key:1,class:"bi bi-caret-right-fill"},r=Object(n["g"])("i",{class:"bi bi-file-plus"},null,-1),d=[r],u={class:"wrapper"},b={class:"week-salary",style:{"font-size":"30px",cursor:"pointer"}},h={key:2,class:"week-wrapper"},f={class:"week-salary"};function y(e,s,t,r,y,O){var m=Object(n["z"])("list-days"),j=Object(n["z"])("add-student");return Object(n["t"])(),Object(n["f"])("div",o,[Object(n["g"])("div",a,[Object(n["g"])("div",i,[Object(n["g"])("div",{class:Object(n["o"])([{toggleActive:y.editLesson},"lessons-toggle"])},[Object(n["g"])("div",{class:Object(n["o"])([{editActive:y.editLesson},"lessons-toggle_btn"])},[Object(n["g"])("div",{class:"lessons-edit",onClick:s[0]||(s[0]=function(e){return y.editLesson=!y.editLesson})},[y.editLesson?(Object(n["t"])(),Object(n["f"])("i",c)):(Object(n["t"])(),Object(n["f"])("i",l))])],2)],2),Object(n["g"])("h1",null,[Object(n["g"])("div",{style:Object(n["p"])({width:O.widthDivider+"%"}),class:"divider"},null,4),Object(n["i"])(" "+Object(n["B"])(y.mainHeader),1)]),y.editLesson?Object(n["e"])("",!0):(Object(n["t"])(),Object(n["f"])("div",{key:0,onClick:s[1]||(s[1]=function(e){return y.showForm=!y.showForm}),class:"btn-add"},d)),y.editLesson?(Object(n["t"])(),Object(n["f"])("div",{key:1,onClick:s[2]||(s[2]=function(e){return y.showForm=!y.showForm}),class:"btn-add"})):Object(n["e"])("",!0)])]),Object(n["g"])("div",u,[(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["x"])(y.week,(function(e){return Object(n["t"])(),Object(n["d"])(m,{key:e.id,item:e,lessons:y.lessons,editLesson:y.editLesson,onCostPush:O.costPush,onCostRemove:O.costRemove,onRemoveLesson:O.removeLesson,onMoveItemUp:O.moveItemUp,onMoveItemDown:O.moveItemDown,onChangeDay:O.changeDay},null,8,["item","lessons","editLesson","onCostPush","onCostRemove","onRemoveLesson","onMoveItemUp","onMoveItemDown","onChangeDay"])})),128))]),y.showForm?(Object(n["t"])(),Object(n["d"])(j,{key:0,onSubmittedLesson:O.submettedLesson,onCloseFormAddStudent:O.closeFormAddStudent,lessons:y.lessons},null,8,["onSubmittedLesson","onCloseFormAddStudent","lessons"])):Object(n["e"])("",!0),y.wallet?Object(n["e"])("",!0):(Object(n["t"])(),Object(n["f"])("div",{key:1,class:"week-wrapper",onClick:s[4]||(s[4]=function(){return O.walletChange&&O.walletChange.apply(O,arguments)})},[Object(n["g"])("div",b,[Object(n["g"])("i",{onClick:s[3]||(s[3]=function(e){return y.coin=!y.coin}),class:"bi bi-wallet2 week-wallet"}),Object(n["g"])("i",{class:Object(n["o"])(["bi bi-cash week-token",{hover:!0===y.coin}])},null,2)])])),y.wallet?(Object(n["t"])(),Object(n["f"])("div",h,[Object(n["g"])("div",f,[Object(n["g"])("i",{onClick:s[5]||(s[5]=function(e){return y.wallet=!y.wallet}),class:"bi bi-arrow-left",style:{"font-size":"30px",cursor:"pointer"}}),Object(n["g"])("span",null,Object(n["B"])(e.sumSalary+" rub"),1)]),Object(n["g"])("button",{onClick:s[6]||(s[6]=function(){return O.clearSumSalary&&O.clearSumSalary.apply(O,arguments)}),type:"button",class:"btn btn-light"}," Clear ")])):Object(n["e"])("",!0)])}t("d3b7"),t("4de4"),t("159b"),t("e9c4");var O=t("13dc"),m=t("b349"),j={components:{ListDays:O["a"],AddStudent:m["a"]},data:function(){return{mainHeader:"Lesson",selectedTab:void 0,showForm:!1,lessons:[],salary:[],editLesson:!1,wallet:!1,Sum:[],coin:!1,week:[{id:"1",day:"Monday"},{id:"2",day:"Tuesday "},{id:"3",day:"Wednesday "},{id:"4",day:"Thursday "},{id:"5",day:"Friday "},{id:"6",day:" Saturday "},{id:"7",day:"Sunday"}]}},methods:{walletChange:function(){var e=this;setTimeout((function(){e.wallet=!e.wallet,e.coin=!1}),1e3)},closeFormAddStudent:function(){this.showForm=!1},submettedLesson:function(e){this.lessons.push(e),this.showForm=!1},changeDay:function(e,s){console.log(e),console.log(s),this.lessons[e].day=String(s)},costPush:function(e){this.salary.push(e.cost),this.sumSalary=this.salary.reduce((function(e,s){return s+e}),0)},removeLesson:function(e){this.lessons=this.lessons.filter((function(s){return s.id!==e.id}))},costRemove:function(e){this.salary=this.salary.filter((function(s){return s!=e.cost})),this.sumSalary=this.salary.reduce((function(e,s){return s+e}),0)},clearSumSalary:function(e){this.sumSalary=0,this.salary=this.salary.filter((function(s){return s.id!=e.id})),this.lessons.forEach((function(e){return e.done=!1}))},moveItemUp:function(e){var s=this.lessons.indexOf(e),t=s-1;if(-1!==s&&-1!==t){var n=[this.lessons[t],this.lessons[s]];this.lessons[s]=n[0],this.lessons[t]=n[1]}else s=0},moveItemDown:function(e){var s=this.lessons.indexOf(e),t=s+1;if(s!==this.lessons.length&&t!==this.lessons.length){var n=[this.lessons[t],this.lessons[s]];this.lessons[s]=n[0],this.lessons[t]=n[1]}}},computed:{widthDivider:function(){var e=this,s=[],t=[];this.lessons.forEach((function(n){n.done?t.push(1):s=e.lessons.length}));var n=t.reduce((function(e,s){return s+e}),0);return n===this.lessons.length?100:s+n}},mounted:function(){localStorage.lessons&&(this.lessons=JSON.parse(localStorage.lessons)),localStorage.sumSalary&&(this.sumSalary=JSON.parse(localStorage.sumSalary)),localStorage.salary&&(this.salary=JSON.parse(localStorage.salary))},watch:{lessons:{handler:function(e){localStorage.lessons=JSON.stringify(e)},deep:!0},sumSalary:{handler:function(e){localStorage.sumSalary=JSON.stringify(e)},deep:!0},salary:{handler:function(e){localStorage.salary=JSON.stringify(e)},deep:!0}}},g=t("6b0d"),v=t.n(g);const w=v()(j,[["render",y]]);s["default"]=w},f820:function(e,s,t){"use strict";t.r(s);var n=t("7a23"),o={class:"about"},a=Object(n["g"])("h1",null,"This is an about page",-1),i=[a];function l(e,s){return Object(n["t"])(),Object(n["f"])("div",o,i)}var c=t("6b0d"),r=t.n(c);const d={},u=r()(d,[["render",l]]);s["default"]=u}}]);
//# sourceMappingURL=about.97de2cf3.js.map