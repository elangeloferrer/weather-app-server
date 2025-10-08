# 🌦️ Weather App (Server)

A simple and responsive weather application that displays real-time weather information for any city around the world.

The Weather App (Server) built using Node.js, Express.js, and MySQL.

---

## 🚀 Features

- Search weather by **city name**
- Get **current location weather** using geolocation
- **Drag the pin on the map** or **Click in any part of the map** to select the location where you want to check the current weather
- Display **temperature, humidity, wind speed**, and condition
- Dynamic **icons** based on weather
- Shows **current date and time**
- Fully **responsive** for all devices

---

## 🛠️ Tech Stack

**Backend:**

- NodeJS
- ExpressJS
- MySQL
- Sequelize ORM (Database ORM with migrations & models)
- dotenv (Environment variable management)
- CORS (Cross-Origin Resource Sharing)
- Nodemon (Dev server auto-restart)

---

## Prerequisites

- Node.js (v18 or higher)
- npm (comes with Node)
- MySQL
- Git

## ⚙️ Installation & Setup

## 1. Clone the Project

```bash
git clone https://github.com/elangeloferrer/weather-app-server
```

```bash
cd weather-app-server
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Setup Environment Variables

Create a .env.development file in the root folder:

```bash
touch .env.development
```

Copy & Paste the following keys and values:

```bash
APP_URL=http://localhost:3001
CLIENT_URL=http://localhost:5173

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=weather_app_db
DB_DIALECT=mysql
PORT=3001
```

## 4. Setup the Database

Make sure MySQL is running, then create the database:

```bash
npx sequelize-cli db:create
```

Run migrations:

```bash
npx sequelize-cli db:migrate
```

## 5. Run the Server

Development mode (auto-restart with Nodemon):

```bash
npm start
```

Server runs at: http://localhost:3001

---

You're all set — your **NodetJS** + **ExpressJS** + **MySQL** [Weather App (Server)] project is now fully installed and ready to run! 🚀
