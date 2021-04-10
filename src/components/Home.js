import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

function Home({ pages }) {
  return (
    <div className="home">
      <Header pages={pages} />
      <Content pages={pages} />
      <Footer pages={pages} />
    </div>
  );
}

export default Home;
