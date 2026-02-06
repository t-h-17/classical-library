# Classical Library
A web application showcasing Ancient texts—with **author, location, and date**—that allows users to mark each as **read, want to read, or reading.**

## Getting Started
To initialize the backend on `http://localhost:3001`
```
cd classical-library/backend
node index.js
```


To run the program:
```
cd /classical-library/frontend
npm install 
npm run dev
```
to access `localhost:5173`  

## Tools
- **Frontend**: React + Vite
- **Backend**: Node.js + Express.js
- **Database**: SQLite
- **CORS**: to allow for cross-origin communication between the frontend and backend

The program uses RESTful APIs to communicate between the frontend and backend. The SQL database was created from an existing CSV file from the [Perseus Digital Library](https://github.com/scaife-viewer/scaife-viewer) using a custom script that normalized and structured the data for the application's purposes.

## Future
- Functionality for sorting and filtering the texts by author, date, and location.
- Polished UI
- Multiple users
- Expanded dataset