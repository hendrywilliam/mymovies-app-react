import React from "react";

function Container({ children, background, text }) {
  return (
    <div className="h-full w-100 overflow-hidden">
      <p
        className={`${background} ${text} w-screen text-3xl pt-10 pb-2 px-5 text-center`}
      >
        NOW PLAYING MOVIES
      </p>

      <div
        className={`grid grid-cols-2 lg:grid-cols-6 gap-10 w-full h-full ${background} pb-10 px-10`}
      >
        {children}
      </div>
    </div>
  );
}

export default Container;
