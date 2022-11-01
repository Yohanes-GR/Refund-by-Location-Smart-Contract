<h1 align="center">Refund by Location Smart Contract</h1>

<div>
<a href="https://github.com/Yohanes-GR/Logistic-optimization-Causal-Inference/network/members"><img src="https://img.shields.io/github/forks/Yohanes-GR/Logistic-optimization-Causal-Inference" alt="Forks Badge"/></a>
<a href="https://github.com/Yohanes-GR/Logistic-optimization-Causal-Inference/pulls"><img src="https://img.shields.io/github/issues-pr/Yohanes-GR/Logistic-optimization-Causal-Inference" alt="Pull Requests Badge"/></a>
<a href="https://github.com/Yohanes-GR/Logistic-optimization-Causal-Inference/issues"><img src="https://img.shields.io/github/issues/Yohanes-GR/Logistic-optimization-Causal-Inference" alt="Issues Badge"/></a>
<a href="https://github.com/Yohanes-GR/Logistic-optimization-Causal-Inference/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/Yohanes-GR/Logistic-optimization-Causal-Inference?color=2b9348"></a>
<a href="https://github.com/Yohanes-GR/Logistic-optimization-Causal-Inference/blob/main/LICENSE"><img src="https://img.shields.io/github/license/Yohanes-GR/Logistic-optimization-Causal-Inference?color=2b9348" alt="License Badge"/></a>
</div>
</br>
<img src="screenshoots/develop-test-deploy.jpg" name="">
<br />


## Table of Contents

### Introduction
 
 Ethereum is a global decentralized transaction-based state machine based on blockchain
technology. It is best known for its native cryptocurrency, ether, or just ETH. Anyone can
use it to create any secure digital technology. It has a token designed for use in the
blockchain network, but it can also be used by participants to pay for blockchain work.
Ethereum was created with the goal of being scalable, programmable, secure, and
decentralized. It is used to build decentralized applications, a.k.a. DAPPs. These
applications exist through small programs that live on the Blockchain, called smart
contracts. It is the blockchain of choice for developers and businesses developing
technology based on it to change the way many industries operate and how we live our
lives.
### Project Description
The refund by location smart contract is aimed to be used when an employer agrees to
pay an employee for being present in a certain geographic area for a certain duration. 
The
employee’s phone sends its GPS location to a smart contract at a certain interval. Based
on the pre-agreed contract codified in an Ethereum smart contract, a cryptocurrency
payment is executed when all the agreed conditions are met. If, at any point, the GPS
sensor indicates that an employee is outside the range of the agreed GPS area, the
contract state will be updated to indicate that it is out of compliance.Before starting our
implementation let us see the concepts related to our projects



### Screenshoot:

- `Screenshoots/` the folder where all snapshot for the project are stored.

### scripts:

- `.scripts/`: the folder where the python implementation can be found.

### .github:

- `.github/`: the folder where github actions and CML workflow is integrated.


### root folder

- `requirements.txt`: a text file lsiting the projet's dependancies.
- `README.md`: Markdown text with a brief explanation of the project and the repository structure.

## Installation guide

```bash
git clone https://github.com/Yohanes-GR/Refund-by-Location-Smart-Contract.git
cd Refund-by-Location-Smart-Contract\
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost
npm start
```

## Article
- [Medium Article](https://medium.com/@yohgut)
  



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information
