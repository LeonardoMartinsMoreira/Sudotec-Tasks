import { useCounter } from "../useCounter";

export function Counter() {
  const { count, increase, decrease } = useCounter();
  return (
    <>
      <h1>Vite + ReMainPageact</h1>
      <div className="card">
        <button
          className="bg-green-900 text-white"
          onClick={() => {
            increase();
          }}
        >
          Adicionar
        </button>
        <button
          className="bg-green-900 ml-10 text-white"
          onClick={() => {
            decrease();
          }}
        >
          Remover
        </button>
      </div>
      <p>{count}</p>
      <a href="/">Ir para pagina inicial</a>
    </>
  );
}
