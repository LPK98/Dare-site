# Marriage Dare Backend

Minimal Express backend for the Marriage Dare frontend.

Setup:

cd backend
npm install

Run (development):

npm run dev

Run (production):

npm start

Server:

http://localhost:4000

API:

POST /predict - Content-Type: application/json - Body: { name, age, personality } - Response: { predictedMarriageAge, marriageType, message }
