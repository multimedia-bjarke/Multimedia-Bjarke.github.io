export default function HomepageCards(data) {
  return (
    <>
      <section className="cardContainer">
        <a href="design.html">
          <div className="cards">
            <h2>{data.title}</h2>
            <img src={data.image} alt={data.alt} />
          </div>
        </a>
      </section>
    </>
  );
}
