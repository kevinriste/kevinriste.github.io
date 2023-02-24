"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[357],{5523:function(e,t,n){var l=n(5893),a=n(1426),i=n(3321),s=n(1664),r=n.n(s),c=n(1163);let d=()=>{let e=(0,c.useRouter)();return(0,l.jsxs)(a.Z,{container:!0,spacing:2,children:["/election-2020"!==e.pathname&&(0,l.jsx)(a.Z,{xs:12,container:!0,spacing:2,display:"flex",justifyContent:"center",alignItems:"center",children:(0,l.jsx)(a.Z,{children:(0,l.jsx)(i.Z,{href:"/election-2020",variant:"outlined",component:r(),sx:{textTransform:"none"},children:"2020 General Election"})})}),"/election-2024-republican"!==e.pathname&&(0,l.jsx)(a.Z,{xs:12,container:!0,spacing:2,display:"flex",justifyContent:"center",alignItems:"center",children:(0,l.jsx)(a.Z,{children:(0,l.jsx)(i.Z,{href:"/election-2024-republican",variant:"outlined",component:r(),sx:{textTransform:"none"},children:"2024 Republican Primary"})})}),"/election-2024-democrat"!==e.pathname&&(0,l.jsx)(a.Z,{xs:12,container:!0,spacing:2,display:"flex",justifyContent:"center",alignItems:"center",children:(0,l.jsx)(a.Z,{children:(0,l.jsx)(i.Z,{href:"/election-2024-democrat",variant:"outlined",component:r(),sx:{textTransform:"none"},children:"2024 Democratic Primary"})})})]})};t.Z=d},5230:function(e,t,n){n.d(t,{Z:function(){return L}});var l=n(5893),a=n(1426),i=n(3321),s=n(913),r=n(3841),c=n(5914),d=n(7918),o=n(9840),h=n(5071),x=n(9334),u=n(1903),p=n(8456),m=n(5861),g=n(7294),f=n(1664),j=n.n(f),Z=n(3148);n(4502);var y=n(5430),v=n(9591),b=n.n(v),C=n(6180),k=n(8433);let D=(e,t,n)=>({responsive:!0,aspectRatio:1,plugins:{legend:{labels:{filter:e=>"polls"!==e.text.slice(-5)}}},scales:{x:{bounds:"data",type:"time",distribution:"linear",time:{round:"day",unit:"month"},ticks:{autoSkip:!1},grid:{offset:!1},min:e[0],max:e[1]},y:{max:n,min:t,ticks:{callback:e=>"string"==typeof e?e:e.toLocaleString("en-US",{style:"percent"})}}}}),S=(e,t,n,l,a,i)=>e.filter(e=>t.includes(e.label)).map(e=>({type:"scatter",label:e.label,backgroundColor:n[e.label].light,borderColor:n[e.label].light,data:e.data.filter(e=>l.includes(e.state)).filter(e=>(!a[0]||P(a[0],e.x)>=0)&&(!a[1]||P(e.x,a[1])>=0)).map(e=>({x:e.x,y:e.y})).concat(i),fill:!0,showLine:!1})),w=(e,t,n,l,a,i,s)=>{if("off"===e)return[];{let r=t.find(t=>t.decayFactor===l&&t.stateSetDescription===e);return r?r.lineChartData.filter(e=>a.includes(e.label)).map(e=>({type:"scatter",label:e.label+"polls",backgroundColor:n[e.label].dark,borderColor:n[e.label].dark,data:e.data.filter(e=>(!i[0]||P(i[0],e.x)>=0)&&(!i[1]||P(e.x,i[1])>=0)).map(e=>({x:e.x,y:e.y})).concat(s),fill:!1,showLine:!0,pointRadius:0})):[]}},P=(e,t)=>{let n=0;return e&&t&&(n=Math.floor((new Date(t).getTime()-new Date(e).getTime())/864e5)),n};var M=n(2359),F=n(6351),H=n(6437),I=n(5418),E=n(5523);Z.kL.register(Z.Gu,Z.De,Z.uw,Z.f$,Z.jn,Z.od,Z.ho,Z.FB,Z.u);let T=e=>{let{processedPollsUrl:t,yMin:n,yMax:f,initialDate:Z}=e,v=e=>{for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e},T=(e,t)=>Math.floor(Math.random()*(t-e)+1)+e,L=g.useRef((e=>{let t=[],n=Math.trunc(360/e);for(let l=0;l<e-5;l++){let e=l*n,a=T(30,95);t.push({light:"hsl(".concat(e,", ").concat(a,"%,  80%)"),dark:"hsl(".concat(e,", ").concat(a,"%,  40%)")})}return v(t)})(100)),[R,A]=g.useState([]),[N,O]=g.useState([""]),[_,B]=g.useState("National Polls"),[G,W]=g.useState([null,null]),Y=async e=>{let t=await (0,k.Z)({method:"get",url:e}),n=JSON.parse(b().inflate(t.data,{to:"string"}));return n.initialDate=new Date(n.availableDates[0]||""),n.finalDate=new Date(n.availableDates.slice(-1)[0]||""),n},{data:U,error:V,isLoading:z}=(0,C.Z)(t,Y);V||z||null!==G[0]||null!==G[1]||W([Z||(null==U?void 0:U.initialDate)||null,(null==U?void 0:U.finalDate)||null]),null==U||U.initialDate,null==U||U.finalDate;let J=((e,t)=>{if(!Array.isArray(e))return{};{let n=[...e],l={};return l.Biden={light:"hsl(214, 51.72%, 80%)",dark:"hsl(214, 51.72%, 40%)"},l.Trump={light:"hsl(328.49, 98.35%, 80%)",dark:"hsl(328.49, 98.35%, 40%)"},l.DeSantis={light:"hsl(214, 51.72%, 80%)",dark:"hsl(214, 51.72%, 40%)"},l.Haley={light:"hsl(29.24, 96.75%, 80%)",dark:"hsl(29.24, 96.75%, 40%)"},l.Pence={light:"hsl(120, 40.66%, 80%)",dark:"hsl(120, 40.66%, 40%)"},l.Cruz={light:"hsl(305.38, 68.72%, 80%)",dark:"hsl(305.38, 68.72%, 40%)"},l.Cheney={light:"hsl(359.4, 79.5%, 80%)",dark:"hsl(359.4, 79.5%, 40%)"},l["M. Obama"]={light:"hsl(328.49, 98.35%, 80%)",dark:"hsl(328.49, 98.35%, 40%)"},l.Harris={light:"hsl(29.24, 96.75%, 80%)",dark:"hsl(29.24, 96.75%, 40%)"},l.Sanders={light:"hsl(120, 40.66%, 80%)",dark:"hsl(120, 40.66%, 40%)"},l.Clinton={light:"hsl(305.38, 68.72%, 80%)",dark:"hsl(305.38, 68.72%, 40%)"},l.Buttigieg={light:"hsl(359.4, 79.5%, 80%)",dark:"hsl(359.4, 79.5%, 40%)"},t.forEach(e=>{if(!(e.candidate in l)){let t=n.shift();t&&(l[e.candidate]=t)}}),l}})(L.current,(null==U?void 0:U.availableCandidates)||[]),K=(null==U?void 0:U.availableCandidates.filter(e=>!(P(G[1],e.minDate)>=0)&&!(P(e.maxDate,G[0])>=0)).map(e=>e.candidate))||[];V||z||0!==R.length||A(K.slice(0,6));let $=(null==U?void 0:U.availableStates.filter(e=>!(P(G[1],e.minDate)>=0)&&!(P(e.maxDate,G[0])>=0)).map(e=>e.state))||[],q=[{x:G[0],y:null},{x:G[1],y:null}],Q=w(_,(null==U?void 0:U.lineChartsForEachCandidate)||[],J,7,R,G,q),X=S((null==U?void 0:U.scatterPlotSeriesForEachCandidate)||[],R,J,N,G,q),ee={datasets:[...Q,...X]},et=e=>{W([e,G[1]])},en=e=>{W([G[0],e])},el=e=>{let t=e.target.value;B(t)},ea=e=>{let{target:{value:t}}=e;A("string"==typeof t?t.split(","):t)},ei=e=>{let{target:{value:t}}=e;O("string"==typeof t?t.split(","):t)},es=()=>{W([null,null]),A([]),O([""])};g.useEffect(()=>{let e="off";1===N.length?""===N[0]?e="National Polls":((null==U?void 0:U.lineChartsForEachCandidate)||[]).map(e=>e.stateSetDescription).includes("".concat(N[0]," Polls"))&&(e="".concat(N[0]," Polls")):N.length===$.length&&(e="All Polls"),B(e)},[N,null==U?void 0:U.lineChartsForEachCandidate,$.length]);let er=D(G,n,f);return(0,l.jsxs)(a.Z,{children:[(0,l.jsx)(a.Z,{container:!0,spacing:2,sx:{marginY:2},display:"flex",justifyContent:"center",alignItems:"center",children:(0,l.jsx)(a.Z,{children:(0,l.jsx)(i.Z,{href:"/",variant:"outlined",component:j(),sx:{textTransform:"none"},children:"Home"})})}),V||z?(0,l.jsxs)(a.Z,{children:[(0,l.jsx)(a.Z,{container:!0,spacing:2,display:"flex",justifyContent:"center",alignItems:"center",children:(0,l.jsx)(a.Z,{children:(0,l.jsx)(p.Z,{disableShrink:!0,sx:{marginY:6}})})}),(0,l.jsx)(a.Z,{container:!0,spacing:2,display:"flex",justifyContent:"center",alignItems:"center",children:(0,l.jsx)(a.Z,{children:(0,l.jsx)(m.Z,{children:"Getting latest data..."})})})]}):(0,l.jsxs)(a.Z,{container:!0,children:[(0,l.jsx)(a.Z,{xs:12,display:"flex",justifyContent:"center",alignItems:"center",children:(0,l.jsx)(y.kL,{type:"bar",data:ee,options:er,style:{maxHeight:400,maxWidth:400}})}),(0,l.jsxs)(a.Z,{xs:12,sx:{marginY:2},container:!0,spacing:2,display:"flex",justifyContent:"center",children:[(0,l.jsx)(a.Z,{children:(0,l.jsxs)(s.Z,{sx:{width:200},children:[(0,l.jsx)(r.Z,{children:"States"}),(0,l.jsx)(c.Z,{multiple:!0,value:N,onChange:ei,label:"States",MenuProps:{PaperProps:{sx:{maxHeight:400}}},renderValue:e=>(0,l.jsx)(I.Z,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:e.map(e=>{let t=""===e?"U.S.":e;return(0,l.jsx)(d.Z,{label:t},t)})}),children:$.map(e=>{let t=""===e?"U.S.":e;return(0,l.jsxs)(o.Z,{value:e,children:[(0,l.jsx)(h.Z,{checked:N.includes(e)}),(0,l.jsx)(x.Z,{primary:t})]},t)})})]})}),(0,l.jsx)(a.Z,{children:(0,l.jsxs)(s.Z,{sx:{width:200},children:[(0,l.jsx)(r.Z,{children:"Candidates"}),(0,l.jsx)(c.Z,{multiple:!0,value:R,onChange:ea,label:"Candidates",MenuProps:{PaperProps:{sx:{maxHeight:400}}},renderValue:e=>(0,l.jsx)(I.Z,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:e.map(e=>(0,l.jsx)(d.Z,{label:e},e))}),children:K.map(e=>(0,l.jsxs)(o.Z,{value:e,children:[(0,l.jsx)(h.Z,{checked:R.includes(e)}),(0,l.jsx)(x.Z,{primary:e})]},e))})]})}),(0,l.jsx)(a.Z,{children:(0,l.jsxs)(s.Z,{sx:{width:200},children:[(0,l.jsx)(r.Z,{children:"Average Lines"}),(0,l.jsxs)(c.Z,{value:_,label:"Average Lines",onChange:el,MenuProps:{PaperProps:{sx:{maxHeight:400}}},sx:{minHeight:65},children:[null==U?void 0:U.lineChartsForEachCandidate.map(e=>(0,l.jsx)(o.Z,{value:e.stateSetDescription,children:e.stateSetDescription},e.stateSetDescription)),(0,l.jsx)(o.Z,{value:"off",children:"Off"})]})]})})]}),(0,l.jsx)(a.Z,{xs:12,container:!0,spacing:2,justifyContent:"center",alignItems:"center",children:(0,l.jsxs)(M._,{dateAdapter:H.H,children:[(0,l.jsx)(a.Z,{children:(0,l.jsx)(F.O,{label:"From",inputFormat:"yyyy-MMM-dd",value:G[0],onChange:et,renderInput:e=>(0,l.jsx)(u.Z,{sx:{width:200},...e})})}),(0,l.jsx)(a.Z,{children:(0,l.jsx)(F.O,{label:"To",inputFormat:"yyyy-MMM-dd",value:G[1],onChange:en,renderInput:e=>(0,l.jsx)(u.Z,{sx:{width:200},...e})})})]})}),(0,l.jsx)(a.Z,{xs:12,container:!0,spacing:2,sx:{marginY:2},display:"flex",justifyContent:"center",alignItems:"center",children:(0,l.jsx)(a.Z,{children:(0,l.jsx)(i.Z,{variant:"outlined",onClick:es,sx:{textTransform:"none"},children:"Reset"})})})]}),(0,l.jsx)(a.Z,{sx:{marginTop:4},children:(0,l.jsx)(E.Z,{})})]})};var L=T},510:function(e,t,n){var l=n(5893),a=n(5582),i=n(9008),s=n.n(i);n(7294);let r=e=>{let{children:t,title:n}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s(),{children:[(0,l.jsx)("title",{children:n}),(0,l.jsx)("meta",{name:"description",content:"Kevin Riste's GitHub Pages site"}),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,l.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,l.jsx)("main",{children:(0,l.jsx)(a.Z,{maxWidth:"xl",sx:{minHeight:"90vh",marginBottom:4},children:t})})]})};t.Z=r}}]);