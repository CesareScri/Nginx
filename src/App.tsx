import "./App.css";
import Header from "./webapp/Header";
import { ThemeProvider } from "./webapp/theme-provider";
import Body from "./webapp/Body";
function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <main className="container-body">
          <Header />
          <Body />
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
