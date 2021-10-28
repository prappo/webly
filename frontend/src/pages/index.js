import Head from 'next/head'
import Layout from '../components/Layout'
import Site from '../components/Site'
import { getSites } from '../libs/sites'

export default function Home() {

  const mySites = getSites();

  return (
    <div>
      <Head>
        <title>WordPress Hosting</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Layout>

        <div className="bg-gray-100 flex-grow py-6 flex flex-col sm:py-12">
          <div className="w-3/5 mx-auto">
            <h3 className="text-gray-500 gap-2 text-md font-bold pb-10 flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>My Websites</div>
            </h3>

            <div className="flex flex-col gap-10">

              {(mySites == null)
                ? (
                  <div>

                    <Site name="site1" domain="site1" status="Running" />


                  </div>
                )
                : <h1 className="text-center font-light italic text-gray-500">Sorry no site found</h1>
              }
            </div>


          </div>
        </div>


      </Layout>


    </div>
  )
}
