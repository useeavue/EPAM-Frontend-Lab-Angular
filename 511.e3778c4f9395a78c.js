"use strict";(self.webpackChunkng_course=self.webpackChunkng_course||[]).push([[511],{9511:(J,p,i)=>{i.r(p),i.d(p,{CoursesPageModule:()=>N});var c=i(9808),u=i(2382),l=i(6866),e=i(1223),d=i(8422);let g=(()=>{class t{constructor(){this.close=new e.vpe,this.confirm=new e.vpe}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-modal-window"]],outputs:{close:"close",confirm:"confirm"},decls:9,vars:0,consts:[[1,"overlay"],[1,"modal"],[1,"btn-container"],[1,"btn",3,"click"],[1,"btn","btn-red",3,"click"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"h1"),e._uU(3,"Do you really want to delete this course?"),e.qZA(),e.TgZ(4,"div",2),e.TgZ(5,"button",3),e.NdJ("click",function(){return o.confirm.emit()}),e._uU(6,"Yes"),e.qZA(),e.TgZ(7,"button",4),e.NdJ("click",function(){return o.close.emit()}),e._uU(8,"No"),e.qZA(),e.qZA(),e.qZA(),e.qZA())},styles:[".overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#00000080;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);z-index:100}.overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);max-width:60rem;background-color:#f3f3f3;padding:3rem 4rem;box-shadow:0 4rem 6rem #0000004d;z-index:1000}.overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:18px;margin-bottom:40px}.overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:200px}.overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:80px}"]}),t})();var C=i(3867);let _=(()=>{class t{constructor(n){this.router=n,this.inputValue="",this.inputValueEvent=new e.vpe}inputHandler(n){this.inputValueEvent.emit(n)}addCourseHandler(){this.router.navigate(["courses/new"])}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(l.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-input-section"]],outputs:{inputValueEvent:"inputValueEvent"},decls:8,vars:1,consts:[[1,"input-section-wrap","flex-center"],[1,"container","flex-center-sb","search-form"],[1,"flex-center-gap-20"],["type","text","placeholder","Text to search",3,"ngModel","ngModelChange"],[1,"btn",3,"click"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"input",3),e.NdJ("ngModelChange",function(a){return o.inputValue=a}),e.qZA(),e.TgZ(4,"button",4),e.NdJ("click",function(){return o.inputHandler(o.inputValue)}),e._uU(5,"Search"),e.qZA(),e.qZA(),e.TgZ(6,"button",4),e.NdJ("click",function(){return o.addCourseHandler()}),e._uU(7," \u2705 Add course "),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(3),e.Q6J("ngModel",o.inputValue))},directives:[u.Fj,u.JJ,u.On],styles:["input[_ngcontent-%COMP%]{height:30px;border:2px solid #b9b9b9;border-radius:5px;background-color:inherit;padding:5px}.search-form[_ngcontent-%COMP%]{padding:20px 0}"]}),t})(),T=(()=>{class t{constructor(n){this.element=n,this.creationDate=0,this.currentDate=Date.now(),this.fourteenDays=12096e5}ngOnInit(){this.creationDate<this.currentDate&&this.creationDate>=this.currentDate-this.fourteenDays&&this.changeBorderColor("green"),this.creationDate>this.currentDate&&this.changeBorderColor("blue")}changeBorderColor(n){this.element.nativeElement.style.borderColor=n}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(e.SBq))},t.\u0275dir=e.lG2({type:t,selectors:[["","course-item-border",""]],inputs:{creationDate:["course-item-border","creationDate"]}}),t})();var x=i(8105);const m=function(t){return{active:t}},M=function(t){return["/courses",t]};let w=(()=>{class t{constructor(){this.course={id:0,title:"",creationDate:0,duration:0,description:"",topRated:!1},this.topRatedClicked=new e.vpe,this.deleteEvent=new e.vpe}topRatedHandle(){this.topRatedClicked.emit(this.course.id)}deleteHandler(){this.deleteEvent.emit(this.course.id)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-course-item"]],inputs:{course:"course"},outputs:{topRatedClicked:"topRatedClicked",deleteEvent:"deleteEvent"},decls:27,vars:22,consts:[[1,"course-card","flex-center"],[1,"container","flex-center-gap-20","course-card-item",3,"course-item-border"],[1,"content","flex-column-gap-20"],[1,"content-heading","flex-center-sb"],[1,"flex-center"],[1,"content-name"],[3,"click"],[1,"content-top-rated",3,"ngClass"],[1,"content-info","flex-center-gap-20"],[1,"content-duration"],[1,"content-date"],[1,"content-text"],[1,"btn-container","flex-column-gap-20"],[1,"btn",3,"routerLink"],[1,"btn","btn-red",3,"click"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"h2",5),e._uU(6),e.ALo(7,"titlecase"),e.qZA(),e.TgZ(8,"div",6),e.NdJ("click",function(){return o.topRatedHandle()}),e.TgZ(9,"span",7),e._uU(10,"\u2606"),e.qZA(),e.TgZ(11,"span",7),e._uU(12,"\u2605"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(13,"div",8),e.TgZ(14,"h2",9),e._uU(15),e.ALo(16,"duration"),e.qZA(),e.TgZ(17,"h2",10),e._uU(18),e.ALo(19,"date"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(20,"p",11),e._uU(21),e.qZA(),e.qZA(),e.TgZ(22,"div",12),e.TgZ(23,"button",13),e._uU(24," \u2705 Edit "),e.qZA(),e.TgZ(25,"button",14),e.NdJ("click",function(){return o.deleteHandler()}),e._uU(26," \u274e Delete "),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(1),e.Q6J("course-item-border",o.course.creationDate),e.xp6(5),e.AsE(" ",e.lcZ(7,9,o.course.title)," ",o.course.id," "),e.xp6(3),e.Q6J("ngClass",e.VKq(16,m,!o.course.topRated)),e.xp6(2),e.Q6J("ngClass",e.VKq(18,m,o.course.topRated)),e.xp6(4),e.hij(" ",e.lcZ(16,11,o.course.duration)," "),e.xp6(3),e.hij(" ",e.xi3(19,13,o.course.creationDate,"MM.dd.yyyy")," "),e.xp6(3),e.hij(" ",o.course.description," "),e.xp6(2),e.Q6J("routerLink",e.VKq(20,M,o.course.id)))},directives:[T,c.mk,l.rH],pipes:[c.rS,x.u,c.uU],styles:["h2[_ngcontent-%COMP%]{font-size:16px}button[_ngcontent-%COMP%]{width:85px;text-align:center}.content[_ngcontent-%COMP%]{min-width:1155px;min-height:80px}.course-card-item[_ngcontent-%COMP%]{border:2px solid #777;background-color:#fff;box-sizing:border-box;padding:20px}.content-top-rated[_ngcontent-%COMP%]{display:none;cursor:pointer;padding-bottom:3px;margin-left:5px;text-align:center;font-size:20px}.active[_ngcontent-%COMP%]{display:block}"],changeDetection:0}),t})(),y=(()=>{class t{transform(n){return n.length>1?n.sort((o,s)=>s.creationDate-o.creationDate):n}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=e.Yjl({name:"orderBy",type:t,pure:!0}),t})();function A(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"app-course-item",5),e.NdJ("deleteEvent",function(s){return e.CHM(n),e.oxw().eventHandler(s)})("topRatedClicked",function(s){return e.CHM(n),e.oxw().coursesDataService.markCourseTopRated(s)}),e.qZA()}2&t&&e.Q6J("course",r.$implicit)}function O(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(){return e.CHM(n),e.oxw().loadMoreHandler()}),e._uU(1," LOAD MORE "),e.qZA()}}function P(t,r){1&t&&(e.TgZ(0,"div",7),e._uU(1," NO DATA. FEEL FREE TO ADD NEW COURSE "),e.qZA())}let k=(()=>{class t{constructor(n){this.coursesDataService=n,this.courses=[],this.btnCloseClicked=new e.vpe}loadMoreHandler(){console.log("Load more")}eventHandler(n){this.btnCloseClicked.emit(n)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(d.q))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-courses-list"]],inputs:{courses:"courses"},outputs:{btnCloseClicked:"btnCloseClicked"},decls:6,vars:5,consts:[[1,"courses-list-wrap","flex-center"],[1,"container","flex-column-gap-20"],[3,"course","deleteEvent","topRatedClicked",4,"ngFor","ngForOf"],["class","load-more",3,"click",4,"ngIf"],["class","load-more no-data-message flex-center",4,"ngIf"],[3,"course","deleteEvent","topRatedClicked"],[1,"load-more",3,"click"],[1,"load-more","no-data-message","flex-center"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.YNc(2,A,1,1,"app-course-item",2),e.ALo(3,"orderBy"),e.YNc(4,O,2,0,"button",3),e.YNc(5,P,2,0,"div",4),e.qZA(),e.qZA()),2&n&&(e.xp6(2),e.Q6J("ngForOf",e.lcZ(3,3,o.courses)),e.xp6(2),e.Q6J("ngIf",o.courses.length>=1),e.xp6(1),e.Q6J("ngIf",o.courses.length<1))},directives:[c.sg,w,c.O5],pipes:[y],styles:[".courses-list-wrap[_ngcontent-%COMP%]{height:100%}.load-more[_ngcontent-%COMP%]{border:2px solid #777;text-align:center;margin-bottom:20px;background-color:#fff;height:50px;cursor:pointer;width:100%;font-weight:500}.no-data-message[_ngcontent-%COMP%]{cursor:default}"]}),t})();function D(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"app-modal-window",3),e.NdJ("close",function(){return e.CHM(n),e.oxw().modal=!1})("confirm",function(){e.CHM(n);const s=e.oxw();return s.coursesData.removeCourseById(s.courseId),s.closeModalRefreshView()}),e.qZA()}}const E=[{path:"",component:(()=>{class t{constructor(n){this.coursesData=n,this.courses=[],this.searchString="",this.courseId=0,this.modal=!1}ngOnInit(){this.getCourses()}getCourses(){this.courses=this.coursesData.getList()}changeSearchString(n){this.searchString=n}closeModalRefreshView(){this.getCourses(),this.modal=!1}btnCloseEventHandler(n){this.courseId=n,this.modal=!0}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(d.q))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-courses-page"]],decls:4,vars:2,consts:[[3,"close","confirm",4,"ngIf"],[3,"inputValueEvent"],[3,"courses","btnCloseClicked"],[3,"close","confirm"]],template:function(n,o){1&n&&(e.YNc(0,D,1,0,"app-modal-window",0),e._UZ(1,"app-breadcrumbs"),e.TgZ(2,"app-input-section",1),e.NdJ("inputValueEvent",function(a){return o.changeSearchString(a)}),e.qZA(),e.TgZ(3,"app-courses-list",2),e.NdJ("btnCloseClicked",function(a){return o.btnCloseEventHandler(a)}),e.qZA()),2&n&&(e.Q6J("ngIf",o.modal),e.xp6(3),e.Q6J("courses",o.coursesData.filterCourses(o.searchString)))},directives:[c.O5,g,C.n,_,k],styles:[""]}),t})()}];let I=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[l.Bz.forChild(E)],l.Bz]}),t})();var q=i(4263),S=i(4734);let N=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[c.ez,u.u5,I,q.t,S.J]]}),t})()}}]);