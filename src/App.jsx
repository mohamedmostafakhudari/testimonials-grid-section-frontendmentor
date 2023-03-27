import Grid from "./sections/Grid";
function App() {
  const scrollHeight = document.documentElement.scrollHeight;
  return (
    <div className="App font-body bg-lightGrayishBlue h-screen min-h-screen">
      <main className="h-full relative">
        <Grid />
        <div
          className={`bg-veryDarkBlackishBlue absolute -bottom-[${scrollHeight}] inset-x-0 text-white text-center`}
        >
          <p>
            &copy; <span>Mohamed Mostafa</span>
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
