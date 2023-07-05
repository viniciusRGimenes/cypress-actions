const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImE2NjBhNTFjLWIwMGMtNDI5Ny04YjFmLTM0OTcwYjM3NmRjYS0xNjg4NTE3MDI2OTUwIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMmViOTU3ZmEtZWE0Zi00OTE1LWIxYjItNjE5MzRmNGM0NmNmIiwidHlwZSI6InQifQ.bA9PmqmUjgh6YMDYfbHokUVfTlDySHS3YQGyxtxmpKo'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
