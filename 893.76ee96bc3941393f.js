"use strict";(self.webpackChunkng_course=self.webpackChunkng_course||[]).push([[893],{3893:(E,d,i)=>{i.r(d),i.d(d,{CoursesPageModule:()=>q});var c=i(9808),l=i(2382),p=i(8118),e=i(1223),g=i(3867),C=i(8422);let f=(()=>{class t{constructor(){this.close=new e.vpe,this.confirm=new e.vpe}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-modal-window"]],outputs:{close:"close",confirm:"confirm"},decls:9,vars:0,consts:[[1,"overlay"],[1,"modal"],[1,"btn-container"],[1,"btn",3,"click"],[1,"btn","btn-red",3,"click"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"h1"),e._uU(3,"Do you really want to delete this course?"),e.qZA(),e.TgZ(4,"div",2),e.TgZ(5,"button",3),e.NdJ("click",function(){return o.confirm.emit()}),e._uU(6,"Yes"),e.qZA(),e.TgZ(7,"button",4),e.NdJ("click",function(){return o.close.emit()}),e._uU(8,"No"),e.qZA(),e.qZA(),e.qZA(),e.qZA())},styles:[".overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#00000080;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);z-index:100}.overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);max-width:60rem;background-color:#f3f3f3;padding:3rem 4rem;box-shadow:0 4rem 6rem #0000004d;z-index:1000}.overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:18px;margin-bottom:40px}.overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:200px}.overlay[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:80px}"]}),t})(),_=(()=>{class t{constructor(n){this.router=n,this.inputValue="",this.inputValueEvent=new e.vpe}inputHandler(n){this.inputValueEvent.emit(n)}addCourseHandler(){this.router.navigate(["courses/new"])}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(p.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-input-section"]],outputs:{inputValueEvent:"inputValueEvent"},decls:8,vars:1,consts:[[1,"input-section-wrap","flex-center"],[1,"container","flex-center-sb","search-form"],[1,"flex-center-gap-20"],["type","text","placeholder","Text to search",3,"ngModel","ngModelChange"],[1,"btn",3,"click"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"input",3),e.NdJ("ngModelChange",function(a){return o.inputValue=a}),e.qZA(),e.TgZ(4,"button",4),e.NdJ("click",function(){return o.inputHandler(o.inputValue)}),e._uU(5,"Search"),e.qZA(),e.qZA(),e.TgZ(6,"button",4),e.NdJ("click",function(){return o.addCourseHandler()}),e._uU(7," \u2705 Add course "),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(3),e.Q6J("ngModel",o.inputValue))},directives:[l.Fj,l.JJ,l.On],styles:["input[_ngcontent-%COMP%]{height:30px;border:2px solid #b9b9b9;border-radius:5px;background-color:inherit;padding:5px}.search-form[_ngcontent-%COMP%]{padding:20px 0}"]}),t})();var u=i(9379);let h=(()=>{class t{constructor(n){this.element=n,this.date="",this.creationDate=0,this.currentDate=Date.now(),this.fourteenDays=u.mK*u.ks*u.oG*u.Ix*(2*u.NA)}ngOnInit(){this.creationDate=Date.parse(this.date),this.creationDate<this.currentDate&&this.creationDate>=this.currentDate-this.fourteenDays&&this.changeBorderColor("green"),this.creationDate>this.currentDate&&this.changeBorderColor("blue")}changeBorderColor(n){this.element.nativeElement.style.borderColor=n}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(e.SBq))},t.\u0275dir=e.lG2({type:t,selectors:[["","course-item-border",""]],inputs:{date:["course-item-border","date"]}}),t})();var v=i(8105);const m=function(t){return{active:t}},b=function(t){return["/courses",t]};let Z=(()=>{class t{constructor(){this.course={id:0,name:"",date:"",length:0,description:"",isTopRated:!1},this.courseNumber=0,this.topRatedClicked=new e.vpe,this.deleteEvent=new e.vpe}get numberOfCourse(){return`${this.courseNumber+1}.`}topRatedHandle(){this.topRatedClicked.emit(this.course)}deleteHandler(){this.deleteEvent.emit(this.course.id),console.log(this.course.id)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-course-item"]],inputs:{course:"course",courseNumber:"courseNumber"},outputs:{topRatedClicked:"topRatedClicked",deleteEvent:"deleteEvent"},decls:27,vars:22,consts:[[1,"course-card","flex-center"],[1,"container","flex-center-gap-20","course-card-item",3,"course-item-border"],[1,"content","flex-column-gap-20"],[1,"content-heading","flex-center-sb"],[1,"flex-center"],[1,"content-name"],[3,"click"],[1,"content-top-rated",3,"ngClass"],[1,"content-info","flex-center-gap-20"],[1,"content-duration"],[1,"content-date"],[1,"content-text"],[1,"btn-container","flex-column-gap-20"],[1,"btn",3,"routerLink"],[1,"btn","btn-red",3,"click"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"h2",5),e._uU(6),e.ALo(7,"titlecase"),e.qZA(),e.TgZ(8,"div",6),e.NdJ("click",function(){return o.topRatedHandle()}),e.TgZ(9,"span",7),e._uU(10,"\u2606"),e.qZA(),e.TgZ(11,"span",7),e._uU(12,"\u2605"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(13,"div",8),e.TgZ(14,"h2",9),e._uU(15),e.ALo(16,"duration"),e.qZA(),e.TgZ(17,"h2",10),e._uU(18),e.ALo(19,"date"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(20,"p",11),e._uU(21),e.qZA(),e.qZA(),e.TgZ(22,"div",12),e.TgZ(23,"button",13),e._uU(24," \u2705 Edit "),e.qZA(),e.TgZ(25,"button",14),e.NdJ("click",function(){return o.deleteHandler()}),e._uU(26," \u274e Delete "),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(1),e.Q6J("course-item-border",o.course.date),e.xp6(5),e.AsE(" ",o.numberOfCourse," ",e.lcZ(7,9,o.course.name)," "),e.xp6(3),e.Q6J("ngClass",e.VKq(16,m,!o.course.isTopRated)),e.xp6(2),e.Q6J("ngClass",e.VKq(18,m,o.course.isTopRated)),e.xp6(4),e.hij(" ",e.lcZ(16,11,o.course.length)," "),e.xp6(3),e.hij(" ",e.xi3(19,13,o.course.date,"MM.dd.yyyy")," "),e.xp6(3),e.hij(" ",o.course.description," "),e.xp6(2),e.Q6J("routerLink",e.VKq(20,b,o.course.id)))},directives:[h,c.mk,p.rH],pipes:[c.rS,v.u,c.uU],styles:["h2[_ngcontent-%COMP%]{font-size:16px}button[_ngcontent-%COMP%]{width:85px;text-align:center}.content[_ngcontent-%COMP%]{min-width:1155px;min-height:80px}.course-card-item[_ngcontent-%COMP%]{border:2px solid #777;background-color:#fff;box-sizing:border-box;padding:20px}.content-top-rated[_ngcontent-%COMP%]{display:none;cursor:pointer;padding-bottom:3px;margin-left:5px;text-align:center;font-size:20px}.active[_ngcontent-%COMP%]{display:block}"],changeDetection:0}),t})(),x=(()=>{class t{transform(n){return n.length>1?n.sort((o,s)=>Date.parse(s.date)-Date.parse(o.date)):n}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=e.Yjl({name:"orderBy",type:t,pure:!0}),t})();function T(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"app-modal-window",7),e.NdJ("close",function(){return e.CHM(n),e.oxw().modal=!1})("confirm",function(){return e.CHM(n),e.oxw().closeModalDeleteCourse()}),e.qZA()}}function M(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"app-course-item",8),e.NdJ("deleteEvent",function(s){return e.CHM(n),e.oxw().eventHandler(s)})("topRatedClicked",function(s){return e.CHM(n),e.oxw().markTopRated(s)}),e.qZA()}if(2&t){const o=r.index;e.Q6J("course",r.$implicit)("courseNumber",o)}}function y(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"button",9),e.NdJ("click",function(){return e.CHM(n),e.oxw().loadMoreHandler()}),e._uU(1," LOAD MORE "),e.qZA()}}function w(t,r){1&t&&(e.TgZ(0,"div",10),e._uU(1," NO DATA. FEEL FREE TO ADD NEW COURSE "),e.qZA())}let O=(()=>{class t{constructor(n){this.coursesDataService=n,this.courseId=0,this.modal=!1,this.courses=[],this.amountOfCourses=5}loadMoreHandler(){this.amountOfCourses+=2,this.getCourses(this.amountOfCourses)}ngOnInit(){this.getCourses(this.amountOfCourses)}getCourses(n){this.coursesDataService.getList(0,n).subscribe(o=>this.courses=o)}closeModalDeleteCourse(){this.coursesDataService.removeCourseById(this.courseId).subscribe(()=>{this.getCourses(this.amountOfCourses)}),this.modal=!1}markTopRated(n){this.coursesDataService.markCourseTopRated(n).subscribe(()=>this.getCourses(this.amountOfCourses))}eventHandler(n){this.courseId=n,this.modal=!0}searchCourses(n){""===n.trim()?this.getCourses(this.amountOfCourses):this.coursesDataService.searchCourses(n).subscribe(o=>{this.courses=o})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(C.q))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-courses-list"]],decls:8,vars:6,consts:[[3,"close","confirm",4,"ngIf"],[3,"inputValueEvent"],[1,"courses-list-wrap","flex-center"],[1,"container","flex-column-gap-20"],[3,"course","courseNumber","deleteEvent","topRatedClicked",4,"ngFor","ngForOf"],["class","load-more",3,"click",4,"ngIf"],["class","load-more no-data-message flex-center",4,"ngIf"],[3,"close","confirm"],[3,"course","courseNumber","deleteEvent","topRatedClicked"],[1,"load-more",3,"click"],[1,"load-more","no-data-message","flex-center"]],template:function(n,o){1&n&&(e.YNc(0,T,1,0,"app-modal-window",0),e.TgZ(1,"app-input-section",1),e.NdJ("inputValueEvent",function(a){return o.searchCourses(a)}),e.qZA(),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.YNc(4,M,1,2,"app-course-item",4),e.ALo(5,"orderBy"),e.YNc(6,y,2,0,"button",5),e.YNc(7,w,2,0,"div",6),e.qZA(),e.qZA()),2&n&&(e.Q6J("ngIf",o.modal),e.xp6(4),e.Q6J("ngForOf",e.lcZ(5,4,o.courses)),e.xp6(2),e.Q6J("ngIf",o.courses.length>=1),e.xp6(1),e.Q6J("ngIf",o.courses.length<1))},directives:[c.O5,f,_,c.sg,Z],pipes:[x],styles:[".courses-list-wrap[_ngcontent-%COMP%]{height:100%}.load-more[_ngcontent-%COMP%]{border:2px solid #777;text-align:center;margin-bottom:20px;background-color:#fff;height:50px;cursor:pointer;width:100%;font-weight:500}.no-data-message[_ngcontent-%COMP%]{cursor:default}"]}),t})();const A=[{path:"",component:(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-courses-page"]],decls:2,vars:0,template:function(n,o){1&n&&(e._UZ(0,"app-breadcrumbs"),e._UZ(1,"app-courses-list"))},directives:[g.n,O],styles:[""]}),t})()}];let P=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[p.Bz.forChild(A)],p.Bz]}),t})();var k=i(4263),D=i(4734);let q=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[c.ez,l.u5,P,k.t,D.J]]}),t})()}}]);