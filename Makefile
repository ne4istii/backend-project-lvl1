install:
	npm install

start-games:
	npx node bin/brain-games.js

start-even:
	npx node bin/brain-even.js

start-calc:
	npx node bin/brain-calc.js

start-gcd:
	npx node bin/brain-gcd.js

start-prog:
	npx node bin/brain-progression.js

start-prime:
	npx node bin/brain-prime.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
