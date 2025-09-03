export default function HomepageCards(data) {
  return (
    <>
      <section className="title">
        <div className="content">
          <h1></h1>
          <h3>-Multimediedesigner og webudvikler</h3>
        </div>
      </section>

      <section className="cardContainer">
        <a href="design.html">
          <div className="card1">
            <h2>{data.title}</h2>
            <img src={data.image} alt={data.alt} />
          </div>
        </a>
      </section>
    </>
  );
}
