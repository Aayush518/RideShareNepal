
# RideShareNepal

RideShareNepal is a platform that connects drivers and passengers in Nepal, facilitating easy and convenient ride-sharing experiences.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- User registration and authentication.
- Drivers can offer rides with specific details (origin, destination, date, time, price, etc.).
- Passengers can search for and book available rides.
- Real-time ride updates and notifications.
- Secure payment gateway integration.
- User profile management.

## Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [npm](https://www.npmjs.com/)

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Aayush518/RideShareNepal.git
   cd RideShareNepal
   ```

2. **Backend Setup**:
   ```bash
   cd backend
   npm install
   ```

3. **Frontend Setup**:
   ```bash
   cd frontend
   npm install
   ```

4. **Environment Variables**:
   - Create a `.env` file in the `backend` directory.
   - Add your environment-specific variables. For example:
     ```
     MONGO_URI=mongodb://localhost:27017/ridesharenepal
     JWT_SECRET=your_jwt_secret
     ```

## Usage

1. **Start MongoDB**:
   - Ensure MongoDB is running on your machine. Refer to [official MongoDB documentation](https://docs.mongodb.com/manual/administration/install-community/) for guidance.

2. **Run the Backend**:
   ```bash
   cd backend
   npm start
   ```

3. **Run the Frontend**:
   ```bash
   cd frontend
   npm start
   ```

4. Open a browser and navigate to `http://localhost:3000` to access the RideShareNepal platform.

## Contributing

Contributions are welcome! Please read our [contribution guidelines](CONTRIBUTING.md) to get started.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Express.js](https://expressjs.com/)
- [React](https://reactjs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Node.js](https://nodejs.org/)
