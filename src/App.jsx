import Grid from "./sections/Grid";
import { useMemo } from "react";
function App() {
  return (
    <div className="App font-body bg-lightGrayishBlue min-h-screen relative">
      <main className="min-h-screen">
        <Grid />
      </main>
      <footer
        className={`bg-veryDarkBlackishBlue absolute bottom-0 inset-x-0 text-white text-center`}
      >
        <p>
          &copy; <span>Mohamed Mostafa</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
