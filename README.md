
# Project Title
✈️ Flight Booking Backend
This is a backend server for managing flight bookings, built with Node.js. It provides APIs to manage flights, airplanes, airports, and cities. The architecture is modular, with clear separation of concerns across services, controllers, middlewares, and database models.

🏗 Project Structure
/
├── src/
│   ├── index.js              # Entry point of the server
│   ├── config/               # Environment config and DB setup
│   ├── models/               # Sequelize models for DB tables
│   ├── controllers/          # Request handlers, calling services
│   ├── services/             # Business logic
│   ├── middlewares/         # Custom middlewares for error handling, auth, etc.
│   ├── utils/                # Utility/helper functions
│
├── tests/                    # Test files (planned for later)
└── README.md                 # Project documentation

🧠 Architecture Overview
Modular Structure: Each layer has a single responsibility — models define the schema, services contain business logic, controllers connect services with routes, and middlewares handle cross-cutting concerns.

Sequelize ORM: Database communication is handled using Sequelize, allowing for model-based access and easier migrations.

🗃 Database Design -
The app uses a relational schema with the following tables:

🛫 Airplane Table

🏙 Airport Table

🌆 City Table


🔧 Setup Instructions

1)Install dependencies
npm install

2)Set up environment variables -
Create a .env file in the root and provide necessary variables such as DB credentials.

3)Run the server - npm run start
