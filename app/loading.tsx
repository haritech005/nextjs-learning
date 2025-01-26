'use client';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      {/* Text */}
      <p className="mt-4 text-lg font-semibold text-gray-600">Loading...</p>
    </div>
  );
}
