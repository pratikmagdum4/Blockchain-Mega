# EduFund
![EduFund Logo](EduFund.png)
EduFund is a decentralized platform that enables users to create and manage educational funding campaigns. The application consists of a front-end client built with Vite and a smart contract backend managed with Hardhat.

## Table of Contents

- [Overview](#overview)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

EduFund is designed to support educational projects by allowing users to create campaigns and raise funds through a decentralized platform. The project comprises a front-end application built with Vite for fast and efficient development and a backend powered by Hardhat for managing smart contracts on the Open Campus blockchain.

## Technologies

- **Frontend**: Vite, React
- **Backend**: Hardhat, Solidity
- **Blockchain**: Open Campus chain

## Project Structure

The project is divided into two main folders:

- **`client/`**: Contains the Vite app for the frontend.
  - **`public/`**: Static assets such as images and fonts.
  - **`src/`**: Application source code including components, pages, and utilities.
  - **`index.html`**: The main HTML file.
  - **`vite.config.js`**: Vite configuration file.

- **`web3/`**: Contains the Hardhat project for the smart contract backend.
  - **`contracts/`**: Solidity smart contracts.
  - **`scripts/`**: Deployment and management scripts.
  - **`test/`**: Unit and integration tests for smart contracts.
  - **`hardhat.config.js`**: Hardhat configuration file.

## Installation

### Frontend (Client)

1. Navigate to the `client` directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Backend (Web3)

1. Navigate to the `web3` directory:
   ```bash
   cd web3
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Compile the smart contracts:
   ```bash
   npx hardhat compile
   ```

4. Run tests:
   ```bash
   npx hardhat test
   ```

5. Deploy the contracts (ensure you have configured your network settings in `hardhat.config.js`):
   ```bash
   npx hardhat run scripts/deploy.js --network <network_name>
   ```

## Usage

1. **Frontend**: Access the application via `http://localhost:3000` (or the port specified by Vite) to interact with the UI and manage campaigns.

2. **Backend**: Ensure the smart contracts are deployed on the Open Campus blockchain and interact with them via the frontend application.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. Ensure that your code follows the project's coding standards and includes appropriate tests.

To report bugs or request features, please open an issue in the GitHub repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
