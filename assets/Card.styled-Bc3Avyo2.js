import{R as a,K as t,M as r,I as e}from"./index-QBZk0Hdc.js";const i=t("div")`
  ${a`relative flex flex-col items-start overflow-hidden space-y-3 shadow-lg md:shadow-lg group`}
  border-radius: 30px;
  transition: all 0.3s ease;
  border: 1px solid var(--border-gray);

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
`,s=t("div")`
  ${a`px-[42px] py-[60px] min-h-[25rem]`}
`,d=t("figure")`
`;t("img")`
  
`;const o=r`
  display: inline-block;
  font-size: 50px;
  background-image: var(--linear-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
`,l=e`
    ${o}
`,p=t("h4")`
  ${a`font-bold capitalize pb-2 text-[22px] md:text-[25px]`}
`,c=e`
  background-image: var(--linear-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
`,x=t("p")`
  ${a`text-[1rem] leading-[32px]  md:leading-[38px] md:text-[1.1rem]`}
  color: var(--text-secondary);
`,g=t("span")`
  ${a` px-2.5 py-1 rounded-full font-medium text-[var(--text-secondary)]`}
  font-size: 11px;
  border: 1px solid var(--line-gray);
`;export{s as C,x as D,d as I,p as T,l as a,i as b,g as c,c as d};
