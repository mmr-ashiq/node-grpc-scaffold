const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync('./todo.proto', {
	keepCase: true,
	longs: String,
	enums: String,
	defaults: true,
	oneofs: true,
});

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const TodoService = protoDescriptor.TodoService;

const server = new grpc.Server();

const todos = [
	{
		id: 1,
		title: 'Todo 1',
		description: 'Todo 1 Description',
		completed: false,
	},
	{
		id: 2,
		title: 'Todo 2',
		description: 'Todo 2 Description',
		completed: false,
	},
];

server.addService(TodoService.service, {
	listTodos: (call, callback) => {
		callback(null, todos);
	},
	createTodo: (call, callback) => {
		let incomingTodo = call.request;
		incomingTodo.id = todos.length + 1;
		todos.push(incomingTodo);
		callback(null, incomingTodo);
	},
	getTodo: (call, callback) => {
		let incomingTodoRequest = call.request;
		let todoId = incomingTodoRequest.id;
		let todo = todos.filter((todo) => todo.id === todoId);

		if (todo.length > 0) {
			callback(null, todo);
		} else {
			callback({
				code: grpc.status.NOT_FOUND,
				details: 'Not found',
				message: 'Todo not found',
			});
		}
	},
});

server.bindAsync(
	'0.0.0.0:50051',
	grpc.ServerCredentials.createInsecure(),
	() => {
		console.log(`Server running at http://localhost:50051`);
		server.start();
	}
);
