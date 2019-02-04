import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Introduction to React</h1>

      <Body />
      <References />
    </div>
  );
}

const Body = () => {
  return (
    <div>
      <strong>Requirements: EdX.org Account. GitHub Account.</strong>

      <p>
        This course is a hands-on introduction to React. There are some short
        videos and things to read but most of the time we'll be working on
        projects. While this is a great course, it's not perfect. Most
        importantly, it does not use some of the newer features of JavaScript,
        things we covered in the Modern JavaScript course. When that material is
        covered, we'll revisit the relevant techniques (see files in this
        project).
      </p>

      <p>
        This course will not cover CSS and styling and comes with no defaults.
        Most of your projects are going to <i>look</i> very basic - but that's
        okay! That's not in scope. If you find some time on your hands and you
        know CSS, feel free to make your solutions pretty too!
      </p>

      <p>
        Tomorrow, we will hopefully see some of the Redux Router and Redux
        course. We'll likely only get an overview with time to watch some of the
        videos. The intro course will be prioritised as it's the most important.
      </p>

      <p>Like the Modern JavaScript course, we will be using CodeSandbox.io.</p>
    </div>
  );
};

const References = () => {
  return (
    <div>
      <p>References:</p>
      <ul>
        <li>
          CodeSandbox.io projects:
          <ul>
            <li>
              This project:{" "}
              <a className="big" href="https://codesandbox.io/s/74l2k98lm6">
                https://codesandbox.io/s/74l2k98lm6
              </a>
            </li>
            <li>
              <a href="https://codesandbox.io/s/n5qj8pklw4">
                Intro to Modern JavaScript Reference
              </a>
            </li>
          </ul>
        </li>
        <li>
          Course Pages:
          <ul>
            <li>
              <a href="https://www.edx.org/course/introduction-to-reactjs-2">
                Introduction to React Course Page
              </a>
            </li>
            <li>
              <a href="https://www.edx.org/course/react-router-and-redux-0">
                React Router and Redux Course Page
              </a>
            </li>
          </ul>
        </li>
        <li>
          Documentation:
          <ul>
            <li>
              <a href="https://reactjs.org/docs/hello-world.html">
                Offical React Tutorial (very good!)
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
