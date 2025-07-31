import styled, { tw } from '@vue-styled-components/core'

export const Nav = styled.nav`
  background: var(--bg-dark);


  ul{
    gap: 32px;
    align-items: center;
    justify-content: center;

  }
  a{
      font-weight: 600;
      &:hover{
        background-image: var(--linear-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        background-clip: text;
        color: transparent;
      }
  }


`;

export const MobileMenu = styled.nav`
    a{
      width: 100%;
      font-weight: 600;
      &:hover{
        color: var(--accent-orange);
      }
    }
`
