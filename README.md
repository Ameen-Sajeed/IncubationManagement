# IncubationManagement

This is a mini project where companies can register and send applications for booking their slots. Admin, on the other side can manage these applications and verify it.
Then he can approve or reject the applications and also the view the application status. Implemented JWT Authentication for users and protected routes by verfiying via middleware.


## API Reference



#### Get HomePage

```http
  GET /localhost:3000
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get Login

```http
  GET /localhost:3000/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |




#### Get approved list of applications

```http
  GET /localhost:3000/approved
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


## Run Locally

Clone the project

```bash
  git clone https://github.com/Ameen-Sajeed/IncubationManagement
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## 🚀 About Me
I'm Amien Sajeed, Passionate full stack Mern developer...


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ameen-sajeed.github.io/Myportfolioo/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/muhammed-amien-83bba71ba/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://mobile.twitter.com/AmienSajeed)
