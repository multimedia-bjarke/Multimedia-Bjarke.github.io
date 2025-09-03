import React from "react";

function HomePage() {
  return (
    <>
      <section className="title">
        <div className="content">
          <h1>Bjarke Holm</h1>
          <h3>-Multimediedesigner og webudvikler</h3>
        </div>
      </section>

      <section className="cardContainer">
        <a href="design.html">
          <div className="card1">
            <h2>Design</h2>
            <img src="images/Placeholders/DesignPlaceholder.svg" alt="" />
          </div>
        </a>

        <a href="frontend.html">
          <div className="card2">
            <h2>
              Frontend <br /> udvikling
            </h2>
            <img src="images/Placeholders/FrontendPlaceholder.svg" alt="" />
          </div>
        </a>

        <a href="content.html">
          <div className="card3">
            <h2>
              Content <br /> creation
            </h2>
            <img src="images/Placeholders/ContentPlaceholder.svg" alt="" />
          </div>
        </a>
      </section>
    </>
  );
}

export default HomePage;
