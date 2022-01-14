# Movie App using Movie DB API

Данный проект представляет собой мою попытку изучить:

- работу с бесплатным REST API базы фильмов
- создание SPA на React

## Функционал проекта

Я ставил перед собой цель реализовать:

- Страницы для отображения списка фильмов/сериалов/актеров
- Отображение информации по фильму/сериалу/актеру
- Сортировка по популярности, рейтингу и по просмотрам на этой неделе
- Поиск по названию
- Отображение результатов поиска
- Пагинация
- Авторизация

## План развития проекта

- Добавить отзывчивую верстку

## Разработка

    git clone https://github.com/romanmaha/movie-app.git
    cd movie-app
    npm install

Для получения данных от API необходимо пройти регистрацию на сайте https://www.themoviedb.org/ и получить API ключ.

В корне проекта необходимо создать файл `.env` и прописать переменную окружения `REACT_APP_API_KEY`

    REACT_APP_API_KEY=%your_api_key%

Выполнить команду

    npm start