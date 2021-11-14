import Head from 'next/head'
import { useSession, signIn, signOut } from "next-auth/react"
import Site from '../components/Site'

import axios from 'axios'
import { useEffect, useState } from 'react'
import Config from '../config'

import { getToken } from "next-auth/jwt"

export default function Home() {

  const { data: session, status } = useSession()

  console.log(session)
  const [sites, setSites] = useState({})
  useEffect(() => {

    const fetchData = async () => {
      const result = await axios(
        `${Config().api_url}/sites`,
      ).then(res => {
        setSites(res.data)
      }).catch(err => {

      })

    };

    fetchData();
  }, []);



  return (
    <div>
      <Head>
        <title>WordPress Hosting</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>


      <div className="bg-gray-100 flex-grow py-6 flex flex-col sm:py-12">
        <div className="w-3/5 mx-auto">
          <h3 className="text-gray-500 gap-2 text-md font-bold pb-10 flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div>My Websites</div>
          </h3>

          <div className="flex flex-col gap-10">
            {sites.length > 0 ? sites.map(site => (
              <Site data={site} name="site1" key={Math.floor(Math.random() * 1000)} domain="site1" status="Running" />
            )) : (
              <div className="text-center flex justify-center flex-col items-center gap-5">
                <p className="text-gray-500 text-sm">You don't have any websites yet.</p>
                <p className="text-gray-500 text-sm">Click the button below to create one.</p>
                <a className="px-5 py-3 w-48 bg-gray-50 rounded-lg shadow-md text-xl font-bold text-gray-900 flex items-center gap-2 hover:shadow-lg" href="/new">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>New Website</div>
                </a>
              </div>
            )}


          </div>


        </div>
      </div>

    </div>
  )


}
