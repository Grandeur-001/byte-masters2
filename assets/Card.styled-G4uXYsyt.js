import{R as a,K as r,N as t,O as e}from"./index-RLmrLVRK.js";const i=r("div")`
  ${a`relative flex flex-col items-start overflow-hidden space-y-3 shadow-lg md:shadow-lg group`}
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
`,s=r("div")`
  ${a`px-[48px] py-[60px] min-h-[25rem]`}
`,l=r("figure")`
`,o=t`
  display: inline-block;
  font-size: 50px;
  background-image: var(--linear-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
`,d=e`
    ${o}
`,p=r("h4")`
  ${a`font-bold capitalize pb-2 text-[25px]`}
`,c=r("p")`
  ${a`text-lg leading-[38px] max-w-[400px] md:text-[1.1rem]`}
  color: var(--text-secondary);
`,x=r("span")`
  ${a` px-2.5 py-1 rounded-full font-medium text-[var(--text-secondary)]`}
  font-size: 11px;
  border: 1px solid var(--line-gray);
  
  
`;export{s as C,c as D,l as I,p as T,d as a,i as b,x as c};
