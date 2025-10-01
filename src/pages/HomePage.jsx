import { Link } from "../Link"

export default function HomePage() {
  return (
    <div className="container">
      <header className="header">
          <h1>@Roweshil</h1>
          <nav >
              <a to='/'>Home</a>
              <a to='/about'>Proyectos</a> 
              <a to='/proyects'>Acerca de mi</a> 
          </nav>

      </header>
      <section className="viewport">
        <section className="presentacion">
            <article>
                <div>
                    <h3> Andres garcia</h3>
                    <h1>FullStack<br />Developer</h1>
                </div>
                <div>
                    <nav>
                        <a 
                            href="https://github.com/Roweshil"
                            target="_blank"
                            rel="noreferrer"
                        > 
                            <img  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" /> ↗</a>
                        <a 
                            href="https://www.linkedin.com/in/roweshil"
                            target="_blank"
                            rel="noreferrer"

                        > <img  src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" /> ↗</a>
                        <a 
                            href="https://github.com/Roweshil"
                            target="_blank"
                            rel="noreferrer"
                        > Acerca de mi ↗</a>
                    </nav>
                </div>
                
            </article>
        </section>

        <section className="proyectos">
            <h1><strong>Proyectos</strong></h1>
            <section className="slideshare">
                <article>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iusto officia officiis, unde dicta eum saepe velit ut impedit reiciendis nobis itaque distinctio possimus repellendus veritatis placeat consequatur ab aperiam!</p>
                </article>
                <article>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, molestias ab quam aspernatur delectus nihil consequuntur blanditiis autem non tempore, eius voluptatum necessitatibus. Iste facilis blanditiis voluptas non soluta deserunt!</p>
                </article>
            </section>
            
        </section>

        <section className="content">

            <article>
                <p>Experiencia como <strong>desarrollador</strong> y creador</p>

                <h2>Acerca de mi</h2>
                <p>Mi desarrollo ha sido en su mayor parte autodidacta, profesional del diseño con una sólida base en Experiencia de Usuario (UX) y Diseño de Interfaz de Usuario (UI) con enfoque en la creación de productos digitales intuitivos y atractivos. </p>
                <p>Experiencia en la aplicación de metodologías ágiles, particularmente SCRUM, para optimizar ciclos de desarrollo y asegurar la entrega de valor continuo.</p>

            </article>

            <article>
                <header>
                    <h2>Proyecto 1</h2>
                    <p>Descripcion del proyecto 1</p>
                </header>
                <footer>
                    <small>Tecnologias utilizadas: HTML, CSS, JavaScript </small>
                </footer>
            </article>

            <article>
                <header>
                    <span>Mis tecnologías</span>
                </header>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React</li>
                    <li>MySQL</li>
                    <li>Node</li>
                </ul>
                <header>
                    <span>Habilidades Clave</span>
                </header>
                <ul>
                    <li>
                    <details>
                        <summary>Diseño UX/UI</summary>
                        <p>Investigación de usuarios (entrevistas, encuestas, pruebas de usabilidad)
                        Creación de wireframes y prototipos interactivos
                        Diseño de flujos de usuario y mapas de experiencia
                        Diseño visual y principios de UI
                        Optimización de la experiencia del cliente
                        Análisis de datos de usuario (ej. Google Analytics, Hotjar)</p>
                        
                    </details>
                    </li>
                    <li>
                    <details>
                        <summary>SCRUM Master / Product Owner (Experiencia)</summary>
                        <p>
                        Planificación de Sprints y Backlogs
                        Facilitación de ceremonias SCRUM (Daily Stand-ups, Reviews, Retrospectives)
                        Gestión de tareas y seguimiento de progreso
                        Colaboración interfuncional en equipos ágiles
                        </p>
                    </details>
                    </li>
                    <li>
                    <details>
                        <summary>Herramientas de Diseño y Colaboración</summary>
                        <p>
                        Figma, Adobe XD, Sketch
                        Miro, Jira, Trello
                        Habilidades Blandas:
                        Comunicación efectiva
                        Resolución de problemas
                        Pensamiento crítico
                        Trabajo en equipo y colaboración
                        </p>
                    </details>
                    </li>
                </ul>
            </article>

            
            <article>
                <h2>Preguntas frecuentes</h2>
              <details>
                  <summary>¡Que estudiaste?</summary>
                  <p>Ingenieria en sistemas computacionales</p>

              </details>

              <details>
                  <summary>¿Que lenguajes prefieres?</summary>
                  <p>JavaScript, , </p>
              </details>

              <details>
                  <summary>¿Tienes experiencia laboral?</summary>
                  <p>Si, he trabajado en varias empresas de tecnologia.</p>
              </details>
            </article>
          
              
          </section>
      </section>
      <footer className="footer">
          
      
      </footer>
      
    </div>
  )
}