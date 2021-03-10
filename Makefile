start:
	docker-compose up -d --build
stop:
	docker-compose down -v
restart:
	make stop && make start
erase:
	sh ./scripts/erase.sh
