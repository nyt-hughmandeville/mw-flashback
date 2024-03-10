# Makefile

## HELP:
.PHONY: help
## help: Show this help message.
help:
	@echo "Usage: make [target]\n"
	@sed -n 's/^##//p' ${MAKEFILE_LIST} | column -t -s ':' |  sed -e 's/^/ /'

## :
## BUILD:

.PHONY: build
## build: Build React client code.
build:
	cd client; pnpm build

## :
## DEPENDENCIES:

.PHONY: dep-clean
## dep-clean: Remove Next.js build directory and Node modules.
dep-clean:
	@rm -rf client/build
	@rm -rf client/node_modules

.PHONY: dep-get
## dep-get: Get Node modules.
dep-get:
	cd client; pnpm

.PHONY: dep-update
## dep-update: Update Node modules.
dep-update:
	cd client; pnpm upgrade

## :
## RUN:

.PHONY: run
## run: Run Next.js client/server locally (on port 3000).
run:
	@echo "http://localhost:3000/"
	cd client && pnpm dev

## :
