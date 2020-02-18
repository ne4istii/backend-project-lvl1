install:
	npm install

start-games:
	npx node bin/games/brain-games.js

start-even:
	npx node bin/games/brain-even.js

start-calc:
	npx node bin/games/brain-calc.js

start-gcd:
	npx node bin/games/brain-gcd.js

start-prog:
	npx node bin/games/brain-progression.js

start-prime:
	npx node bin/games/brain-prime.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
