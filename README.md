
# Node.js gRPC Scaffold

This is a scaffold project for building Node.js gRPC microservices. The project uses Node.js and gRPC framework for building fast, efficient, and distributed microservices.


## Getting Started

### Prerequisites
Make sure you have installed the following tools:

 - Node.js
 - npm
 - Protocol Buffers

### Installation
Clone the repository and navigate to the project directory:

    git clone https://github.com/mmr-ashiq/node-grpc-scaffold.git
	cd node-grpc-scaffold


Install the dependencies:

    npm install
### Building the projecte here


Compile the ``.proto`` files using the following command:

    npm run build


### Running the project
Start the server using the following command:

    npm start

### Project structure
- ``client``: directory containing sample client to interact with server
- ``common``: directory containing common resources
- ``server``: directory containing the server application code
- ``grpc``: directory containing gRPC related files
- ``handlers``: directory containing request handlers
- ``proto``: directory containing .proto files
- ``services``: directory containing gRPC service implementations
- ``utils``: directory containing utility files
- ``index.js``: file containing gRPC server initialization code
- ``index.js``: main file to start the server
### License
This project is licensed under the MIT License
