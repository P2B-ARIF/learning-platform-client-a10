import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <section>
      <div className="blog-head">
        <div className="blog-head-text">
          <h1>Our Blog</h1>
          <p>Home / Blog</p>
        </div>
      </div>
      <br />
      <div className="container blog-q">
        <div className="question">
          <h5>1. What is cors?</h5>
          <p>
            <strong>Answer: </strong>In ReactJS, Cross-Origin Resource Sharing (CORS) refers to the
            method that allows you to make requests to the server deployed at a different domain. As
            a reference, if the frontend and backend are at two different domains, we need CORS
            there.
          </p>
        </div>
        <div className="question">
          <h5>
            2. Why are you using firebase? What other options do you have to implement
            authentication?
          </h5>
          <p>
            <strong>Answer: </strong> Firebase helps you develop high-quality apps, grow your user
            base, and earn more money. Each feature works independently, and they work even better
            together.
            <strong>Amazon Cognito it's another site for authentication </strong>
          </p>
        </div>
        <div className="question">
          <h5>3. How does the private route work?</h5>
          <p>
            <strong>Answer: </strong> The private route component is similar to the public route,
            the only change is that redirect URL and authenticate condition. If the user is not
            authenticated he will be redirected to the login page and the user can only access the
            authenticated routes If he is authenticated (Logged in)
          </p>
        </div>
        <div className="question">
            <h5>4. What is Node ? How does Node work?</h5>
          <p>
            <strong>Answer: </strong> Node.js is an open-source, cross-platform, back-end JavaScript
            runtime environment that runs on a JavaScript Engine and executes JavaScript code
            outside a web browser, which was designed to build scalable network applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
