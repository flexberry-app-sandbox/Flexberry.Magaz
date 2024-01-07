docker build --no-cache -f SQL\Dockerfile.PostgreSql -t magaz/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t magaz/app ../..
