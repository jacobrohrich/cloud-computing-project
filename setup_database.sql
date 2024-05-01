# create_databases.sql

#     Most Linux distributions include the MariaDB client instead of the Oracle MySQL client. To install the MySQL command-line client on Amazon Linux 2023, run the following command:
# sudo dnf install mariadb105

# To install the MySQL command-line client on Amazon Linux 2, run the following command:
# mysql --version

# To login and get access to the RDS database use the following command on the connected EC2:
# mysql -h bookdatabase.cd20uq62w175.us-east-1.rds.amazonaws.com -P 3306 -u admin -p 123123123



/*****************************************************************************************************
* Create the database named bookDATABASE, create a table named bookTable , and add 50 book items to it
*****************************************************************************************************/

DROP DATABASE IF EXISTS bookDATABASE;

CREATE DATABASE bookDATABASE;

USE bookDATABASE;

CREATE TABLE bookTable (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  Book_Title VARCHAR(255) NOT NULL,
  Author VARCHAR(255) NOT NULL,
  Genre VARCHAR(255) NOT NULL,
  ISBN VARCHAR(255) NOT NULL,
  Summary TEXT NOT NULL,
  Publisher VARCHAR(255),
  PublishedYear INT,
  Rate FLOAT,
  Reviews VARCHAR(255),
  PRIMARY KEY (id)
);

INSERT INTO bookTable (Book_Title, Author, Genre, ISBN, Summary, Publisher, PublishedYear, Rate, Reviews) VALUES
('To Kill a Mockingbird', 'Harper Lee', 'Classic', '9780061120084', 'The story of racial injustice in the South', 'HarperCollins', 2008, NULL, NULL),
('1984', 'George Orwell', 'Dystopian', '9780451524935', 'A warning against totalitarianism', 'Vintage', 1961, NULL, NULL),
('The Great Gatsby', 'F. Scott Fitzgerald', 'Literary Fiction', '9780743273565', 'The American Dream and its discontents', 'Random House', 2005, NULL, NULL),
('Pride and Prejudice', 'Jane Austen', 'Romance', '9780141439518', 'The challenges and rewards of marriage', 'Penguin Books', 2001, NULL, NULL),
('The Catcher in the Rye', 'J.D. Salinger', 'Coming of Age', '9780316769174', 'The angst of adolescence', 'Hachette Books', 2019, NULL, NULL),
('Animal Farm', 'George Orwell', 'Political Satire', '9780451526342', 'A commentary on the Soviet Union', 'Vintage', 2002, NULL, NULL),
('The Hobbit', 'J.R.R. Tolkien', 'Fantasy', '9780547928227', 'A quest for treasure', 'HarperCollins', 2015, NULL, NULL),
('Lord of the Flies', 'William Golding', 'Allegory', '9780399529207', 'The darkness within humanity', 'Penguin Classics', 2003, NULL, NULL),
('Fahrenheit 451', 'Ray Bradbury', 'Dystopian', '9781451673319', 'The danger of censorship', 'Vintage', 1964, NULL, NULL),
('The Chronicles of Narnia', 'C.S. Lewis', 'Fantasy', '9780007117307', 'A magical land and its adventures', 'HarperCollins', 2006, NULL, NULL),
('The Diary of a Young Girl', 'Anne Frank', 'Autobiography', '9780553296983', 'A young girl\'s experience during the Holocaust', 'Penguin Books', 2009, NULL, NULL),
('The Adventures of Huckleberry Finn', 'Mark Twain', 'Adventure', '9780486280615', 'A journey down the Mississippi River', 'Random House', 2007, NULL, NULL),
('One Hundred Years of Solitude', 'Gabriel Garcia Marquez', 'Magical Realism', '9780060883287', 'The history of the Buendia family', 'Hachette Books', 2018, NULL, NULL),
('Brave New World', 'Aldous Huxley', 'Dystopian', '9780060850524', 'The dangers of a technologically advanced society', 'Vintage', 1982, NULL, NULL),
('Wuthering Heights', 'Emily Bronte', 'Gothic', '9780141439556', 'A tragic love story on the moors', 'HarperCollins', 2001, NULL, NULL),
('The Picture of Dorian Gray', 'Oscar Wilde', 'Gothic', '9780486278070', 'The corruption of beauty', 'Penguin Books', 2014, NULL, NULL),
('The Stranger', 'Albert Camus', 'Existentialism', '9780679720201', 'The absurdity of human existence', 'Random House', 1999, NULL, NULL),
('The Old Man and the Sea', 'Ernest Hemingway', 'Adventure', '9780684801223', 'A fisherman\'s struggle against nature', 'Vintage', 2006, NULL, NULL),
('Heart of Darkness', 'Joseph Conrad', 'Psychological Fiction', '9780486264646', 'The horrors of colonialism', 'Hachette Books', 2016, NULL, NULL),
('The Bell Jar', 'Sylvia Plath', 'Semi-Autobiographical', '9780061477074', 'A young woman\'s descent into mental illness', 'HarperCollins', 2003, NULL, NULL),
('The Sun Also Rises', 'Ernest Hemingway', 'Literary Fiction', '9780743297332', 'The disillusionment of the "Lost Generation" after World War I', 'Penguin Books', 1998, NULL, NULL),
('Catch-22', 'Joseph Heller', 'Satire', '9780684833392', 'The absurdity of war', 'Random House', 2004, NULL, NULL),
('Beloved', 'Toni Morrison', 'Historical Fiction', '9781400033416', 'The haunting legacy of slavery', 'Vintage', 1963, NULL, NULL),
('The Color Purple', 'Alice Walker', 'Epistolary Novel', '9780156031820', 'A story of resilience and hope in the face of adversity', 'HarperCollins', 2012, NULL, NULL),
('The Handmaid\'s Tale', 'Margaret Atwood', 'Dystopian', '9780385490818', 'The subjugation of women in a totalitarian society', 'Penguin Classics', 2006, NULL, NULL),
('A Tale of Two Cities', 'Charles Dickens', 'Historical Fiction', '9780486411090', 'The upheaval of the French Revolution', 'Vintage', 2014, NULL, NULL),
('The Grapes of Wrath', 'John Steinbeck', 'Social Commentary', '9780143039433', 'The struggles of migrant workers during the Great Depression', 'Hachette Books', 2017, NULL, NULL),
('The Scarlet Letter', 'Nathaniel Hawthorne', 'Historical Fiction', '9780486280486', 'The consequences of sin and shame', 'HarperCollins', 2010, NULL, NULL),
('Slaughterhouse-Five', 'Kurt Vonnegut', 'Satire', '9780440180296', 'The absurdity of war and the concept of time', 'Penguin Books', 2002, NULL, NULL),
('Jane Eyre', 'Charlotte Bronte', 'Gothic', '9780141441146', 'A young woman\'s journey to find independence and love', 'Random House', 2015, NULL, NULL),
('Moby-Dick', 'Herman Melville', 'Adventure', '9780142437247', 'A captain\'s obsessive pursuit of a whale', 'Vintage', 2000, NULL, NULL),
('Frankenstein', 'Mary Shelley', 'Gothic', '9780141439471', 'The dangers of ambition and scientific experimentation', 'HarperCollins', 2008, NULL, NULL),
('Gone with the Wind', 'Margaret Mitchell', 'Historical Fiction', '9780446365383', 'The South during and after the Civil War', 'Penguin Books', 1970, NULL, NULL),
('The Count of Monte Cristo', 'Alexandre Dumas', 'Adventure', '9780140449266', 'A man\'s quest for revenge and redemption', 'Random House', 2009, NULL, NULL),
('The Adventures of Sherlock Holmes', 'Arthur Conan Doyle', 'Detective Fiction', '9780140439083', 'The adventures of a famous detective and his assistant', 'Penguin Classics', 2016, NULL, NULL),
('Les Miserables', 'Victor Hugo', 'Historical Fiction', '9780140444308', 'The struggles of a man who escapes prison and becomes an advocate for social justice', 'Hachette Books', 2011, NULL, NULL),
('Anna Karenina', 'Leo Tolstoy', 'Realistic Fiction', '9780143035008', 'The consequences of an affair on a woman\'s life', 'HarperCollins', 2014, NULL, NULL),
('The Brothers Karamazov', 'Fyodor Dostoevsky', 'Philosophical Fiction', '9780140449242', 'The moral struggles of three brothers and their father', 'Penguin Books', 2012, NULL, NULL),
('War and Peace', 'Leo Tolstoy', 'Historical Fiction', '9780140447934', 'The effects of war on individuals and society', 'Vintage', 1961, NULL, NULL),
('Crime and Punishment', 'Fyodor Dostoevsky', 'Psychological Fiction', '9780140449136', 'The psychological and moral implications of murder', 'Hachette Books', 2015, NULL, NULL),
('The Divine Comedy', 'Dante Alighieri', 'Epic Poetry', '9780141197494', 'A journey through Hell, Purgatory, and Paradise', 'Random House', 2002, NULL, NULL),
('Don Quixote', 'Miguel de Cervantes', 'Satire', '9780142437230', 'The adventures of a delusional knight and his squire', 'Penguin Books', 2012, NULL, NULL),
('Pippi Longstocking', 'Astrid Lindgren', 'Children\'s Literature', '9780670557456', 'The adventures of a free-spirited and independent girl', 'HarperCollins', 2008, NULL, NULL),
('The Lord of the Rings', 'J.R.R. Tolkien', 'Fantasy', '9780544003415', 'A group\'s journey to destroy a powerful ring', 'Vintage', 2000, NULL, NULL),
('Harry Potter and the Philosopher\'s Stone', 'J.K. Rowling', 'Fantasy', '9780590353403', 'A young boy discovers he is a wizard and attends a magical school', 'Hachette Books', 2013, NULL, NULL),
('The Hunger Games', 'Suzanne Collins', 'Dystopian', '9780439023481', 'A girl\'s fight for survival in a televised battle to the death', 'Random House', 2004, NULL, NULL),
('Sense and Sensibility', 'Jane Austen', 'Romance', '9780141439662', 'The emotional and financial struggles of two sisters in Regency England', 'Penguin Books', 2008, NULL, NULL),
('The Canterbury Tales', 'Geoffrey Chaucer', 'Medieval Literature', '9780140424386', 'A collection of stories told by pilgrims on their way to Canterbury', 'Vintage', 1975, NULL, NULL),
('The Iliad', 'Homer', 'Epic Poetry', '9780140447941', 'The Trojan War and the wrath of Achilles', 'HarperCollins', 2016, NULL, NULL),
('The Odyssey', 'Homer', 'Epic Poetry', '9780140268867', 'Odysseus\'s journey home after the Trojan War', 'Penguin Classics', 2005, NULL, NULL);

