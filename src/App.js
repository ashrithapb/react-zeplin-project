import { useState } from "react";
import Home from "./components/Home";
import { PageContext } from "./components/PageContext";
import data from "./data/content.json";

function App() {
  const defaultValue = data?.Pages[0].slug;

  const path = "./assets/";

  const [pageValue, setPageValue] = useState(defaultValue);

  return (
    <PageContext.Provider value={{ pageValue, setPageValue }}>
      {data?.Pages?.map(
        (page, index) =>
          page.slug === pageValue && (
            <div
              key={index}
              className="app"
              style={{
                backgroundImage: `url(${
                  path + page.blocks[0].background.trim()
                }) `,
              }}
            >
              <Home pages={data?.Pages} />
            </div>
          )
      )}
    </PageContext.Provider>
  );
}

export default App;
