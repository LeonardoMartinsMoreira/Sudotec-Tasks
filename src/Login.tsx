import { useRef } from "react";

export function Login() {
  const inputElement = useRef<HTMLInputElement>(null);
  function handleSubmit() {
    inputElement.current?.focus();
  }
  return (
    <div className="flex flex-col">
      <p>Digite seu email</p>
      <input type="email" ref={inputElement} placeholder="digite seu email" />
      <a onClick={handleSubmit}>Enviar</a>
      <a href="/">Voltar a página principal</a>
    </div>
  );
}
