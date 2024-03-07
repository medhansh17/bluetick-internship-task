import { Fragment } from "react";
import "./offer.styles.css";

const WhatWeOffer = () => {
  return (
    <Fragment>
      <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
        <h2
          id="services"
          className="mb-1 text-3xl font-extrabold leading-tight text-gray-900"
        >
          Services
        </h2>
        <p className="mb-12 text-lg text-gray-500">
          Here is a few of the awesome Services we provide.
        </p>
        <div className="w-full">
          <div className="flex flex-col w-full mb-10 sm:flex-row">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                      Explore AI Opportunities for Your Enterprise
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-600">
                    Unlock the potential of generative AI by identifying
                    tailored opportunities for integration within your
                    organization, ensuring a strategic and efficient approach to
                    AI implementation.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="relative h-full ml-0 md:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500  rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                      Design AI Trust Layer
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-600">
                    Prioritize data security and build trust in generative AI
                    applications with a dedicated trust layer, emphasizing
                    privacy-focused solutions that safeguard both organizational
                    and customer data.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mb-5 sm:flex-row">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500  rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                      Scalability-Focused Solutions
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-600">
                    Streamline and optimize business processes with
                    comprehensive workflow automation, ensuring seamless
                    integration of AI technologies from inception to execution
                    for increased efficiency and productivity.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2">
              <div className="relative h-full ml-0 md:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500  rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                      End to end Workflow automation
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-600">
                    Implement cutting-edge, scalable generative AI solutions
                    that not only meet current organizational needs but also
                    adapt and grow with the evolving demands of your enterprise,
                    providing a future-proof approach to AI integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default WhatWeOffer;
