import React from "react";

export const HeroSection = (): JSX.Element => {
  return (
    <section>
      <div>
        <div>
          <h1>All the latest Movies, Shows and Documentaries</h1>
          <p>
            Browse the most trending media online all while sharing your
            favorite Movies, Shows and Documentaries with your friends and
            family online
          </p>
          <div>
            <button>Browse Media</button>
            <button>Learn more &darr;</button>
          </div>
        </div>
        <div>
          <img alt="Image of Bumblebee" />
        </div>
      </div>
    </section>
  );
};
