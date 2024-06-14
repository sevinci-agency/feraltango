const NoEvents = () => {
    return (
        <div className="text-center my-32 pt-20">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
            <h3 className="mt-2 text-sm font-semibold text-gray-900">No events found</h3>
            <p className="mt-1 text-sm text-gray-500">
                Unfortunately, no events are currently available.
            </p>
            <div className="mt-6">
                <a href="https://corazon.dance/events" target="_blank" className="inline-flex items-center rounded-md bg-brand px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">      		
                    Find events in Corazon
                </a>
            </div>
        </div>
    )
}

export default NoEvents;