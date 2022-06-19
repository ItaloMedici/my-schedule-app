import { Input, Container, Label } from './styles';

export type TextFieldProps = {
  label?: string;
  value: any,
  name: string,
  onChange?: (e: any) => void,
  type?: "text" | "password"
}


const InputText: React.FC<TextFieldProps> = (
  { label, value, onChange, name, children, type = "text" }
) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Input type={type} onChange={onChange} value={value} name={name} />
      {children}
    </Container>
  );
}

export { InputText };