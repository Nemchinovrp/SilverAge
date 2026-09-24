# Серебряный век

Адаптивный литературный сайт на **Astro + React + TypeScript**. Семь страниц поэтов, поиск и фильтры по направлениям, переключение стихотворений и хронология эпохи. Страницы генерируются статически, сервер не нужен. Каталог доступен и без JavaScript; интерактивность подключается через React islands.

## Локальный запуск

Нужен Node.js 22.12+ (рекомендуется Node 22 LTS).

```sh
npm ci
npm run dev
```

Открыть адрес из терминала (обычно http://localhost:4321).

```sh
npm run check   # проверка Astro и TypeScript
npm run build   # статическая сборка в dist/
npm run preview # просмотр сборки
```

## GitHub Pages

1. Загрузите проект в GitHub-репозиторий, включая `package-lock.json`.
2. В **Settings → Pages → Build and deployment → Source** выберите **GitHub Actions**.
3. Отправьте изменения в `main` или `master` либо запустите workflow **Deploy to GitHub Pages** вручную во вкладке Actions.
4. Адрес опубликованного сайта появится в результате задания `deploy`.

Workflow проверяет типы, собирает сайт и публикует `dist`. `astro.config.mjs` автоматически вычисляет `site` и `base` из `GITHUB_REPOSITORY`: обычный репозиторий работает на `https://OWNER.github.io/REPOSITORY/`, репозиторий `OWNER.github.io` — в корне. Все внутренние ссылки и favicon учитывают base path.

Проверка сборки в подпапке локально:

```sh
GITHUB_REPOSITORY=example/SilverAge npm run build
GITHUB_REPOSITORY=example/SilverAge npm run preview
# http://localhost:4321/SilverAge/
```

Для своего домена задайте `SITE_URL=https://example.com` и `BASE_PATH=/` в окружении шага сборки, настройте домен в Pages и добавьте `public/CNAME` с доменным именем.

## Структура и материалы

- `src/data/poets.ts` — поэты, библиография, стихотворения и события.
- `src/components/PoetCatalog.tsx` — React-каталог с поиском (включая ё/е) и фильтрами.
- `src/components/PoemReader.tsx` — React-переключатель стихотворений.
- `src/pages/poets/[slug].astro` — статические страницы поэтов.
- `src/styles/global.css` — адаптивный дизайн, состояния фокуса и reduced motion.
- `.github/workflows/deploy.yml` — сборка и публикация.

Справочный источник: [гид по Серебряному веку, Культура.РФ](https://www.culture.ru/s/gid-po-serebryanomu-veku/). Биографические заметки — краткие редакционные обзоры, а не полные биографии. Классификация условна; Цветаева представлена вне течений. Декоративные монограммы не являются портретами. Полностью приведены стихотворения Блока, Маяковского и Есенина, находящиеся в общественном достоянии в России.

Шрифты Playfair Display и Golos Text загружаются из Google Fonts; при недоступности сервиса используются системные шрифты. Изображения и внешний API для работы сайта не требуются.

Деплой: [официальная документация Astro](https://docs.astro.build/en/guides/deploy/github/).

Материал о Есенине: [биография на Культура.РФ](https://www.culture.ru/persons/8133/sergei-esenin). В каталоге он отнесён к имажинизму; в биографии отражены и его связи с крестьянской поэзией.
