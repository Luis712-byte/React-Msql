import { useNavigate } from 'react-router-dom';

const Notfound = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10 text-center">
          <h1 className="display-4">404</h1>
          <p className="lead">Página no encontrada</p>
          <p>Lo sentimos, la página que estás buscando no existe.</p>
          <button onClick={goToHome}>Regresar</button>
        </div>
      </div>
    </div>
  )
}

export default Notfound