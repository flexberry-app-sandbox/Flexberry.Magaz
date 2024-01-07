docker build --no-cache -f SQL\Dockerfile.PostgreSql -t magaz-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t magaz-java/app ../../..
