(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{294:function(e,t,o){"use strict";o.r(t);var n=o(10),r=(o(63),o(29),o(83),{data:function(){return{pokemon:{}}},fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var o,n,r,c,m,v,l,_;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("https://pokeapi.co/api/v2/pokemon/".concat(e.nome));case 2:o=t.sent,n=o.data,r=n.name,c=n.abilities,m=n.sprites,v=n.height,l=n.weight,_=n.moves,e.pokemon={name:r,abilities:c,sprites:m,height:v,weight:l,moves:_};case 5:case"end":return t.stop()}}),t)})))()},head:function(){return{title:"Detalhes de ".concat(this.nome),meta:[{hid:"description",name:"description",content:"Pokemon ".concat(this.pokemon.name,", Peso: ").concat(this.pokemon.weight,", Altura: ").concat(this.pokemon.height)}]}},computed:{nome:function(){return this.$route.params.nome}}}),c=o(11),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e.$fetchState.error?o("div",[o("p",[e._v("Não foi possível carregar os dados do Pokemon "+e._s(e.nome)+". Por favor tente mais tarde !")]),e._v(" "),o("p",[e._v("Error: "+e._s(e.$fetchState.error.message))])]):o("div",[o("p",[e._v("Detalhes de : "),o("span",{staticClass:"uppercase"},[e._v(e._s(e.pokemon.name))])]),e._v(" "),o("ul",[o("strong",[e._v("Habilidades")]),e._v(" "),e._l(e.pokemon.abilities,(function(t,n){return o("li",{key:n},[e._v("\n        "+e._s(t.ability.name)+"\n      ")])}))],2),e._v(" "),o("p",[o("strong",[e._v("Altura (m):")]),e._v(" "+e._s(e.pokemon.height))]),e._v(" "),o("p",[o("strong",[e._v("Peso (lb):")]),e._v(" "+e._s(e.pokemon.weight))]),e._v(" "),o("strong",[e._v("Sprites")]),e._v(" "),o("img",{attrs:{src:e.pokemon.sprites.front_default,alt:""}}),e._v(" "),o("img",{attrs:{src:e.pokemon.sprites.back_default,alt:""}}),e._v(" "),o("img",{attrs:{src:e.pokemon.sprites.other["official-artwork"].front_default,alt:""}})])])}),[],!1,null,null,null);t.default=component.exports}}]);