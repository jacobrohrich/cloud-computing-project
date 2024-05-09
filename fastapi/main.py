from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import mysql.connector
import logging
# Initialize FastAPI app
app = FastAPI()

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Update with your frontend URL
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

# MySQL database configuration
db_config = {
    'host': 'bookdatabase.cd20uq62w175.us-east-1.rds.amazonaws.com',  # Replace with your RDS endpoint
    'user': 'admin',      # Replace with your username
    'password': '123123123',  # Replace with your password
    'database': 'bookDATABASE'
}

# Initialize logger
logger = logging.getLogger(__name__)

# Function to create database if not exists
def create_database_if_not_exists(database_name):
    try:
        # Connect to MySQL server
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor()

        # Create database if it doesn't exist
        cursor.execute("CREATE DATABASE database")

        # Commit the transaction
        conn.commit()

        # Close database connection
        cursor.close()
        conn.close()

    except Exception as e:
        # Log the exception
        print(f"Failed to create database: {str(e)}")

# Create the database if it doesn't exist
# create_database_if_not_exists('database')  # Replace 'your_database' with the desired database name

# MySQL database configuration with the database name included
# db_config['database'] = 'database'  # Replace 'your_database' with the actual database name

# Function to create table if not exists
def create_table_if_not_exists():
    try:
        # Connect to MySQL database
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor()

        # Define SQL query to create table
        create_table_query = """
            CREATE TABLE IF NOT EXISTS bookTable (
                Book_Title VARCHAR(255),
                Author VARCHAR(255),
                Genre VARCHAR(255),
                ISBN VARCHAR(20),
                Summary TEXT,
                Publisher VARCHAR(255),
                PublishedYear VARCHAR(4),
                Rate DECIMAL(3, 2),
                Reviews INT
            )
        """

        # Execute SQL query
        cursor.execute(create_table_query)
        conn.commit()

        # Close database connection
        cursor.close()
        conn.close()

    except Exception as e:
        # Log the exception
        print(f"Failed to create table: {str(e)}")

# Call function to create table
# create_table_if_not_exists()

# Model for book details
class Book(BaseModel):
    bookTitle: str
    author: str
    genre: str
    isbn: str
    summary: str
    publisher: str = None
    publishedYear: str = None
    rate: str = None
    reviews: str = None

# Endpoint to insert book details
@app.post("/api/insertBookDetails")
async def insert_book_details(book: Book):
    try:
        # Connect to MySQL database
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor()

        # Insert book details into database
        query = """
            INSERT INTO bookTable (Book_Title, Author, Genre, ISBN, Summary, Publisher, PublishedYear, Rate, Reviews)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
        """
        values = (
            book.bookTitle, 
            book.author, 
            book.genre, 
            book.isbn, 
            book.summary, 
            book.publisher, 
            book.publishedYear, 
            book.rate, 
            book.reviews
        )
        cursor.execute(query, values)

        # Commit the transaction
        conn.commit()

        # Close database connection
        cursor.close()
        conn.close()

        return {"message": "Book details inserted successfully"}
    except Exception as e:
        # Log the exception
        logger.error(f"Failed to insert book details: {str(e)}")
        # Raise HTTPException with 500 status code
        raise HTTPException(status_code=500, detail="Internal Server Error")
