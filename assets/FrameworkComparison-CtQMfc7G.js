import{a as q,b as K,e as ie,I as t,d as e,i as g,s as a,w as b,f as oe,_ as N,h as u}from"./index-QBZk0Hdc.js";import{_ as le}from"./Hero-2-BZJq_-uW.js";import{b as de}from"./Card.styled-Bc3Avyo2.js";import{_ as ce}from"./LinkBtn-C9c6h7Db.js";const me=["stroke"],pe={__name:"ArrowRightIcon",props:{LinearGradientStroke:{default:"url(#accentGradient)",type:String},LinearGradientFill:{default:"url(#accentGradient)",type:String}},setup(E){return(M,f)=>(K(),q("svg",{"data-v-d0b5daa0":"",xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:E.LinearGradientStroke,"stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-arrow-right-icon lucide-arrow-right"},f[0]||(f[0]=[ie('<defs><linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="var(--accent-red)"></stop><stop offset="100%" stop-color="var(--accent-orange)"></stop></linearGradient></defs><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>',3)]),8,me))}},ge={class:"p-7 md:p-9"},ue={class:"rotate-[200deg] group-hover:rotate-[180deg]"},we={__name:"FrameworkComparison",setup(E){const M=t`
  min-height: 100vh;
  background-color: var(--bg-dark);
  color: var(--text-primary);
`,f=t`
  max-width: 1200px;
  margin: -3rem auto 4rem;
  padding: 0 1rem;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    margin: -2rem auto 3rem;
  }
`,O=t`
  width: 100%;
  height: auto;
  border-radius: 1rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border: 1px solid var(--line-gray);
`,D=t`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem 4rem;
  
  @media (max-width: 320px) {
    padding: 0 0.75rem 3rem;
  }
`,J=t`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 1rem;
  padding: 3rem;
  border: 1px solid var(--line-gray);
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 320px) {
    padding: 1rem;
  }
`,l=t`
  margin-bottom: 3rem;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
`,c=t`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: var(--text-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`,H=t`
  font-size: 1.25rem;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`,v=t`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.7;
  font-size: 1rem;
`,Y=t`
  background: var(--fading-gray);
  border: 1px solid var(--line-gray);
  border-radius: 0.75rem;
  padding: 1.5rem;
  margin-bottom: 3rem;
`,W=t`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
`,U=t`
  list-style: none;
  padding: 0;
  margin: 0;
`,m=t`
  color: var(--text-secondary);
  text-decoration: none;
  display: block;
  padding: 0.5rem 0;
  border-bottom: 1px solid transparent;
  transition: all 0.2s ease;
  
  &:hover {
    color: var(--accent-orange);
    padding-left: 0.5rem;
  }
`,X=t`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media (max-width: 320px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,x=t`
  background: var(--fading-gray);
  border: 1px solid var(--line-gray);
  border-radius: 0.75rem;
  padding: 1.5rem;
  transition: transform 0.2s ease, border-color 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    border-color: var(--accent-orange);
  }
  
  @media (max-width: 480px) {
    padding: 1.25rem;
  }
`,w=t`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,y=t`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
`,k=t`
  background: var(--accent-orange-faded);
  color: var(--accent-orange);
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  font-weight: 500;
`,C=t`
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
`,S=t`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 2rem 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,T=t`
  background: var(--accent-orange-faded);
  border: 1px solid rgba(255, 167, 38, 0.2);
  border-radius: 0.75rem;
  padding: 1.5rem;
`,F=t`
  background: var(--accent-red-faded);
  border: 1px solid rgba(239, 83, 80, 0.2);
  border-radius: 0.75rem;
  padding: 1.5rem;
`,p=t`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
`,z=t`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
    padding-left: 1.5rem;
    position: relative;
    
    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--accent-orange);
      font-weight: bold;
    }
  }
`,B=t`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
    padding-left: 1.5rem;
    position: relative;
    
    &::before {
      content: '⚠';
      position: absolute;
      left: 0;
      color: var(--accent-red);
    }
  }
`,R=t`
  background: var(--linear-gradient);
  border-radius: 0.75rem;
  padding: 1.5rem;
  margin-top: 2rem;
`,V=t`
  color: white;
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
`,j=t`
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  line-height: 1.6;
`,Z=t`
  // overflow-x: scroll;
  margin: 2rem 0;
  border-radius: 0.75rem;
  border: 1px solid var(--line-gray);
  width:150%;
`,Q=t`
  // width: 100%;
  border-collapse: collapse;
  background: var(--fading-gray);

  
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`,_=t`
  background: var(--linear-gradient);
`,h=t`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: white;
  border-bottom: 1px solid var(--line-gray);
  
  @media (max-width: 480px) {
    padding: 0.75rem 0.5rem;
  }
`,d=t`
  &:nth-child(even) {
    background: rgba(255, 255, 255, 0.02);
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`,s=t`
  padding: 1rem;
  border-bottom: 1px solid var(--line-gray);
  color: var(--text-secondary);
  
  strong {
    color: var(--text-primary);
  }
  
  @media (max-width: 480px) {
    padding: 0.75rem 0.5rem;
  }
`,ee=t`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`,A=t`
  background: var(--fading-gray);
  border: 1px solid var(--line-gray);
  border-radius: 0.75rem;
  padding: 1.5rem;
`,G=t`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
  text-align: center;
`,n=t`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--line-gray);
  
  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`,i=t`
  color: var(--text-secondary);
  font-size: 0.875rem;
`,o=t`
  color: var(--accent-orange);
  font-weight: 600;
`,ae=t`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`,L=t`
  background: var(--fading-gray);
  border: 1px solid var(--line-gray);
  border-radius: 0.75rem;
  padding: 2rem;
  text-align: center;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
`,P=t`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`,I=t`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
`,$=t`
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
  
  strong {
    color: var(--accent-orange);
  }
`,te=t`
  background: var(--fading-gray);
  border: 1px solid var(--line-gray);
  border-radius: 0.75rem;
  padding: 2rem;
  margin-top: 3rem;
`,re=t`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  text-align: center;
`,se=t`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--line-gray);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;t`
  color: var(--accent-orange);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--accent-red);
  }
`;const ne=t`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;return t`
  background: var(--linear-gradient);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  @media (max-width: 480px) {
    width: 100%;
  }
`,(ve,r)=>(K(),q("div",{class:a(M)},[e("div",ge,[g(le,{badge:"Development",title:"React vs Vue vs Angular: Choosing the Right Framework in 2025",paragraph:"A comprehensive deep dive into the most popular frontend frameworks, their strengths, weaknesses, and when to use each one for your next project.",metaInfo:"Published January 15, 2025 • 12 min read • Updated for 2025"})]),e("div",{class:a(f)},[e("img",{src:"https://themeselection.com/wp-content/uploads/2023/09/React-vs-Angular-Vs-VueJS.png",alt:"React vs Vue vs Angular Framework Comparison 2025",class:a(O)})]),e("main",{class:a(D)},[g(oe(de),{class:a(J)},{default:b(()=>[e("section",{class:a(l)},[e("p",{class:a(H)}," The frontend development landscape in 2025 continues to be dominated by three major players: React, Vue.js, and Angular. Each framework has evolved significantly, offering unique advantages and addressing different development needs. This comprehensive guide will help you make an informed decision for your next project. "),e("p",{class:a(v)}," With the rapid evolution of web technologies, choosing the right framework isn't just about current capabilities—it's about future-proofing your application, team productivity, and long-term maintainability. Let's dive deep into what makes each framework special and when you should choose one over the others. ")]),e("nav",{class:a(Y)},[e("h3",{class:a(`${W} font-bold`)},"Table of Contents",2),e("ul",{class:a(U)},[e("li",null,[e("a",{href:"#overview",class:a(m)},"Framework Overview")]),e("li",null,[e("a",{href:"#react-deep-dive",class:a(m)},"React: The Flexible Giant")]),e("li",null,[e("a",{href:"#vue-deep-dive",class:a(m)},"Vue: The Progressive Framework")]),e("li",null,[e("a",{href:"#angular-deep-dive",class:a(m)},"Angular: The Enterprise Solution")]),e("li",null,[e("a",{href:"#comparison-table",class:a(m)},"Detailed Comparison")]),e("li",null,[e("a",{href:"#performance",class:a(m)},"Performance Analysis")]),e("li",null,[e("a",{href:"#recommendations",class:a(m)},"Our Recommendations")])])]),e("section",{id:"overview",class:a(l)},[e("h2",{class:a(`${c} font-bold`)},"Framework Overview",2),e("p",{class:a(v)}," Before diving into specifics, let's establish what each framework brings to the table in 2025: "),e("div",{class:a(X)},[e("div",{class:a(x)},[e("div",{class:a(w)},[e("h3",{class:a(y)},"React"),e("span",{class:a(k)},"v18.2+")]),e("p",{class:a(C)}," A JavaScript library for building user interfaces, maintained by Meta. Known for its component-based architecture and vast ecosystem. ")]),e("div",{class:a(x)},[e("div",{class:a(w)},[e("h3",{class:a(y)},"Vue.js"),e("span",{class:a(k)},"v3.4+")]),e("p",{class:a(C)}," A progressive framework that's approachable for beginners yet powerful enough for complex applications. Created by Evan You. ")]),e("div",{class:a(x)},[e("div",{class:a(w)},[e("h3",{class:a(y)},"Angular"),e("span",{class:a(k)},"v17+")]),e("p",{class:a(C)}," A full-featured framework by Google, built with TypeScript. Provides everything needed for large-scale applications out of the box. ")])])]),e("section",{id:"react-deep-dive",class:a(l)},[e("h2",{class:a(`${c} font-bold`)},"React: The Flexible Giant",2),e("div",{class:a(S)},[e("div",{class:a(T)},[e("h4",{class:a(p)},"Strengths"),e("ul",{class:a(z)},r[0]||(r[0]=[e("li",null,"Massive ecosystem and community",-1),e("li",null,"Excellent job market and resources",-1),e("li",null,"Flexible architecture choices",-1),e("li",null,"Server-side rendering with Next.js",-1),e("li",null,"React Native for mobile development",-1),e("li",null,"Concurrent features and Suspense",-1)]))]),e("div",{class:a(F)},[e("h4",{class:a(p)},"Challenges"),e("ul",{class:a(B)},r[1]||(r[1]=[e("li",null,"Steep learning curve for beginners",-1),e("li",null,"Decision fatigue with tooling choices",-1),e("li",null,"Frequent ecosystem changes",-1),e("li",null,"JSX syntax learning requirement",-1),e("li",null,"State management complexity",-1)]))])]),e("div",{class:a(R)},[e("h4",{class:a(V)},"Best For:"),e("p",{class:a(j)}," Large-scale applications, teams with React experience, projects requiring extensive third-party integrations, and when you need maximum flexibility in architecture decisions. ")])]),e("section",{id:"vue-deep-dive",class:a(l)},[e("h2",{class:a(`${c} font-bold`)},"Vue: The Progressive Framework",2),e("div",{class:a(S)},[e("div",{class:a(T)},[e("h4",{class:a(p)},"Strengths"),e("ul",{class:a(z)},r[2]||(r[2]=[e("li",null,"Gentle learning curve",-1),e("li",null,"Excellent documentation",-1),e("li",null,"Template syntax familiarity",-1),e("li",null,"Composition API flexibility",-1),e("li",null,"Built-in state management (Pinia)",-1),e("li",null,"Great developer experience",-1)]))]),e("div",{class:a(F)},[e("h4",{class:a(p)},"Challenges"),e("ul",{class:a(B)},r[3]||(r[3]=[e("li",null,"Smaller ecosystem than React",-1),e("li",null,"Less job market demand",-1),e("li",null,"Fewer large-scale examples",-1),e("li",null,"Limited mobile development options",-1),e("li",null,"Corporate backing concerns",-1)]))])]),e("div",{class:a(R)},[e("h4",{class:a(V)},"Best For:"),e("p",{class:a(j)}," Rapid prototyping, small to medium-sized applications, teams new to modern frameworks, and projects where developer happiness and productivity are priorities. ")])]),e("section",{id:"angular-deep-dive",class:a(l)},[e("h2",{class:a(`${c} font-bold`)},"Angular: The Enterprise Solution",2),e("div",{class:a(S)},[e("div",{class:a(T)},[e("h4",{class:a(p)},"Strengths"),e("ul",{class:a(z)},r[4]||(r[4]=[e("li",null,"Complete framework solution",-1),e("li",null,"TypeScript by default",-1),e("li",null,"Powerful CLI and tooling",-1),e("li",null,"Dependency injection system",-1),e("li",null,"Strong testing capabilities",-1),e("li",null,"Enterprise-grade architecture",-1)]))]),e("div",{class:a(F)},[e("h4",{class:a(p)},"Challenges"),e("ul",{class:a(B)},r[5]||(r[5]=[e("li",null,"Steep learning curve",-1),e("li",null,"Verbose syntax and concepts",-1),e("li",null,"Large bundle sizes",-1),e("li",null,"Frequent breaking changes",-1),e("li",null,"Overkill for simple projects",-1)]))])]),e("div",{class:a(R)},[e("h4",{class:a(V)},"Best For:"),e("p",{class:a(j)}," Enterprise applications, large development teams, projects requiring strict structure and conventions, and when TypeScript and comprehensive tooling are essential. ")])]),e("section",{id:"comparison-table",class:a(l)},[e("h2",{class:a(`${c} font-bold`)},"Detailed Comparison",2),e("div",{class:a(`${Z}`)},[e("table",{class:a(`${Q}`)},[e("thead",null,[e("tr",{class:a(_)},[e("th",{class:a(h)},"Feature"),e("th",{class:a(h)},"React"),e("th",{class:a(h)},"Vue"),e("th",{class:a(h)},"Angular")])]),e("tbody",null,[e("tr",{class:a(d)},[e("td",{class:a(s)},r[6]||(r[6]=[e("strong",null,"Learning Curve",-1)])),e("td",{class:a(s)},"Moderate to Steep"),e("td",{class:a(s)},"Gentle"),e("td",{class:a(s)},"Steep")]),e("tr",{class:a(d)},[e("td",{class:a(s)},r[7]||(r[7]=[e("strong",null,"Performance",-1)])),e("td",{class:a(s)},"Excellent"),e("td",{class:a(s)},"Excellent"),e("td",{class:a(s)},"Good")]),e("tr",{class:a(d)},[e("td",{class:a(s)},r[8]||(r[8]=[e("strong",null,"Bundle Size",-1)])),e("td",{class:a(s)},"Small (42KB)"),e("td",{class:a(s)},"Small (39KB)"),e("td",{class:a(s)},"Large (130KB+)")]),e("tr",{class:a(d)},[e("td",{class:a(s)},r[9]||(r[9]=[e("strong",null,"TypeScript",-1)])),e("td",{class:a(s)},"Optional"),e("td",{class:a(s)},"Optional"),e("td",{class:a(s)},"Built-in")]),e("tr",{class:a(d)},[e("td",{class:a(s)},r[10]||(r[10]=[e("strong",null,"Mobile Development",-1)])),e("td",{class:a(s)},"React Native"),e("td",{class:a(s)},"NativeScript Vue"),e("td",{class:a(s)},"Ionic")]),e("tr",{class:a(d)},[e("td",{class:a(s)},r[11]||(r[11]=[e("strong",null,"State Management",-1)])),e("td",{class:a(s)},"Redux, Zustand, Context"),e("td",{class:a(s)},"Pinia, Vuex"),e("td",{class:a(s)},"NgRx, Services")]),e("tr",{class:a(d)},[e("td",{class:a(s)},r[12]||(r[12]=[e("strong",null,"Testing",-1)])),e("td",{class:a(s)},"Jest, Testing Library"),e("td",{class:a(s)},"Vitest, Vue Test Utils"),e("td",{class:a(s)},"Jasmine, Karma")]),e("tr",{class:a(d)},[e("td",{class:a(s)},r[13]||(r[13]=[e("strong",null,"Job Market",-1)])),e("td",{class:a(s)},"Excellent"),e("td",{class:a(s)},"Good"),e("td",{class:a(s)},"Good")])])],2)],2)]),e("section",{id:"performance",class:a(l)},[e("h2",{class:a(`${c} font-bold`)},"Performance Analysis",2),e("p",{class:a(v)}," Performance is crucial for user experience and SEO. Here's how each framework performs in 2025: "),e("div",{class:a(ee)},[e("div",{class:a(A)},[e("h4",{class:a(G)},"React"),e("div",{class:a(n)},[e("span",{class:a(i)},"First Contentful Paint:"),e("span",{class:a(o)},"1.2s")]),e("div",{class:a(n)},[e("span",{class:a(i)},"Time to Interactive:"),e("span",{class:a(o)},"2.1s")]),e("div",{class:a(n)},[e("span",{class:a(i)},"Bundle Size:"),e("span",{class:a(o)},"42KB")])]),e("div",{class:a(A)},[e("h4",{class:a(G)},"Vue"),e("div",{class:a(n)},[e("span",{class:a(i)},"First Contentful Paint:"),e("span",{class:a(o)},"1.1s")]),e("div",{class:a(n)},[e("span",{class:a(i)},"Time to Interactive:"),e("span",{class:a(o)},"1.9s")]),e("div",{class:a(n)},[e("span",{class:a(i)},"Bundle Size:"),e("span",{class:a(o)},"39KB")])]),e("div",{class:a(A)},[e("h4",{class:a(G)},"Angular"),e("div",{class:a(n)},[e("span",{class:a(i)},"First Contentful Paint:"),e("span",{class:a(o)},"1.4s")]),e("div",{class:a(n)},[e("span",{class:a(i)},"Time to Interactive:"),e("span",{class:a(o)},"2.8s")]),e("div",{class:a(n)},[e("span",{class:a(i)},"Bundle Size:"),e("span",{class:a(o)},"130KB+")])])])]),e("section",{id:"recommendations",class:a(l)},[e("h2",{class:a(`${c} font-bold`)},"Our 2025 Recommendations",2),e("div",{class:a(ae)},[e("div",{class:a(L)},[e("div",{class:a(P)},"🚀"),e("h4",{class:a(I)},"For Startups & MVPs"),e("p",{class:a($)},r[14]||(r[14]=[e("strong",null,"Choose Vue.js",-1),u(" - Its gentle learning curve, excellent documentation, and rapid development capabilities make it perfect for getting to market quickly. ")]))]),e("div",{class:a(L)},[e("div",{class:a(P)},"🏢"),e("h4",{class:a(I)},"For Enterprise Applications"),e("p",{class:a($)},r[15]||(r[15]=[e("strong",null,"Choose Angular",-1),u(" - Its opinionated structure, TypeScript integration, and comprehensive tooling provide the foundation needed for large-scale applications. ")]))]),e("div",{class:a(L)},[e("div",{class:a(P)},"⚡"),e("h4",{class:a(I)},"For Maximum Flexibility"),e("p",{class:a($)},r[16]||(r[16]=[e("strong",null,"Choose React",-1),u(" - When you need the largest ecosystem, most job opportunities, and complete control over your architecture decisions. ")]))])]),e("div",{class:a(te)},[e("h3",{class:a(re)},"Final Thoughts"),e("p",{class:a(v)},` The "best" framework doesn't exist in isolation—it depends entirely on your project requirements, team expertise, and long-term goals. All three frameworks are excellent choices that will serve you well in 2025 and beyond. `),e("p",{class:a(v)}," Consider starting with Vue if you're new to modern frameworks, React if you want maximum flexibility and job market opportunities, or Angular if you're building enterprise-grade applications with large teams. ")])])]),_:1}),e("nav",{class:a(se)},[g(ce,{href:"/blog"},{default:b(()=>[e("div",ue,[g(pe)]),r[17]||(r[17]=u(" Back to Blog "))]),_:1,__:[17]}),e("div",{class:a(ne)},[g(N,null,{default:b(()=>r[18]||(r[18]=[u("Share on Twitter")])),_:1,__:[18]}),g(N,null,{default:b(()=>r[19]||(r[19]=[u("Share on LinkedIn")])),_:1,__:[19]})])])])]))}};export{we as default};
