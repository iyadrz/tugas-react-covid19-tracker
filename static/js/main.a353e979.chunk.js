(this.webpackJsonptrackcorona=this.webpackJsonptrackcorona||[]).push([[0],{33:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},42:function(e,t,a){e.exports=a(75)},47:function(e,t,a){},48:function(e,t,a){},70:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(32),c=a.n(r),o=(a(47),a(33),a(48),a(15));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(16),i=a(17),m=a(21),d=a(20),u=a(11),h=a.n(u),E=(a(31),a(70),a(10)),g=a.n(E),b=a(93),v=a(92),p=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).fetchCountries=function(){h.a.get("https://covid19.mathdro.id/api/countries").then((function(e){n.setState({countries:e.data.countries})}))},n.handleChange=function(e){var t=e.target.value;n.props.handleCountryChange(t)},n.state={countries:[],country:""},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.fetchCountries()}},{key:"render",value:function(){return l.a.createElement("center",null,l.a.createElement(b.a,null,l.a.createElement(v.a,{onChange:this.handleChange},l.a.createElement("option",null,"Pilih Negara..."),this.state.countries.map((function(e){return l.a.createElement("option",{key:e.name,value:e.name},e.name)})))))}}]),a}(n.Component),f=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleCountryChange=function(e){h.a.get("https://covid19.mathdro.id/api/countries/"+e).then((function(e){n.setState({positif:e.data.confirmed.value,meninggal:e.data.deaths.value,sembuh:e.data.recovered.value})}))},n.getData=function(){h.a.get("https://covid19.mathdro.id/api").then((function(e){n.setState({positifGlobal:e.data.confirmed.value,meninggalGlobal:e.data.deaths.value,sembuhGlobal:e.data.recovered.value,lastupdateGlobal:e.data.lastUpdate})})).catch((function(e){console.log(e.response)}))},n.state={positifGlobal:null,meninggalGlobal:null,sembuhGlobal:null,positif:null,meninggal:null,sembuh:null,lastupdate:null,negara:null},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,null,l.a.createElement("title",null,"Tugas React Pantau COVID-19")),l.a.createElement("div",{className:"jumbotron jumbotron-fluid text-white"},l.a.createElement("div",{className:"container text-center"},l.a.createElement("p",null,l.a.createElement("a",{className:"btnHome",href:"https://iyadrz.github.io/index.html#tugas"},"Kembali ke Homepage")),l.a.createElement("h1",{className:"display-4 text-danger"},l.a.createElement("strong",null,"KAWAL COVID-19")),l.a.createElement("p",{className:"lead"},l.a.createElement("h2",null,"PANTAU PENYEBARAN VIRUS COVID-19",l.a.createElement("br",null),"SECARA REAL-TIME",l.a.createElement("br",null)),l.a.createElement("h3",null,"Jaga Diri dan Tetap Patuhi Protokol Kesehatan")))),l.a.createElement("div",{className:"corona-body"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"col-md-12 mt-3"},l.a.createElement("h1",null,"DUNIA")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{class:"col pt-2"},l.a.createElement("div",{class:"box text-white text-center"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-12"},l.a.createElement("h4",{style:{color:"rgb(0, 153, 255)"}},"Positif"),l.a.createElement("h2",{id:"data-kasus",style:{color:"rgb(0, 153, 255)"}},l.a.createElement(g.a,{start:0,end:this.state.positifGlobal,duration:1,separator:"."})),l.a.createElement("h4",{style:{color:"rgba(0, 153, 255, 0.795)"}},"orang"))))),l.a.createElement("div",{class:"col pt-2"},l.a.createElement("div",{class:"box text-white text-center"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-12"},l.a.createElement("h4",{style:{color:"rgb(255, 0, 0)"}},"Meninggal"),l.a.createElement("h2",{id:"data-kasus",style:{color:"rgb(255, 0, 0)"}},l.a.createElement(g.a,{start:0,end:this.state.meninggalGlobal,duration:1,separator:"."})),l.a.createElement("h4",{style:{color:"rgb(255, 0, 0)"}},"orang"))))),l.a.createElement("div",{class:"col pt-2"},l.a.createElement("div",{class:"box text-white text-center"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-12"},l.a.createElement("h4",{style:{color:"rgba(0, 255, 0, 0.795)"}},"Sembuh"),l.a.createElement("h2",{id:"data-kasus",style:{color:"rgba(0, 255, 0, 0.795)"}},l.a.createElement(g.a,{start:0,end:this.state.sembuhGlobal,duration:1,separator:"."})),l.a.createElement("h4",{style:{color:"rgba(0, 255, 0, 0.795)"}},"orang")))))),l.a.createElement("div",{className:"col-md-12 mt-5"},l.a.createElement("h1",null,"NEGARA")),l.a.createElement("center",null,l.a.createElement("div",{className:"combo col-md-12"},l.a.createElement(p,{handleCountryChange:this.handleCountryChange}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{class:"col pt-2"},l.a.createElement("div",{class:"box text-white text-center"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-12"},l.a.createElement("h4",{style:{color:"rgb(0, 153, 255)"}},"Positif"),l.a.createElement("h2",{id:"data-kasus",style:{color:"rgb(0, 153, 255)"}},l.a.createElement(g.a,{start:0,end:this.state.positif,duration:1,separator:"."})),l.a.createElement("h4",{style:{color:"rgba(0, 153, 255, 0.795)"}},"orang"))))),l.a.createElement("div",{class:"col pt-2"},l.a.createElement("div",{class:"box text-white text-center"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-12"},l.a.createElement("h4",{style:{color:"rgb(255, 0, 0)"}},"Meninggal"),l.a.createElement("h2",{id:"data-kasus",style:{color:"rgb(255, 0, 0)"}},l.a.createElement(g.a,{start:0,end:this.state.meninggal,duration:1,separator:"."})),l.a.createElement("h4",{style:{color:"rgb(255, 0, 0)"}},"orang"))))),l.a.createElement("div",{class:"col pt-2"},l.a.createElement("div",{class:"box text-white text-center"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-12"},l.a.createElement("h4",{style:{color:"rgba(0, 255, 0, 0.795)"}},"Sembuh"),l.a.createElement("h2",{id:"data-kasus",style:{color:"rgba(0, 255, 0, 0.795)"}},l.a.createElement(g.a,{start:0,end:this.state.sembuh,duration:1,separator:"."})),l.a.createElement("h4",{style:{color:"rgba(0, 255, 0, 0.795)"}},"orang"))))))),l.a.createElement("footer",{class:"text-center text-white mt-3 bt-2 pb-2"},"Last Updated ",l.a.createElement("h6",{id:"lastUpdated"},new Date(this.state.lastupdateGlobal).toLocaleString("id-ID",{timeZone:"Asia/Makassar"})," GMT+0800 (Central Indonesia Time)"))))}}]),a}(n.Component);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.a353e979.chunk.js.map