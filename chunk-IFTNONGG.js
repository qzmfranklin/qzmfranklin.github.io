import{b as $e,d as _e,e as ze}from"./chunk-QWTZ3TBZ.js";import{$a as Re,Ba as ke,Ca as xe,Da as V,Ea as I,Fa as E,Ga as O,Ha as y,Ia as b,Ja as be,L as q,Na as we,Oa as _,Qa as ve,Ra as ye,Sa as Se,Ta as Te,Ua as S,Va as J,Wa as H,a as x,b as A,c as ge,ia as fe,ka as v,ua as me}from"./chunk-GZ7UTLGB.js";function te(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var C=te();function Pe(n){C=n}var D={exec:()=>null};function d(n,e=""){let t=typeof n=="string"?n:n.source,r={replace:(i,s)=>{let o=typeof s=="string"?s:s.source;return o=o.replace(k.caret,"$1"),t=t.replace(i,o),r},getRegex:()=>new RegExp(t,e)};return r}var k={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:n=>new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}#`),htmlBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}<(?:[a-z].*>|!--)`,"i")},Xe=/^(?:[ \t]*(?:\n|$))+/,Ve=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Je=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,M=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Ke=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,ne=/(?:[*+-]|\d{1,9}[.)])/,Be=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,De=d(Be).replace(/bull/g,ne).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Ye=d(Be).replace(/bull/g,ne).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),ie=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,et=/^[^\n]+/,re=/(?!\s*\])(?:\\.|[^\[\]\\])+/,tt=d(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",re).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),nt=d(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,ne).getRegex(),j="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",se=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,it=d("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",se).replace("tag",j).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Me=d(ie).replace("hr",M).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",j).getRegex(),rt=d(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Me).getRegex(),oe={blockquote:rt,code:Ve,def:tt,fences:Je,heading:Ke,hr:M,html:it,lheading:De,list:nt,newline:Xe,paragraph:Me,table:D,text:et},Ce=d("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",M).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",j).getRegex(),st=A(x({},oe),{lheading:Ye,table:Ce,paragraph:d(ie).replace("hr",M).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Ce).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",j).getRegex()}),ot=A(x({},oe),{html:d(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",se).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:D,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:d(ie).replace("hr",M).replace("heading",` *#{1,6} *[^
]`).replace("lheading",De).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()}),at=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,lt=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,qe=/^( {2,}|\\)\n(?!\s*$)/,ct=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,U=/[\p{P}\p{S}]/u,ae=/[\s\p{P}\p{S}]/u,Oe=/[^\s\p{P}\p{S}]/u,pt=d(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,ae).getRegex(),He=/(?!~)[\p{P}\p{S}]/u,ht=/(?!~)[\s\p{P}\p{S}]/u,ut=/(?:[^\s\p{P}\p{S}]|~)/u,dt=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,Ze=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,gt=d(Ze,"u").replace(/punct/g,U).getRegex(),ft=d(Ze,"u").replace(/punct/g,He).getRegex(),Fe="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",mt=d(Fe,"gu").replace(/notPunctSpace/g,Oe).replace(/punctSpace/g,ae).replace(/punct/g,U).getRegex(),kt=d(Fe,"gu").replace(/notPunctSpace/g,ut).replace(/punctSpace/g,ht).replace(/punct/g,He).getRegex(),xt=d("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Oe).replace(/punctSpace/g,ae).replace(/punct/g,U).getRegex(),bt=d(/\\(punct)/,"gu").replace(/punct/g,U).getRegex(),wt=d(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),vt=d(se).replace("(?:-->|$)","-->").getRegex(),yt=d("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",vt).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),N=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,St=d(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",N).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Ne=d(/^!?\[(label)\]\[(ref)\]/).replace("label",N).replace("ref",re).getRegex(),Ge=d(/^!?\[(ref)\](?:\[\])?/).replace("ref",re).getRegex(),Tt=d("reflink|nolink(?!\\()","g").replace("reflink",Ne).replace("nolink",Ge).getRegex(),le={_backpedal:D,anyPunctuation:bt,autolink:wt,blockSkip:dt,br:qe,code:lt,del:D,emStrongLDelim:gt,emStrongRDelimAst:mt,emStrongRDelimUnd:xt,escape:at,link:St,nolink:Ge,punctuation:pt,reflink:Ne,reflinkSearch:Tt,tag:yt,text:ct,url:D},Rt=A(x({},le),{link:d(/^!?\[(label)\]\((.*?)\)/).replace("label",N).getRegex(),reflink:d(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",N).getRegex()}),K=A(x({},le),{emStrongRDelimAst:kt,emStrongLDelim:ft,url:d(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),$t=A(x({},K),{br:d(qe).replace("{2,}","*").getRegex(),text:d(K.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()}),Z={normal:oe,gfm:st,pedantic:ot},P={normal:le,gfm:K,breaks:$t,pedantic:Rt},_t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ae=n=>_t[n];function T(n,e){if(e){if(k.escapeTest.test(n))return n.replace(k.escapeReplace,Ae)}else if(k.escapeTestNoEncode.test(n))return n.replace(k.escapeReplaceNoEncode,Ae);return n}function Le(n){try{n=encodeURI(n).replace(k.percentDecode,"%")}catch(e){return null}return n}function Ie(n,e){let t=n.replace(k.findPipe,(s,o,a)=>{let c=!1,l=o;for(;--l>=0&&a[l]==="\\";)c=!c;return c?"|":" |"}),r=t.split(k.splitPipe),i=0;if(r[0].trim()||r.shift(),r.length>0&&!r.at(-1)?.trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;i<r.length;i++)r[i]=r[i].trim().replace(k.slashPipe,"|");return r}function B(n,e,t){let r=n.length;if(r===0)return"";let i=0;for(;i<r;){let s=n.charAt(r-i-1);if(s===e&&!t)i++;else if(s!==e&&t)i++;else break}return n.slice(0,r-i)}function zt(n,e){if(n.indexOf(e[1])===-1)return-1;let t=0;for(let r=0;r<n.length;r++)if(n[r]==="\\")r++;else if(n[r]===e[0])t++;else if(n[r]===e[1]&&(t--,t<0))return r;return t>0?-2:-1}function Ee(n,e,t,r,i){let s=e.href,o=e.title||null,a=n[1].replace(i.other.outputLinkReplace,"$1");r.state.inLink=!0;let c={type:n[0].charAt(0)==="!"?"image":"link",raw:t,href:s,title:o,text:a,tokens:r.inlineTokens(a)};return r.state.inLink=!1,c}function Ct(n,e,t){let r=n.match(t.other.indentCodeCompensation);if(r===null)return e;let i=r[1];return e.split(`
`).map(s=>{let o=s.match(t.other.beginningSpace);if(o===null)return s;let[a]=o;return a.length>=i.length?s.slice(i.length):s}).join(`
`)}var G=class{options;rules;lexer;constructor(n){this.options=n||C}space(n){let e=this.rules.block.newline.exec(n);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(n){let e=this.rules.block.code.exec(n);if(e){let t=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:B(t,`
`)}}}fences(n){let e=this.rules.block.fences.exec(n);if(e){let t=e[0],r=Ct(t,e[3]||"",this.rules);return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:r}}}heading(n){let e=this.rules.block.heading.exec(n);if(e){let t=e[2].trim();if(this.rules.other.endingHash.test(t)){let r=B(t,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(t=r.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(n){let e=this.rules.block.hr.exec(n);if(e)return{type:"hr",raw:B(e[0],`
`)}}blockquote(n){let e=this.rules.block.blockquote.exec(n);if(e){let t=B(e[0],`
`).split(`
`),r="",i="",s=[];for(;t.length>0;){let o=!1,a=[],c;for(c=0;c<t.length;c++)if(this.rules.other.blockquoteStart.test(t[c]))a.push(t[c]),o=!0;else if(!o)a.push(t[c]);else break;t=t.slice(c);let l=a.join(`
`),p=l.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${l}`:l,i=i?`${i}
${p}`:p;let f=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(p,s,!0),this.lexer.state.top=f,t.length===0)break;let u=s.at(-1);if(u?.type==="code")break;if(u?.type==="blockquote"){let m=u,g=m.raw+`
`+t.join(`
`),w=this.blockquote(g);s[s.length-1]=w,r=r.substring(0,r.length-m.raw.length)+w.raw,i=i.substring(0,i.length-m.text.length)+w.text;break}else if(u?.type==="list"){let m=u,g=m.raw+`
`+t.join(`
`),w=this.list(g);s[s.length-1]=w,r=r.substring(0,r.length-u.raw.length)+w.raw,i=i.substring(0,i.length-m.raw.length)+w.raw,t=g.substring(s.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:s,text:i}}}list(n){let e=this.rules.block.list.exec(n);if(e){let t=e[1].trim(),r=t.length>1,i={type:"list",raw:"",ordered:r,start:r?+t.slice(0,-1):"",loose:!1,items:[]};t=r?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=r?t:"[*+-]");let s=this.rules.other.listItemRegex(t),o=!1;for(;n;){let c=!1,l="",p="";if(!(e=s.exec(n))||this.rules.block.hr.test(n))break;l=e[0],n=n.substring(l.length);let f=e[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,W=>" ".repeat(3*W.length)),u=n.split(`
`,1)[0],m=!f.trim(),g=0;if(this.options.pedantic?(g=2,p=f.trimStart()):m?g=e[1].length+1:(g=e[2].search(this.rules.other.nonSpaceChar),g=g>4?1:g,p=f.slice(g),g+=e[1].length),m&&this.rules.other.blankLine.test(u)&&(l+=u+`
`,n=n.substring(u.length+1),c=!0),!c){let W=this.rules.other.nextBulletRegex(g),he=this.rules.other.hrRegex(g),ue=this.rules.other.fencesBeginRegex(g),de=this.rules.other.headingBeginRegex(g),We=this.rules.other.htmlBeginRegex(g);for(;n;){let X=n.split(`
`,1)[0],L;if(u=X,this.options.pedantic?(u=u.replace(this.rules.other.listReplaceNesting,"  "),L=u):L=u.replace(this.rules.other.tabCharGlobal,"    "),ue.test(u)||de.test(u)||We.test(u)||W.test(u)||he.test(u))break;if(L.search(this.rules.other.nonSpaceChar)>=g||!u.trim())p+=`
`+L.slice(g);else{if(m||f.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||ue.test(f)||de.test(f)||he.test(f))break;p+=`
`+u}!m&&!u.trim()&&(m=!0),l+=X+`
`,n=n.substring(X.length+1),f=L.slice(g)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(l)&&(o=!0));let w=null,pe;this.options.gfm&&(w=this.rules.other.listIsTask.exec(p),w&&(pe=w[0]!=="[ ] ",p=p.replace(this.rules.other.listReplaceTask,""))),i.items.push({type:"list_item",raw:l,task:!!w,checked:pe,loose:!1,text:p,tokens:[]}),i.raw+=l}let a=i.items.at(-1);if(a)a.raw=a.raw.trimEnd(),a.text=a.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let c=0;c<i.items.length;c++)if(this.lexer.state.top=!1,i.items[c].tokens=this.lexer.blockTokens(i.items[c].text,[]),!i.loose){let l=i.items[c].tokens.filter(f=>f.type==="space"),p=l.length>0&&l.some(f=>this.rules.other.anyLine.test(f.raw));i.loose=p}if(i.loose)for(let c=0;c<i.items.length;c++)i.items[c].loose=!0;return i}}html(n){let e=this.rules.block.html.exec(n);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(n){let e=this.rules.block.def.exec(n);if(e){let t=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:e[0],href:r,title:i}}}table(n){let e=this.rules.block.table.exec(n);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let t=Ie(e[1]),r=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],s={type:"table",raw:e[0],header:[],align:[],rows:[]};if(t.length===r.length){for(let o of r)this.rules.other.tableAlignRight.test(o)?s.align.push("right"):this.rules.other.tableAlignCenter.test(o)?s.align.push("center"):this.rules.other.tableAlignLeft.test(o)?s.align.push("left"):s.align.push(null);for(let o=0;o<t.length;o++)s.header.push({text:t[o],tokens:this.lexer.inline(t[o]),header:!0,align:s.align[o]});for(let o of i)s.rows.push(Ie(o,s.header.length).map((a,c)=>({text:a,tokens:this.lexer.inline(a),header:!1,align:s.align[c]})));return s}}lheading(n){let e=this.rules.block.lheading.exec(n);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(n){let e=this.rules.block.paragraph.exec(n);if(e){let t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(n){let e=this.rules.block.text.exec(n);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(n){let e=this.rules.inline.escape.exec(n);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(n){let e=this.rules.inline.tag.exec(n);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(n){let e=this.rules.inline.link.exec(n);if(e){let t=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(t)){if(!this.rules.other.endAngleBracket.test(t))return;let s=B(t.slice(0,-1),"\\");if((t.length-s.length)%2===0)return}else{let s=zt(e[2],"()");if(s===-2)return;if(s>-1){let a=(e[0].indexOf("!")===0?5:4)+e[1].length+s;e[2]=e[2].substring(0,s),e[0]=e[0].substring(0,a).trim(),e[3]=""}}let r=e[2],i="";if(this.options.pedantic){let s=this.rules.other.pedanticHrefTitle.exec(r);s&&(r=s[1],i=s[3])}else i=e[3]?e[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(t)?r=r.slice(1):r=r.slice(1,-1)),Ee(e,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(n,e){let t;if((t=this.rules.inline.reflink.exec(n))||(t=this.rules.inline.nolink.exec(n))){let r=(t[2]||t[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=e[r.toLowerCase()];if(!i){let s=t[0].charAt(0);return{type:"text",raw:s,text:s}}return Ee(t,i,t[0],this.lexer,this.rules)}}emStrong(n,e,t=""){let r=this.rules.inline.emStrongLDelim.exec(n);if(!r||r[3]&&t.match(this.rules.other.unicodeAlphaNumeric))return;if(!(r[1]||r[2]||"")||!t||this.rules.inline.punctuation.exec(t)){let s=[...r[0]].length-1,o,a,c=s,l=0,p=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(p.lastIndex=0,e=e.slice(-1*n.length+s);(r=p.exec(e))!=null;){if(o=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!o)continue;if(a=[...o].length,r[3]||r[4]){c+=a;continue}else if((r[5]||r[6])&&s%3&&!((s+a)%3)){l+=a;continue}if(c-=a,c>0)continue;a=Math.min(a,a+c+l);let f=[...r[0]][0].length,u=n.slice(0,s+r.index+f+a);if(Math.min(s,a)%2){let g=u.slice(1,-1);return{type:"em",raw:u,text:g,tokens:this.lexer.inlineTokens(g)}}let m=u.slice(2,-2);return{type:"strong",raw:u,text:m,tokens:this.lexer.inlineTokens(m)}}}}codespan(n){let e=this.rules.inline.code.exec(n);if(e){let t=e[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(t),i=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return r&&i&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:e[0],text:t}}}br(n){let e=this.rules.inline.br.exec(n);if(e)return{type:"br",raw:e[0]}}del(n){let e=this.rules.inline.del.exec(n);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(n){let e=this.rules.inline.autolink.exec(n);if(e){let t,r;return e[2]==="@"?(t=e[1],r="mailto:"+t):(t=e[1],r=t),{type:"link",raw:e[0],text:t,href:r,tokens:[{type:"text",raw:t,text:t}]}}}url(n){let e;if(e=this.rules.inline.url.exec(n)){let t,r;if(e[2]==="@")t=e[0],r="mailto:"+t;else{let i;do i=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(i!==e[0]);t=e[0],e[1]==="www."?r="http://"+e[0]:r=e[0]}return{type:"link",raw:e[0],text:t,href:r,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(n){let e=this.rules.inline.text.exec(n);if(e){let t=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:t}}}},R=class Y{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||C,this.options.tokenizer=this.options.tokenizer||new G,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:k,block:Z.normal,inline:P.normal};this.options.pedantic?(t.block=Z.pedantic,t.inline=P.pedantic):this.options.gfm&&(t.block=Z.gfm,this.options.breaks?t.inline=P.breaks:t.inline=P.gfm),this.tokenizer.rules=t}static get rules(){return{block:Z,inline:P}}static lex(e,t){return new Y(t).lex(e)}static lexInline(e,t){return new Y(t).inlineTokens(e)}lex(e){e=e.replace(k.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){let r=this.inlineQueue[t];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],r=!1){for(this.options.pedantic&&(e=e.replace(k.tabCharGlobal,"    ").replace(k.spaceLine,""));e;){let i;if(this.options.extensions?.block?.some(o=>(i=o.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let o=t.at(-1);i.raw.length===1&&o!==void 0?o.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let o=t.at(-1);o?.type==="paragraph"||o?.type==="text"?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue.at(-1).src=o.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let o=t.at(-1);o?.type==="paragraph"||o?.type==="text"?(o.raw+=`
`+i.raw,o.text+=`
`+i.raw,this.inlineQueue.at(-1).src=o.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}let s=e;if(this.options.extensions?.startBlock){let o=1/0,a=e.slice(1),c;this.options.extensions.startBlock.forEach(l=>{c=l.call({lexer:this},a),typeof c=="number"&&c>=0&&(o=Math.min(o,c))}),o<1/0&&o>=0&&(s=e.substring(0,o+1))}if(this.state.top&&(i=this.tokenizer.paragraph(s))){let o=t.at(-1);r&&o?.type==="paragraph"?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):t.push(i),r=s.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let o=t.at(-1);o?.type==="text"?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):t.push(i);continue}if(e){let o="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let r=e,i=null;if(this.tokens.links){let a=Object.keys(this.tokens.links);if(a.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)a.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,i.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(i=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let s=!1,o="";for(;e;){s||(o=""),s=!1;let a;if(this.options.extensions?.inline?.some(l=>(a=l.call({lexer:this},e,t))?(e=e.substring(a.raw.length),t.push(a),!0):!1))continue;if(a=this.tokenizer.escape(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.tag(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.link(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(a.raw.length);let l=t.at(-1);a.type==="text"&&l?.type==="text"?(l.raw+=a.raw,l.text+=a.text):t.push(a);continue}if(a=this.tokenizer.emStrong(e,r,o)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.codespan(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.br(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.del(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.autolink(e)){e=e.substring(a.raw.length),t.push(a);continue}if(!this.state.inLink&&(a=this.tokenizer.url(e))){e=e.substring(a.raw.length),t.push(a);continue}let c=e;if(this.options.extensions?.startInline){let l=1/0,p=e.slice(1),f;this.options.extensions.startInline.forEach(u=>{f=u.call({lexer:this},p),typeof f=="number"&&f>=0&&(l=Math.min(l,f))}),l<1/0&&l>=0&&(c=e.substring(0,l+1))}if(a=this.tokenizer.inlineText(c)){e=e.substring(a.raw.length),a.raw.slice(-1)!=="_"&&(o=a.raw.slice(-1)),s=!0;let l=t.at(-1);l?.type==="text"?(l.raw+=a.raw,l.text+=a.text):t.push(a);continue}if(e){let l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return t}},Q=class{options;parser;constructor(n){this.options=n||C}space(n){return""}code({text:n,lang:e,escaped:t}){let r=(e||"").match(k.notSpaceStart)?.[0],i=n.replace(k.endingNewline,"")+`
`;return r?'<pre><code class="language-'+T(r)+'">'+(t?i:T(i,!0))+`</code></pre>
`:"<pre><code>"+(t?i:T(i,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}heading({tokens:n,depth:e}){return`<h${e}>${this.parser.parseInline(n)}</h${e}>
`}hr(n){return`<hr>
`}list(n){let e=n.ordered,t=n.start,r="";for(let o=0;o<n.items.length;o++){let a=n.items[o];r+=this.listitem(a)}let i=e?"ol":"ul",s=e&&t!==1?' start="'+t+'"':"";return"<"+i+s+`>
`+r+"</"+i+`>
`}listitem(n){let e="";if(n.task){let t=this.checkbox({checked:!!n.checked});n.loose?n.tokens[0]?.type==="paragraph"?(n.tokens[0].text=t+" "+n.tokens[0].text,n.tokens[0].tokens&&n.tokens[0].tokens.length>0&&n.tokens[0].tokens[0].type==="text"&&(n.tokens[0].tokens[0].text=t+" "+T(n.tokens[0].tokens[0].text),n.tokens[0].tokens[0].escaped=!0)):n.tokens.unshift({type:"text",raw:t+" ",text:t+" ",escaped:!0}):e+=t+" "}return e+=this.parser.parse(n.tokens,!!n.loose),`<li>${e}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let e="",t="";for(let i=0;i<n.header.length;i++)t+=this.tablecell(n.header[i]);e+=this.tablerow({text:t});let r="";for(let i=0;i<n.rows.length;i++){let s=n.rows[i];t="";for(let o=0;o<s.length;o++)t+=this.tablecell(s[o]);r+=this.tablerow({text:t})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+r+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){let e=this.parser.parseInline(n.tokens),t=n.header?"th":"td";return(n.align?`<${t} align="${n.align}">`:`<${t}>`)+e+`</${t}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${T(n,!0)}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:e,tokens:t}){let r=this.parser.parseInline(t),i=Le(n);if(i===null)return r;n=i;let s='<a href="'+n+'"';return e&&(s+=' title="'+T(e)+'"'),s+=">"+r+"</a>",s}image({href:n,title:e,text:t,tokens:r}){r&&(t=this.parser.parseInline(r,this.parser.textRenderer));let i=Le(n);if(i===null)return T(t);n=i;let s=`<img src="${n}" alt="${t}"`;return e&&(s+=` title="${T(e)}"`),s+=">",s}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):"escaped"in n&&n.escaped?n.text:T(n.text)}},ce=class{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}},$=class ee{options;renderer;textRenderer;constructor(e){this.options=e||C,this.options.renderer=this.options.renderer||new Q,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new ce}static parse(e,t){return new ee(t).parse(e)}static parseInline(e,t){return new ee(t).parseInline(e)}parse(e,t=!0){let r="";for(let i=0;i<e.length;i++){let s=e[i];if(this.options.extensions?.renderers?.[s.type]){let a=s,c=this.options.extensions.renderers[a.type].call({parser:this},a);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(a.type)){r+=c||"";continue}}let o=s;switch(o.type){case"space":{r+=this.renderer.space(o);continue}case"hr":{r+=this.renderer.hr(o);continue}case"heading":{r+=this.renderer.heading(o);continue}case"code":{r+=this.renderer.code(o);continue}case"table":{r+=this.renderer.table(o);continue}case"blockquote":{r+=this.renderer.blockquote(o);continue}case"list":{r+=this.renderer.list(o);continue}case"html":{r+=this.renderer.html(o);continue}case"paragraph":{r+=this.renderer.paragraph(o);continue}case"text":{let a=o,c=this.renderer.text(a);for(;i+1<e.length&&e[i+1].type==="text";)a=e[++i],c+=`
`+this.renderer.text(a);t?r+=this.renderer.paragraph({type:"paragraph",raw:c,text:c,tokens:[{type:"text",raw:c,text:c,escaped:!0}]}):r+=c;continue}default:{let a='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return r}parseInline(e,t=this.renderer){let r="";for(let i=0;i<e.length;i++){let s=e[i];if(this.options.extensions?.renderers?.[s.type]){let a=this.options.extensions.renderers[s.type].call({parser:this},s);if(a!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){r+=a||"";continue}}let o=s;switch(o.type){case"escape":{r+=t.text(o);break}case"html":{r+=t.html(o);break}case"link":{r+=t.link(o);break}case"image":{r+=t.image(o);break}case"strong":{r+=t.strong(o);break}case"em":{r+=t.em(o);break}case"codespan":{r+=t.codespan(o);break}case"br":{r+=t.br(o);break}case"del":{r+=t.del(o);break}case"text":{r+=t.text(o);break}default:{let a='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return r}},F=class{options;block;constructor(e){this.options=e||C}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?R.lex:R.lexInline}provideParser(){return this.block?$.parse:$.parseInline}},At=class{defaults=te();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=$;Renderer=Q;TextRenderer=ce;Lexer=R;Tokenizer=G;Hooks=F;constructor(...n){this.use(...n)}walkTokens(n,e){let t=[];for(let r of n)switch(t=t.concat(e.call(this,r)),r.type){case"table":{let i=r;for(let s of i.header)t=t.concat(this.walkTokens(s.tokens,e));for(let s of i.rows)for(let o of s)t=t.concat(this.walkTokens(o.tokens,e));break}case"list":{let i=r;t=t.concat(this.walkTokens(i.items,e));break}default:{let i=r;this.defaults.extensions?.childTokens?.[i.type]?this.defaults.extensions.childTokens[i.type].forEach(s=>{let o=i[s].flat(1/0);t=t.concat(this.walkTokens(o,e))}):i.tokens&&(t=t.concat(this.walkTokens(i.tokens,e)))}}return t}use(...n){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(t=>{let r=x({},t);if(r.async=this.defaults.async||r.async||!1,t.extensions&&(t.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){let s=e.renderers[i.name];s?e.renderers[i.name]=function(...o){let a=i.renderer.apply(this,o);return a===!1&&(a=s.apply(this,o)),a}:e.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let s=e[i.level];s?s.unshift(i.tokenizer):e[i.level]=[i.tokenizer],i.start&&(i.level==="block"?e.startBlock?e.startBlock.push(i.start):e.startBlock=[i.start]:i.level==="inline"&&(e.startInline?e.startInline.push(i.start):e.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(e.childTokens[i.name]=i.childTokens)}),r.extensions=e),t.renderer){let i=this.defaults.renderer||new Q(this.defaults);for(let s in t.renderer){if(!(s in i))throw new Error(`renderer '${s}' does not exist`);if(["options","parser"].includes(s))continue;let o=s,a=t.renderer[o],c=i[o];i[o]=(...l)=>{let p=a.apply(i,l);return p===!1&&(p=c.apply(i,l)),p||""}}r.renderer=i}if(t.tokenizer){let i=this.defaults.tokenizer||new G(this.defaults);for(let s in t.tokenizer){if(!(s in i))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;let o=s,a=t.tokenizer[o],c=i[o];i[o]=(...l)=>{let p=a.apply(i,l);return p===!1&&(p=c.apply(i,l)),p}}r.tokenizer=i}if(t.hooks){let i=this.defaults.hooks||new F;for(let s in t.hooks){if(!(s in i))throw new Error(`hook '${s}' does not exist`);if(["options","block"].includes(s))continue;let o=s,a=t.hooks[o],c=i[o];F.passThroughHooks.has(s)?i[o]=l=>{if(this.defaults.async)return Promise.resolve(a.call(i,l)).then(f=>c.call(i,f));let p=a.call(i,l);return c.call(i,p)}:i[o]=(...l)=>{let p=a.apply(i,l);return p===!1&&(p=c.apply(i,l)),p}}r.hooks=i}if(t.walkTokens){let i=this.defaults.walkTokens,s=t.walkTokens;r.walkTokens=function(o){let a=[];return a.push(s.call(this,o)),i&&(a=a.concat(i.call(this,o))),a}}this.defaults=x(x({},this.defaults),r)}),this}setOptions(n){return this.defaults=x(x({},this.defaults),n),this}lexer(n,e){return R.lex(n,e??this.defaults)}parser(n,e){return $.parse(n,e??this.defaults)}parseMarkdown(n){return(t,r)=>{let i=x({},r),s=x(x({},this.defaults),i),o=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&i.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));s.hooks&&(s.hooks.options=s,s.hooks.block=n);let a=s.hooks?s.hooks.provideLexer():n?R.lex:R.lexInline,c=s.hooks?s.hooks.provideParser():n?$.parse:$.parseInline;if(s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(t):t).then(l=>a(l,s)).then(l=>s.hooks?s.hooks.processAllTokens(l):l).then(l=>s.walkTokens?Promise.all(this.walkTokens(l,s.walkTokens)).then(()=>l):l).then(l=>c(l,s)).then(l=>s.hooks?s.hooks.postprocess(l):l).catch(o);try{s.hooks&&(t=s.hooks.preprocess(t));let l=a(t,s);s.hooks&&(l=s.hooks.processAllTokens(l)),s.walkTokens&&this.walkTokens(l,s.walkTokens);let p=c(l,s);return s.hooks&&(p=s.hooks.postprocess(p)),p}catch(l){return o(l)}}}onError(n,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,n){let r="<p>An error occurred:</p><pre>"+T(t.message+"",!0)+"</pre>";return e?Promise.resolve(r):r}if(e)return Promise.reject(t);throw t}}},z=new At;function h(n,e){return z.parse(n,e)}h.options=h.setOptions=function(n){return z.setOptions(n),h.defaults=z.defaults,Pe(h.defaults),h};h.getDefaults=te;h.defaults=C;h.use=function(...n){return z.use(...n),h.defaults=z.defaults,Pe(h.defaults),h};h.walkTokens=function(n,e){return z.walkTokens(n,e)};h.parseInline=z.parseInline;h.Parser=$;h.parser=$.parse;h.Renderer=Q;h.TextRenderer=ce;h.Lexer=R;h.lexer=R.lex;h.Tokenizer=G;h.Hooks=F;h.parse=h;var Ft=h.options,Nt=h.setOptions,Gt=h.use,Qt=h.walkTokens,jt=h.parseInline;var Ut=$.parse,Wt=R.lex;var Lt=["docContent"],Qe=(n,e)=>e.slug;function It(n,e){if(n&1&&(y(0,"a",10),S(1),b()),n&2){let t=e.$implicit,r=_(2);Te("design-active",r.isActive(t)),O("routerLink",r.docRoute(t)),v(),J(t.title)}}function Et(n,e){if(n&1&&(y(0,"div",4)(1,"span",8),S(2),b(),I(3,It,2,4,"a",9,Qe),b()),n&2){let t=e.$implicit,r=_();v(2),H("",t,"/"),v(),E(r.docsForSection(t))}}function Pt(n,e){if(n&1&&(y(0,"a",10),S(1),b()),n&2){let t=e.$implicit,r=_(3);O("routerLink",r.docRoute(t)),v(),J(t.title)}}function Bt(n,e){if(n&1&&(y(0,"div",12)(1,"h2"),S(2),b(),I(3,Pt,2,2,"a",10,Qe),b()),n&2){let t=e.$implicit,r=_(2);v(2),H("",t,"/"),v(),E(r.docsForSection(t))}}function Dt(n,e){if(n&1&&(y(0,"h1"),S(1,"design/"),b(),y(2,"p",11),S(3),b(),I(4,Bt,5,1,"div",12,V),y(6,"p",13),S(7," upstream: prod/mu/doc \xB7 precedent: prod/vype/design (dual-mode resolver) "),b()),n&2){let t=_();v(3),H(" The full mu design language \u2014 ",t.docs.length," documents covering spec, foundation, tokens, policies, and patterns. Rendered from source, single source of truth. "),v(),E(t.sections)}}function Mt(n,e){n&1&&(y(0,"div",6),S(1,"Loading..."),b())}function qt(n,e){if(n&1&&be(0,"article",7,0),n&2){let t=_();O("innerHTML",t.renderedHtml,fe)}}var je=[{slug:"manifesto",title:"MANIFESTO",section:"spec",filename:"mu-MANIFESTO.md"},{slug:"axioms",title:"AXIOMS",section:"spec",filename:"AXIOMS.md"},{slug:"me-manifesto",title:"Me MANIFESTO",section:"spec",filename:"me-MANIFESTO.md"},{slug:"spec/language",title:"Language",section:"spec",filename:"spec/LANGUAGE.md"},{slug:"spec/template",title:"Template",section:"spec",filename:"spec/TEMPLATE.md"},{slug:"foundation/accessibility",title:"Accessibility",section:"foundation",filename:"foundation/accessibility.md"},{slug:"foundation/icons",title:"Icons",section:"foundation",filename:"foundation/icons.md"},{slug:"foundation/interaction-states",title:"Interaction States",section:"foundation",filename:"foundation/interaction-states.md"},{slug:"foundation/layout",title:"Layout",section:"foundation",filename:"foundation/layout.md"},{slug:"token/color",title:"Color",section:"token",filename:"token/color.md"},{slug:"token/depth",title:"Depth",section:"token",filename:"token/depth.md"},{slug:"token/motion",title:"Motion",section:"token",filename:"token/motion.md"},{slug:"token/spacing",title:"Spacing",section:"token",filename:"token/spacing.md"},{slug:"token/typography",title:"Typography",section:"token",filename:"token/typography.md"},{slug:"policy/attention",title:"Attention",section:"policy",filename:"policy/attention.md"},{slug:"policy/chromatic",title:"Chromatic",section:"policy",filename:"policy/chromatic.md"},{slug:"policy/disclosure",title:"Disclosure",section:"policy",filename:"policy/disclosure.md"},{slug:"policy/honesty",title:"Honesty",section:"policy",filename:"policy/honesty.md"},{slug:"policy/mastery",title:"Mastery",section:"policy",filename:"policy/mastery.md"},{slug:"policy/motion",title:"Motion",section:"policy",filename:"policy/motion.md"},{slug:"policy/presence",title:"Presence",section:"policy",filename:"policy/presence.md"},{slug:"policy/silence",title:"Silence",section:"policy",filename:"policy/silence.md"},{slug:"pattern/approval-flow",title:"Approval Flow",section:"pattern",filename:"pattern/approval-flow.md"},{slug:"pattern/command-palette",title:"Command Palette",section:"pattern",filename:"pattern/command-palette.md"},{slug:"pattern/loading",title:"Loading",section:"pattern",filename:"pattern/loading.md"},{slug:"pattern/transcript",title:"Transcript",section:"pattern",filename:"pattern/transcript.md"}],Ot=["spec","foundation","token","policy","pattern"],Ue=new Map;for(let n of je)Ue.set(n.filename.toLowerCase(),n.slug);function Ht(n,e){if(!n.endsWith(".md"))return null;let t=n;if(t.startsWith("./")&&(t=t.slice(2)),t.startsWith("../")){let i=e.includes("/")?e.slice(0,e.lastIndexOf("/")):"",s=t.slice(3);t=i?`${i}/${s}`:s}let r=Ue.get(t.toLowerCase());return r?`/design/${r}`:null}function Zt(n){let e=new h.Renderer,t=e.link.bind(e);return e.link=function(r){let i=Ht(r.href,n);return i?`<a href="${i}" data-doc-link="true">${r.text}</a>`:t(r)},e}var hn=(()=>{class n{constructor(){this.route=q($e),this.router=q(_e),this.cdr=q(Re),this.docs=je,this.sections=Ot,this.activeSlug="",this.renderedHtml="",this.activeTitle="",this.loading=!1}docsForSection(t){return this.docs.filter(r=>r.section===t)}docRoute(t){return["/design",...t.slug.split("/")]}isActive(t){return t.slug===this.activeSlug}onClick(t){let i=t.target.closest("a[data-doc-link]");if(!i)return;t.preventDefault();let s=i.getAttribute("href");s&&this.router.navigateByUrl(s)}ngOnInit(){this.sub=this.route.paramMap.subscribe(t=>{let r=t.get("section"),i=t.get("slug");r&&i?this.loadDoc(`${r}/${i}`):r&&!i?this.loadDoc(r):(this.activeSlug="",this.renderedHtml="",this.activeTitle="")})}ngOnDestroy(){this.sub?.unsubscribe()}loadDoc(t){return ge(this,null,function*(){let r=this.docs.find(i=>i.slug===t);if(r){this.activeSlug=t,this.activeTitle=r.title,this.loading=!0,this.cdr.detectChanges();try{let i=yield fetch(`/doc/${r.filename}`);if(!i.ok)this.renderedHtml=`<p>Failed to load document: ${i.status}</p>`;else{let s=yield i.text();this.renderedHtml=yield h.parse(s,{renderer:Zt(t)})}}catch(i){this.renderedHtml="<p>Failed to load document.</p>"}this.loading=!1,this.cdr.detectChanges(),window.scrollTo({top:0})}})}static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275cmp=me({type:n,selectors:[["me-design"]],viewQuery:function(r,i){if(r&1&&ve(Lt,5),r&2){let s;ye(s=Se())&&(i.docContentEl=s.first)}},hostBindings:function(r,i){r&1&&we("click",function(o){return i.onClick(o)})},decls:11,vars:1,consts:[["docContent",""],[1,"design-layout"],[1,"design-sidebar"],["routerLink","/design",1,"design-sidebar-title"],[1,"design-section-group"],[1,"design-content"],[1,"design-loading"],[1,"design-doc",3,"innerHTML"],[1,"design-section-label"],[3,"routerLink","design-active"],[3,"routerLink"],[1,"design-intro"],[1,"design-index-section"],[1,"design-upstream"]],template:function(r,i){r&1&&(y(0,"div",1)(1,"aside",2)(2,"h3")(3,"a",3),S(4,"mu design"),b()(),I(5,Et,5,1,"div",4,V),b(),y(7,"div",5),ke(8,Dt,8,1)(9,Mt,2,0,"div",6)(10,qt,2,1,"article",7),b()()),r&2&&(v(5),E(i.sections),v(3),xe(i.activeSlug?i.loading?9:10:8))},dependencies:[ze],styles:[`.design-layout {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: var(--sp-xl);
}

.design-sidebar {
    position: sticky;
    top: 80px;
    max-height: calc(100dvh - 100px);
    overflow-y: auto;
}

.design-sidebar h3 {
    font-size: var(--fs-headline);
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--sp-md);
}

.design-sidebar-title {
    color: var(--text-brand);
    text-decoration: none;
}

.design-section-group {
    margin-bottom: var(--sp-md);
}

.design-section-label {
    font-size: var(--fs-micro);
    color: var(--text-tertiary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    display: block;
    margin-bottom: var(--sp-xxs);
}

.design-sidebar a {
    display: block;
    font-size: var(--fs-caption);
    color: var(--text-secondary);
    text-decoration: none;
    padding: var(--sp-xxs) var(--sp-xs);
}

.design-sidebar a:hover {
    color: var(--text-primary);
}

.design-sidebar a.design-active {
    color: var(--text-brand);
    border-left: 2px solid var(--brand-primary);
}

.design-content {
    min-width: 0;
}

.design-content h1 {
    font-size: var(--fs-title1);
    font-weight: 600;
    color: var(--text-brand);
    margin-bottom: var(--sp-md);
}

.design-intro {
    font-size: var(--fs-body);
    color: var(--text-secondary);
    margin-bottom: var(--sp-xl);
    line-height: 1.6;
}

.design-index-section {
    margin-bottom: var(--sp-lg);
}

.design-index-section h2 {
    font-size: var(--fs-headline);
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--sp-xs);
}

.design-index-section a {
    display: block;
    font-size: var(--fs-body);
    color: var(--text-brand);
    text-decoration: none;
    padding: var(--sp-xxs) 0;
}

.design-index-section a:hover {
    text-decoration: underline;
}

.design-upstream {
    font-size: var(--fs-micro);
    color: var(--text-tertiary);
    text-align: center;
    padding: var(--sp-md) 0;
}

.design-loading {
    font-size: var(--fs-body);
    color: var(--text-secondary);
    padding: var(--sp-xl) 0;
}

/* Rendered markdown document styles */

.design-doc {
    line-height: 1.7;
    color: var(--text-primary);
}

.design-doc > :first-child {
    margin-top: 0;
}

.design-doc h1 {
    font-size: var(--fs-title1);
    font-weight: 600;
    color: var(--text-brand);
    margin: 0 0 var(--sp-lg);
    line-height: 1.3;
}

.design-doc h2 {
    font-size: var(--fs-title2);
    font-weight: 600;
    color: var(--text-primary);
    margin: var(--sp-xxl) 0 var(--sp-md);
    padding-bottom: var(--sp-xs);
    border-bottom: 1px solid var(--surface-border);
}

.design-doc h3 {
    font-size: var(--fs-headline);
    font-weight: 600;
    color: var(--text-primary);
    margin: var(--sp-xl) 0 var(--sp-sm);
}

.design-doc h4 {
    font-size: var(--fs-body);
    font-weight: 600;
    color: var(--text-primary);
    margin: var(--sp-lg) 0 var(--sp-sm);
}

.design-doc p {
    margin: var(--sp-sm) 0;
    color: var(--text-secondary);
    line-height: 1.7;
}

.design-doc code {
    font-family: var(--font-mono);
    font-size: 0.9em;
    background: var(--surface-primary);
    padding: 2px 5px;
    border: 1px solid var(--surface-border);
    border-radius: 2px;
}

.design-doc pre {
    background: var(--surface-primary);
    border: 1px solid var(--surface-border);
    padding: var(--sp-md);
    overflow-x: auto;
    margin: var(--sp-md) 0;
    line-height: 1.5;
}

.design-doc pre code {
    background: none;
    border: none;
    padding: 0;
    border-radius: 0;
    font-size: var(--fs-caption);
}

.design-doc ul,
.design-doc ol {
    padding-left: var(--sp-lg);
    margin: var(--sp-sm) 0;
    color: var(--text-secondary);
}

.design-doc li {
    margin: var(--sp-xs) 0;
    line-height: 1.6;
}

.design-doc li > p {
    margin: var(--sp-xxs) 0;
}

.design-doc blockquote {
    border-left: 3px solid var(--brand-primary);
    padding: var(--sp-xs) var(--sp-md);
    margin: var(--sp-md) 0;
    background: var(--surface-primary);
}

.design-doc blockquote p {
    color: var(--text-secondary);
    font-style: italic;
}

.design-doc table {
    width: 100%;
    border-collapse: collapse;
    margin: var(--sp-md) 0;
    font-size: var(--fs-caption);
    overflow-x: auto;
    display: block;
}

.design-doc thead {
    display: table-header-group;
}

.design-doc tbody {
    display: table-row-group;
}

.design-doc tr {
    display: table-row;
}

.design-doc th,
.design-doc td {
    border: 1px solid var(--surface-border);
    padding: var(--sp-xs) var(--sp-sm);
    text-align: left;
    display: table-cell;
}

.design-doc th {
    background: var(--surface-primary);
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
}

.design-doc td {
    color: var(--text-secondary);
}

.design-doc td code {
    font-size: 0.85em;
}

.design-doc hr {
    border: none;
    border-top: 1px solid var(--surface-border);
    margin: var(--sp-xxl) 0;
}

.design-doc a {
    color: var(--text-brand);
    text-decoration: none;
}

.design-doc a:hover {
    text-decoration: underline;
}

.design-doc strong {
    color: var(--text-primary);
    font-weight: 600;
}

.design-doc em {
    color: var(--text-secondary);
    font-style: italic;
}

@media (max-width: 768px) {
    .design-layout {
        grid-template-columns: 1fr;
    }
    .design-sidebar {
        position: static;
        max-height: none;
        border-bottom: 1px solid var(--surface-border);
        padding-bottom: var(--sp-md);
        margin-bottom: var(--sp-md);
    }
}
`],encapsulation:2})}}return n})();export{hn as Design};
