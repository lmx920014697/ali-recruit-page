(this.webpackJsonpdemo03=this.webpackJsonpdemo03||[]).push([[0],[,,,,,,,,function(e,t,a){},,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),o=a(9),l=a.n(o),s=(a(15),a(16),a(1)),c=a(2),r=a(4),m=a(3),p=a(5),h=(a(17),function(e){function t(){var e,a;Object(s.a)(this,t);for(var i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(a=Object(r.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={leftHeadList:[{href:"https://job.alibaba.com/zhaopin/index.htm",name:"\u9996\u9875"},{href:"https://job.alibaba.com/zhaopin/positionList.htm",name:"\u793e\u4f1a\u62db\u8058"},{href:"https://campus.alibaba.com",name:"\u6821\u56ed\u62db\u8058"},{href:"https://job.alibaba.com/zhaopin/about.htm",name:"\u4e86\u89e3\u963f\u91cc"},{href:"https://job.alibaba.com/zhaopin/apply.htm",name:"\u4e2a\u4eba\u4e2d\u5fc3"}],activeIndex:0},a.changeActiveIndex=function(e){a.state.activeIndex!==e&&a.setState({activeIndex:e})},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.leftHeadList,i=t.activeIndex;return n.a.createElement("div",{className:"head"},n.a.createElement("div",{className:"head-main"},n.a.createElement("div",{className:"head-menu"},n.a.createElement("a",{href:"https://job.alibaba.com/zhaopin/index.htm",className:"left-logo-box"},n.a.createElement("img",{src:"https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png",alt:"logo",className:"logo"})),n.a.createElement("i",{style:{float:"left",color:"white",fontStyle:"normal",fontSize:"20px",lineHeight:"52px",margin:"0 10px",opacity:"0.8"}},"|"),n.a.createElement("i",{style:{float:"left",color:"white",fontStyle:"normal",fontSize:"14px",lineHeight:"54px",opacity:"0.8"}},"\u793e\u62db\u5b98\u7f51"),n.a.createElement("ul",null,a.map((function(t,a){return n.a.createElement("li",{className:a===i?"current-cat":"",key:a,onClick:function(){e.changeActiveIndex(a)}},n.a.createElement("a",{href:t.href},0===a?"".concat(t.name[0]+"\xa0\xa0\xa0\xa0\xa0\xa0"+t.name[1]):t.name))})),n.a.createElement("div",{className:"login"},"\u6b22\u8fce\u6765\u5230\u963f\u91cc\u5df4\u5df4\u96c6\u56e2\u62db\u8058\uff01",n.a.createElement("a",{href:"https://passport.alibaba.com/login.htm?appName=hrjob&params=https%3A%2F%2Fjob.alibaba.com%2F%2Fzhaopin%2Findex.htm",target:"_top"},"\u767b\u5f55"),n.a.createElement("span",null,"\xa0|\xa0"),n.a.createElement("a",{href:"http://member1.taobao.com/member/newbie.htm"},"\u6ce8\u518c"))))))}}]),t}(i.Component)),d=a(6),u=(a(8),function(e){var t=e.item;return n.a.createElement("div",{className:"list_box"},n.a.createElement("div",{className:"left"},n.a.createElement("div",{className:"line-item",style:{textAlign:"left",cursor:"pointer"}},t.station),n.a.createElement("div",{className:"line-item",style:{textAlign:"center"}},t.city)),n.a.createElement("div",{className:"line-item",style:{textAlign:"right"}},t.time))}),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).handlePostionTop=function(){var e=a.state,t=e.duration,i=e.codeTimer,n=e.postionTop,o=e.dataArr;a.props.list;if(console.log("sas222a",t),t)a.setState({codeTimer:setTimeout((function(){a.setState({duration:t-1,postionTop:n-1},(function(){a.handlePostionTop()}))}),40)});else{var l=JSON.parse(JSON.stringify(o)),s=l.slice(0,parseInt(o.length));l.splice(0,parseInt(o.length)),l.push.apply(l,Object(d.a)(s)),console.log(l,o,s),a.setState({dataArr:Object(d.a)(l),codeTimer:null,duration:2*a.props.list.length*50-250,postionTop:0},(function(){clearTimeout(i),a.handlePostionTop()}))}},a.handleScrollOver=function(){var e=a.state.codeTimer;e&&clearTimeout(e)},a.handleScrollOut=function(){a.handlePostionTop()},a.state={dataArr:[],duration:0,postionTop:0,codeTimer:null},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props),this.props.list&&this.props.list.length&&this.setState({duration:2*this.props.list.length*50-250,dataArr:Object(d.a)(this.props.list)},(function(){e.handlePostionTop()}))}},{key:"render",value:function(){var e=this,t=this.state.dataArr;return n.a.createElement("div",{className:"recruit_list_page_container"},n.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 14px",borderBottom:"1px solid rgba(31,56,88,0.06)",boxShadow:"0 0 15px 0 rgba(31,56,88,0.08)",height:"49px",lineHeight:"49px"}},n.a.createElement("div",null,"\u6700\u65b0\u804c\u4f4d"),n.a.createElement("span",null,"\u66f4\u591a")),n.a.createElement("div",{className:"bottom",style:{background:"#fff"}},n.a.createElement("div",{className:"list_content",onMouseLeave:function(){e.handlePostionTop()},onMouseEnter:this.handleScrollOver},n.a.createElement("div",{className:"list_postion",style:{top:this.state.postionTop}},t&&t.length?this.props.list.map((function(e,t){return n.a.createElement(u,{index:t,key:t,item:e})})):null,t&&t.length?this.props.list.map((function(e,t){return n.a.createElement(u,{index:parseInt("2"+t),key:t,item:e})})):null))))}}]),t}(n.a.Component),g=(a(18),function(e){function t(){var e,a;Object(s.a)(this,t);for(var i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(a=Object(r.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={popularizeList:[{image:"https://img.alicdn.com/tfs/TB1Z7JvoxGYBuNjy0FnXXX5lpXa-358-136.png",href:"https://www.aliyun.com/careers",width:"179px"},{image:"https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg",href:"https://job.alibaba.com/zhaopin/informationPlatformBu.htm?",width:"260px"}],recruitData:[{station:"\u524d\u7aef\u6280\u672f\u4e13\u5bb6",city:"\u91cd\u5e86",time:"20\u5206\u949f\u524d\u524d"},{station:"\u963f\u91cc\u96c6\u56e2-\u7efc\u827a\u5236\u7247\u4eba",city:"\u6210\u90fd",time:"1\u5c0f\u65f6\u524d"},{station:"\u4ea7\u54c1\u7ecf\u7406",city:"\u5e7f\u5dde",time:"1\u5c0f\u65f6\u524d"},{station:"\u8bed\u96c0\u79fb\u52a8\u7aef\u5f00\u53d1\u5de5\u7a0b\u5e08",city:"\u897f\u5b89",time:"1\u5c0f\u65f6\u524d"},{station:"Java\u5f00\u53d1\u5de5\u7a0b\u5e08",city:"\u4e0a\u6d77",time:"1\u5c0f\u65f6\u524d"},{station:"\u53e3\u7891\u8425\u9500\u987e\u95ee",city:"\u6b66\u6c49",time:"1\u5c0f\u65f6\u524d"},{station:"\u4e1a\u52a1\u5e73\u53f0\u4e8b\u4e1a\u90e8",city:"\u5317\u4eac",time:"1\u5c0f\u65f6\u524d"},{station:"\u6570\u636e\u8fd0\u8425\u4e13\u5bb6",city:"\u676d\u5dde",time:"1\u5c0f\u65f6\u524d"},{station:"\u6d4b\u8bd5\u5f00\u53d1\u4e13\u5bb6",city:"\u90d1\u5dde",time:"1\u5c0f\u65f6\u524d"},{station:"\u4f9b\u5e94\u94fe\u8fd0\u8425\u4e13\u5bb6",city:"\u6df1\u5733",time:"1\u5c0f\u65f6\u524d"},{station:"\u524d\u7aef\u6280\u672f\u4e13\u5bb6",city:"\u91cd\u5e86",time:"5\u5929\u524d"},{station:"\u963f\u91cc\u96c6\u56e2-\u7efc\u827a\u5236\u7247\u4eba",city:"\u6210\u90fd",time:"1\u5c0f\u65f6\u524d"},{station:"\u4ea7\u54c1\u7ecf\u7406",city:"\u5e7f\u5dde",time:"1\u5c0f\u65f6\u524d"},{station:"\u8bed\u96c0\u79fb\u52a8\u7aef\u5f00\u53d1\u5de5\u7a0b\u5e08",city:"\u897f\u5b89",time:"1\u5c0f\u65f6\u524d"},{station:"Java\u5f00\u53d1\u5de5\u7a0b\u5e08",city:"\u4e0a\u6d77",time:"1\u5c0f\u65f6\u524d"},{station:"\u53e3\u7891\u8425\u9500\u987e\u95ee",city:"\u6b66\u6c49",time:"1\u5c0f\u65f6\u524d"},{station:"\u4e1a\u52a1\u5e73\u53f0\u4e8b\u4e1a\u90e8",city:"\u5317\u4eac",time:"1\u5c0f\u65f6\u524d"},{station:"\u6570\u636e\u8fd0\u8425\u4e13\u5bb6",city:"\u676d\u5dde",time:"1\u5c0f\u65f6\u524d"},{station:"\u6d4b\u8bd5\u5f00\u53d1\u4e13\u5bb6",city:"\u90d1\u5dde",time:"1\u5c0f\u65f6\u524d"},{station:"\u4f9b\u5e94\u94fe\u8fd0\u8425\u4e13\u5bb6",city:"\u6df1\u5733",time:"1\u5c0f\u65f6\u524d"}]},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.popularizeList,a=e.recruitData;return n.a.createElement("div",null,n.a.createElement("div",{className:"home-main",style:{position:"relative",height:"478px"}},n.a.createElement("img",{className:"index-image",src:"https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png",style:{verticalAlign:"middle",width:"100%",height:"100%"},alt:""}),n.a.createElement("div",{style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",background:"rgba(31,56,88,0.40)"}}),n.a.createElement("div",{className:"index-mid-box",style:{height:"100%"}},n.a.createElement("form",{action:"",className:"search-form"},n.a.createElement("div",{className:"float-mid",style:{top:"50%",marginLeft:"-245px",marginTop:"-145px"}},n.a.createElement("p",{style:{fontSize:"54px",color:"#fff",lineHeight:"56px"},className:"en-world"},"If not now, when?"),n.a.createElement("p",{style:{fontSize:"54px",color:"#fff",lineHeight:"56px"},className:"en-world"},"If not me, who?"),n.a.createElement("p",{style:{fontSize:"34px",color:"#fff",marginBottom:"38px",lineHeight:"48px"}},"\u6b64\u65f6\u6b64\u523b\uff0c\u975e\u6211\u83ab\u5c5e\uff01"),n.a.createElement("div",{className:"search-box",style:{width:"490px",height:"60px",position:"relative",border:"0px",background:"none",margin:"0 auto"}},n.a.createElement("span",{id:"9082976388826194_span",className:"search-topic",style:{left:"15px"}},"\u8bf7\u8f93\u5165\u804c\u4f4d\u5173\u952e\u8bcd"),n.a.createElement("div",{style:{width:"100%",height:"100%",background:"#fff",position:"absolute",opacity:"0.1",filter:"alpha(opacity=10)"}}),n.a.createElement("input",{type:"text",maxLength:"30",topic:"\u8bf7\u8f93\u5165\u804c\u4f4d\u5173\u952e\u8bcd",style:{width:"368px",height:"40px",paddingTop:"6px",marginTop:"6px",marginLeft:"10px",boxSizing:"border-box",borderRadius:"3px"},className:"search-text",id:"9082976388826194"}),n.a.createElement("input",{className:"search-btn",type:"submit",style:{color:"#fff",background:"#F37327",fontSize:"14px",fontFamily:"PingFangSC-Regular",width:"92px",height:"40px",borderRadius:"3px",marginTop:"10px",marginLeft:"10px",position:"relative",zIndex:"2"},value:"\u641c\u7d22"})),n.a.createElement("div",{className:"hot-text",style:{textAlign:"center"}},"\u70ed\u95e8\u641c\u7d22\uff1a",n.a.createElement("a",{className:"search-key",href:"https://www.baidu.com"},"JAVA"),n.a.createElement("a",{className:"search-key",href:"https://www.baidu.com"},"IOS"),n.a.createElement("a",{className:"search-key",href:"https://www.baidu.com"},"\u6570\u636e"),n.a.createElement("a",{className:"search-key",href:"https://www.baidu.com"},"\u5b89\u5168"),n.a.createElement("a",{className:"search-key",href:"https://www.baidu.com"},"\u641c\u7d22"),n.a.createElement("a",{className:"search-key",href:"https://www.baidu.com"},"\u7b97\u6cd5"),n.a.createElement("a",{className:"search-key",href:"https://www.baidu.com"},"\u8fd0\u8425"),n.a.createElement("a",{className:"search-key",href:"https://www.baidu.com"},"\u89c6\u89c9"),n.a.createElement("a",{className:"search-key",href:"https://www.baidu.com"},"\u4ea4\u4e92"),n.a.createElement("a",{className:"search-key",href:"https://www.baidu.com"},"\u524d\u7aef")))))),n.a.createElement("div",{id:"content",style:{width:"1180px",height:"300px",margin:"0 auto",display:"flex",justifyContent:"space-between",padding:"20px 0"}},n.a.createElement("div",{className:"left-recruit-info",style:{width:"850px",height:"300px"}},n.a.createElement(f,{title:"\u6700\u65b0\u804c\u4f4d",list:a})),n.a.createElement("div",{className:"company-popularize",style:{width:"310px",height:"300px"}},t.map((function(e,t){return n.a.createElement("a",{href:e.href,className:0===t?"marb20":"",style:{lineHeight:"140px",textAlign:"center",cursor:"pointer",backgroundColor:"#fff",borderRadius:"3px",boxShadow:"0 0 15px 0 rgba(31,56,88,0.08)",display:"block"},key:t+e},n.a.createElement("img",{src:e.image,style:{width:e.width,verticalAlign:"middle"}}))})))),n.a.createElement("div",{className:"fotter",style:{textAlign:"center"}},n.a.createElement("div",{className:"fotter-content"},"\u963f\u91cc\u5df4\u5df4\u96c6\u56e2 Copyright \xa91999-2019 \u7248\u6743\u6240\u6709")))}}]),t}(i.Component));var y=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(h,null),n.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.662be387.chunk.js.map