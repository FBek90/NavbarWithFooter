import styled, {css} from 'styled-components';


export const Container = styled.div`
width: 100%;


 `
 export const Wrapper = styled.div`
 text-align: center;
 margin-bottom: 50px;
 
 `

 const titLe = css`
 font-style: normal;
font-weight: 600;
color:var(--common-dark-color);
font-size: var(--primary-title-size);
 `
 const Desc = css`
 line-height: 20px;
 font-style: normal;
font-weight: normal;
color: var(--default-description-color);
font-size: var(--font-size-primary);
 `
 export const Title = styled.div`
 ${({title})=>title && titLe};
 ${({desc})=>desc && Desc};
 `

export const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };

  