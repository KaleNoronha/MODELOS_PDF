import MainView from "./MainView";
import Navbar from "./Header";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black">
      <Navbar />
      <MainView />
    </div>
  )
}
