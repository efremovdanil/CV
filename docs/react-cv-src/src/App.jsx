import { useState } from 'react'
import './App.css'
import avatarImage from './assets/danil-avatar.png'
import raifIcon from './assets/icons/raif.svg'
import indriveIcon from './assets/icons/indrive.svg'
import bestdoctorIcon from './assets/icons/bestdoctor.svg'
import netologyIcon from './assets/icons/netology.svg'
import konturIcon from './assets/icons/kontur.svg'
import factIcon from './assets/icons/fact.svg'

const contacts = [
  { label: 'Телеграм', href: 'https://t.me/danilefremov' },
  { label: 'Почта', href: 'mailto:efremovdanil0@gmail.com' },
  { label: 'ЛинкедИн', href: 'https://www.linkedin.com/in/danil-efremov-34a3216b/' },
]

const summary = [
  'Сложное делаю простым и удобным. Больше заточен под внутренние продукты и B2B',
  'Люблю дизайн-системы, а ещё больше - когда они сделаны своими руками',
  'Умею глубоко исследовать интерфейс, сценарии и проверять продуктовые гипотезы',
]

const storyTreeParagraphs = [
  'В 2018 году исследовали большой продукт и найденное закидывали в Miro. Исследование закончили, но осталось сильное впечатление о сложности ведения документации в таком формате. Пробовал The Brain и Tinderbox, но интерфейс из нулевых и заточенность под академические сценарии всё только усложняли.',
  'Очень захотелось сделать не просто очередную майндмап-софтину, а штуку, которая помогает быстро выгружать из головы сложные мысли и структурировать их. За следующие три года нашёл несколько сильных инженеров, готовых делать это за идею и долю в продукте, но хороший canvas-рендер даже маленькой командой оказалось сделать непросто.',
  'В итоге мечта о хорошем инструменте для мышления пока не сбылась, но остались артефакты: исследование рынка, задизайненный MVP продукта и промо.',
]

const experience = [
  {
    icon: raifIcon,
    iconAlt: 'Raif',
    role: 'Старший продуктовый дизайнер',
    company: 'Райфе',
    companyHref: 'https://www.raiffeisen.ru/',
    period: 'Сентябрь 2024 → Сейчас',
    projects: [
      {
        title: 'Raif Integrations',
        paragraphs: [
          'В Raif API с нуля делал всё, что касалось дизайна в новом продукте для внешних и внутренних клиентов: лендинг, портал API, админку, инструкции и презентации.',
          'В 1С Smartegra улучшал веб-часть: флоу подключения, взаимодействие с интеграцией и админку.',
          'В Raif ID сделал удобнее и красивее флоу авторизации с учётом множества корнер-кейсов и локализации. Исследовали и улучшили админку - сократили нагрузку на вторую линию техподдержки на 40%.',
        ],
      },
    ],
  },
  {
    icon: indriveIcon,
    iconAlt: 'inDrive',
    role: 'Старший продуктовый дизайнер',
    company: 'inDrive',
    companyHref: 'https://indrive.com/',
    period: 'Апрель 2022 → Сентябрь 2024',
    projects: [
      {
        title: 'SBDU',
        paragraphs: [
          'С нуля сделал веб-админку для Server Backend Driven UI. SBDU помогает без релизного цикла на мобиле менять содержимое страниц и быстро проводить A/B-тестирование.',
          'В админке можно собрать и баннер, и экран, и целое флоу с динамическими данными или локализацией. Получилось что-то похожее на Figma, но с инъекциями кода для бэкенда.',
          'Этим инструментом пользовались дизайнеры, продакты и разработчики. Админку назвали Widgeteria.',
        ],
      },
      {
        title: 'A/B platform',
        paragraphs: [
          'Внутренняя платформа для проведения A/B-экспериментов, switchback-тестов и релиз-менеджмента.',
          'Она помогает быстро тестировать гипотезы, постепенно раскатывать изменения и удобно управлять сегментацией и фичатоглингом.',
        ],
      },
      {
        title: 'Design system Oymyakon',
        paragraphs: [
          'Сделали дизайн-систему и для мобильных приложений на iOS и Android, и для веба, и для webview.',
          'Для мобилы задизайнил отдельное приложение, чтобы смотреть компоненты и пропсы.',
        ],
      },
    ],
  },
  {
    icon: bestdoctorIcon,
    iconAlt: 'Лучи / BestDoctor',
    role: 'Продуктовый дизайнер',
    company: 'Лучах (ex. BestDoctor)',
    companyHref: 'https://bestdoctor.ru',
    period: 'Июль 2021 → Апрель 2022',
    projects: [
      {
        title: 'CRM',
        paragraphs: [
          'В ней пациентов записывают на приём, согласовывают услуги, отправляют гарантийные письма, оформляют полисы ВЗР, работают с претензиями, оценивают качество работы, звонят пациентам по видеосвязи и ещё много всего.',
        ],
      },
      {
        title: 'Сделал',
        bullets: [
          'Организовал процесс работы с дизайнером в команде, в которой раньше с дизайнерами не работали.',
          'Привёл в порядок интерфейсы, сделанные разработчиками - CRM стала удобнее и красивее, CSAT вырос с 3,4 до 4,8.',
          'Помог перенести в CRM часть бизнес-процессов из Trello и Google Sheets: работу с отложенными обращениями, оформление ВЗР и медкарту пациента.',
          'Сделал основные проблемные места сервиса удобнее - среднее время работы с обращением сократилось на 26%.',
          'Провёл для команды мастер-класс по Figma: разработчики, тестировщики, аналитик и менеджер научились собирать простые прототипы на скринах и компонентах библиотек.',
        ],
      },
      {
        title: 'Делал',
        bullets: [
          'Системно искал проблемы: каждую неделю общался с двумя основными отделами заказчиков, смотрел записи сессий в Fullstory и мониторил жалобы в Slack-каналах.',
          'Для нового функционала и больших изменений проводил UX-исследования, глубинные интервью, коридорные тесты и опросы.',
          'Переводил дизайн на рельсы компонентов MUI-библиотеки с небольшими модификациями под потребности команды.',
          'Участвовал в поиске и собеседовании новых дизайнеров.',
        ],
      },
    ],
  },
  {
    icon: netologyIcon,
    iconAlt: 'Нетология',
    role: 'Продуктовый дизайнер',
    company: 'Нетологии',
    companyHref: 'https://netology.ru/',
    period: 'Ноябрь 2020 → Май 2021',
    projects: [
      {
        title: 'Learning Management System, или LMS',
        paragraphs: [
          'LMS - это то, с чем взаимодействуют студенты в процессе обучения. Внутри есть две большие части: среда обучения для студентов и админская часть для сотрудников.',
          'Я делал лучше обе эти части, но с перевесом в админку.',
        ],
      },
    ],
  },
  {
    icon: konturIcon,
    iconAlt: 'Контур',
    role: 'Продуктовый дизайнер',
    company: 'Контуре',
    companyHref: 'https://kontur.ru/',
    period: 'Ноябрь 2017 → Ноябрь 2020',
    projects: [
      {
        title: 'Контур.Гайды',
        href: 'https://guides.kontur.ru/',
        paragraphs: [
          'Всё время, что работал в Контуре, помогал делать Гайды и продуктовые библиотеки.',
          'Перенёс продуктовую библиотеку из Sketch в Figma и работал над её инфраструктурным улучшением. Вместе с разработчиком научили Telegram-бота рассказывать об обновлениях библиотек.',
          'Был евангелистом Figma, когда она была ещё мало известна. За пару лет ей пользовалось больше 400 человек, не считая дизайнеров.',
        ],
      },
      {
        title: 'Контур.EDI',
        href: 'https://kontur.ru/edi',
        paragraphs: [
          'Больше года помогал развивать одного из лучших EDI-провайдеров в России. Это стандартизированный электронный документооборот между сетью и поставщиком в ритейле.',
        ],
      },
      {
        title: 'Контур.Реестро',
        href: 'https://kontur.ru/reestro',
        paragraphs: [
          'Спроектировал стартап по работе с недвижимостью. Кроме самого сервиса, помогал маркетологам с промо-страницей и правильным видением продукта.',
        ],
      },
      {
        title: 'Контур.Экстерн',
        href: 'https://www.kontur-extern.ru/',
        paragraphs: [
          'Помогал делать удобнее сложные формы для отчётности в Пенсионный фонд.',
        ],
      },
    ],
  },
  {
    icon: factIcon,
    iconAlt: 'Факт',
    role: 'Веб-дизайнер',
    company: 'студии «Факт»',
    companyHref: 'https://fact.digital',
    period: '2014 → 2017',
    projects: [
      {
        title: 'Дизайн',
        paragraphs: [
          'Проектировал и рисовал концепции сайтов. Вместе с разработчиками искали баланс между сложностью и сроками.',
          'Был наставником у новичков и присматривал за дизайнерами.',
        ],
      },
    ],
  },
  {
    badge: '👨‍🎨',
    role: 'Дизайнер и печатник',
    company: 'частной картинной галерее',
    period: '2012 → 2014',
    projects: [
      {
        title: 'Работал с картинами и дизайнил',
        paragraphs: [
          'Участвовал в проектах галереи. Делал макеты для сайта, презентации и видеоинсталляции.',
          'Работал с картинами: помогал разрабатывать методику цифрового копирования и художественную обработку произведений.',
        ],
      },
    ],
  },
]

function ExternalLink({ href, className, children }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

function ExperienceProject({ project }) {
  return (
    <section className="experience-project">
      {project.href ? (
        <ExternalLink href={project.href} className="experience-project-title link-accent">
          {project.title}
        </ExternalLink>
      ) : (
        <h4 className="experience-project-title">{project.title}</h4>
      )}

      {project.paragraphs?.map((paragraph) => (
        <p key={paragraph} className="body-copy">
          {paragraph}
        </p>
      ))}

      {project.bullets && (
        <ul className="bullet-list">
          {project.bullets.map((bullet) => (
            <li key={bullet} className="body-copy">
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

function ExperienceCard({ item }) {
  return (
    <article className="experience-card">
      <div className="experience-meta">
        {item.icon ? (
          <img className="experience-icon" src={item.icon} alt={item.iconAlt} />
        ) : (
          <div className="experience-badge">{item.badge}</div>
        )}

        <div className="experience-heading">
          <h3 className="experience-role">{item.role}</h3>
          <p className="experience-company">
            {item.companyHref ? (
              <>
                в{' '}
                <ExternalLink href={item.companyHref} className="link-accent">
                  {item.company}
                </ExternalLink>
              </>
            ) : (
              <>в {item.company}</>
            )}
          </p>
          <p className="experience-period">{item.period}</p>
        </div>
      </div>

      <div className="experience-content">
        {item.projects.map((project) => (
          <ExperienceProject key={`${item.role}-${project.title}`} project={project} />
        ))}
      </div>
    </article>
  )
}

function App() {
  const [isStoryOpen, setIsStoryOpen] = useState(true)

  return (
    <div className="site-shell">
      <div className="site-frame">
        <main className="page">
          <header className="hero panel">
            <div className="hero-top">
              <div className="avatar-wrap">
                <img src={avatarImage} alt="Данил Ефремов" className="avatar" />
              </div>

              <div className="hero-copy">
                <p className="eyebrow">Старший продуктовый дизайнер</p>
                <h1>Данил Ефремов</h1>

                <div className="contact-row" aria-label="Контакты">
                  {contacts.map((contact, index) => (
                    <div key={contact.href} className="contact-item">
                      {index > 0 && <span className="contact-dot">·</span>}
                      <ExternalLink href={contact.href} className="contact-link">
                        {contact.label}
                      </ExternalLink>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="summary-grid">
              {summary.map((text) => (
                <p key={text} className="summary-card">
                  {text}
                </p>
              ))}
            </div>
          </header>

          <section className="section">
            <div className="section-head">
              <p className="section-kicker">Пет проекты</p>
              <div className="section-line" />
            </div>

            <article className="story-card panel">
              <div className="story-banner">
                <button
                  type="button"
                  className="story-toggle"
                  onClick={() => setIsStoryOpen((value) => !value)}
                  aria-expanded={isStoryOpen}
                >
                  <span className="story-toggle-icon" aria-hidden="true">
                    {isStoryOpen ? '−' : '+'}
                  </span>

                  <span className="story-toggle-copy">
                    <span className="story-label">📍 StoryTree</span>
                    <span className="story-subtitle">MVP промо и кусочек продукта</span>
                  </span>
                </button>
              </div>

              {isStoryOpen && (
                <div className="story-body">
                  {storyTreeParagraphs.map((paragraph) => (
                    <p key={paragraph} className="body-copy">
                      {paragraph}
                    </p>
                  ))}

                  <div className="story-links">
                    <ExternalLink href="https://disk.yandex.ru/i/aVnKIcHtwAzf5A" className="pill-link">
                      Открыть материалы
                    </ExternalLink>
                    <ExternalLink href="https://www.thebrain.com" className="pill-link pill-link-muted">
                      The Brain
                    </ExternalLink>
                    <ExternalLink
                      href="https://www.eastgate.com/Tinderbox/"
                      className="pill-link pill-link-muted"
                    >
                      Tinderbox
                    </ExternalLink>
                  </div>
                </div>
              )}
            </article>
          </section>

          <section className="section">
            <div className="section-head">
              <p className="section-kicker">Кто, где, когда</p>
              <div className="section-line" />
            </div>

            <div className="timeline">
              {experience.map((item) => (
                <ExperienceCard key={`${item.role}-${item.period}`} item={item} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
