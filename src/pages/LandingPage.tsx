import { ArrowRight } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <nav className="flex items-center justify-between border-b border-gray-200 px-8 py-4">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 bg-black rounded-full"></div>
          <span className="font-semibold">orchestrator ai</span>
        </div>
        <div className="flex items-center gap-8">
          <a href="#product" className="text-sm font-medium">
            PRODUCT
          </a>
          <a href="#solutions" className="text-sm font-medium">
            SOLUTIONS
          </a>
          <a href="#agents" className="text-sm font-medium">
            AGENTS
          </a>
          <a href="#pricing" className="text-sm font-medium">
            PRICING
          </a>
          <a href="#docs" className="text-sm font-medium">
            DOCS
          </a>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-6 py-2 font-medium">LOG IN</button>
          <button className="px-6 py-2 bg-black text-white font-medium rounded">
            SIGN UP
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-8 py-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold leading-tight mb-6">
            App Development, reimagined through
            <br />
            Agentic intelligence
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl">
            Reimagining app development with agents that think
            <br />
            deeper and build smarter.
          </p>
          <button className="bg-black text-white px-6 py-3 font-medium rounded flex items-center gap-2">
            Start Building with Agents!!!
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Feather icon */}
        <div className="absolute right-20 top-32">
          <svg
            className="w-32 h-32 text-gray-900"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2c-1.104 0-2 .896-2 2 0 1.104.896 2 2 2s2-.896 2-2c0-1.104-.896-2-2-2zm0 4c-.552 0-1 .448-1 1v8c0 .552.448 1 1 1s1-.448 1-1V7c0-.552-.448-1-1-1zm-3-2c-.552 0-1 .448-1 1v12c0 .552.448 1 1 1s1-.448 1-1V5c0-.552-.448-1-1-1zm6 0c-.552 0-1 .448-1 1v12c0 .552.448 1 1 1s1-.448 1-1V5c0-.552-.448-1-1-1z" />
          </svg>
        </div>
      </section>

      {/* Figma to App Pipeline Section */}
      <section className="px-8 py-16">
        <h2 className="text-2xl font-bold text-center mb-12">
          Figma -&gt; App Pipeline
        </h2>

        <div className="border-2 border-gray-400 rounded-3xl p-8 mb-12">
          <div className="grid grid-cols-5 gap-6">
            {[
              {
                title: 'Input',
                subtitle: 'Figma',
                items: ['Quick prototyping to validate']
              },
              {
                title: 'Design',
                subtitle: 'Figma',
                items: ['Shape the structure', 'Create the foundation']
              },
              {
                title: 'Frontend',
                subtitle: 'System',
                items: ['Generate frames & JSON', 'Create UI layer']
              },
              {
                title: 'Backend',
                subtitle: 'System',
                items: ['Define async operations', 'Generate logic'],
                expandedItems: [
                  'Code (Detailed)',
                  'APIs (Detailed)',
                  'Builder',
                  'Integrator',
                  'Validator',
                  'Orchestrator',
                  'Character'
                ]
              },
              {
                title: 'Deploy',
                subtitle: 'Pipeline',
                items: ['Staging output', 'QA automation'],
                expandedItems: ['CODE', 'API Specs', 'UI Builder']
              }
            ].map((column, idx) => (
              <div key={idx} className="border border-gray-300 rounded-lg p-4">
                <h3 className="font-bold mb-1">{column.title}</h3>
                <p className="text-xs text-gray-600 mb-4">{column.subtitle}</p>
                <div className="space-y-2 text-xs">
                  {column.items.map((item, i) => (
                    <div key={i} className="text-gray-700">
                      • {item}
                    </div>
                  ))}
                  {column.expandedItems &&
                    column.expandedItems.map((item, i) => (
                      <div key={i} className="text-gray-700 ml-2">
                        • {item}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-agent Workflow */}
      <section className="px-8 py-16">
        <div className="border-2 border-gray-400 rounded-3xl p-24 text-center bg-white mb-12">
          <p className="text-gray-700">
            Multi-agent workflow for design-to-Production
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-8 py-16 text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          Powerful Features, Simple Interface
        </h2>
        <p className="text-gray-700">
          Everything you need to build sophisticated AI agents without the complexity
        </p>
      </section>
    </div>
  )
}
