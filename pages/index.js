import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ReactFullpage from '@fullpage/react-fullpage';

export default function Home() {
  return (
    <ReactFullpage
      //fullpage option
      licenseKey={'YOUR_KEY_HERE'}
      scrollingSpeed={1000} /* Option here */
      render={({ state, fullpageApi}) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <div className="relative h-screen overflow-hidden bg-indigo-900">
                  <img src="/images/5.svg" className="absolute object-cover w-full h-full"/>
                  <div className="absolute inset-0 bg-black opacity-25">
                  </div>
                  <header className="absolute top-0 left-0 right-0 z-20">
                      <nav className="container px-6 py-4 mx-auto md:px-12">
                          <div className="items-center justify-between md:flex">
                              <div className="flex items-center justify-between">
                                  <a href="#" className="text-white">
                                      <svg className="w-8 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" data-name="Capa 1" viewBox="0 0 16.16 12.57">
                                          <defs>
                                          </defs>
                                          <path d="M14.02 4.77v7.8H9.33V8.8h-2.5v3.77H2.14v-7.8h11.88z">
                                          </path>
                                          <path d="M16.16 5.82H0L8.08 0l8.08 5.82z">
                                          </path>
                                      </svg>
                                  </a>
                                  <div className="md:hidden">
                                      <button className="text-white focus:outline-none">
                                          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                              </path>
                                          </svg>
                                      </button>
                                  </div>
                              </div>
                              <div className="items-center hidden md:flex">
                                  <a className="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
                                      About us
                                  </a>
                                  <a className="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
                                      Calendar
                                  </a>
                                  <a className="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
                                      Contact us
                                  </a>
                              </div>
                          </div>
                      </nav>
                  </header>
                  <div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
                      <div className="relative z-10 flex flex-col items-start lg:w-3/5 xl:w-2/5">
                          <span className="font-bold text-yellow-400 uppercase">
                              Himalaya
                          </span>
                          <h1 className="mt-4 text-6xl font-bold leading-tight text-white sm:text-7xl">
                              Let yourself be carried
                              <br/>
                                  by nature
                          </h1>
                          <a href="#" className="block px-4 py-3 mt-10 text-lg font-bold text-gray-800 uppercase bg-white rounded-lg hover:bg-gray-100">
                              Discover
                          </a>
                      </div>
                  </div>
              </div>
            </div>
         

            {/* Section 2 */}
            <div className="section">               
                <div className="relative h-screen overflow-hidden bg-indigo-900">
                    <img src="/images/2.jpg" className="absolute object-cover w-full h-full"/>
                    <div className="absolute inset-0 bg-black opacity-25">
                    </div>
                    <header className="absolute top-0 left-0 right-0 z-20">
                        <nav className="container px-6 py-4 mx-auto md:px-12">
                            <div className="items-center justify-between md:flex">
                                <div className="flex items-center justify-between">
                                    
                                    <div className="md:hidden">
                                        <button className="text-white focus:outline-none">
                                            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                </path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </header>
                    <div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
                        <div className="relative z-10 flex flex-col items-start lg:w-3/5 xl:w-2/5">
                            <span className="font-bold text-yellow-400 uppercase">
                                Himalaya
                            </span>
                            <h1 className="mt-4 text-6xl font-bold leading-tight text-white sm:text-7xl">
                                Let yourself be carried
                                <br/>
                                    by nature
                            </h1>
                            <a href="#" className="block px-4 py-3 mt-10 text-lg font-bold text-gray-800 uppercase bg-white rounded-lg hover:bg-gray-100">
                                Discover
                            </a>
                        </div>
                    </div>
                </div>

              </div>

              {/* Section 3 */}
              <div className="section">
                <div className="relative h-screen overflow-hidden bg-indigo-900">
                    <img src="/images/7.svg" class="absolute h-full w-full object-cover"/>
                    <div className="absolute inset-0 bg-black opacity-25">
                    </div>
                    <header className="absolute top-0 left-0 right-0 z-20">
                        <nav className="container px-6 py-4 mx-auto md:px-12">
                            <div className="items-center justify-center md:flex">
                                <div className="flex items-center justify-between">
                                    <div className="md:hidden">
                                        <button className="text-white focus:outline-none">
                                            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                </path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                
                            </div>
                        </nav>
                    </header>
                    <div className="container relative z-10 flex items-center w-4/5 py-16 mx-auto my-24 border-4 border-white rounded-lg md:my-32">
                        <div className="relative z-10 flex flex-col items-center justify-between w-full">
                            <p className="flex flex-col items-center text-6xl font-extrabold text-center text-white md:text-8xl">
                                FOOTER 
                            </p>
                            <p className="flex flex-col items-center max-w-lg mt-6 text-lg font-extrabold text-center text-white">
                                The first European to set eyes on the great river was a Spanish explorer, called De Soto, who came across the mouth of the river in 1541; yet it was not until over a century later that the Mississippi river began to take a significant place in the history of North America.
                            </p>
                            <a href="#" className="block px-4 py-3 mt-10 text-lg font-bold text-white uppercase bg-gray-800 hover:bg-gray-900">
                                Plant a tree
                            </a>
                        </div>
                    </div>
                </div>
 
              </div>
           </ReactFullpage.Wrapper>
          
        )

      }
    }
    />
  )
}
