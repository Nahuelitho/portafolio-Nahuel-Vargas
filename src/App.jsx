import { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Download,
  GraduationCap,
  Mail,
  Moon,
  Sparkles,
  Smartphone,
  Sun,
} from 'lucide-react'
import './App.css'
import { projects } from './data/projects'
import { skillGroups } from './data/skills'
import { socialLinks } from './data/socialLinks'

const cvPath = '/cv/nahuel-vargas-cv.pdf'
const androidDemoVideo = ''

const experienceItems = [
  {
    period: '5 meses',
    title: 'Pasantía en ULP',
    detail:
      'Digitalización de un juego educativo sobre la provincia de San Luis, sus departamentos y parajes. El proyecto quedó funcional y aprobado, pendiente de pulido para publicación.',
  },
  {
    period: 'Actualidad',
    title: 'Pasantía en M Studio',
    detail:
      'Trabajo en backend, ajustes frontend de una tienda digital y proyectos internos. Participo en un equipo organizado con Jira, ClickUp, reuniones periódicas, SDD asistido por IA y Pull Requests en Git.',
  },
  {
    period: '2021',
    title: 'Mentor en comunidad Mumuki San Luis',
    detail: 'Acompañamiento a estudiantes durante una experiencia de 2 meses.',
  },
]

const educationItems = [
  'Tecnicatura Universitaria en Desarrollo de Software en Universidad de La Punta, en curso desde 2020.',
  'Carrera en tramo final bajo el plan 2024 TUDS, luego de adaptarme al nuevo plan de estudios.',
  'El plan 2024 suma materias optativas y SIU Guaraní para consultar notas e inscribirme a materias.',
  'Argentina Programa 2da etapa e Inglés A1.1 en CUI UBA finalizados.',
]

const academicRecordImages = [
  {
    src: '/images/profile/plan_estudio1.jpg',
    alt: 'Captura del plan de estudios y notas académicas de Nahuel Vargas, página 1',
    caption: 'Plan de estudios y notas - página 1',
  },
  {
    src: '/images/profile/plan_estudio2.jpg',
    alt: 'Captura del plan de estudios y notas académicas de Nahuel Vargas, página 2',
    caption: 'Plan de estudios y notas - página 2',
  },
]

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme) {
      return savedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  const [isCvAvailable, setIsCvAvailable] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    let isMounted = true

    fetch(cvPath, { method: 'HEAD' })
      .then((response) => {
        const contentType = response.headers.get('content-type') ?? ''

        if (isMounted) {
          setIsCvAvailable(response.ok && contentType.includes('application/pdf'))
        }
      })
      .catch(() => {
        if (isMounted) {
          setIsCvAvailable(false)
        }
      })

    return () => {
      isMounted = false
    }
  }, [])

  const nextTheme = theme === 'dark' ? 'light' : 'dark'

  const toggleTheme = () => {
    setTheme(nextTheme)
  }

  const renderCvButton = (className, label = 'Descargar CV') => {
    if (isCvAvailable) {
      return (
        <a className={className} href={cvPath} download="nahuel-vargas-cv.pdf">
          <Download size={18} aria-hidden="true" /> {label}
        </a>
      )
    }

    return (
      <span
        className={`${className} button-disabled`}
        aria-disabled="true"
        title="CV pendiente de carga"
      >
        <Download size={18} aria-hidden="true" /> CV pendiente
      </span>
    )
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Ir al inicio">
          NV
        </a>
        <nav className="main-nav" aria-label="Navegación principal">
          <a href="#portfolio">Portfolio</a>
          <a href="#about">Sobre mí</a>
          <a href="#skills">Habilidades</a>
          <a href="#android-demo">Demo Android</a>
          <a href="#experience">Experiencia</a>
          <a href="#contact">Contacto</a>
        </nav>
        <button className="theme-toggle" type="button" onClick={toggleTheme}>
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          <span>Cambiar a modo {nextTheme === 'dark' ? 'oscuro' : 'claro'}</span>
        </button>
      </header>

      <main id="top">
        <section className="hero-section container" aria-labelledby="hero-title">
          <div className="hero-content">
            <p className="hero-kicker">
              <Sparkles size={18} aria-hidden="true" /> Portfolio personal
            </p>
            <p className="hero-role">Desarrollo de Software</p>
            <h1 id="hero-title">Nahuel Dario Vargas</h1>
            <p className="hero-lead">
              Desarrollador de software en formación, estudiante avanzado de la ULP y
              pasante en M Studio. Busco una oportunidad laboral para aportar en proyectos
              reales con JavaScript, React, backend/frontend web y trabajo en equipo.
            </p>
            <div className="hero-actions" aria-label="Acciones principales y redes">
              <a className="button button-secondary" href="#portfolio">
                Ver portfolio
              </a>
              <a className="button button-secondary" href="mailto:nahuel11906@gmail.com">
                Contactarme
              </a>
              {socialLinks.map((link) => (
                <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
                  {link.label === 'GitHub' ? (
                    <Code2 size={18} />
                  ) : (
                    <BriefcaseBusiness size={18} />
                  )}
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <aside className="hero-card" aria-label="Resumen profesional">
            <img
              className="profile-photo"
              src="/images/profile/fotoPerfilNahu.webp"
              alt="Nahuel Dario Vargas"
              width="240"
              height="240"
            />
            <p className="status-pill">Desarrollador de Software</p>
            <ul>
              <li>Tecnicatura en Desarrollo de Software (2020 - actualidad)</li>
              <li>Pasantía actual en M Studio</li>
              <li>Experiencia ULP en juego educativo funcional (5 meses)</li>
            </ul>
            {renderCvButton('button button-primary hero-card-cv')}
          </aside>
        </section>

        <section
          className="section portfolio-section"
          id="portfolio"
          aria-labelledby="portfolio-title"
        >
          <div className="container">
            <p className="section-eyebrow">Proyectos</p>
            <h2 className="section-heading" id="portfolio-title">
              Proyectos publicados
            </h2>
            <p className="section-copy">
              Trabajos publicados con práctica real, despliegue y aprendizaje aplicado.
              Cada tarjeta resume el objetivo del proyecto, las tecnologías usadas y el
              enlace al sitio.
            </p>

            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.id}>
                  <div className="project-thumbnail">
                    <img
                      src={project.image}
                      alt={`Miniatura del proyecto ${project.title}`}
                      loading="lazy"
                    />
                  </div>

                  <div className="project-card-body">
                    <div className="project-card-header">
                      <span>{project.context}</span>
                      <strong>{project.status}</strong>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.shortDescription}</p>
                    <ul
                      className="tag-list"
                      aria-label={`Tecnologías de ${project.title}`}
                    >
                      {project.technologies.map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </ul>
                    {project.deployNote ? (
                      <p className="project-deploy-note">{project.deployNote}</p>
                    ) : null}
                    <div className="project-actions">
                      {project.liveUrl ? (
                        <a href={project.liveUrl} target="_blank" rel="noreferrer">
                          Ver proyecto <ArrowUpRight size={17} />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section android-demo-section"
          id="android-demo"
          aria-labelledby="android-demo-title"
        >
          <div className="container android-demo-card">
            <div className="android-demo-copy">
              <p className="section-eyebrow">Demo Android</p>
              <h2 className="section-heading" id="android-demo-title">
                Espacio para mostrar una app Android
              </h2>
              <p className="section-copy">
                Sección preparada para sumar el video de una app Android grabada. Cuando
                el archivo esté disponible, va en{' '}
                <code>public/videos/android-app-demo.mp4</code>.
              </p>
            </div>

            <div className="android-demo-preview">
              {androidDemoVideo ? (
                <video controls preload="metadata" aria-label="Demo de app Android">
                  <source src={androidDemoVideo} type="video/mp4" />
                  Tu navegador no puede reproducir este video.
                </video>
              ) : (
                <div className="android-demo-placeholder">
                  <Smartphone size={40} aria-hidden="true" />
                  <p>Video Android pendiente de carga</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section
          className="section container about-grid"
          id="about"
          aria-labelledby="about-title"
        >
          <div>
            <p className="section-eyebrow">Sobre mí</p>
            <h2 className="section-heading" id="about-title">
              Perfil orientado a crecer en equipos de software
            </h2>
          </div>
          <div className="about-copy">
            <p>
              Soy estudiante avanzado de la Tecnicatura Universitaria en Desarrollo de
              Software en la Universidad de La Punta. Curso desde 2020 y actualmente estoy
              en el tramo final de la carrera bajo el plan 2024 TUDS.
            </p>
            <p>
              Mi objetivo es conseguir una oportunidad laboral en desarrollo de software,
              seguir especializándome en tecnologías relacionadas con JavaScript y aportar
              en equipos con objetivos claros, metodologías ágiles y mejora continua.
            </p>
          </div>
        </section>

        <section
          className="section skills-section"
          id="skills"
          aria-labelledby="skills-title"
        >
          <div className="container">
            <p className="section-eyebrow">Stack</p>
            <h2 className="section-heading" id="skills-title">
              Tecnologías y herramientas
            </h2>
            <div className="skills-grid">
              {skillGroups.map((group) => (
                <article className="skill-card" key={group.title}>
                  <Code2 size={24} aria-hidden="true" />
                  <h3>{group.title}</h3>
                  <ul className="tag-list">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section container timeline-section" id="experience">
          <div className="timeline-column" aria-labelledby="experience-title">
            <p className="section-eyebrow">Experiencia</p>
            <h2 className="section-heading" id="experience-title">
              Práctica real, procesos ágiles y colaboración
            </h2>
            <div className="timeline-list">
              {experienceItems.map((item) => (
                <article className="timeline-card" key={item.title}>
                  <span>{item.period}</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="timeline-column" aria-labelledby="education-title">
            <p className="section-eyebrow">Formación</p>
            <h2 className="section-heading" id="education-title">
              Base académica y aprendizaje constante
            </h2>
            <div className="education-card">
              <GraduationCap size={28} aria-hidden="true" />
              <ul>
                {educationItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="academic-summary">
                <h3>Notas académicas</h3>
                <p>
                  Capturas del sistema académico con el avance de la Tecnicatura y las
                  materias del plan 2024.
                </p>
                <div className="academic-records">
                  {academicRecordImages.map((image) => (
                    <figure className="academic-record" key={image.src}>
                      <a
                        className="academic-record-link"
                        href={image.src}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Ver ${image.caption} en tamaño completo`}
                      >
                        <img src={image.src} alt={image.alt} loading="lazy" />
                        <figcaption>
                          <span>{image.caption}</span>
                          <strong>
                            Ver grande <ArrowUpRight size={15} aria-hidden="true" />
                          </strong>
                        </figcaption>
                      </a>
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="section contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="container contact-card">
            <div>
              <p className="section-eyebrow">Contacto</p>
              <h2 className="section-heading" id="contact-title">
                Hablemos de una oportunidad
              </h2>
              <p className="section-copy">
                Estoy buscando una oportunidad laboral en desarrollo de software. Cuento
                con computadora, conexión a internet y herramientas para programar,
                coordinar reuniones y trabajar de forma remota o híbrida.
              </p>
            </div>
            <div className="contact-actions">
              <div className="contact-main-actions">
                {renderCvButton('button button-primary')}
                <a
                  className="button button-secondary"
                  href="https://www.linkedin.com/in/nahuel-vargas-96a9271a8/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BriefcaseBusiness size={18} /> LinkedIn
                </a>
                <a
                  className="button button-secondary"
                  href="https://github.com/Nahuelitho"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Code2 size={18} /> GitHub
                </a>
              </div>
              <a
                className="button button-secondary contact-email"
                href="mailto:nahuel11906@gmail.com"
              >
                <Mail size={18} /> nahuel11906@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <p>
            <BriefcaseBusiness size={18} aria-hidden="true" /> Nahuel Dario Vargas
          </p>
          <nav className="footer-links" aria-label="Enlaces del footer">
            <a href="#portfolio">Portfolio</a>
            {isCvAvailable ? (
              <a href={cvPath} download="nahuel-vargas-cv.pdf">
                CV
              </a>
            ) : (
              <span className="footer-link-disabled" aria-disabled="true">
                CV pendiente
              </span>
            )}
            <a href="#skills">Habilidades</a>
            <a
              href="https://www.linkedin.com/in/nahuel-vargas-96a9271a8/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="https://github.com/Nahuelitho" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
