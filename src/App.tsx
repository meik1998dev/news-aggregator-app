import { NewsListWrapper } from "./components/features/news/NewsListWrapper";
import { Header } from "./components/layout/Header";

function App() {
  return (
    <div className="">
      <Header />
      <div className="container mx-auto">
        <NewsListWrapper />
      </div>
    </div>
  );
}

export default App;
