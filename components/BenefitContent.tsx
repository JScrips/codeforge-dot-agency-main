import React from 'react'
import { RiNumber1 } from 'react-icons/ri'
import { RiNumber2 } from 'react-icons/ri'
import { RiNumber3 } from 'react-icons/ri'
import { RiNumber4 } from 'react-icons/ri'

const BenefitContent = () => {
  return (
    <section id="ourprocess" className=" bg-forge-bg pb-20 text-forge-primary">
      <div className="container mx-auto px-6 py-10  text-center">
        <h2 className=" text-center text-3xl  capitalize text-forge-primary lg:text-4xl">
          <span className="text-forge-acc">STRESS-FREE</span> WEB DEVELOPMENT
        </h2>
        <span className="text-sm text-white">
          As easy as counting to <span className="text-forge-acc">4</span>
        </span>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-4 xl:gap-16">
          {/* FIRST STEP */}

          <div className=" flex flex-col items-center space-y-3 rounded-xl  p-6 text-center hover:shadow-xl">
            <span className="inline-block rounded-full  bg-forge-primary p-3">
              <RiNumber1 className="text-forge-acc" />
            </span>

            <h3 className="text-2xl font-semibold capitalize text-forge-primary">
              Consultation
            </h3>

            <p className="text-forge-primary">
              The first steps can seem daunting. We’re here to{' '}
              <span className="text-forge-acc">support you</span>.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-3 rounded-xl  p-6 text-center hover:shadow-xl">
            <span className="inline-block rounded-full  bg-forge-primary p-3">
              <RiNumber2 className="text-forge-acc" />
            </span>

            <h3 className="text-2xl font-semibold capitalize text-white">
              Proposal and Contract
            </h3>

            <p className="text-forge-primary">
              We provide a{' '}
              <span className="text-forge-acc">detailed roadmap</span> from
              concept to completion.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-3 rounded-xl  p-6 text-center hover:shadow-xl">
            <span className="inline-block rounded-full  bg-forge-primary p-3">
              <RiNumber3 className="text-forge-acc" />
            </span>

            <h3 className="text-2xl font-semibold capitalize text-forge-primary">
              Design, Develop, & Deploy
            </h3>

            <p className="text-forge-primary">
              We <span className="text-forge-acc">FIRE</span> up the{' '}
              <span className="text-forge-acc">FORGE</span>, providing frequent
              check-ins/updates on progress
            </p>
          </div>

          <div className="flex flex-col items-center space-y-3 rounded-xl  p-6 text-center hover:shadow-xl">
            <span className="inline-block rounded-full  bg-forge-primary p-3">
              <RiNumber4 className="text-forge-acc" />
            </span>

            <h3 className="text-2xl font-semibold capitalize text-forge-primary">
              Delivery & Support
            </h3>

            <p className="text-forge-primary">
              We transfer all associated files to you, and offer{' '}
              <span className="text-forge-acc">ongoing technical support</span>{' '}
              packages to suit your business needs.
            </p>
          </div>
        </div>
      </div>
      <hr className="mx-auto w-8/12 border-gray-700" />
    </section>
  )
}

export default BenefitContent
