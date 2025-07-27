import { useSelector } from "react-redux";
import DashboardContent from "./content/DashboardContent";
import RightBar from "./rightbar/RightBar";
import SideMenu from "./sidebar/SideMenu";
import { useDispatch} from "react-redux";
// import { setDarkMode, setActiveTab } from "../Redux/slice";
import { Dashboard } from "./styles";

function App() {
  const dispatch = useDispatch();
  const { activeTab } = useSelector((state) => state.ui);

  const darkMode = useSelector((state) => state.ui.darkMode);
  return (
    <Dashboard darkMode={darkMode}>
      <SideMenu />
      <DashboardContent />
      {activeTab !== "orders" && <RightBar />}
    </Dashboard>
  );
}

export default App;
