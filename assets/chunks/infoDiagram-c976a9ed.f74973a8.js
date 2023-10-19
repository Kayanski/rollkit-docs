import{l as N,c as M,h as O}from"../app.5fa43a18.js";import"./framework.4ab75e15.js";import"./theme.ecad28f9.js";var $=function(){var c=function(h,t,e,n){for(e=e||{},n=h.length;n--;e[h[n]]=t);return e},f=[6,9,10],d={trace:function(){},yy:{},symbols_:{error:2,start:3,info:4,document:5,EOF:6,line:7,statement:8,NL:9,showInfo:10,$accept:0,$end:1},terminals_:{2:"error",4:"info",6:"EOF",9:"NL",10:"showInfo"},productions_:[0,[3,3],[5,0],[5,2],[7,1],[7,1],[8,1]],performAction:function(t,e,n,s,r,i,k){switch(i.length-1,r){case 1:return s;case 4:break;case 6:s.setInfo(!0);break}},table:[{3:1,4:[1,2]},{1:[3]},c(f,[2,2],{5:3}),{6:[1,4],7:5,8:6,9:[1,7],10:[1,8]},{1:[2,1]},c(f,[2,3]),c(f,[2,4]),c(f,[2,5]),c(f,[2,6])],defaultActions:{4:[2,1]},parseError:function(t,e){if(e.recoverable)this.trace(t);else{var n=new Error(t);throw n.hash=e,n}},parse:function(t){var e=this,n=[0],s=[],r=[null],i=[],k=this.table,L="",b=0,T=0,z=2,F=1,D=i.slice.call(arguments,1),o=Object.create(this.lexer),g={yy:{}};for(var E in this.yy)Object.prototype.hasOwnProperty.call(this.yy,E)&&(g.yy[E]=this.yy[E]);o.setInput(t,g.yy),g.yy.lexer=o,g.yy.parser=this,typeof o.yylloc>"u"&&(o.yylloc={});var w=o.yylloc;i.push(w);var U=o.options&&o.options.ranges;typeof g.yy.parseError=="function"?this.parseError=g.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function Y(){var u;return u=s.pop()||o.lex()||F,typeof u!="number"&&(u instanceof Array&&(s=u,u=s.pop()),u=e.symbols_[u]||u),u}for(var l,_,a,I,m={},v,y,j,S;;){if(_=n[n.length-1],this.defaultActions[_]?a=this.defaultActions[_]:((l===null||typeof l>"u")&&(l=Y()),a=k[_]&&k[_][l]),typeof a>"u"||!a.length||!a[0]){var A="";S=[];for(v in k[_])this.terminals_[v]&&v>z&&S.push("'"+this.terminals_[v]+"'");o.showPosition?A="Parse error on line "+(b+1)+`:
`+o.showPosition()+`
Expecting `+S.join(", ")+", got '"+(this.terminals_[l]||l)+"'":A="Parse error on line "+(b+1)+": Unexpected "+(l==F?"end of input":"'"+(this.terminals_[l]||l)+"'"),this.parseError(A,{text:o.match,token:this.terminals_[l]||l,line:o.yylineno,loc:w,expected:S})}if(a[0]instanceof Array&&a.length>1)throw new Error("Parse Error: multiple actions possible at state: "+_+", token: "+l);switch(a[0]){case 1:n.push(l),r.push(o.yytext),i.push(o.yylloc),n.push(a[1]),l=null,T=o.yyleng,L=o.yytext,b=o.yylineno,w=o.yylloc;break;case 2:if(y=this.productions_[a[1]][1],m.$=r[r.length-y],m._$={first_line:i[i.length-(y||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(y||1)].first_column,last_column:i[i.length-1].last_column},U&&(m._$.range=[i[i.length-(y||1)].range[0],i[i.length-1].range[1]]),I=this.performAction.apply(m,[L,T,b,g.yy,a[1],r,i].concat(D)),typeof I<"u")return I;y&&(n=n.slice(0,-1*y*2),r=r.slice(0,-1*y),i=i.slice(0,-1*y)),n.push(this.productions_[a[1]][0]),r.push(m.$),i.push(m._$),j=k[n[n.length-2]][n[n.length-1]],n.push(j);break;case 3:return!0}}return!0}},x=function(){var h={EOF:1,parseError:function(e,n){if(this.yy.parser)this.yy.parser.parseError(e,n);else throw new Error(e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t;var e=t.match(/(?:\r\n?|\n).*/g);return e?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var s=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===s.length?this.yylloc.first_column:0)+s[s.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+`
`+e+"^"},test_match:function(t,e){var n,s,r;if(this.options.backtrack_lexer&&(r={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(r.yylloc.range=this.yylloc.range.slice(0))),s=t[0].match(/(?:\r\n?|\n).*/g),s&&(this.yylineno+=s.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:s?s[s.length-1].length-s[s.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var i in r)this[i]=r[i];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var t,e,n,s;this._more||(this.yytext="",this.match="");for(var r=this._currentRules(),i=0;i<r.length;i++)if(n=this._input.match(this.rules[r[i]]),n&&(!e||n[0].length>e[0].length)){if(e=n,s=i,this.options.backtrack_lexer){if(t=this.test_match(n,r[i]),t!==!1)return t;if(this._backtrack){e=!1;continue}else return!1}else if(!this.options.flex)break}return e?(t=this.test_match(e,r[s]),t!==!1?t:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var e=this.next();return e||this.lex()},begin:function(e){this.conditionStack.push(e)},popState:function(){var e=this.conditionStack.length-1;return e>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(e){return e=this.conditionStack.length-1-Math.abs(e||0),e>=0?this.conditionStack[e]:"INITIAL"},pushState:function(e){this.begin(e)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(e,n,s,r){switch(s){case 0:return 4;case 1:return 9;case 2:return"space";case 3:return 10;case 4:return 6;case 5:return"TXT"}},rules:[/^(?:info\b)/i,/^(?:[\s\n\r]+)/i,/^(?:[\s]+)/i,/^(?:showInfo\b)/i,/^(?:$)/i,/^(?:.)/i],conditions:{INITIAL:{rules:[0,1,2,3,4,5],inclusive:!0}}};return h}();d.lexer=x;function p(){this.yy={}}return p.prototype=d,d.Parser=p,new p}();$.parser=$;const B=$,R={info:!1};let P=R.info;const C=c=>{P=c},V=()=>P,X=()=>{P=R.info},q={clear:X,setInfo:C,getInfo:V},G=(c,f,d)=>{try{N.debug(`rendering info diagram
`+c);const{securityLevel:x}=M();let p,h;x==="sandbox"&&(p=O("#i"+f),h=p.nodes()[0].contentDocument);const e=(p!==void 0&&h!==void 0&&h!==null?O(h):O("body")).select("#"+f);e.attr("height",100),e.attr("width",400),e.append("g").append("text").attr("x",100).attr("y",40).attr("class","version").attr("font-size","32px").style("text-anchor","middle").text("v "+d)}catch(x){N.error("error while rendering info diagram",x)}},H={draw:G},W={parser:B,db:q,renderer:H};export{W as diagram};
