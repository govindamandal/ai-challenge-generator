import ClerkProviderWithRoutes from "./auth/ClerkProviderWithRoutes"
import { Routes, Route } from "react-router-dom"

function App() {
  
  return <ClerkProviderWithRoutes>
    <Routes>
      <Route path="/" element={<div>Hello, World!</div>} />
    </Routes>
  </ClerkProviderWithRoutes>
}

export default App
