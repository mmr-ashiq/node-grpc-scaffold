const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync('./todo.proto', {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

const TodoService = protoDescriptor.TodoService;

const client = new TodoService.TodoServiceClient('localhost:50051', grpc.credentials.createInsecure());

console.log('Client running...');