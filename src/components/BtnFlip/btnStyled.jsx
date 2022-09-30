import styled from "styled-components";




export const BtnDiv = styled.div`

  box-sizing: border-box;

div {
  color: #71265b;
  text-decoration: none;
  transition: color 0.2s;
  outline: none;
  font-family: 'Poppins', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;
}

div:hover,
div:focus {
  color: #71265b;
}

  div.flip-animate {
  span {
    position: relative;
  
    display: inline-block;
    padding: 0;    
    transition: transform 0.2s;
    transform-origin: 50% 0;
    transform-style: preserve-3d;
  }

  span:before {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    content: attr(data-back);
    transition: color 0.2s;
    transform: rotateX(-90deg);
    transform-origin: 50% 0;
    text-align: center;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover span,
  &:focus span {
    transform: rotateX(90deg) translateY(-22px);
  }

  &:hover span:before,
  &:focus span:before {
    color: #71265b;
  }
  }





/* div{
  position: relative;
  display: inline-flex;
  width: 110%;
  height: 100%;
  cursor: pointer;
}
span {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
div span{
  letter-spacing: 1px;
  transform-style: preserve-3d;
  transform: translateZ(-25px);
  transition: transform .1s;
  font-family: 'Poppins', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  color: #71265b;
}
div span:before,
div span:after{
  position: absolute;
  content: attr(data-back);

  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}
div:nth-child(1) span:before{
    color: #71265b;
    transform: rotateY(0deg) translateZ(25px);
}
div:nth-child(1) span:after{
  transform: rotateX(90deg) translateZ(25px);
}
div:nth-child(2) span:before{
  color: #71265b;
  transform: rotateX(-90deg) translateZ(25px);
}
div:nth-child(2) span:after{
  transform: rotateY(0deg) translateZ(25px);
}
div:nth-child(1) span:hover{
  transform: translateZ(-25px) rotateX(-90deg);
}
div:nth-child(2) span:hover{
  transform: translateZ(-25px) rotateX(90deg);
} */

`
