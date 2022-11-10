import React from 'react';

const Blog = () => {
    return (
        <div className='my-20'>
            <div className='border border-violet-900 m-4 p-3'>
                <h2>Question: 1</h2>
                <h3>What are the Difference between SQL and NoSQL?</h3>
                <h3>Answer:</h3>
                <div>
                    <p>
                        1. SQL is Relational Database Management System (RDBMS) and NoSQL is Non-relational or distributed database system.
                    </p>

                    <p>2. SQL databases have fixed or static or predefined schema and NoSQL have dynamic schema.</p>

                    <p>3. SQL databases are best suited for complex queries and NoSQL  databases are not so good for complex queries.</p>

                    <p>4. SQL database are Vertically Scalable but NoSQL database are Horizontally scalable.</p>

                    <p>5. SQL databases are not suited for hierarchical data storage but NoSQL databases are best suited for hierarchical data storage.</p>
                </div>
            </div>
            <div className='border border-violet-900 m-4 p-3'>
                <h2>Question: 2</h2>
                <h3>What is JWT, and how does it work?</h3>
                <h3>Answer:</h3>
                <p>
                    JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.
                    JWTs are digitally signed using either a secret (HMAC) or a public/private key pair (RSA or ECDSA) which safeguards them from being modified by the client or an attacker. Stored only on the client: You generate JWTs on the server and send them to the client. The client then submits the JWT with every request
                </p>
            </div>
            <div className='border border-violet-900 m-4 p-3'>
                <h2>Question: 3</h2>
                <h3>What is the difference between javascript and NodeJS?</h3>
                <h3>Answer:</h3>
                <div>
                    <p>
                        1. Javascript is a programming language that is used for writing scripts on the website and NodeJS is a Javascript runtime environment.
                    </p>
                    <p>2. Javascript is capable enough to add HTML and play with the DOM and Nodejs does not have capability to add HTML tags.</p>
                    <p>3. Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox but V8 is the Javascript engine inside of node.js that parses and runs Javascript.  </p>
                    <p>
                        4. Javascript is used in frontend development and Nodejs is used in server-side development.
                    </p>
                    <p>5. Javascript is basically used on the client-side and Nodejs is mostly used on the server-side.</p>
                </div>
            </div>
            <div className='border border-violet-900 m-4 p-3'>
                <h2>Question: 4</h2>
                <h3>How does NodeJS handle multiple requests at the same time?</h3>
                <h3>Answer:</h3>
                <p>
                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. As is, node. js can process upwards of 1000 requests per second and speed limited only to the speed of your network card. Note that it's 1000 requests per second not clients connected simultaneously. It can handle the 10000 simultaneous clients without issue.
                </p>
            </div>
        </div>
    );
};

export default Blog;