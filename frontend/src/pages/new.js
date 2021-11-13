import Layout from '../components/Layout'
import Head from 'next/head'
import NewSiteForm from '../components/newsite'
export default function New() {
    var domain = "site.com";

    return (
        <div>
            <Head>
                <title>New Site</title>

            </Head>
            
                <div className="bg-gray-100 flex-grow py-6 flex flex-col sm:py-12">
                    <div className="w-3/5 mx-auto">
                        <div className="flex flex-col gap-10">
                            <a href="/" className="text-gray-500 gap-2 text-md font-bold pb-10 flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                                </svg>
                                <div>Back</div>
                            </a>
                            <div className="flex bg-gradient-to-r from-green-400 to-blue-500 justify-between px-5 flex-col gap-5 py-5 rounded-lg shadow-lg hover:shadow-xl items-center">
                                <div className="flex justify-center items-center w-full gap-5">
                                    <input placeholder="My Awesome Site" className="h-10 w-full bg-gray-100 rounded px-5 text-gray-600 font-bold text-right" type="text" />
                                    <h1 className="font-bold text-2xl text-left w-full">Site Name</h1>
                                </div>

                                <div className="flex justify-center items-center w-full gap-5">
                                    <input placeholder="test-site" className="h-10 w-full bg-gray-100 rounded px-5 text-gray-600 font-bold text-right" type="text" />
                                    <h1 className="font-bold text-2xl text-left w-full">.{domain}</h1>
                                </div>

                                <NewSiteForm domain={domain} />

                                <div>
                                    <a className="px-5 py-3 bg-green-50 rounded-lg shadow-md text-xl font-bold text-gray-900 flex items-center gap-2 hover:shadow-lg" href="/new">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <div>Create</div>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                
                
            
        </div>
    )
}