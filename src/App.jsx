// import { useEffect } from "react";
// import Scheduler from "./components/Scheduler";
// import GitHubFooter from "./components/GitHubFooter";
// import "./App.css";

// function App() {
//   useEffect(() => {
//     document.title = "CPU Scheduler";
//   }, []);
//   return (
//     <div className="bg-black">
//         <div className="m-auto p-6 bg-black">
//         <Scheduler />
//         </div>
//         <GitHubFooter />
//     </div>
//   );
// }

// export default App;

// updated

import { useEffect } from "react";
import Scheduler from "./components/Scheduler";
import GitHubFooter from "./components/GitHubFooter";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = "CPU Scheduler";
  }, []);

  return (
    // Updated: Uses a professional dark gray background, ensures full screen height, and white text
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Updated: Centers the main content area and limits its width */}
      <div className="mx-auto max-w-7xl p-6">
        <Scheduler />
      </div>
      <GitHubFooter />
    </div>
  );
}

export default App;