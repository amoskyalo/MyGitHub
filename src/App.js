import MyGithub from "./Components/MyGithub/MyGithub";

function App() {
  return (
    <div className="py-4 px-2">
      <MyGithub
        username="github-username"
        token="github-token"
      />
    </div>
  );
}

export default App;
