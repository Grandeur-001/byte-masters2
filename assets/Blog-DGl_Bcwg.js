import{v as j,k as W,I as a,D as E,a as p,b as c,d as t,i,f as r,F as g,l as u,w as s,E as J,s as o,u as K,m as h,t as n,h as d,G as Q,_ as V}from"./index-QBZk0Hdc.js";import{_ as G}from"./Hero-2-BZJq_-uW.js";import{T as f,d as v,D as x,b as _}from"./Card.styled-Bc3Avyo2.js";import"./ScrollTicker.styled-Bki8OSBG.js";import{_ as N}from"./LinkBtn-C9c6h7Db.js";const S=[{imageUrl:"https://solution25.com/wp-content/uploads/2022/08/ui-ux-design-for-beginners-2048x1560.jpg",badge:"UI/UX",title:"5 Principles We Use to Design User-Friendly Interfaces",description:"Explore the design principles that guide our team in creating intuitive, accessible, and delightful user experiences.",readmore:"/blog/framework-comparison"},{imageUrl:"https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg",badge:"Development",title:"React vs Vue vs Angular: What’s Best for Your Project in 2025",description:" A breakdown of the top frontend frameworks, their strengths, weaknesses, and when to use each.",readmore:"/blog/framework-comparison"},{imageUrl:"https://matimtl.ca/wp-content/uploads/2022/04/app20development20cost.jpg",badge:"Mobile",title:"Cross-Platform vs Native Apps: Which Should You Build?",description:"Weigh the pros and cons of native vs cross-platform mobile development to make the right choice for your business.",readmore:"/blog/framework-comparison"}],$=[{name:"web-dev",title:"Web Development",category:"Web Development",categoryClass:"",contentTitle:"Building Modern Web Applications with Next.js 15",description:"Discover the latest features and best practices for creating lightning-fast, scalable web applications. From server components to advanced routing, we'll guide you through the cutting-edge techniques that define modern web development.",image:"https://th.bing.com/th/id/OIP.sClZQ7mHH6z1J5K-MLGL3QHaFJ?w=262&h=182&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",author:"Sarah Chen",date:"Dec 15, 2024",readTime:"8 min read",badge:{text:"Latest",type:""}},{name:"ui-ux",title:"UI/UX Design",category:"UI/UX Design",categoryClass:"ui-tag",contentTitle:"The Psychology of User Interface Design",description:"Explore how cognitive psychology principles can transform your design process. Learn to create interfaces that not only look stunning but also provide intuitive user experiences that convert visitors into loyal customers.",image:"https://th.bing.com/th/id/OIP.sClZQ7mHH6z1J5K-MLGL3QHaFJ?w=262&h=182&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",author:"Marcus Rodriguez",date:"Dec 12, 2024",readTime:"12 min read",badge:{text:"Trending",type:"trending"}},{name:"app-dev",title:"App Development",category:"App Development",categoryClass:"app-tag",contentTitle:"Cross-Platform Mobile Apps: React Native vs Flutter",description:"A comprehensive comparison of the two leading cross-platform frameworks. Discover which technology stack aligns with your project goals and learn the pros and cons from real-world development experiences.",image:"https://th.bing.com/th/id/OIP.sClZQ7mHH6z1J5K-MLGL3QHaFJ?w=262&h=182&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",author:"Alex Kim",date:"Dec 10, 2024",readTime:"15 min read",badge:{text:"Featured",type:"featured"}},{name:"tech-trends",title:"Tech Trends",category:"Tech Trends",categoryClass:"trends-tag",contentTitle:"AI Integration in Modern Software Development",description:"How artificial intelligence is revolutionizing the way we build software. From automated code generation to intelligent testing, explore the tools and techniques that are shaping the future of development workflows.",image:"https://th.bing.com/th/id/OIP.sClZQ7mHH6z1J5K-MLGL3QHaFJ?w=262&h=182&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",author:"Dr. Emily Watson",date:"Dec 8, 2024",readTime:"10 min read",badge:{text:"Hot",type:"hot"}}],O={class:"p-7 md:p-9"},R={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 md:p-9"},Y=["src"],Z={class:"p-6 flex flex-col flex-1"},X={class:"bg-[var(--fading-gray)] px-6 py-2 w-32 rounded-full flex justify-center items-center text-sm text-[var(--text-secondary)] mb-2"},q=["src","alt"],ee={class:"author"},te={class:"date"},ae={class:"read-time"},re={class:"w-[190px]"},oe={__name:"Blog",setup(se){document.title="Bonasera Konnect | Blogs";const m=W("first"),b="Bonasera Konnect";K();const w=a`
      background: var(--bg-dark);
      min-height: 100vh;
      padding: 2rem 1rem;
    `,y=E`
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    `,T=a`
      animation: ${y} 0.5s ease-in-out;
    `,k=a`
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: center;
      border: 1px solid var(--line-gray);
      border-radius: 16px;
      padding: 2rem;
      backdrop-filter: blur(10px);

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 2rem;
        padding: 2rem;
      }

      @media (max-width: 480px) {
        padding: 1.9rem;
        gap: 1.5rem;
      }


    `,C=a`
      position: relative;
      overflow: hidden;
      border-radius: 12px;
    `,B=a`
      width: 100%;
      height: 400px;
      object-fit: cover;
      border-radius: 12px;
      transition: transform 0.3s ease;

      &:hover{
        transform: scale(1.05);
      }
    `,D=a`
      position: absolute;
      top: 1rem;
      right: 1rem;
    `,I=a`
      background: var(--linear-gradient);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;

      .trending {
        background: linear-gradient(90deg, #9C27B0 0%, #E91E63 100%);
      }

      .featured {
        background: linear-gradient(90deg, #2196F3 0%, #00BCD4 100%);
      }

      .hot {
        background: linear-gradient(90deg, #FF5722 0%, #FF9800 100%);
      }
    `,F=a`
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    `,U=a`
      display: inline-block;
      background: var(--accent-red-faded);
      color: var(--accent-red);
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      width: fit-content;
    `,H=a`
      background: var(--accent-orange-faded);
      color: var(--accent-orange);
    `,z=a`
      background: rgba(33, 150, 243, 0.1);
      color: #2196F3;
    `,A=a`
      background: rgba(156, 39, 176, 0.1);
      color: #9C27B0;
    `,L=a`
      display: flex;
      gap: 1.5rem;
      font-size: 0.875rem;
      color: var(--text-secondary);

      span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    `,M={"ui-tag":H,"app-tag":z,"trends-tag":A};return(ne,l)=>(c(),p(g,null,[t("div",O,[i(G,{badge:`${r(b)}'s Blog`,title:"Insights, Innovation & Tech Stories",paragraph:"Explore expert articles, industry trends, and behind-the-scenes stories from our engineers, designers, and innovators at Bonasera Konnect."},null,8,["badge"])]),t("div",R,[(c(!0),p(g,null,u(r(S),(e,P)=>(c(),h(r(_),{key:P,class:"float-in group flex flex-col rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"},{default:s(()=>[t("img",{src:e.imageUrl,alt:"Blog Post",class:"object-cover w-full h-52 group-hover:scale-125 transition-all"},null,8,Y),t("div",Z,[t("span",X,n(e.badge),1),i(r(f),{class:o(r(v))},{default:s(()=>[d(n(e.title),1)]),_:2},1032,["class"]),i(r(x),{class:"flex-1"},{default:s(()=>[d(n(e.description),1)]),_:2},1024),i(N,{href:e.readmore},{default:s(()=>l[1]||(l[1]=[d(" Read more ")])),_:2,__:[1]},1032,["href"])])]),_:2},1024))),128))]),t("div",{class:o(`${w} p-5`)},[i(r(J),{modelValue:m.value,"onUpdate:modelValue":l[0]||(l[0]=e=>m.value=e),variant:"default",class:""},{default:s(()=>[(c(!0),p(g,null,u(r($),e=>(c(),h(r(Q),{key:e.name,name:e.name,title:e.title},{default:s(()=>[t("div",{class:o(`${T} mt-[2rem]`)},[i(r(_),{class:o(k)},{default:s(()=>[t("div",{class:o(C)},[t("img",{src:e.image,alt:e.title,class:o(B)},null,8,q),t("div",{class:o(D)},[t("div",{class:o([I,e.badge.type])},n(e.badge.text),3)])]),t("div",{class:o(F)},[t("div",{class:o([U,M[e.categoryClass]])},n(e.category),3),i(r(f),{class:o(r(v))},{default:s(()=>[d(n(e.contentTitle),1)]),_:2},1032,["class"]),i(r(x),{class:"w-full"},{default:s(()=>[d(n(e.description),1)]),_:2},1024),t("div",{class:o(L)},[t("span",ee,"By "+n(e.author),1),t("span",te,n(e.date),1),t("span",ae,n(e.readTime),1)]),t("div",re,[i(V,{class:"w-fit"},{default:s(()=>l[2]||(l[2]=[d(" Read Full Article ")])),_:1,__:[2]})])])]),_:2},1024)],2)]),_:2},1032,["name","title"]))),128))]),_:1},8,["modelValue"])],2)],64))}},ge=j(oe,[["__scopeId","data-v-c98848fa"]]);export{ge as default};
