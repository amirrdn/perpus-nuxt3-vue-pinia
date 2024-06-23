
# Frontend

## Setup

Go to folder frontend.

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# Backend

## Setup
Go to folder frontend/server.
```bash
installation:
#npm
npm install

command to run:
# npm
npm run dev

## API Reference

#### Login Users

```http
  POST /auth/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**|
| `password` | `string` | **Required** |

#### Create Users

```http
  POST /api/register
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**|
| `password` | `string` | **Required** |
| `name`      | `string` | **Required**|
| `nim`      | `string` | **Required**|
| `major`      | `string` | **Required**|
| `student_year`      | `string` | **Required**|
| `role_id`      | `int` | **Required**|


#### Delete Users

```http
  DELETE /api/users/delete
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `user_ids`      | `array` | **Required**|