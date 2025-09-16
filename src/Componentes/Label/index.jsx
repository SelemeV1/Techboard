import "./Label.estilos.css";

export function Label({ children, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className="Label">
      {children}
    </label>
  );
}
