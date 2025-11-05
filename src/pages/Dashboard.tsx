import { Plus } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header */}
      <header className="border-b border-gray-200 px-8 py-4">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 bg-black rounded-full"></div>
          <span className="font-semibold text-lg">orchestrator ai</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-8">
        {/* Start Building Section */}
        <div className="bg-black text-white rounded-2xl p-12 mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Start Building</h1>
          <p className="text-gray-300 mb-8">
            Transform your Figma designs into
            <br />
            production ready apps
          </p>
          <button className="w-full max-w-xs mx-auto bg-white text-black py-3 rounded font-medium flex items-center justify-center gap-2 hover:bg-gray-100 transition">
            <Plus size={20} />
            New Project
          </button>
        </div>

        {/* Agent Teams Section */}
        <div className="border-2 border-gray-300 rounded-2xl p-6 mb-8">
          <h2 className="font-bold text-lg mb-6 flex items-center gap-2">
            <div className="h-5 w-5 bg-black rounded-full"></div>
            Agent Teams
          </h2>

          <div className="grid grid-cols-2 gap-6">
            {/* First Card - Design Team */}
            <div className="border-2 border-gray-300 rounded-lg p-6">
              <h3 className="font-semibold mb-4">Design Team</h3>
              <div className="border-2 border-gray-300 rounded h-16 bg-gray-50"></div>
            </div>

            {/* Second Card - Empty */}
            <div className="border-2 border-gray-300 rounded-lg p-6 bg-gray-50"></div>

            {/* Third Card - Empty */}
            <div className="border-2 border-gray-300 rounded-lg p-6 bg-gray-50"></div>

            {/* Fourth Card - Empty */}
            <div className="border-2 border-gray-300 rounded-lg p-6 bg-gray-50"></div>
          </div>
        </div>

        {/* Your Projects Section */}
        <div className="border-4 border-gray-400 rounded-3xl p-8">
          <h2 className="font-bold text-lg mb-6">Your Projects</h2>
          <div className="bg-gray-50 rounded-lg h-64"></div>
        </div>
      </main>
    </div>
  )
}
