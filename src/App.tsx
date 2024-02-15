import TriangleCalculator from "./TriangleCalculator"
import { Toaster } from "./components/ui/toaster"

function App() {
  return (
    <main className="max-w-6xl mx-2 my-12">
      <h1 className="mb-4 text-2xl font-semibold ">
        Incrível e Maravilhosa Calculadora de Triângulos
      </h1>
      <TriangleCalculator />
      <Toaster />
    </main>
  )
}

export default App
