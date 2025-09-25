import { Link } from "../Link";

export default function ProyectPage() {
  return (
    <>
        <header className="header">
            imagen
            <nav >
                <Link to='/'>Home</Link>
                <Link to='/about'>Ir a Acerca mi</Link> 
                <Link to='/proyects'>Proyectos</Link> 
            </nav>

        </header>

        <section className="contenido">
            <h1>Proyectos</h1>
        </section>
        
        <footer>

        </footer>
      
    </>
    )
}