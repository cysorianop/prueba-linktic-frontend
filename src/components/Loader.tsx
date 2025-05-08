function Loader() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="text-center">
        <h4 className="text-primary">Cargando...</h4>
        <p className="text-muted">
          Por favor espera mientras cargamos los datos.
        </p>
      </div>
    </div>
  );
}

export default Loader;
