/** @type import('hardhat/config').HardhatUserConfig */
require('hardhat-deploy');

module.exports = {
  solidity: {
    version: '0.8.9',
    networks: {
      opencampus: {
        url: `https://open-campus-codex-sepolia.drpc.org`,
        accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      },
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: "london",
    },
  },
};
