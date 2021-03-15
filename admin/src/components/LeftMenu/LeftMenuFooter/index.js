import React from "react";
import Wrapper from "./Wrapper";

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        Powered by &nbsp;
        <a
          key="website"
          href="https://github.com/guilhpupo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Guilherme Pupo
        </a>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
