
import './App.css'

function App() {

  return (
    <div className="container">
      <header className="header">
          imagen
          <nav >
              <a >Home</a>
              <a 
                href="https://github.com/Roweshil"
                target="_blank"
                rel="noreferrer"
              > Proyectos ↗</a> 
              <a
                href="https://twitch.tv/roweshil"
                target="_blank"
                rel="noreferrer"
              >Sobre mi ↗</a> 
          </nav>

      </header>
      <aside className="asidebar">
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

      </aside>
      <main>
          <Suspense fallback={<h1>Cargando...</h1>}>
            <Router>
                <Route path='/' Component={HomePage} />
                <Route path='/about' Component={AboutPage} />
            </Router>
          </Suspense>
      </main>
      <footer>
          El mejor Portfolio
          
          <a href="mailto:roweshil@gmail.com">Enviame un correo</a>
          <a href="tel:+5554565789">Llamar por telefono</a>
          <a href="https://wa.me/5577359366">Llamar por WhatsApp</a>
          <a href=""></a>
      
      </footer>
    </div>
  )
}

export default App
