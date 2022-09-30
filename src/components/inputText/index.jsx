import {InputDiv, Inputin, Inlabel}  from './inputstyled'

export default function InputText({
    divTamanhoX, divTamanhoY, htmlfor, text, name,
    id, inputTamanhoX, inputTamanhoY, lColor
}) {
    return (
        <InputDiv x={divTamanhoX} y={divTamanhoY}>
            <Inlabel lColor={lColor} htmlFor={htmlfor}>{text}</Inlabel>
            <Inputin type="text" name={name} id={id} x={inputTamanhoX} y={inputTamanhoY} />
        </InputDiv>
    )
}