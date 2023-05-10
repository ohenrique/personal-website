interface ITextInput {
    placeholder: string,
    name: string,
    type: TextInputTypes
    className?: string,
}

export enum TextInputTypes {
    text = "text",
    tel = "tel",
    email = "email",
    number = "number"
}

const TextInput = ({ placeholder, name, type, className }: ITextInput) => (
    <input className={`p-2 ${className}`} type={type} placeholder={placeholder} name={name} ></input>
);

export default TextInput;