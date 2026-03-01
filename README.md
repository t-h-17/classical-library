# Classical Library
A web application showcasing Ancient texts—with **author, location, and date**—that allows users to mark each as **read, want to read, or reading** and filter the texts by **date, author name, or text name** in **asc/desc** order

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
- Multiple users
- Expanded dataset

## Demonstration
<img width="1898" height="1030" alt="The texts sorted by Date" src="https://github.com/user-attachments/assets/ec07fbf3-49ea-4694-a16a-d060bd4a1ef7" />

The texts sorted descending by **Date**

---

<img width="1899" height="1033" alt="Aristotle's texts sorted by Text name" src="https://github.com/user-attachments/assets/0e320927-6e19-48d1-866f-c56c19a709bd" />

Aristotle's texts sorted descending by **Text** name

---

<img width="1918" height="1031" alt="The 'reading' category sorted by Text name" src="https://github.com/user-attachments/assets/6b6b92a3-2d42-4e00-af14-2d09b3e1724d" />

The **Reading** category sorted ascending by **Text** name
