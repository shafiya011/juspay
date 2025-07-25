import DashboardContent from "./content/DashboardContent";
import RightBar from "./rightbar/RightBar";
import SideMenu from "./sidebar/SideMenu";
import {Dashboard} from "./styles"

function App() {
  return (
    <Dashboard>
      <SideMenu />
      <DashboardContent />
      <RightBar />
    </Dashboard>
  );
}

export default App;
