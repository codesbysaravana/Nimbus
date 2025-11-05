import { Mail, ChevronRight } from 'lucide-react'

export default function Login() {
  return (
    <div className="min-h-screen bg-amber-50 flex flex-col items-center justify-center">
      {/* Logo */}
      <div className="absolute top-6 left-6 flex items-center gap-2">
        <div className="h-5 w-5 bg-black rounded-full"></div>
        <span className="text-sm font-semibold">orchestrator ai</span>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-md">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-2">Your agentic coding workspace</h1>
          <p className="text-gray-600">Log in to your Orchestrator account</p>
        </div>

        {/* OAuth Buttons */}
        <div className="space-y-3 mb-8">
          <button className="w-full bg-black text-white py-3 px-4 rounded flex items-center justify-between font-medium hover:bg-gray-900 transition">
            <span className="flex items-center gap-3">
              <span>G</span>
              Continue with Google
            </span>
            <ChevronRight size={20} />
          </button>

          <button className="w-full border-2 border-black text-black py-3 px-4 rounded flex items-center justify-between font-medium hover:bg-gray-100 transition">
            <span className="flex items-center gap-3">
              <Mail size={20} />
              Continue with Mail
            </span>
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Divider */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email:
          </label>
          <input
            type="email"
            placeholder="Enter your email address..."
            className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:outline-none focus:border-black transition"
          />
        </div>

        {/* Continue Button */}
        <button className="w-full bg-black text-white py-3 px-4 rounded font-medium mt-6 hover:bg-gray-900 transition">
          Continue
        </button>
      </div>
    </div>
  )
}
