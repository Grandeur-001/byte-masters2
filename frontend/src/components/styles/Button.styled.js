  import styled from '@vue-styled-components/core';
  export const PryBtn = styled.div`
    position: relative;
    background-image:var(--linear-gradient);
    font-size: 17px;
    color: var(--text-clr);
    border-radius: 8px;
    box-shadow: 0 0 0 var(--hover-clr);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    text-transform: capitalize;
    text-align: center;
    display: flex;
    justify-content: center;
    padding: 2px 2px;

    &:active{
      scale: 0.96;
    }

    span{
      width: 100%;
      height: 100%;
      padding: 10px 30px;
      border-radius: 8px;
      display: block; 
      color: white;
      font-weight: 600;


    }

  `

  export const SecBtn = styled.div`
    position: relative;
    background-image:var(--linear-gradient);
    font-size: 17px;
    font-weight: 500;
    border-radius: 8px;
    box-shadow: 0 0 0 var(--hover-clr);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    text-transform: capitalize;
    text-align: center;
    display: flex;
    justify-content: center;
    padding: 2px 2px;


    &:active{
      scale: 0.96;
    }

    span{
      width: 100%;
      height: 100%;
      background: black;
      padding: 10px 30px;
      border-radius: 8px;
      display: block;
      color: var(--accent-orange);
      

    }
    
    .star-1 {
      position: absolute;
      top: 20%;
      left: 20%;
      width: 25px;
      height: auto;
      filter: drop-shadow(0 0 0 #fff);
      z-index: -5;
      transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);
    }

    .star-2 {
      position: absolute;
      top: 45%;
      left: 45%;
      width: 15px;
      height: auto;
      filter: drop-shadow(0 0 0 #fff);
      z-index: -5;
      transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
    }

    .star-3 {
      position: absolute;
      top: 40%;
      left: 40%;
      width: 5px;
      height: auto;
      filter: drop-shadow(0 0 0 #fff);
      z-index: -5;
      transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
    }

    .star-4 {
      position: absolute;
      top: 20%;
      left: 40%;
      width: 8px;
      height: auto;
      filter: drop-shadow(0 0 0 #fff);
      z-index: -5;
      transition: all 0.8s cubic-bezier(0, 0.4, 0, 1.01);
    }

    .star-5 {
      position: absolute;
      top: 25%;
      left: 45%;
      width: 15px;
      height: auto;
      filter: drop-shadow(0 0 0 #fff);
      z-index: -5;
      transition: all 0.6s cubic-bezier(0, 0.4, 0, 1.01);
    }

    .star-6 {
      position: absolute;
      top: 5%;
      left: 50%;
      width: 5px;
      height: auto;
      filter: drop-shadow(0 0 0 #fff);
      z-index: -5;
      transition: all 0.8s ease;
    }

   

    &:hover .star-1 {
      position: absolute;
      top: -80%;
      left: -30%;
      width: 25px;
      height: auto;
      filter: drop-shadow(0 0 10px #fffdef);
      z-index: 2;
    }

    &:hover .star-2 {
      position: absolute;
      top: -25%;
      left: 10%;
      width: 15px;
      height: auto;
      filter: drop-shadow(0 0 10px #fffdef);
      z-index: 2;
    }

    &:hover .star-3 {
      position: absolute;
      top: 55%;
      left: 25%;
      width: 5px;
      height: auto;
      filter: drop-shadow(0 0 10px #fffdef);
      z-index: 2;
    }

    &:hover .star-4 {
      position: absolute;
      top: 30%;
      left: 80%;
      width: 8px;
      height: auto;
      filter: drop-shadow(0 0 10px #fffdef);
      z-index: 2;
    }

    &:hover .star-5 {
      position: absolute;
      top: 25%;
      left: 115%;
      width: 15px;
      height: auto;
      filter: drop-shadow(0 0 10px #fffdef);
      z-index: 2;
    }

    &:hover .star-6 {
      position: absolute;
      top: 5%;
      left: 60%;
      width: 5px;
      height: auto;
      filter: drop-shadow(0 0 10px #fffdef);
      z-index: 2;
    }

    .fil0 {
      fill: var(--text-primary);
    }
  `