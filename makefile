git: 
	git add .
	git commit -m "$m"
	git push 

open:
	@codium .

test: 
	@npm test -- capitals.test.js

