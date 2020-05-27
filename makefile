install:
	npm install

brain-games:
	node bin/brain-games

brain-even:
	node bin/brain-even

publish:
	npm publish --dry-run

lint:
	npx eslint .
