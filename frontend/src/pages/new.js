import Layout from '../components/layout'
import Head from 'next/head'
import NewSiteForm from '../components/newsite'
export default function New() {
    var domain = "site.com";

    return (
        <div>
            <Head>
                <title>New Site</title>

            </Head>

            <div className="bg-gray-100 flex-grow py-2 flex flex-col sm:py-12">
                <div className="w-3/5 mx-auto">
                    <div className="flex flex-col gap-2">
                        
                        <div className="flex bg-gradient-to-r from-blue-400 to-blue-500 justify-between px-5 flex-col  py-5 rounded-lg shadow-lg hover:shadow-xl items-center">


                            <NewSiteForm domain={domain} />

                            <div>
                                <a className="px-5 py-3 w-48 bg-gray-50 rounded-lg shadow-md text-xl font-bold text-gray-900 flex items-center gap-2 hover:shadow-lg" href="/new">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    <div>Deploy Now</div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}