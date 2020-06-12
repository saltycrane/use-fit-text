import Head from "next/head";
import React, { useCallback } from "react";
import useFitText from "use-fit-text";

function Example1() {
  const { fontSize, ref } = useFitText();
  return (
    <div
      ref={ref}
      style={{ fontSize, height: 40, width: 120, border: "1px solid #ccc" }}
    >
      Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
      consectetur
    </div>
  );
}

function Example2() {
  const { fontSize, ref } = useFitText();
  return (
    <div
      ref={ref}
      style={{ fontSize, height: 40, width: 120, border: "1px solid #ccc" }}
    >
      <div style={{ whiteSpace: "nowrap" }}>
        Lorem ipsum dolor sit amet, consectetur
      </div>
    </div>
  );
}

function Example3() {
  const onStart = useCallback(() => {
    console.log("Example 3 resizing started");
  }, []);
  const onFinish = useCallback((fontSize: number) => {
    console.log("Example 3 resizing finished", fontSize);
  }, []);
  const { fontSize, ref } = useFitText({ maxFontSize: 500, onStart, onFinish });

  return (
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
  );
}

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
      </div>
    </>
  );
}

export default Page;
