import "./App.css";
import Header from "./components/Header/Header";
import RepoList from "./components/RepoList/RepoList";

function App() {
  const url =
    "https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc&page=2";
  const fetchRepos = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <Header fetchRepo={fetchRepos} />
      <RepoList />
    </div>
  );
}

export default App;
