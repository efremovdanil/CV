import { useState } from 'react'
import './App.css'
import avatarImage from './assets/danil-avatar.png'

const contacts = [
  { label: 'Телеграм', href: 'https://t.me/danilefremov' },
  { label: 'Почта', href: 'mailto:efremovdanil0@gmail.com' },
  {
    label: 'ЛинкедИн',
    href: 'https://www.linkedin.com/in/danil-efremov-34a3216b/',
  },
]

const summary = [
  'Сложное делаю простым и удобным. Больше заточен под внутренние продукты и B2B.',
  'Люблю дизайн-системы, а ещё больше - когда они сделаны своими руками.',
  'Умею глубоко исследовать интерфейс, сценарии и проверять продуктовые гипотезы.',
]

const storyTreeParagraphs = [
  'В 2018 году исследовали большой продукт и найденное закидывали в Миро. Исследование закончили, но осталось сильное впечатление о сложности ведения документации в таком формате. Пробовал The Brain и Tinderbox, но интерфейс из нулевых и заточенность под академические сценарии всё только усложняли.',
  'Очень захотелось сделать не просто очередную майндмап-софтину, а штуку, которая помогает быстро выгружать из головы сложные мысли и структурировать их. За следующие три года нашёл несколько сильных инженеров, готовых делать это за идею и долю в продукте, но хороший canvas-рендер даже маленькой командой оказалось сделать непросто.',
  'В итоге мечта о хорошем инструменте для мышления пока не сбылась, но остались артефакты: исследование рынка, задизайненный MVP продукта и промо.',
]

const experience = [
  {
    role: 'Старший продуктовый дизайнер',
    companyLabel: 'в Райфе',
    companyHref: 'https://www.raiffeisen.ru/',
    period: 'С сентября 2024',
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
    role: 'Старший продуктовый дизайнер',
    companyLabel: 'в inDrive',
    companyHref: 'https://indrive.com/',
    period: 'Апрель 2022 → Сентябрь 2024',
    projects: [
      {
        title: 'SBDU',
        paragraphs: [
          'С нуля сделал веб-админку для Server Backend Driven UI. SBDU помогал без релизного цикла на мобиле менять содержимое страниц и быстро проводить A/B-тестирование.',
          'В админке можно собрать и баннер, и экран, и целое флоу с динамическими данными или локализацией. Получилось что-то похожее на Figma, но с инъекциями кода для бэкенда.',
          'Этим инструментом пользовались дизайнеры, продакты и разработчики. Админку назвали Widgeteria.',
          'Сборка виджетов почти полностью ограничена компонентами дизайн-системы, но есть и кросс-командные блоки, например CSAT и NPS.',
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
    role: 'Продуктовый дизайнер',
    companyLabel: 'в Лучах (ex. BestDoctor)',
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
    role: 'Продуктовый дизайнер',
    companyLabel: 'в Нетологии',
    companyHref: 'https://netology.ru/',
    period: 'Ноябрь 2020 → Май 2021',
    projects: [
      {
        title: 'Learning Management System, или LMS',
        paragraphs: [
          'LMS - это то, с чем взаимодействуют студенты в процессе обучения. Внутри есть две большие части: учебная среда для студентов и админская часть для сотрудников.',
          'Я делал лучше обе эти части, но с перевесом в админку.',
        ],
      },
    ],
  },
  {
    role: 'Продуктовый дизайнер',
    companyLabel: 'в Контуре',
    companyHref: 'https://kontur.ru/',
    period: 'Ноябрь 2017 → Ноябрь 2020',
    projects: [
      {
        title: 'Контур.Гайды',
        href: 'https://guides.kontur.ru/',
        paragraphs: [
          'Всё время, что работал в Контуре, помогал делать Гайды и продуктовые библиотеки.',
          'Перенёс продуктовую библиотеку из Sketch в Figma и работал над её инфраструктурным улучшением. Вместе с разработчиком научили Telegram-бота рассказывать об обновлениях библиотек.',
          'Был евангелистом Figma, когда она была ещё мало известна. За пару лет ею пользовалось больше 400 человек, не считая дизайнеров.',
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
          '→ Что сделал → продукты и дизайн-система',
        ],
      },
    ],
  },
  {
    role: 'Веб-дизайнер',
    companyLabel: 'в студии «Факт»',
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
    role: 'Дизайнер и печатник',
    companyLabel: 'в частной картинной галерее',
    period: '2012 → 2014',
    badge: '👨‍🎨',
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

function ExternalLink({ href, children, className }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

function ProjectBlock({ project }) {
  return (
    <div className="project-block">
      {project.href ? (
        <ExternalLink href={project.href} className="project-title project-link">
          {project.title}
        </ExternalLink>
      ) : (
        <p className="project-title">{project.title}</p>
      )}

      {project.paragraphs?.map((paragraph) => (
        <p key={paragraph} className="project-text">
          {paragraph}
        </p>
      ))}

      {project.bullets && (
        <ul className="project-list">
          {project.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

function ExperienceCard({ item }) {
  return (
    <article className="experience-card">
      <div className="experience-aside">
        <p className="experience-period">{item.period}</p>
        {item.badge && <div className="experience-badge">{item.badge}</div>}
      </div>

      <div className="experience-main">
        <h3 className="experience-title">
          <span>{item.role} </span>
          {item.companyHref ? (
            <ExternalLink href={item.companyHref} className="experience-company">
              {item.companyLabel}
            </ExternalLink>
          ) : (
            <span className="experience-company">{item.companyLabel}</span>
          )}
        </h3>

        <div className="project-stack">
          {item.projects.map((project) => (
            <ProjectBlock key={`${item.period}-${project.title}`} project={project} />
          ))}
        </div>
      </div>
    </article>
  )
}

function App() {
  const [isStoryOpen, setIsStoryOpen] = useState(true)

  return (
    <div className="page-shell">
      <div className="page-glow page-glow-left" />
      <div className="page-glow page-glow-right" />

      <main className="page">
        <header className="hero panel">
          <div className="hero-top">
            <img src={avatarImage} alt="Данил Ефремов" className="avatar" />

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

          <article className={`story-card panel${isStoryOpen ? ' open' : ''}`}>
            <button
              type="button"
              className="story-toggle"
              onClick={() => setIsStoryOpen((open) => !open)}
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

            {isStoryOpen && (
              <div className="story-body">
                {storyTreeParagraphs.map((paragraph) => (
                  <p key={paragraph} className="project-text">
                    {paragraph}
                  </p>
                ))}

                <div className="story-links">
                  <ExternalLink href="https://disk.yandex.ru/i/aVnKIcHtwAzf5A" className="story-link">
                    Открыть материалы
                  </ExternalLink>
                  <ExternalLink href="https://www.thebrain.com" className="story-link muted-link">
                    The Brain
                  </ExternalLink>
                  <ExternalLink
                    href="https://www.eastgate.com/Tinderbox/"
                    className="story-link muted-link"
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
  )
}

export default App
