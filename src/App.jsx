import AppContainer from "./components/ui/AppContainer";
import PageRoutes from "./store/PageRoutes";
import "./store/AllStyle.css";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <AppContainer>
        <PageRoutes />
      </AppContainer>
    </BrowserRouter>
  );
};

export default App;
