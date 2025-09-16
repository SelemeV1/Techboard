import "./Campodeformulario.estilo.css";

export function CampoDeFormulario({ children }) {
  return <fieldset className="Campo-form">{children}</fieldset>;
}
