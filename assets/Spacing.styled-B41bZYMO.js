import{K as t,v as c,a as d,b as p,p as a,w as i,j as o,t as s,u as r,R as e,x as g,I as x}from"./index-DIXieokj.js";const m=t.span`
    background-image: var(--text-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    background-clip: text;
    color: transparent;
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 1.1rem;
`,h=t.div`
    font-size: calc(1.375rem + 1.5vw);
    font-weight: 700;
    margin-bottom: 0;
    line-height: 1.2;
    text-last: center;
`;t.div`
    font-size: calc(1.3rem + .6vw);
    
    font-weight: 500;
    line-height: 1.3;
`;t.div`
    font-size: calc(1.2rem + 0.4vw);
     
    font-weight: 500;
    line-height: 1.3;
`;const f=t.div`
    color: var(--text-secondary);
    line-height: 1.8rem;
    font-size: 1.1rem;
`;t.div`
    color: var(--text-primary);
    line-height: 1.8rem;

`;const b=t.div`
    width: 80px;
    height: 3px;
    background-image: var(--linear-gradient);
    margin-bottom: 2rem;
`,v={class:"float-in min-h-[0vh] text-center flex flex-col items-center justify-center pt-[2rem] px-[1.5rem]"},_={__name:"Headings",props:{smallHeading:{type:String},mainHeading:{type:String},paragraph:{type:String}},setup(n){return(w,k)=>{const l=c("FlipCards");return p(),d("div",v,[a(r(m),null,{default:i(()=>[o(s(n.smallHeading),1)]),_:1}),a(r(h),{class:"pb-[10px] font-bold"},{default:i(()=>[o(s(n.mainHeading),1)]),_:1}),a(r(f),{class:"pb-5 max-w-[700px] text-center"},{default:i(()=>[o(s(n.paragraph),1)]),_:1}),a(r(b)),a(l)])}}},S=t("div")`
  ${e`relative flex flex-col items-start overflow-hidden space-y-3 shadow-lg md:shadow-lg group`}
  border: 1px solid var(--border-gray);
  border-radius: 30px;
  transition: all 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    background-image: var(--linear-gradient);
    width: 0;
    height: 2px;
    bottom: 0;
    right: 0;
    transition: all 0.3s ease;
  }

  &:hover::after {
    left: 0;
    width: 100%;
  }

  &:hover {
    box-shadow: 0 4px 20px var(--accent-orange-faded);
    border-radius: 0px;
    transform: translateY(-10px);
  }
  &:hover{
    h4{
        background-image: var(--linear-gradient);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        -webkit-text-fill-color: transparent;
    }
    p{
      color: var(--text-primary);
    }
  }
`,z=t("div")`
  ${e`px-[48px] py-[60px] min-h-[25rem]`}
`,C=t("figure")`
`,u=g`
  display: inline-block;
  font-size: 50px;
  background-image: var(--linear-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
`,$=x`
    ${u}
`,H=t("h4")`
  ${e`font-bold capitalize pb-2 md:text-[25px]`}
`,I=t("p")`
  ${e`text-lg leading-[38px] max-w-[400px] md:text-[1.1rem]`}
  color: var(--text-secondary);
`,D=t("span")`
  ${e` px-2.5 py-1 rounded-full font-medium text-[var(--text-secondary)]`}
  font-size: 11px;
  border: 1px solid var(--line-gray);
  
  
`,B=t.div`
    ${e` mt-[4rem]`}
`,F=t.div`
    ${e` mt-[6rem]`}
`;export{z as C,I as D,C as I,F as S,H as T,_,$ as a,S as b,B as c,D as d};
