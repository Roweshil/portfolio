import { Link } from "../Link"

export default function HomePage() {
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
        <section className="presentacion">
            <article>
                <h3>FullStack Developer</h3>
                <h1><strong>J. Andres Garcia Vargas</strong></h1>
                <nav>
                    <a 
                        href="https://github.com/Roweshil"
                        target="_blank"
                        rel="noreferrer"
                    > 
                        <img width="40" height="40" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" /> ↗</a>
                    <a 
                        href="https://www.linkedin.com/in/roweshil"
                        target="_blank"
                        rel="noreferrer"

                    > <img width="40" height="40" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" /> ↗</a>
                    <a 
                        href="https://github.com/Roweshil"
                        target="_blank"
                        rel="noreferrer"
                    > Acerca de mi ↗</a>
                </nav>
            </article>
        </section>

        <section className="proyectos">
            <article>
                <p>Experiencia como <strong>desarrollador</strong> y creador</p>

          <h2>Acerca de mi</h2>
          <p>Mi desarrollo ha sido en su mayor parte autodidacta, profesional del diseño con una sólida base en Experiencia de Usuario (UX) y Diseño de Interfaz de Usuario (UI) con enfoque en la creación de productos digitales intuitivos y atractivos. </p>
          <p>Experiencia en la aplicación de metodologías ágiles, particularmente SCRUM, para optimizar ciclos de desarrollo y asegurar la entrega de valor continuo.</p>

          <h2 id="experiencia">Experiencia</h2>
          <ul>
              <li>Empresa 1</li>
              <li>Empresa 2</li>
          </ul>

          <h2>Proyectos realizados</h2>
          
          <a download href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8G4QR4xZqGwaBxnM_o5emWa7Za3TyICf1CQ&s">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8G4QR4xZqGwaBxnM_o5emWa7Za3TyICf1CQ&s" alt="auuuuuuuuuuu" />
          </a>
          
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
                  <h2>Proyecto 2</h2>
                  <p>Descripcion del proyecto 2</p>
              </article>
          </section>

          <section className="About">
            
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
          
              <form method="post" action="/">
                  <fieldset>
                      <legend>Informacion personal</legend>
                      <div>
                          <label>Nombre:
                              <input 
                                  required
                                  type="text" 
                                  name="name" 
                                  placeholder="Escribe tu nombre"
                              /> 
                          </label>
                      </div>
                      <label>Email:
                          <input 
                              required
                              type="email" 
                              name="email" 
                              placeholder="ejemplo@ejemplo.com"
                          /> 
                      </label>
                      
                  </fieldset>
                  <fieldset>
                      <legend>Informacion Adicional</legend>
                          <label>Teléfono:
                              <input 
                              required
                              type="tel" 
                              name="phone" 
                              placeholder="+52 55 1234 5678"/>
                          </label>
                          <div>
                              <datalist id="tecnologias">
                                  <option value="javascript"></option>
                                  <option value="React"></option>
                                  <option value="java"></option>
                              </datalist>
                              <label>
                                  ¿Con que lenguajes quieres que te ayude?
                                  <input list="tecnologias" name="tecnologias" placeholder="Escribe o selecciona"/>
                              </label>
                          </div>
                  </fieldset>
                  <input type="submit" value="Enviar"/>
              </form>
          </section>
      </section>
      <footer>
          El mejor Portfolio
          
          <a href="mailto:roweshil@gmail.com">Enviame un correo</a>
          <a href="tel:+5554565789">Llamar por telefono</a>
          <a href="https://wa.me/5577359366">Llamar por WhatsApp</a>
          <a href=""></a>
      
      </footer>
      
    </>
  )
}