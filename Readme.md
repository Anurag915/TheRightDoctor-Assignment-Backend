# People Management Web App

A simple RESTful web application built with **Node.js**, **Express**, **MongoDB**, and **EJS** that allows users to **Create**, **Read**, **Update**, and **Delete** (CRUD) person records.

---

## ✨ Features

* 📋 View list of people
* ➕ Add a new person
* ✏️ Edit an existing person
* 🗑️ Delete a person with confirmation
* 🎨 Clean and responsive UI with **Bootstrap 5**

---

## 🛠️ Tech Stack

* **Backend**: Node.js, Express.js
* **Database**: MongoDB with Mongoose
* **Templating**: EJS
* **Styling**: Bootstrap 5
* **Middleware**: Body-parser, Method-Override

---

## 📁 Project Structure

```
person-api/
│
├── models/
│   └── Person.js         # Mongoose schema for person
│
├── views/
│   ├── index.ejs         # People list view
│   ├── new.ejs           # Add person form
│   ├── edit.ejs          # Edit person form
│   └── delete.ejs        # Delete confirmation
│
├── server.js             # Main Express app
└── README.md             # Project documentation
```

---

## ⚙️ Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/person-api.git
   cd person-api
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start MongoDB**
   Make sure MongoDB is running locally. Default connection is `mongodb://localhost:27017/persondb`

4. **Run the server**

   ```bash
   node server.js
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)
   (Auto-redirects to the people list page)

---

## 🧪 Routes Overview

| Method | Route                | Description              |
| ------ | -------------------- | ------------------------ |
| GET    | `/person`            | Show all people          |
| GET    | `/person/new`        | Form to add a new person |
| POST   | `/person`            | Submit new person data   |
| GET    | `/person/:id/edit`   | Form to edit a person    |
| PUT    | `/person/:id`        | Submit person updates    |
| GET    | `/person/:id/delete` | Confirm deletion         |
| DELETE | `/person/:id`        | Delete person from DB    |

---

## 📌 Notes

* Make sure you have **MongoDB** installed and running.
* Uses **method-override** to support PUT and DELETE via forms.
* Designed for educational and demo purposes.

---

## 📷 Screenshot

> (You can add a screenshot of the People List UI here)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
