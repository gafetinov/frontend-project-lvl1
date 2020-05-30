install:
	npm install

brain-games:
	node bin/brain-games

brain-even:
	node bin/brain-even

brain-calc:
	node bin/brain-calc

brain-gcd:
	node bin/brain-gcd

brain-progression:
	node bin/brain-progression

publish:
	npm publish --dry-run

lint:
	npx eslint .
