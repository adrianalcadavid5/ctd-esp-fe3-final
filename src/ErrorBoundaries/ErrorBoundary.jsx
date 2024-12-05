import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
// Se ejecuta cuando hay un error en algún componente hijo
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

   // Puedes registrar el error aquí
  componentDidCatch(error, errorInfo) {
    console.error("Error capturado por ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Algo salió mal. Por favor, recarga la página o intenta más tarde.</h1>;
    }

    return this.props.children; // Renderiza los hijos normalmente
  }
}

export default ErrorBoundary;
