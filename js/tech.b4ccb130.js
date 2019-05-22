(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tech"],{"4f89":function(t,s,e){},8714:function(t,s,e){"use strict";var a=e("4f89"),i=e.n(a);i.a},c844:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tech"},[e("div",{staticClass:"header-text"},[t._v("Tech Production")]),e("div",{staticClass:"header-image"}),e("div",{staticClass:"content"},[e("p",[t._v("\n      With 10+ years of software engineering experience,\n      I ship clean and scalable apps & services across stacks.\n      I've worked with companies from early-stage startups to Fortune 500 companies\n      on projects including application architecture design, full-stack web development,\n      API design, and blockchain development (among other things).\n    ")]),e("h1",[t._v("Services")]),t._m(0),t._m(1),t._m(2),e("div",{staticClass:"ask"},[e("h1",[t._v("Get In Touch")]),e("p",[t._v("Interesting in working together? Best way to make that happen is to get in touch!")]),e("button",{staticClass:"button contact-button -accent -hollow",on:{click:function(s){t.$root.$emit("showContact")}}},[t._v("Contact Me")])]),e("div",{staticClass:"experience"},[e("h1",[t._v("Skills and Experience")]),e("p",[t._v("I do other things too. Check out some of my skills and let me know if we'd be a good fit!")]),e("BaseInput",{staticClass:"search",attrs:{name:"search",type:"text",title:"Search"},model:{value:t.search,callback:function(s){t.search=s},expression:"search"}}),e("div",{staticClass:"skills"},t._l(t.resultSet,function(s){return e("div",{key:s,staticClass:"cell"},[t._v(t._s(s))])}))],1),t._m(3)])])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"service"},[e("h2",[t._v("UI/UX & Web Design")]),e("p",[t._v("\n        I value simple content structure, clean design patterns, and thoughtful interactions.\n        I like to code things from scratch, and enjoy bringing things to life in the browser.\n      ")]),e("div",{staticClass:"tool-list"},[e("div",{staticClass:"cell"},[e("img",{attrs:{src:"/logos/sketch.png"}})]),e("div",{staticClass:"cell"},[e("img",{attrs:{src:"/logos/illustrator.png"}})]),e("div",{staticClass:"cell"},[e("img",{attrs:{src:"/logos/html5.png"}})]),e("div",{staticClass:"cell"},[e("img",{attrs:{src:"/logos/sass.png"}})]),e("div",{staticClass:"cell"},[e("img",{attrs:{src:"/logos/tses6.png"}})])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"service"},[e("h2",[t._v("Full-stack Development")]),e("p",[t._v("\n        Need someone to do it all? I architect and build medium-to-large web applications, microservices, and web services\n        to scale to hundreds of thousands of users.\n      ")]),e("div",{staticClass:"tool-list"},[e("div",{staticClass:"cell"},[e("img",{attrs:{src:"/logos/vue.png"}})]),e("div",{staticClass:"cell"},[e("img",{attrs:{src:"/logos/node.png"}})]),e("div",{staticClass:"cell"},[e("img",{attrs:{src:"/logos/mongo.png"}})]),e("div",{staticClass:"cell"},[e("img",{attrs:{src:"/logos/aws.png"}})]),e("div",{staticClass:"cell"},[e("img",{attrs:{src:"/logos/linux.png"}})])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"service"},[e("h2",[t._v("Blockchain Development")]),e("p",[t._v("\n        I lead integration of blockchain technology into enterprise and business solutions.\n        I additionally build secure and efficient Ethereum & EOS smart contracts and ÐApps.\n      ")]),e("div",{staticClass:"tool-list"},[e("div",{staticClass:"cell"},[e("img",{attrs:{src:"/logos/ethereum.png"}})]),e("div",{staticClass:"cell"},[e("img",{attrs:{src:"/logos/squarelink.png"}})]),e("div",{staticClass:"cell"},[e("img",{attrs:{src:"/logos/hyperledger.png"}})]),e("div",{staticClass:"cell"},[e("img",{attrs:{src:"/logos/eos.png"}})])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"github"},[t._v("\n      See me on "),e("a",{staticClass:"github",attrs:{href:"https://github.com/theAlexPatin"}},[e("i",{staticClass:"fab fa-github"}),t._v("Github")])])}],l=(e("ac6a"),e("386d"),e("b8dc")),c={components:{BaseInput:l["a"]},data(){return{resultSet:[],skills:["Vue.js","ES6/7","Python","Webpack","AWS EC2","ElasticSearch","LogStash","MongoDB","Java","JavaScript","JQuery","Adruino","Django","Flask","MySQL","Postgres","AWS API Gateway","AWS S3","AWS Cloudfront","Squarelink","Web3.js","Ethereum","Hyperledger","Sass/SCSS","CSS3","HTML5","DynamoDB","C/C++","Git","Github","Illustrator","Sketch","Linux","Truffle","Scikit-learn","TensorFlow","Apache Spark","OpenShift","Azure","Docker","Solidity","Objective-C"],searchable:[],search:""}},watch:{search(t){let s=this;setTimeout(()=>{s.search===t&&this.updateSearch(t.toLowerCase().trim())},250)}},methods:{updateSearch(t){if(t){this.resultSet=[];for(let s in this.searchable){let e=this.searchable[s];e.key.includes(t)&&this.resultSet.push(e.title)}}else this.resultSet=this.skills},shuffle(t){var s,e,a=t.length;while(0!==a)e=Math.floor(Math.random()*a),a-=1,s=t[a],t[a]=t[e],t[e]=s;return t}},mounted(){this.skills=this.shuffle(this.skills),this.resultSet=this.skills,this.skills.forEach(t=>{this.searchable.push({key:t.toLowerCase(),title:t})})}},n=c,o=(e("8714"),e("2877")),r=Object(o["a"])(n,a,i,!1,null,null,null);r.options.__file="Tech.vue";s["default"]=r.exports}}]);
//# sourceMappingURL=tech.b4ccb130.js.map