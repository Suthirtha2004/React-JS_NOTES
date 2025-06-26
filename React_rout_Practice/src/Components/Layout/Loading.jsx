

export const Loading = () => {
        return (
             <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"></div>

        Loading...
        <p className="text-lg font-semibold animate-pulse">Loading, please wait...</p>
      </div>
    </div>
        )
    }