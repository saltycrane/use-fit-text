import React from "react";
import useFitText from "use-fit-text";

function Example() {
  const { fontSize, ref } = useFitText();

  return (
    <div
      ref={ref}
      style={{ fontSize, height: 40, width: 100, border: "1px solid #ccc" }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </div>
  );
}

export default Example;
