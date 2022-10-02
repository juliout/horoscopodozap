import {InputDiv, Inputin, Inlabel}  from './inputstyled'

export default function InputText({
    divTamanhoX, divTamanhoY, htmlfor, text, name,
    id, lColor, value, type, set
}) {
    return (
        <InputDiv x={divTamanhoX} y={divTamanhoY}>
            <Inlabel lColor={lColor} htmlFor={htmlfor}>{text}</Inlabel>
            <Inputin name={name} id={id} value={value} type={type?type:'text'} required/> 
        </InputDiv>
    )
}