(function(e){function t(t){for(var r,u,c=t[0],i=t[1],s=t[2],l=0,f=[];l<c.length;l++)u=c[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vuejs-pokedex/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var p=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},3391:function(e,t,n){},5090:function(e,t,n){},5201:function(e,t,n){"use strict";var r=n("5090"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("TheHeader"),n("div",{staticClass:"pokedex-grid"},[n("transition-group",{attrs:{name:"list",tag:"div"}},e._l(e.pokemons,(function(e){return n("PokemonCard",{key:e.id,attrs:{pokemon:e}})})),1)],1)],1)},a=[],u=(n("4160"),n("159b"),n("bc3a")),c=n.n(u),i={getPokemons:function(){return c.a.get("https://pokeapi.co/api/v2/pokemon?limit=151")},getPokemonByUrl:function(e){return c.a.get(e)}},s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[e._v("The awesome Vue Pokedex by vlaude")])},p=[],l={name:"TheHeader"},f=l,d=(n("5201"),n("2877")),m=Object(d["a"])(f,s,p,!1,null,"0fb607d8",null),v=m.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pokemon-card"},[n("span",{staticClass:"pokemon-name"},[e._v(e._s(e.pokemon.name))]),n("img",{attrs:{src:e.pokemon.sprites.front_default,alt:""}}),n("div",{staticClass:"types-container"},e._l(e.pokemon.types,(function(t){return n("span",{key:t.slot,staticClass:"type-name"},[e._v(e._s(t.type.name))])})),0)])},b=[],k={name:"PokemonCard",props:{pokemon:Object}},y=k,g=(n("c636"),Object(d["a"])(y,h,b,!1,null,"1695b138",null)),_=g.exports,O={name:"App",components:{TheHeader:v,PokemonCard:_},data:function(){return{pokemons:[]}},mounted:function(){var e=this;i.getPokemons().then((function(t){t.data.results.forEach((function(t){i.getPokemonByUrl(t.url).then((function(t){e.pokemons.push(t.data)}))}))})).catch((function(e){console.error(e)}))}},P=O,j=(n("034f"),Object(d["a"])(P,o,a,!1,null,null,null)),w=j.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(w)}}).$mount("#app")},"85ec":function(e,t,n){},c636:function(e,t,n){"use strict";var r=n("3391"),o=n.n(r);o.a}});
//# sourceMappingURL=app.877902e6.js.map