import Head from "next/head";
import React, { useCallback, useState } from "react";
import useFitText from "use-fit-text";

/**
 * Example1 - basic example
 */
function Example1() {
  const { fontSize, ref } = useFitText();
  return (
    <>
      <b>Example 1 - basic example</b>
      <div
        ref={ref}
        style={{ fontSize, height: 40, width: 120, border: "1px solid #ccc" }}
      >
        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
        consectetur
      </div>
      <hr />
    </>
  );
}

/**
 * Example2 - non-wrapping text
 */
function Example2() {
  const { fontSize, ref } = useFitText();
  return (
    <>
      <b>Example 2 - non-wrapping text</b>
      <div
        ref={ref}
        style={{ fontSize, height: 40, width: 120, border: "1px solid #ccc" }}
      >
        <div style={{ whiteSpace: "nowrap" }}>
          Lorem ipsum dolor sit amet, consectetur
        </div>
      </div>
      <hr />
    </>
  );
}

/**
 * Example3 - demonstrates:
 *  - recalculating font size on window resize
 *  - `onStart` and `onFinish` callbacks
 */
function Example3() {
  const onStart = useCallback(() => {
    console.log("Example 3 resizing started");
  }, []);
  const onFinish = useCallback((fontSize: number) => {
    console.log("Example 3 resizing finished", fontSize);
  }, []);
  const { fontSize, ref } = useFitText({ maxFontSize: 500, onStart, onFinish });

  return (
    <>
      <b>Example 3 - recalculating on container change</b>
      <p>Demonstrates:</p>
      <ul>
        <li>recalculating font size on window resize</li>
        <li>
          <code className="text-dark">onStart</code> and{" "}
          <code className="text-dark">onFinish</code> callbacks (see log message
          in the console)
        </li>
      </ul>
      <div
        ref={ref}
        style={{
          fontSize,
          height: 100,
          width: "100%",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur
      </div>
      <hr />
    </>
  );
}

/**
 * Example4 - recalculating on content change
 */
function Example4() {
  const [text, setText] = useState("Lorem ipsum dolor sit amet, consectetur");
  const { fontSize, ref } = useFitText();

  return (
    <>
      <b>Example 4 - recalculating on content change</b>
      <p>
        Change the input text and the font size will be updated to fit the text
        in the div
      </p>
      <div>
        <textarea
          onChange={(event) => setText(event.target.value)}
          value={text}
        />
        <div
          ref={ref}
          style={{ fontSize, height: 40, width: 120, border: "1px solid #ccc" }}
        >
          {text}
        </div>
      </div>
      <hr />
    </>
  );
}

/**
 * Example5 - fails to fit text because `fontSizeMin` is too big
 */
function Example5() {
  const { fontSize, ref } = useFitText({
    maxFontSize: 285.7142857142857,
    minFontSize: 125.7142857142857,
    // Note: with `v2.3.0` and earlier, adding this non-referentially equal
    // `onFinish` callback caused a "Maximum update depth exceeded" error.
    // See https://github.com/saltycrane/use-fit-text/issues/9
    onFinish: () => {},
  });

  return (
    <>
      <b>
        Example 5 - fails to fit text because <code>fontSizeMin</code> is too
        big. Shows a message in the console.
      </b>
      <div
        ref={ref}
        style={{ fontSize, height: 40, width: 120, border: "1px solid red" }}
      >
        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
        consectetur
      </div>
      <hr />
    </>
  );
}

/**
 * Page
 */
function Page() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
          crossOrigin="anonymous"
        />
      </Head>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <span className="navbar-brand">use-fit-text</span>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/saltycrane/use-fit-text"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container" style={{ fontSize: 16 }}>
        <h1 className="my-4">Examples</h1>
        <Example1 />
        <Example2 />
        <Example3 />
        <Example4 />
        <Example5 />
      </div>
    </>
  );
}

export default Page;
