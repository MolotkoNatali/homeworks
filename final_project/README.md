# Test Automation Project

## Опис

Цей проєкт демонструє автоматизоване тестування веб-додатку з використанням Playwright на TypeScript. Тестування охоплює API, UI (E2E) та контрактні тести. Результати тестування генеруються у форматі HTML за допомогою Allure та mochawesom (for API).

- UI тести перевіряють сторінку: [https://practice.expandtesting.com/notes/app/login]
- API та контрактні тести базуються на: [https://practice.expandtesting.com/notes/api/]

## Технології

- [TypeScript](https://www.typescriptlang.org/)
- [Playwright](https://playwright.dev/)
- [Mocha](https://mochajs.org/)
- [Allure Report](https://docs.qameta.io/allure/)
- [GitHub Actions](https://github.com/features/actions)

## Запуск тестів пicля клонування:

UI тести: npx playwright test
Контрактні тести: npm run test:contracts
API тести: npm run test:api
