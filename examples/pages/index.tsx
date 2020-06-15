import Head from "next/head";
import React, { useCallback, useState } from "react";
import useFitText from "use-fit-text";

/**
 * Example1 - wrapping text
 */
function Example1() {
  const { fontSize, ref } = useFitText();
  return (
    <>
      <b>Example 1</b>
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
      <b>Example 2</b>
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
      <b>Example 3</b>
      <div
        ref={ref}
        style={{
          fontSize,
          height: 200,
          width: "100vw",
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
      <b>Example 4</b>
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
 * Page
 */
function Page() {
  return (
    <>
      <Head>
        <link
          href="https://unpkg.com/normalize.css@8.0.1/normalize.css"
          rel="stylesheet"
        />
      </Head>
      <div style={{ fontSize: 16 }}>
        <Example1 />
        <Example2 />
        <Example3 />
        <Example4 />
      </div>
    </>
  );
}

export default Page;
