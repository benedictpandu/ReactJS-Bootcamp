import React from 'react'
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import NavigationBar from '../components/NavigationBar'
import { Link } from 'react-router-dom'

  const features = [
    {
      name: 'Tentang Kami',
      description:
        'We are transforming the way candidates find work and the way companies recruit candidates.',
      icon: GlobeAltIcon,
    },
    {
      name: 'Flexible',
      description:
        'offers flexibility and a wide selection of easy tasks. Perform tasks anytime and anywhere, whether on the way to work, in a cafe, or at home, and fill your free time with productive activities.' ,
      icon: ScaleIcon,
    },
    {
      name: 'Transfers are instant',
      description:
        'Our cash disbursement method is also guaranteed to be fast and safe. Download our app and start filling your coffers right now!',
      icon: LightningBoltIcon,
    },
    {
      name: 'Variousity',
      description:
        'Various job vacancies that match your field, find and send your application for sure we will help',
      icon: AnnotationIcon,
    },
  ]


const LandingPage = () => {
  return (
    <>
    
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <NavigationBar/>
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Get a job that </span>{' '}
                <span className="block text-yellow-300 xl:inline">matters to you</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              software-based service has been present since 2007 focusing on recruitment to facilitate job search and employee recruitment.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to='/joblist'
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-300 hover:bg-yellow-400 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full px-5 lg:px-0 object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://www.openaccessgovernment.org/wp-content/uploads/2019/03/dreamstime_s_115214614.jpg"
          alt=""
        />
      </div>
    </section>
    
    <section className="py-12 mt-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-yellow-300 font-semibold tracking-wide uppercase">Career</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to rise up your career
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          We are transforming the way candidates find work and the way companies recruit candidates.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-300 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>

    </>
  )
}

export default LandingPage