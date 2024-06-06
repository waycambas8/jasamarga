## ExpressJS

### Database

- PostgreSQL

### Documentation

- Postman


### Cara Menjalankan Aplikasi

1. Buat file .env

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

2. Run Docker Compose
```bash
docker-compose -f docker-compose.yml up -d --build
```

3. Run Migration
```bash
docker exec -it app sh

npx sequelize-cli db:migrate

npx sequelize-cli db:seed:all
```

4. Delete Migration
```bash
docker exec -it app sh

npx sequelize-cli db:migrate:undo:all
```

4. Run Application in port 3000

