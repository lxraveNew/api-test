# Используем официальный образ Node.js
FROM node:22

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и yarn.lock перед установкой зависимостей
COPY package.json yarn.lock ./

# Устанавливаем зависимости
RUN yarn install --frozen-lockfile

# Копируем весь код в контейнер
COPY . .

# Компилируем TypeScript
RUN yarn build

# Запускаем приложение
CMD ["yarn", "dev"]