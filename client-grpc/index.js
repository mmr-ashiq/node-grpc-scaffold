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

const client = new TodoService(
	'localhost:50051',
	grpc.credentials.createInsecure()
);

client.ListTodos({}, (err, todos) => {
	if (!err) {
		console.log(todos);
		client.createTodo(
			{
				id: 3,
				title: 'Todo 3',
				description: 'Todo 3 Description',
				completed: false,
			},
			(err, todos) => {
				if (!err) {
					console.log(todos);
					client.ListTodos({}, (err, todos) => {
						if (!err) {
							console.log(todos);
						} else {
							console.log(err);
						}
					});
				} else {
					console.log(err);
				}
			}
		);
	}
});
