(()=>{"use strict";var e,t={272:(e,t,r)=>{r.d(t,{D:()=>N,d:()=>C});r(336);function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,i(n.key),n)}}function a(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function i(e){var t=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==n(t)?t:t+""}var c=a((function e(t,r,n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t,this.targetBin=r,this.src=n,this.alt=o})),s={games:[{id:0,src:"https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967273/red-bin_p3asrm.svg",alt:"Tacho rojo",name:"juego 1",description:"un jueguito"},{id:0,src:"https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967273/red-bin_p3asrm.svg",alt:"Tacho rojo",name:"juego 2",description:"un jueguito"},{id:0,src:"https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967273/red-bin_p3asrm.svg",alt:"Tacho rojo",name:"juego 3",description:"un jueguito"},{id:0,src:"https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967273/red-bin_p3asrm.svg",alt:"Tacho rojo",name:"juego 4",description:"un jueguito"}],navBins:[{id:0,src:"https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967273/red-bin_p3asrm.svg",alt:"Tacho rojo",width:"40px",color:"Red"},{id:1,src:"https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967272/gray-bin_irnmko.svg",alt:"Tacho gris",width:"40px",color:"Gray"},{id:2,src:"https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967271/blue-bin_s8xhdc.svg",alt:"Tacho azul",width:"40px",color:"Blue"},{id:3,src:"https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967272/green-bin_gfkdtt.svg",alt:"Tacho verde",width:"40px",color:"Green"}],trash:[{id:0,name:"Banana",targetBin:"Green",src:"https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967271/banana_dm3svm.png",alt:"banana"},{id:1,name:"Cesped",targetBin:"Green",src:"https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967272/grass_cgob8u.png",alt:"cesped"},{id:2,name:"Apple",targetBin:"Green",src:"https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967274/rotten-apple_oqckiy.png",alt:"manzana-comida"},{id:3,name:"Saquito de te",targetBin:"Green",src:"https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967274/teabag_ytalje.png",alt:"Saquito de te"},{id:4,name:"Serrucho",targetBin:"Blue",src:"https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967274/saw_fkbxsf.png",alt:"Serrucho"},{id:5,name:"Taza de plastico",targetBin:"Blue",src:"https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967275/teacup_mupdsc.png",alt:"Vaso de plastico"},{id:6,name:"Tornillo",targetBin:"Blue",src:"https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967272/bolt_qzgn3k.png",alt:"Tornillo"},{id:7,name:"Botella de plastico",targetBin:"Blue",src:"https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967275/water-bottle_c3eu89.png",alt:"Botella de plastico"},{id:8,name:"Termometro",targetBin:"Red",src:"https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967275/thermometer_pleexr.png",alt:"Termometro"},{id:9,name:"Bateria",targetBin:"Red",src:"https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967271/battery_ri5jse.png",alt:"Pila alcalina"},{id:10,name:"Desechos toxicos",targetBin:"Red",src:"https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967274/nuclear_htmxnw.png",alt:"Desechos tóxicos"},{id:11,name:"Jeringa",targetBin:"Red",src:"https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967275/vaccine_tiltgi.png",alt:"Jeringa"},{id:12,name:"Papel-higienico",targetBin:"Gray",src:"https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967275/toilet-roll_zzb8kd.png",alt:"Papel higienico"},{id:13,name:"Caja de carton",targetBin:"Gray",src:"https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967271/open-box_odsgiq.png",alt:"Caja de carton"},{id:14,name:"Periodico",targetBin:"Gray",src:"https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967274/newspaper_axixye.png",alt:"Periodico"},{id:15,name:"Revista",targetBin:"Gray",src:"https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967274/magazine_shszak.png",alt:"Revista"}]};function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,u(n.key),n)}}function u(e){var t=function(e,t){if("object"!=l(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==l(t)?t:t+""}var m=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.list=[]},(t=[{key:"buildTrash",value:function(){for(var e=[],t=0;t<10;t++){for(var r=Math.floor(15*Math.random());e.includes(r);)r=Math.floor(15*Math.random());e.push(r),this.list.push(new c(s.trash[r].name,s.trash[r].targetBin,s.trash[r].src,s.trash[r].alt))}}},{key:"cleanTrash",value:function(){this.list=[]}},{key:"getList",value:function(){return this.list}},{key:"removeTrashItem",value:function(e){this.list=this.list.filter((function(t){return t.name!==e}))}}])&&d(e.prototype,t),r&&d(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t,r}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,y(n.key),n)}}function y(e){var t=function(e,t){if("object"!=p(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==p(t)?t:t+""}var v=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.score=0,this.mistakes=0},(t=[{key:"checkMistakes",value:function(){return this.mistakes>=3}},{key:"checkScore",value:function(){return this.score>=1}},{key:"incrementScore",value:function(){return this.score+=1,this.score}},{key:"incrementMistakes",value:function(){return this.mistakes+=1,this.mistakes}},{key:"getScore",value:function(){return this.score}},{key:"getMistakes",value:function(){return this.mistakes}},{key:"resetScoreBoard",value:function(){this.score=0,this.mistakes=0}}])&&f(e.prototype,t),r&&f(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t,r}(),h=function(e,t,r,n){var o=document.createElement("div"),a=document.createElement("img");return o.appendChild(a),o.className="".concat(r," carousel-item"),o.id=n,a.src=e,a.alt=t,a.className="d-block w-100",o},g=function(){var e=C.getList(),t=document.querySelector(".carousel-inner");t.innerHTML="",e.forEach((function(e,r){var n=h(e.src,e.alt,e.targetBin,e.name);n.addEventListener("click",(function(){var e=document.querySelector(".selected");null!==e&&e.classList.remove("selected"),n.classList.add("selected")})),0===r&&(n.classList.add("active"),n.classList.add("selected"),window.innerWidth>768&&n.classList.remove("selected")),t.appendChild(n)}))},b=function(){var e=C.getList(),t=document.querySelector("#cards-container");t.innerHTML="",e.forEach((function(e){var r=h(e.src,e.alt,e.targetBin,e.name);r.addEventListener("click",(function(){var e=document.querySelector(".selected");null!==e&&e.classList.remove("selected"),r.classList.add("selected")})),r.classList.remove("carousel-item"),r.classList.add("card-item"),t.appendChild(r)}))},S=function(e){Array.from(document.querySelectorAll(".counter")).forEach((function(e){return e.innerText="0"})),e.remove(),N.resetScoreBoard(),C.cleanTrash(),C.buildTrash(),g(),b()},w=function(){var e=document.querySelector("header"),t=document.querySelector("main"),r=document.querySelector("footer"),n=Array.from(document.querySelectorAll(".bin"));e.classList.add("filtered"),t.classList.add("filtered"),r.classList.add("filtered"),n.forEach((function(e){return e.classList.add("filtered")}))},E=function(){var e=document.querySelector("header"),t=document.querySelector("main"),r=document.querySelector("footer"),n=Array.from(document.querySelectorAll(".bin"));e.classList.remove("filtered"),t.classList.remove("filtered"),r.classList.remove("filtered"),n.forEach((function(e){return e.classList.remove("filtered")}))},j=function(){var e=document.createElement("div"),t=document.createElement("p"),r=document.createElement("div"),n=document.createElement("button");t.innerText="Felicitaciones, eres un gran reciclador",n.innerText="Jugar otra vez";var o=Array.from(document.querySelectorAll(".bin"));o.forEach((function(e){return e.style.pointerEvents="none"})),s.games.forEach((function(e){r.appendChild(function(e,t,r,n){var o=document.createElement("article"),a=document.createElement("img"),i=document.createElement("div"),c=document.createElement("h3"),s=document.createElement("p"),l=document.createElement("a");return o.className="card",i.className="card-body d-flex flex-column",c.className="card-title fs-4 text",s.className="card-text fs-5 text",l.className="btn btn-success align-self-center",a.src=r,a.alt=n,c.innerText=e,s.innerText=t,l.innerText="Visitar juego",i.appendChild(c),i.appendChild(s),i.appendChild(l),o.appendChild(a),o.appendChild(i),o}(e.name,e.description,e.src,e.alt))})),e.className="d-flex flex-column align-items center gap-2 modal",r.className="alternative-games",n.className="btn btn-success align-self-center",n.addEventListener("click",(function(){S(e),o.forEach((function(e){return e.style.pointerEvents="all"}))})),e.appendChild(t),e.appendChild(r),e.appendChild(n),document.querySelector("#app").appendChild(e)},q=function(){for(var e=document.querySelector(".interaction-bins"),t=function(t){var r,n,o,a,i,c=(r=s.navBins[t].src,n=s.navBins[t].alt,o=s.navBins[t].color,a=document.createElement("div"),i=document.createElement("img"),a.appendChild(i),a.className="".concat(o," bin"),i.src=r,i.alt=n,i.width=70,a);c.addEventListener("click",(function(){var e=function(e,t){var r=document.querySelector(".selected");if(null===r)return!1;if(r.getAttribute("class").split(" ")[0]===e){var n=document.querySelector("#first-counter");t.incrementScore(),n.innerText=t.getScore();var o=r.id;r.remove(),document.getElementById(o).remove();var a=document.querySelector(".carousel-item");return null!==a&&(a.classList.add("active"),window.innerWidth<768&&a.classList.add("selected")),{result:!0,nameTarget:o}}var i=document.querySelector("#second-counter");return t.incrementMistakes(),i.innerText=t.getMistakes(),!1}(s.navBins[t].color,N),r=e.result,n=e.nameTarget;N.checkMistakes()&&function(){var e=document.createElement("div"),t=document.createElement("p"),r=document.createElement("button");t.innerText="Te has equivocado tres veces. Intentalo de nuevo",r.innerText="Intentar otra vez";var n=Array.from(document.querySelectorAll(".bin"));n.forEach((function(e){return e.style.pointerEvents="none"}));var o=Array.from(document.querySelectorAll('button[data-bs-target="#carousel"]'));o.forEach((function(e){return e.style.pointerEvents="none"})),e.className="d-flex flex-column align-items-center gap-2 modal",r.className="btn btn-danger align-self-center",r.addEventListener("click",(function(){S(e),n.forEach((function(e){return e.style.pointerEvents="all"})),o.forEach((function(e){return e.style.pointerEvents="all"})),E()})),e.appendChild(t),e.appendChild(r),document.querySelector("#app").appendChild(e),w()}(),N.checkScore()&&j(),r&&C.removeTrashItem(n)})),e.appendChild(c)},r=0;r<s.navBins.length;r++)t(r)};const L=r.p+"assets/icons/pointing-finger..svg",k=r.p+"assets/icons/pointing-left..svg";var T=function(){w(),document.querySelector("header").classList.remove("filtered"),document.querySelector(".logo").classList.add("filtered");var e=document.querySelector(".scores");e.classList.remove("filtered");var t=document.createElement("img");t.src=L,t.alt="pointing hand",e.style.position="relative",t.classList.add("finger-score"),e.appendChild(t);var r=document.querySelector(".instructions-button"),n=r.cloneNode(!0);r.parentNode.replaceChild(n,r),n.addEventListener("click",(function(){document.querySelector(".instruction-text").innerText="Selecciona la tarjeta con el elemento que quieres colocar en un cesto.",x()}))},x=function(){w(),document.querySelector(".finger-score").remove(),document.querySelector(".scores").classList.remove("filtered");var e=document.querySelector("main"),t=document.createElement("img");t.src=L,t.alt="pointing hand",t.className="finger-cards",e.appendChild(t),e.classList.remove("filtered");var r=document.querySelector(".modal-instruction-start");r.style.top="50%",window.innerWidth<768&&(r.style.top="75%"),window.addEventListener("resize",(function(){window.innerWidth<768?r.style.top="70%":r.style.top="50%"}));var n=document.querySelector(".instructions-button"),o=n.cloneNode(!0);n.parentNode.replaceChild(o,n),Array.from(document.querySelectorAll(".card-item")).forEach((function(e,t){e.classList.add("filtered"),2===t&&e.classList.remove("filtered")})),o.addEventListener("click",(function(){document.querySelector(".instruction-text").innerText="Haz click en el cesto en el que quieras colocar la basura. ¿Listo?",o.innerText="Comenzar",B()}))},B=function(){w(),Array.from(document.querySelectorAll(".bin")).forEach((function(e){return e.classList.remove("filtered")}));var e=document.querySelector("aside"),t=document.querySelector(".finger-cards");Array.from(document.querySelectorAll(".card-item")).forEach((function(e){e.classList.remove("filtered")}));var r=document.querySelector(".modal-instruction-start");window.innerWidth<768?(t.className="finger-bins mobile",t.src=L,r.style.top="50%"):(t.className="finger-bins full",t.src=k),e.appendChild(t);var n=document.querySelector(".instructions-button"),o=n.cloneNode(!0);n.parentNode.replaceChild(o,n),o.addEventListener("click",(function(){document.querySelector("header > div").classList.remove("filtered"),E(),t.remove(),document.querySelector(".modal-instruction-start").remove(),document.querySelector("main").style.pointerEvents="all",document.querySelector("aside").style.pointerEvents="all"}))},C=new m,N=new v;C.buildTrash();document.querySelector(".carousel-control-next").addEventListener("click",(function(){document.querySelector(".active").classList.remove("selected"),document.querySelector(".carousel-item-next").classList.add("selected")})),document.querySelector(".carousel-control-prev").addEventListener("click",(function(){document.querySelector(".active").classList.remove("selected"),document.querySelector(".carousel-item-prev").classList.add("selected")})),window.addEventListener("resize",(function(){var e=window.innerWidth,t=document.querySelector(".active"),r=document.querySelector("#cards-container .selected");e>768&&null!==t?t.classList.remove("selected"):t.classList.add("selected"),e<768&&null!==r&&r.classList.remove("selected")})),document.querySelector("main").style.pointerEvents="none",document.querySelector("aside").style.pointerEvents="none",g(),b(),q(),function(){var e=document.createElement("div"),t=document.querySelector("#app"),r=document.createElement("p"),n=document.createElement("button");n.className="instructions-button btn btn-success",r.className="instruction-text ",r.innerText="Bienvenido a 'Recycling world'. El objetivo del juego es separar la basura en los cestos correspondientes. Utiliza el rojo para objetos potencialmente tóxicos. El Gris para elementos de papel o carton. El cesto Azul es para desechos metalicos o plasticos, mientras que el verde es para elementos organicos como por ejemplo comidas.",n.innerText="Siguiente",e.className="modal-instruction-start d-flex flex-column align-items center gap-2",n.addEventListener("click",(function(){r.innerText="Puedes ver tu puntaje aquí. Si te equivocas de cesto 3 veces, pierdes. Para ganar necesitas colocar correctamente los 10 elementos",T()})),e.appendChild(r),e.appendChild(n),t.appendChild(e)}(),w()}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,e=[],n.O=(t,r,o,a)=>{if(!r){var i=1/0;for(d=0;d<e.length;d++){for(var[r,o,a]=e[d],c=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](r[s])))?r.splice(s--,1):(c=!1,a<i&&(i=a));if(c){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,o,a]},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={792:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[i,c,s]=r,l=0;if(i.some((t=>0!==e[t]))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(s)var d=s(n)}for(t&&t(r);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},r=self.webpackChunkrecycle_world=self.webpackChunkrecycle_world||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[336],(()=>n(272)));o=n.O(o)})();
//# sourceMappingURL=main.bundle.js.map