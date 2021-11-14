export default function () {
    return <a href="/" className="flex gap-2 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="animate-pulse h-7 w-7 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
        <h1 className="font-bold text-2xl flex gap-1 text-gray-900"><div className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-4 rounded shadow-sm">WP</div> <div>Cloud</div></h1>
    </a>
}