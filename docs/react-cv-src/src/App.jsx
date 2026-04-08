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
    period: ['Сентябрь 2024', '→ Март 2026'],
    projects: [
      {
        title: 'Raif Intergrations',
        paragraphs: [
          'В Raif API, с нуля делал всё, что касалось дизайна в новом продукте для внешних и внутренних клиентов: лендинг, портал API, админку, инструкции и презентации.',
          'В 1С Smartegra улучшал веб-часть: флоу подключения, взаимодействия с интеграцией и админку.',
          'В Raif ID cделал удобней и красивее флоу авторизации, с учётом множества корнер-кейсов и локализации. Исследовали и улучшили админку → сократили нагрузку на вторую линию тех. поддержки на 40%',
        ],
      },
    ],
  },
  {
    icon: indriveIcon,
    iconAlt: 'inDrive',
    role: 'Старший продуктовый дизайнер в',
    company: 'inDrive',
    companyHref: 'https://indrive.com/',
    period: ['Апрель 2022 →', 'Сентябрь 2024'],
    projects: [
      {
        title: 'SBDU',
        paragraphs: [
          'С нуля сделал админку на вебе для Server Backend Driven UI метода. SBDU помогает без релизного цикла на мобиле менять содержимое страниц и быстро проводить AB-тестирование. Получилось что-то похожее на Figmа, но с инъекциями кода для бэкэнда.',
          'В админке можно собрать виджет – экран или целое флоу в интерфейсе. Можно собрать и баннер, и что-то сложное. Например виджет с флоу пополнения кошелька с динамическими данными, или можно подключить сервис локализаций для экранов.',
          'Обычно SBDU-методом, пользуются кодом, но мы сделали веб-админку, в которой работали и дизайнеры, и продакты, и разработчики. Админку назвали Widgeteria и да, на логотипе итальянский жест Che vuoi.',
          'Сборка виджетов в админке почти полностью ограничена компонентами дизайн-системы, но есть и кросскомандные части которые выглядят одинаково для всех вертикалей, например CSAT и NPS.',
        ],
      },
      {
        title: 'A/B platform',
        paragraphs: [
          'Внутренняя платформа для проведения АБ-экспериментов, cвитчбэков и релиз-менеджмента. АБ-платформа больше всего помогает в трёх вещах:',
          '1. Быстро тестировать гипотезы и очень быстро тестировать гипотезы, если эксперименты проводить с использованием Server Backend Driven UI;',
          '2. Постепенно раскатывать в прод изменения;',
          '3. Удобный релиз-мененджмент со множеством параметров сегментации → он же фичатоглинг.',
        ],
      },
      {
        title: 'Design system Oymyakon',
        paragraphs: [
          'Сделали дизайн систему и для мобилы на айос и андроид, и для веба и веб-вью. Для мобилы задизайнил отдельное приложение чтобы смотреть компоненты и пропсы.',
        ],
      },
    ],
  },
  {
    icon: bestdoctorIcon,
    iconAlt: 'BestDoctor',
    role: 'Продуктовый дизайнер',
    company: 'Лучах (ex.BestDoctor)',
    companyHref: 'https://bestdoctor.ru',
    period: ['Июль 2021', '→ Апрель 2022'],
    projects: [
      {
        title: 'CRM',
        paragraphs: [
          'В ней пациентов записывают на приём, согласовывают услуги, отправляют гарантийные письма, оформляют полиса ВЗР, работают с претензиями, оценивают качество работы, звонят пациентам по видеосвязи и ещё много всего.',
        ],
      },
      {
        title: 'Сделал',
        paragraphs: [
          'Организовал процесс работы с дизайнером в команде, в которой не работали с дизайнерами;',
          'Привёл в порядок интерфейсы сделанные разработчиками — CRM стала удобней и красивей, CSAT 3,4 → 4,8;',
          'Помог перенести некоторые бизнес-процессы в CRM из Трело и Гуглотаблиц. Например, работу с отложенными обращениями, оформление ВЗР и медкарту пациента;',
          'Сделал основные проблемные места в сервисе удобными → среднее время работы с обращением сократилось на 26%;',
          'Провёл для команды-мастер класс по Фигме: разработчики, тестировщики, аналитик и менеджер узнали про основной функционал и научились собирать простые прототипы на скринах и компонентах библиотек.',
        ],
      },
      {
        title: 'Делал',
        content: [
          <>
            Системно искал проблемы: каждую неделю общался с двумя основными отделами
            заказчиков, смотрел записи сессий в{' '}
            <ExternalLink href="https://www.fullstory.com/" className="inline-link">
              Fullstory
            </ExternalLink>
            , мониторил жалобы в каналах Slack;
          </>,
          'Для нового функционала и больших изменений проводил ux-исследования, глубинные интервью, коридорные тесты и опросы;',
          <>
            Переводил дизайн на рельсы компонентов{' '}
            <ExternalLink href="https://mui.com/" className="inline-link">
              MUI-библиотеки
            </ExternalLink>
            , с небольшими модификациями под наши потребности;
          </>,
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
    period: ['Ноябрь 2020', '→ Май 2021'],
    projects: [
      {
        title: 'Learning Management System, или LMS',
        paragraphs: [
          'LMS — это то, с чем взаимодействуют студенты в процессе обучения. В LMS есть две большие части: среда обучения для студентов и админская часть для сотрудников. Я делал лучше обе эти части, но с перевесом в админку.',
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
    period: ['Ноябрь 2017', '→ Ноябрь 2020'],
    projects: [
      {
        title: 'Контур.Гайды',
        href: 'https://guides.kontur.ru/',
        paragraphs: [
          'Всё время что работал в Контуре, помогал делать Гайды и продуктовые библиотеки.',
          'Перенёс из Скетча в Фигму продуктовую библиотеку и работал над её инфраструктурном улучшением. Помог сделать работу дизайнеров над библиотекой системной. Вместе с разработчиком, научили бота в Телеграме рассказывать обо всех обновлениях библиотек.',
          'Был евангелистом Фигмы когда она была мало известна. За пару лет смогу убедить дизайнеров и недизайнеров что Фигма — крутой инструмент. В 2019 Фигмой пользовалось больше 400 человек, не считая дизайнеров.',
        ],
      },
      {
        title: 'Контур.EDI',
        href: 'https://kontur.ru/edi',
        paragraphs: [
          'Больше года помогал развивать один из лучших провайдеров EDI в России. EDI-сообщения — это стандартизированный электронный документооборот между сетью и поставщиком в ритейле. Сервис помогает сетям вовремя пополнять склад, а поставщикам продавать товары.',
        ],
      },
      {
        title: 'Контур.Реестро',
        href: 'https://kontur.ru/reestro',
        paragraphs: [
          'Спроектировал стартап по работе с недвижимостью. Кроме самого сервиса, помогал маркетологам с промо страницей и правильным видением продукта продукта.',
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
    period: ['2014 → 2017'],
    breakBeforeCompany: true,
    projects: [
      {
        title: 'Дизайн',
        paragraphs: [
          'Проектировал и рисовал концепции сайтов. Вместе с разработчиками искали баланс между сложностью и сроками. Был наставником у новичков, присматривал за дизайнерами.',
        ],
      },
    ],
  },
  {
    badge: '👨‍🎨',
    role: 'Дизайнер и печатник',
    company: 'частной картинной галерее',
    period: ['2012 → 2014'],
    breakBeforeCompany: true,
    projects: [
      {
        title: 'Работал с картинами и дизайнил',
        paragraphs: [
          'Участвовал в проектах галереи. Делал макеты для сайта, презентации и видеоинсталяции.',
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

function StoryChevron({ open }) {
  return <span className={open ? 'story-chevron open' : 'story-chevron'} aria-hidden="true" />
}

function ExperienceTitle({ item }) {
  const companyNode = item.companyHref ? (
    <ExternalLink href={item.companyHref} className="accent-link">
      в {item.company}
    </ExternalLink>
  ) : (
    <>в {item.company}</>
  )

  return (
    <p className="experience-title">
      <span className="experience-title-strong">{item.role} </span>
      {item.breakBeforeCompany ? (
        <>
          <br />
          {companyNode}
        </>
      ) : (
        companyNode
      )}
    </p>
  )
}

function ExperienceProject({ project }) {
  return (
    <section className="experience-project">
      {project.href ? (
        <ExternalLink href={project.href} className="project-heading accent-link">
          {project.title}
        </ExternalLink>
      ) : (
        <h3 className="project-heading">{project.title}</h3>
      )}

      {project.paragraphs?.map((paragraph) => (
        <p key={paragraph} className="body-text">
          {paragraph}
        </p>
      ))}

      {project.content?.map((paragraph, index) => (
        <p key={index} className="body-text">
          {paragraph}
        </p>
      ))}
    </section>
  )
}

function ExperienceRow({ item }) {
  return (
    <article className="experience-row">
      <div className="experience-left">
        {item.icon ? (
          <img className="company-icon" src={item.icon} alt={item.iconAlt} />
        ) : (
          <div className="emoji-badge">{item.badge}</div>
        )}

        <ExperienceTitle item={item} />

        <div className="experience-period">
          {item.period.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>

      <div className="experience-right">
        {item.projects.map((project) => (
          <ExperienceProject key={`${item.role}-${project.title}`} project={project} />
        ))}
      </div>
    </article>
  )
}

function App() {
  const [isStoryOpen, setIsStoryOpen] = useState(false)

  return (
    <main className="page">
      <section className="intro">
        <img className="avatar" src={avatarImage} alt="Данил Ефремов" />

        <div className="intro-copy">
          <h1>Данил Ефремов</h1>
          <p className="role">Старший продуктовый дизайнер</p>

          <div className="contacts" aria-label="Контакты">
            {contacts.map((contact, index) => (
              <span key={contact.href} className="contact">
                {index > 0 && <span className="contact-separator">·</span>}
                <ExternalLink href={contact.href} className="accent-link contact-link">
                  {contact.label}
                </ExternalLink>
              </span>
            ))}
          </div>

          <div className="summary">
            {summary.map((line) => (
              <p key={line} className="body-text">
                {line}
              </p>
            ))}
          </div>

          <div className="pet-projects">
            <h2>Пет проекты</h2>

            <button
              type="button"
              className="story-toggle"
              onClick={() => setIsStoryOpen((value) => !value)}
              aria-expanded={isStoryOpen}
            >
              <StoryChevron open={isStoryOpen} />
              <span className="story-title">📍 StoryTree → MVP промо и кусочек продукта</span>
            </button>

            {isStoryOpen && (
              <div className="story-body">
                {storyTreeParagraphs.map((paragraph) => (
                  <p key={paragraph} className="body-text">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="experience-section">
        <h2 className="section-heading">Кто, где, когда</h2>

        <div className="experience-list">
          {experience.map((item) => (
            <ExperienceRow key={`${item.role}-${item.period.join('-')}`} item={item} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
