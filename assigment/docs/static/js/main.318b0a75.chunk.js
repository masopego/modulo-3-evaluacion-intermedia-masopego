(this.webpackJsonpassigment3=this.webpackJsonpassigment3||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"bulbasaur","types":["poison","grass"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},{"id":2,"name":"ivysaur","types":["poison","grass"],"evolution":"bulbasaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"},{"id":3,"name":"venusaur","types":["poison","grass"],"evolution":"ivysaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"},{"id":4,"name":"charmander","types":["fire"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},{"id":5,"name":"charmeleon","types":["fire"],"evolution":"charmander","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"},{"id":6,"name":"charizard","types":["flying","fire"],"evolution":"charmeleon","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"},{"id":7,"name":"squirtle","types":["water"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"},{"id":8,"name":"wartortle","types":["water"],"evolution":"squirtle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"},{"id":9,"name":"blastoise","types":["water"],"evolution":"wartortle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"},{"id":10,"name":"caterpie","types":["bug"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"}]')},function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),a=n(6),o=n.n(a),i=(n(13),n(1)),p=n(2),u=n(4),c=n(3),l=(n(14),function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props.type.map((function(e,t){return s.a.createElement("li",{key:t},e)}));return s.a.createElement("article",null,s.a.createElement("img",{className:"pokemon__photo",src:this.props.image,alt:"Pokemon ".concat(this.props.title)}),s.a.createElement("h2",{className:"pokemon__title"},this.props.title),s.a.createElement("ul",{className:"pokemon__type"},e))}}]),n}(s.a.Component)),m=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props.pokecard.map((function(e,t){return s.a.createElement("li",{className:"card__item",key:t},s.a.createElement(l,{image:e.url,title:e.name,type:e.types}))}));return s.a.createElement("ul",{class:"pokemon__cards"},e)}}]),n}(s.a.Component),h=n(7),k=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={pokemons:h},r}return Object(p.a)(n,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(m,{pokecard:this.state.pokemons}))}}]),n}(s.a.Component);o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(k,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.318b0a75.chunk.js.map