## ExpressJS

### Database

- PostgreSQL

### Documentation

- Postman

Setting .ENV

```bash
NODE_ENV=development

# Database App
DB_HOST=db
DB_USERNAME=postgres
DB_PASSWORD=Password123!!
DB_DATABASE=data_kepegawaian
DB_TYPE=postgres
DB_PORT=5432

# Database postgre
POSTGRES_USER=postgres
POSTGRES_PASSWORD=Password123!!
POSTGRES_DB=data_kepegawaian
POSTGRES_PORT=5432
```

Run Docker Compose
```bash
    docker-compose -f docker-compose.yml up -d --build
```

Run Migration
```bash
    docker exec -it app sh

    npx sequelize-cli db:migrate

    npx sequelize-cli db:seed:all
```

Delete Migration
```bash
    docker exec -it app sh

    npx sequelize-cli db:migrate:undo:all
```
