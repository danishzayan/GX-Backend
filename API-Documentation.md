# API Documentation

This document provides a detailed overview of the available API endpoints, including their methods, payloads, and headers required for accessing them. The endpoints are divided into **User** and **Admin** categories.

---

## User Endpoints

### 1. Register a New User

**Method**: `POST`  
**Endpoint**: `/register`  
**URL**: `http://localhost:5000/api/users/register`

**Request Body**:

```json
{
  "username": "john",
  "password": "john",
  "role": "user"
}
```

### 2. User Login

**Method**: `POST`  
**Endpoint**: `/login`  
**URL**: `http://localhost:5000/api/users/login`

**Request Body**:

```json
{
  "username": "john",
  "password": "john"
}
```

**Note**: Copy the token value from the response for authenticated requests.

**Headers**:

```
Authorization: Bearer <JWT_TOKEN>
```

### 3. Upload an Assignment

**Method**: `POST`  
**Endpoint**: `/upload`  
**URL**: `http://localhost:5000/api/assignments/upload`

**Request Body**:

```json
{
  "task": "Complete the project report",
  "admin": "alex"
}
```

**Headers**:

```
Authorization: Bearer <JWT_TOKEN>
```

### 4. Fetch All Admins

**Method**: `GET`  
**Endpoint**: `/admins`  
**URL**: `http://localhost:5000/api/admins`

**Headers**:

```
Authorization: Bearer <JWT_TOKEN>
```

---

## Admin Endpoints

### 1. Register a New Admin

**Method**: `POST`  
**Endpoint**: `/register`  
**URL**: `http://localhost:5000/api/users/register`

**Request Body**:

```json
{
  "username": "alex",
  "password": "alex123",
  "role": "admin"
}
```

### 2. Admin Login

**Method**: `POST`  
**Endpoint**: `/login`  
**URL**: `http://localhost:5000/api/users/login`

**Request Body**:

```json
{
  "username": "alex",
  "password": "alex123"
}
```

**Note**: Copy the token value from the response for authenticated requests.

**Headers**:

```
Authorization: Bearer <JWT_TOKEN>
```

### 3. View Assignments Tagged to the Admin

**Method**: `GET`  
**Endpoint**: `/assignments`  
**URL**: `http://localhost:5000/api/assignments`

**Headers**:

```
Authorization: Bearer <JWT_TOKEN>
```

### 4. Accept an Assignment

**Method**: `POST`  
**Endpoint**: `/assignments/:id/accept`  
**URL**: `http://localhost:5000/api/assignments/:id/accept`

**Headers**:

```
Authorization: Bearer <JWT_TOKEN>
```

### 5. Reject an Assignment

**Method**: `POST`  
**Endpoint**: `/assignments/:id/reject`  
**URL**: `http://localhost:5000/api/assignments/:id/reject`

**Headers**:

```
Authorization: Bearer <JWT_TOKEN>
```

---

### Notes

- Ensure to replace `<JWT_TOKEN>` with the actual token received during login for all authenticated requests.
- The `id` in the assignment endpoints should be replaced with the specific assignment ID.
