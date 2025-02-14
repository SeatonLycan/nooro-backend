# Project Setup Guide

## Prerequisites
Ensure you have the following installed:
- **Homebrew** (for macOS)
- **MySQL**
- **Node.js** and **npm**

## Steps
### 1. Install MySQL via Homebrew
```
brew install mysql
```

### 2. Start MySQL Service
```
brew services start mysql
```

### 3. Access MySQL
```
mysql -u root
```

### 4. Install Packages
```
npm install
```

### 4. Create and Use Database
```
CREATE DATABASE nooro_todo_db;
USE nooro_todo_db;
```

### 5. Generate Prisma Client
```
npx prisma generate
```

### 6. Create Database Migration
```
npx prisma migrate dev --name init
```

### 7. Run the Development Server
```
npm run dev
```
