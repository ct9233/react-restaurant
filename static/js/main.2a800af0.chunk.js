(this.webpackJsonpportfolioproject2=this.webpackJsonpportfolioproject2||[]).push([[0],{146:function(e,t,a){},147:function(e,t,a){"use strict";a.r(t);var i=a(1),s=a.n(i),n=a(9),l=a.n(n);a(92),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(93),a(94),a(95),a(96),a(97);var r=a(15),u=a(16),c=a(18),m=a(17),o=a(4),d=a(23),p=a(3),g=a(11),v=function(e){return e&&e.length},E=function(e){return function(t){return!t||t.length<=e}},f=function(e){return function(t){return t&&t.length>=e}},h=function(e){return!isNaN(+e)},q=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},b=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={isNavOpen:!1,isModalOpen:!1,firstName:"",lastName:"",phoneNum:"",email:"",requests:"",touched:{firstName:!1,lastName:!1,phoneNum:!1,email:!1}},i.toggleNav=i.toggleNav.bind(Object(d.a)(i)),i.toggleModal=i.toggleModal.bind(Object(d.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(d.a)(i)),i}return Object(u.a)(a,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){this.props.resetReservationForm(),this.props.postReservation(e)}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(p.g,{fluid:!0},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col pl-1"},s.a.createElement("img",{src:"/assets/images/ristorante_header.jpg",height:"140",align:"left",className:"rounded",alt:"Ristorante"}))))),s.a.createElement(p.n,{dark:!0,sticky:"top",expand:"md"},s.a.createElement(p.o,{className:"mr-md-2",href:"/"},s.a.createElement("img",{src:"/assets/images/R-blue-large-letters.jpg",height:"35",width:"35",alt:"Ristorante Logo"})),s.a.createElement(p.p,{onClick:this.toggleNav}),s.a.createElement(p.f,{isOpen:this.state.isNavOpen,navbar:!0},s.a.createElement(p.l,{navbar:!0},s.a.createElement(p.m,null,s.a.createElement(o.c,{className:"nav-link",to:"/home",activeStyle:{color:"#488cf3"}},s.a.createElement("i",{className:"fa fa-home fa-lg"})," Home")),s.a.createElement(p.m,null,s.a.createElement(o.c,{className:"nav-link",to:"/menu",activeStyle:{color:"#488cf3"}},s.a.createElement("i",{className:"fa fa-list-alt fa-lg"})," Menu")),s.a.createElement(p.m,null,s.a.createElement(o.c,{className:"nav-link",to:"/story",activeStyle:{color:"#488cf3"}},s.a.createElement("i",{className:"fa fa-info fa-lg"})," Story")),s.a.createElement(p.m,null,s.a.createElement(o.c,{className:"nav-link",to:"/contact",activeStyle:{color:"#488cf3"}},s.a.createElement("i",{className:"fa fa-address-card fa-lg"})," Contact"))),s.a.createElement("span",{className:"ml-auto"}))),s.a.createElement(p.i,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,centered:!0},s.a.createElement(p.k,{toggle:this.toggleModal},"Reservation"),s.a.createElement(p.j,null,s.a.createElement(g.Form,{model:"reservationForm",onSubmit:function(t){return e.handleSubmit(t)}},s.a.createElement(p.q,{className:"form-group"},s.a.createElement(p.h,{htmlFor:"firstName",md:2},"First Name"),s.a.createElement(p.e,{md:10},s.a.createElement(g.Control.text,{model:".firstName",id:"firstName",name:"firstName",placeholder:"First Name",className:"form-control",validators:{required:v,minLength:f(2),maxLength:E(15)}}),s.a.createElement(g.Errors,{className:"text-danger",model:".firstName",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 2 characters",maxLength:"Must be 15 characters or less"}}))),s.a.createElement(p.q,{className:"form-group"},s.a.createElement(p.h,{htmlFor:"lastName",md:2},"Last Name"),s.a.createElement(p.e,{md:10},s.a.createElement(g.Control.text,{model:".lastName",id:"lastName",name:"lastName",placeholder:"Last Name",className:"form-control",validators:{required:v,minLength:f(2),maxLength:E(15)}}),s.a.createElement(g.Errors,{className:"text-danger",model:".lastName",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 2 characters",maxLength:"Must be 15 characters or less"}}))),s.a.createElement(p.q,{className:"form-group"},s.a.createElement(p.h,{htmlFor:"phoneNum",md:2},"Phone"),s.a.createElement(p.e,{md:10},s.a.createElement(g.Control.text,{model:".phoneNum",id:"phoneNum",name:"phoneNum",placeholder:"Phone number",className:"form-control",validators:{required:v,minLength:f(10),maxLength:E(15),isNumber:h}}),s.a.createElement(g.Errors,{className:"text-danger",model:".phoneNum",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 10 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}}))),s.a.createElement(p.q,{className:"form-group"},s.a.createElement(p.h,{htmlFor:"email",md:2},"Email"),s.a.createElement(p.e,{md:10},s.a.createElement(g.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:v,validEmail:q}}),s.a.createElement(g.Errors,{className:"text-danger",model:".email",show:"touched",component:"div",messages:{required:"Required",validEmail:"Invalid email address"}}))),s.a.createElement(p.q,{className:"form-group"},s.a.createElement(p.h,{htmlFor:"requests",md:2},"Special Requests"),s.a.createElement(p.e,{md:10},s.a.createElement(g.Control.textarea,{model:".requests",id:"requests",name:"requests",rows:"5",className:"form-control"}))),s.a.createElement(p.q,{className:"form-group"},s.a.createElement(p.e,{md:{size:10,offset:2}},s.a.createElement(p.a,{type:"submit",color:"primary"},"Submit Reservation")))))))}}]),a}(i.Component);var N=function(e){return s.a.createElement("footer",{className:"site-footer"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-4 col-sm-3 offset-2 offset-sm-1"},s.a.createElement("h5",null,"Links"),s.a.createElement("ul",{className:"list-unstyled"},s.a.createElement("li",null,s.a.createElement(o.b,{to:"/home"},"Home")),s.a.createElement("li",null,s.a.createElement(o.b,{to:"/menu"},"Menu")),s.a.createElement("li",null,s.a.createElement(o.b,{to:"/story"},"Story")),s.a.createElement("li",null,s.a.createElement(o.b,{to:"/contact"},"Contact")))),s.a.createElement("div",{className:"col-4 text-center"},s.a.createElement("h5",null,"Social"),s.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"}," ",s.a.createElement("i",{className:"fa fa-twitter"}))," ",s.a.createElement("a",{className:"btn btn-social-icon btn-pinterest",href:"http://pinterest.com/"}," ",s.a.createElement("i",{className:"fa fa-pinterest"}))," ",s.a.createElement("a",{className:"btn btn-social-icon btn-instagram",href:"http://instagram.com/"}," ",s.a.createElement("i",{className:"fa fa-instagram"}))),s.a.createElement("div",{className:"col-12 col-sm-4 text-center"},s.a.createElement("a",{role:"button",className:"btn btn-link",href:"tel:+19999999999"}," ",s.a.createElement("i",{className:"fa fa-phone"})," 999-999-9999")," ",s.a.createElement("br",null),s.a.createElement(o.b,{to:"/contact"}," ",s.a.createElement("i",{className:"fa fa-map-marker"})," 9999 NW 100th Ave. ",s.a.createElement("br",null)," Anytown, USA 12345 ")))))},y=a(86),x=[{src:"/assets/images/carousel_food.jpg",altText:"Food Image",header:"Food",key:"1"},{src:"/assets/images/carousel_drink.jpg",altText:"Drink Image",header:"Drink",key:"2"},{src:"/assets/images/carousel_dessert.jpg",altText:"Dessert Image",header:"Dessert",key:"3"},{src:"/assets/images/carousel_pizza.jpg",altText:"Pizza Image",header:"And PIZZA!!",key:"4"}],k=function(){return s.a.createElement(p.r,{items:x})};var w=function(e){return s.a.createElement("div",{className:"container-fluid pb-4 px-0"},s.a.createElement(y.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.2) translateY(10%)"}},s.a.createElement(k,null)))},O=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={food:""},i}return Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"wrapper"},s.a.createElement("div",{className:"fixed appetizer"}),s.a.createElement("div",{className:"scroll"},s.a.createElement("h1",null,"Appetizers"),s.a.createElement("div",{className:"row justify-content-md-between"},s.a.createElement("div",{className:"col-md-5 text-center text-md-left"},s.a.createElement("h5",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At augue eget arcu dictum varius duis at. Convallis convallis tellus id interdum. Erat velit scelerisque in dictum. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Id venenatis a condimentum vitae. Morbi non arcu risus quis varius. Arcu risus quis varius quam quisque id diam vel quam. Ullamcorper dignissim cras tincidunt lobortis feugiat. Nunc mattis enim ut tellus elementum sagittis vitae. Orci nulla pellentesque dignissim enim sit. Metus aliquam eleifend mi in nulla posuere sollicitudin. Ultricies mi quis hendrerit dolor magna eget. Viverra accumsan in nisl nisi scelerisque eu. Lorem ipsum dolor sit amet consectetur adipiscing elit ut. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis.")),s.a.createElement("div",{className:"col-md-5 text-center text-md-right"},s.a.createElement("h5",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At augue eget arcu dictum varius duis at. Convallis convallis tellus id interdum. Erat velit scelerisque in dictum. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Id venenatis a condimentum vitae. Morbi non arcu risus quis varius. Arcu risus quis varius quam quisque id diam vel quam. Ullamcorper dignissim cras tincidunt lobortis feugiat. Nunc mattis enim ut tellus elementum sagittis vitae. Orci nulla pellentesque dignissim enim sit. Metus aliquam eleifend mi in nulla posuere sollicitudin. Ultricies mi quis hendrerit dolor magna eget. Viverra accumsan in nisl nisi scelerisque eu. Lorem ipsum dolor sit amet consectetur adipiscing elit ut. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis.")))),s.a.createElement("div",{className:"fixed mains"}),s.a.createElement("div",{className:"scroll"},s.a.createElement("h1",null,"Mains"),s.a.createElement("div",{className:"row justify-content-md-between"},s.a.createElement("div",{className:"col-md-5 text-center text-md-left"},s.a.createElement("h5",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At augue eget arcu dictum varius duis at. Convallis convallis tellus id interdum. Erat velit scelerisque in dictum. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Id venenatis a condimentum vitae. Morbi non arcu risus quis varius. Arcu risus quis varius quam quisque id diam vel quam. Ullamcorper dignissim cras tincidunt lobortis feugiat. Nunc mattis enim ut tellus elementum sagittis vitae. Orci nulla pellentesque dignissim enim sit. Metus aliquam eleifend mi in nulla posuere sollicitudin. Ultricies mi quis hendrerit dolor magna eget. Viverra accumsan in nisl nisi scelerisque eu. Lorem ipsum dolor sit amet consectetur adipiscing elit ut. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis.")),s.a.createElement("div",{className:"col-md-5 text-center text-md-right"},s.a.createElement("h5",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At augue eget arcu dictum varius duis at. Convallis convallis tellus id interdum. Erat velit scelerisque in dictum. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Id venenatis a condimentum vitae. Morbi non arcu risus quis varius. Arcu risus quis varius quam quisque id diam vel quam. Ullamcorper dignissim cras tincidunt lobortis feugiat. Nunc mattis enim ut tellus elementum sagittis vitae. Orci nulla pellentesque dignissim enim sit. Metus aliquam eleifend mi in nulla posuere sollicitudin. Ultricies mi quis hendrerit dolor magna eget. Viverra accumsan in nisl nisi scelerisque eu. Lorem ipsum dolor sit amet consectetur adipiscing elit ut. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis.")))),s.a.createElement("div",{className:"fixed pizza"}),s.a.createElement("div",{className:"scroll"},s.a.createElement("h1",null,"Pizza"),s.a.createElement("div",{className:"row justify-content-md-between"},s.a.createElement("div",{className:"col-md-5 text-center text-md-left"},s.a.createElement("h5",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At augue eget arcu dictum varius duis at. Convallis convallis tellus id interdum. Erat velit scelerisque in dictum. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Id venenatis a condimentum vitae. Morbi non arcu risus quis varius. Arcu risus quis varius quam quisque id diam vel quam. Ullamcorper dignissim cras tincidunt lobortis feugiat. Nunc mattis enim ut tellus elementum sagittis vitae. Orci nulla pellentesque dignissim enim sit. Metus aliquam eleifend mi in nulla posuere sollicitudin. Ultricies mi quis hendrerit dolor magna eget. Viverra accumsan in nisl nisi scelerisque eu. Lorem ipsum dolor sit amet consectetur adipiscing elit ut. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis.")),s.a.createElement("div",{className:"col-md-5 text-center text-md-right"},s.a.createElement("h5",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At augue eget arcu dictum varius duis at. Convallis convallis tellus id interdum. Erat velit scelerisque in dictum. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Id venenatis a condimentum vitae. Morbi non arcu risus quis varius. Arcu risus quis varius quam quisque id diam vel quam. Ullamcorper dignissim cras tincidunt lobortis feugiat. Nunc mattis enim ut tellus elementum sagittis vitae. Orci nulla pellentesque dignissim enim sit. Metus aliquam eleifend mi in nulla posuere sollicitudin. Ultricies mi quis hendrerit dolor magna eget. Viverra accumsan in nisl nisi scelerisque eu. Lorem ipsum dolor sit amet consectetur adipiscing elit ut. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis.")))),s.a.createElement("div",{className:"fixed dessert"}),s.a.createElement("div",{className:"scroll"},s.a.createElement("h1",null,"Dessert"),s.a.createElement("div",{className:"row justify-content-md-between"},s.a.createElement("div",{className:"col-md-5 text-center text-md-left"},s.a.createElement("h5",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At augue eget arcu dictum varius duis at. Convallis convallis tellus id interdum. Erat velit scelerisque in dictum. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Id venenatis a condimentum vitae. Morbi non arcu risus quis varius. Arcu risus quis varius quam quisque id diam vel quam. Ullamcorper dignissim cras tincidunt lobortis feugiat. Nunc mattis enim ut tellus elementum sagittis vitae. Orci nulla pellentesque dignissim enim sit. Metus aliquam eleifend mi in nulla posuere sollicitudin. Ultricies mi quis hendrerit dolor magna eget. Viverra accumsan in nisl nisi scelerisque eu. Lorem ipsum dolor sit amet consectetur adipiscing elit ut. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis.")),s.a.createElement("div",{className:"col-md-5 text-center text-md-right"},s.a.createElement("h5",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At augue eget arcu dictum varius duis at. Convallis convallis tellus id interdum. Erat velit scelerisque in dictum. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Id venenatis a condimentum vitae. Morbi non arcu risus quis varius. Arcu risus quis varius quam quisque id diam vel quam. Ullamcorper dignissim cras tincidunt lobortis feugiat. Nunc mattis enim ut tellus elementum sagittis vitae. Orci nulla pellentesque dignissim enim sit. Metus aliquam eleifend mi in nulla posuere sollicitudin. Ultricies mi quis hendrerit dolor magna eget. Viverra accumsan in nisl nisi scelerisque eu. Lorem ipsum dolor sit amet consectetur adipiscing elit ut. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis.")))),s.a.createElement("hr",null))))}}]),a}(i.Component);var M=function(e){return s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"row"},s.a.createElement("img",{className:"d-block w-100",src:"/assets/images/story_restaurant.jpg",alt:"Story"})),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row justify-content-center py-5"},s.a.createElement("div",{className:"col-10 col-lg-8"},s.a.createElement(p.b,{style:{borderColor:"darkslategrey"}},s.a.createElement(p.d,{className:"text-center",style:{color:"black",borderColor:"black"}},s.a.createElement("h3",null,"Our Story")),s.a.createElement(p.c,{style:{color:"black",backgroundColor:"#3b5686"}},s.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Purus non enim praesent elementum facilisis leo vel fringilla est. Nisl vel pretium lectus quam. Est sit amet facilisis magna. In dictum non consectetur a erat nam at lectus urna. Facilisis sed odio morbi quis commodo odio aenean sed. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis."," "),s.a.createElement("p",null,"Magna etiam tempor orci eu lobortis elementum nibh. Diam in arcu cursus euismod quis viverra nibh cras. Aenean sed adipiscing diam donec adipiscing tristique risus nec. Amet venenatis urna cursus eget nunc scelerisque viverra. Eget velit aliquet sagittis id. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Tellus elementum sagittis vitae et leo duis ut. Sit amet tellus cras adipiscing enim eu. Auctor urna nunc id cursus metus aliquam eleifend. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Placerat in egestas erat imperdiet sed euismod nisi. In pellentesque massa placerat duis ultricies lacus. Urna duis convallis convallis tellus id. Est pellentesque elit ullamcorper dignissim cras tincidunt. Ornare arcu dui vivamus arcu. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer. Urna molestie at elementum eu facilisis sed odio morbi."," "),s.a.createElement("p",null,"Velit laoreet id donec ultrices tincidunt arcu non. Eu augue ut lectus arcu. Et malesuada fames ac turpis egestas. Netus et malesuada fames ac. Interdum velit euismod in pellentesque. Purus in mollis nunc sed. Facilisis mauris sit amet massa vitae tortor condimentum. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Nisi scelerisque eu ultrices vitae auctor. Ut tristique et egestas quis ipsum suspendisse ultrices gravida.")))))))};var j=function(e){return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row ml-auto my-5"},s.a.createElement("div",{className:"col-md-4 offset-1 offset-md-0 py-3 align-self-center"},s.a.createElement(p.b,{style:{borderColor:"darkslategrey"}},s.a.createElement(p.d,{className:"text-center",style:{color:"black",borderColor:"black"}},s.a.createElement("h3",null,"Our Contact Info")),s.a.createElement(p.c,{className:"text-center",style:{color:"black",backgroundColor:"#3b5686"}},s.a.createElement("a",{role:"button",className:"btn btn-link contact-btn",style:{color:"navy"},href:"tel:+19999999999"}," ",s.a.createElement("i",{className:"fa fa-phone"}," ")," 999-999-9999")," ",s.a.createElement("br",null),s.a.createElement(o.b,{to:"/contact",style:{color:"navy"}}," ",s.a.createElement("i",{className:"fa fa-map-marker"}," ")," 9999 NW 100th Ave."," ",s.a.createElement("br",null)," Anytown, USA 12345"," ")))),s.a.createElement("div",{className:"col col-md-7 offset-1",id:"mapWindow"},s.a.createElement("iframe",{title:"Location Map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.6768341322639!2d-98.78705691485213!3d38.361835920888545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87a38a5476f1dc01%3A0xbcba90bd38c16e1a!2s3504%2010th%20St%2C%20Great%20Bend%2C%20KS%2067530!5e0!3m2!1sen!2sus!4v1582950853305!5m2!1sen!2sus",width:"400",height:"300",frameborder:"0",style:{border:0},allowfullscreen:""}))))},L=a(43),A=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={menu:""},i}return Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(b,null),s.a.createElement(L.TransitionGroup,null,s.a.createElement(L.CSSTransition,{key:this.props.location.key,classNames:"page",timeout:400},s.a.createElement(o.f,null,s.a.createElement(o.e,{path:"/home",component:function(){return s.a.createElement(w,null)}}),s.a.createElement(o.e,{exact:!0,path:"/menu",render:function(){return s.a.createElement(O,null)}}),s.a.createElement(o.e,{exact:!0,path:"/story",render:function(){return s.a.createElement(M,null)}}),s.a.createElement(o.e,{exact:!0,path:"/contact",render:function(){return s.a.createElement(j,null)}}),s.a.createElement(o.d,{to:"/home"})))),s.a.createElement(N,null))}}]),a}(i.Component),C=Object(o.g)(A),S=(a(146),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement(o.a,{basename:"/react-restaurant"},s.a.createElement("div",{className:"App"},s.a.createElement(C,null)))}}]),a}(i.Component));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},87:function(e,t,a){e.exports=a(147)},92:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.2a800af0.chunk.js.map