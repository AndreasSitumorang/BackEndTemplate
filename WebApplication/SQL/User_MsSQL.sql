CREATE TABLE users (
    user_id INT IDENTITY(1,1) NOT NULL,
    username NVARCHAR(50) NOT NULL,
    password NVARCHAR(255) NOT NULL,
    [key] NVARCHAR(255) NOT NULL,
    salt NVARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME DEFAULT GETDATE(),
    email NVARCHAR(255),
    CONSTRAINT PK_users PRIMARY KEY (user_id),
    CONSTRAINT UQ_users_username UNIQUE (username)
);