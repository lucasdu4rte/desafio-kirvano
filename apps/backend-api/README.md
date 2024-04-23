# Express Backend API
This Express project using TDD (Test-Driven Development), DDD (Domain-Driven Design), and Clean Architecture.

## Getting Started

1. Clone the Repository:

```bash
git clone https://github.com/lucasdu4rte/desafio-kirvano.git
cd apps/backend-api
```

2. Install Dependencies:

```bash
npm install
```

3. Run the Server:
```bash
npm start
```
The server will start on port 4000.

## Endpoints
POST `/api/process-payment`
- Process a payment.
- Example request body:

```JSON
{
  "cardNumber": "5331 2495 7950 0291",
  "cardExpiration": "2031-01-01",
  "cardCvv": "000"
}
```

## Environment Variables
Make sure to set the following environment variables:

`PORT`: Port number for the server (default is 4000).

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

## License
This project is licensed under the MIT License.

Feel free to customize this README according to your project’s specific requirements. Happy coding! 🚀
