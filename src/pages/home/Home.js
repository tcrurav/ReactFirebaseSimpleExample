import BikeList from "../bike-list/BikeList";
import "./Home.css";

function Home() {
  return (
    <>
      <h1 className="page-title">Bicycles</h1>
      <BikeList />
    </>
  );
}

export default Home;