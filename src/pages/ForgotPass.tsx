export default function ForgotPass() {
  return (
    <div className="min-h-screen bg-amber-50 flex flex-col items-center justify-center">
      {/* Logo */}
      <div className="absolute top-6 left-6 flex items-center gap-2">
        <div className="h-5 w-5 bg-black rounded-full"></div>
        <span className="text-sm font-semibold">orchestrator ai</span>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-12">forgot password</h1>

        {/* Email Section */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-3">Email:</label>
          <input
            type="email"
            placeholder="Enter your email address..."
            className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:outline-none focus:border-black transition mb-4"
          />
          <button className="w-full bg-black text-white py-3 px-4 rounded font-medium hover:bg-gray-900 transition">
            Continue
          </button>
        </div>

        {/* OTP Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">OTP:</label>
          <input
            type="text"
            placeholder="Enter your OTP..."
            className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:outline-none focus:border-black transition mb-4"
          />
          <button className="w-full bg-black text-white py-3 px-4 rounded font-medium hover:bg-gray-900 transition">
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}
