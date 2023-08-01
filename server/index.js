const express = require('express');

const http = require('http');
const path = require('path');
const fs = require('fs');
const uuid = require('uuid');
const moment = require('moment');
const bcrypt = require('bcrypt');
const mysql = require('mysql');

const logger = require('./middleware/Logger');

const server = express();

server.use(logger);

// Body parser Middleware
server.use(express.json());
server.use(express.urlencoded({extended: false}));

require('dotenv').config({path: path.resolve(__dirname, '.', '.env')});
console.log(process.env.DB_USER);

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'personalSite'
})

db.connect()

db.query('SELECT * FROM users', (err, rows, fields) => {
  if (err)
  {
    throw err;
  }

  console.log('Database is running succesfully: ', rows[0].username)

})

/*
*
* COMMENTS
*
*/

server.get('/api/comments', (req, res) => 
{
    /*fs.readFile(path.join(__dirname, '/data', 'comments.json') , 'utf8', (err, data) => 
    {
        if(err) console.log(err);
        var newData = JSON.parse(data);
        console.log("Retrieved comments from file");
        res.json(newData);
    })*/
    const selectQuery = "SELECT * FROM comments";
    db.query(selectQuery, async (err, result) => 
    {
        if(err) return res.status(500).send("Internal Server Error n1");
        res.json(result);
    })
})

server.post('/api/comment', async (req, res) => 
{
    const dateConcat = moment().date() + "/" + moment().month() + "/" + moment().year();
    console.log(req.body);
    const newComment = 
    {
        author: req.body.author,
        text: req.body.text,
        date: dateConcat
    }
    if(!newComment.author || !newComment.text)
    {
        res.status(400).json({msg: 'Bad request'})
    }
    else
    {
        var id;
        try {
            // Get the user's id from the database (I NEED THE USERNAME)
            const getIdQuery = "SELECT id FROM users WHERE username=?";
            db.query(getIdQuery, [newComment.author], async(err, result) =>
            {
                if(err) return res.status(500).send("Internal Server Error n1");
                console.log("INSIDE THE QUERY");
                console.log(result);
                id = result[0].id;
                console.log("IWBFIEHHHHHHHHHHIW");
                console.log(id);
                console.log("IWBFIEHHHHHHHHHHIW");
                // Insert the comment into the database
                const insertQuery = "INSERT INTO comments (text, author_id, author_name) VALUES (?, ?, ?)";
                await db.query(insertQuery, [newComment.text, parseInt(id), newComment.author], async(err, result) => 
                {
                    if(err) return res.status(500).send("Internal Server Error n2");
                    console.log("Inserted comment: " + newComment.text + " of name " + newComment.author);
                    // Retrieve comments after insertion
                    const retrieveCommentsQuery = "SELECT * FROM comments";
                    db.query(retrieveCommentsQuery, async(err, result) => 
                    {
                        if(err) return res.status(500).send("Internal Server Error n3");
                        res.json(result);
                    });
                });

            });
        } catch (error) {
            console.error("Error in database operations:", error);
            res.status(500).send("Internal Server Error");
        }
    }
        /*let commentsJson = fs.readFileSync(path.join(__dirname, '/data', 'comments.json'), 'utf-8');
        let comments = JSON.parse(commentsJson);
        comments.push(newComment);
        fs.writeFileSync(path.join(__dirname, '/data', 'comments.json'), JSON.stringify(comments), (err) => 
        {
            if(err) console.log(err);
        })
        console.log("Comment added successfully");
        res.json(comments);
        //res.redirect('/random');*/

})

server.delete('/api/comment/:id', (req, res) => 
{
    /*let commentsJson = fs.readFileSync(path.join(__dirname, '/data', 'comments.json'), 'utf-8');
    let comments = JSON.parse(commentsJson);

    let id = req.params.id;

    console.log("About to delete comment from " + id);
    let found = false;
    comments.forEach((comment, index) => 
    {
        if(comment.id === id)
        {
            console.log(comment.id + " is getting removed");
            found = true;
        }
    })
    if(found)
    {
        let newComments = comments.filter((comment) => comment.id !== id)
        fs.writeFileSync(path.join(__dirname, '/data', 'comments.json'), JSON.stringify(newComments), (err) => 
        {
            if(err) console.log(err);
        })
        console.log("Comment removed successfully");
        res.json(newComments);
    }
    else res.status(400);*/
    let id = req.params.id;
    const checkQuery = "SELECT id FROM comments WHERE id=?";
    db.query(checkQuery, [id], async(err, result) => 
    {
        if(err) return res.status(500).send("Internal Server Error n1");
        if(result == null) return res.status(400).send("User doesnt exist");
    });

    const deleteQuery = "DELETE FROM comments WHERE id=?";
    db.query(deleteQuery, [id] , async(err, outcome) => 
    {
        if(err) return res.status(500).send("Internal Server Error n2");
        const selectQuery = "SELECT * FROM comments";
        db.query(selectQuery, async(err, result) => 
        {
            if(err) return res.status(500).send("Internal Server Error n3");
            res.json(result);
        })
    });
})

/*
*
* AUTHENTICATION
*
*/

server.get('/api/users', (req, res) => 
{
    /*
    fs.readFile(path.join(__dirname, '/data', 'users.json') , 'utf8', (err, data) => 
    {
        if(err) console.log(err);
        var newData = JSON.parse(data);
        console.log("Retrieved users from file");
        res.json(newData);
    })*/
    const selectQuery = "SELECT * FROM users";
    db.query(selectQuery, async (err, result) => 
    {
        if (err) return res.status(500).send();
        res.json(result);
    })
})

server.post('/api/user', async (req, res) => 
{
    console.log(req.body);

    try
    {
        let salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        console.log("Generated the hashed password: " + hashedPassword);
    
        const newUser = 
        {
            username: req.body.username,
            password: hashedPassword
        }
        if(!newUser.username || !req.body.password)
        {
            res.status(400).json({msg: 'Bad request'})
        }
        else
        {
            const insertQuery = "INSERT INTO users (username, password) VALUES (?,?)";
            db.query(insertQuery, [newUser.username, newUser.password], async (err, result) =>
            {
                if (err) return res.status(500).send();
                console.log("Added user " + newUser.username + " to the database");
                res.status(200).json({msg: "User registered successfully"});
            })

            /*let usersJson = fs.readFileSync(path.join(__dirname, '/data', 'users.json'), 'utf-8');
            let users = JSON.parse(usersJson);
            if(users.find(user => user.username == newUser.username))
            {
                console.log("username taken");
                res.status(400).json({msg: "Username taken"});
                return;
            }
            users.push(newUser);
            fs.writeFileSync(path.join(__dirname, '/data', 'users.json'), JSON.stringify(users), (err) => 
            {
                if(err) console.log(err);
            })
            console.log("User added successfully");
            res.status(200).json({msg: "User registered successfully"});
            */
        }
    } catch
    {
        res.sendStatus(500);
    }
})

server.post('/api/user/login', async(req, res) => 
{
    /*let usersJson = fs.readFileSync(path.join(__dirname, '/data', 'users.json'), 'utf-8');
    let users = JSON.parse(usersJson);
    const user = users.find(user => user.username === req.body.username);
    if(user === null) return res.status(400).json({msg: "NotAUser"});

    try
    {
        if(await bcrypt.compare(req.body.password, user.password))
        {
            res.status(200).json({msg: "Success"});
        }
        else res.status(200).json({msg: "WrongPsw"});
    } catch
    {
        res.status(500).send();
    }*/

    const username = req.body.username;
    const password = req.body.password;

    const selectQuery = "SELECT * FROM users WHERE username=?";
    db.query(selectQuery, [username], async (err, results) => 
    {
        if (err) {
            console.error('Error executing SELECT statement:', err);
            return res.status(500).send();
        }

        if (results.length === 0) {
            return res.status(400).json({ msg: 'NotAUser' });
        }
        const user = results[0];
        try
        {
            if(await bcrypt.compare(password, user.password))
            {
                console.log(`Logged in user: ${username}`);
                res.status(200).json({msg: "Success"});
            }
            else res.status(200).json({msg: "WrongPsw"});
        } catch
        {
            res.status(500).send();
        }
    })
})

const PORT = process.env.PORT;

server.listen(PORT, () => console.log('Server running...'))

