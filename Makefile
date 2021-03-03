start:
	docker-compose up -d --build
stop:
	docker-compose down -v
restart:
	make stop && make start
setup:
	sh ./scripts/setup.sh
erase:
	sh ./scripts/erase.sh
