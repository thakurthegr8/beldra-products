
import { PaperClipIcon } from "@heroicons/react/solid";

export default function DescriptionList() {
  return (
  
<div className="bg-white overflow-hidden md:border">
  <div className="px-4 py-5 sm:px-6">
    <h3 className="text-2xl leading-6 font-bold text-gray-900 text-left">
      Website Services
    </h3>
    <p className="mt-1 max-w-2xl text-normal text-gray-500 text-left">
      Company details and application.
    </p>
  </div>
  <div className="border-t border-gray-200">
    <dl>
      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-normal font-medium text-gray-500 text-left">
          Company Name
        </dt>
        <dd className="mt-1 text-normal text-gray-900 sm:mt-0 sm:col-span-2 text-left">
          Beldra Industries
        </dd>
      </div>
      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-normal font-medium text-gray-500 text-left">
          Address
        </dt>
        <dd className="mt-1 text-normal text-gray-900 sm:mt-0 sm:col-span-2 text-left">
        SITAR MANZIL,<br/>SIRHINDI BAZAR,<br/>PATIALA 147001 (PUNJAB),<br/>INDIA
        </dd>
        
      </div>
      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-normal font-medium text-gray-500 text-left">
          Email address
        </dt>
        <dd className="mt-1 text-normal text-gray-900 sm:mt-0 sm:col-span-2 text-left">
          <a className="block underline" href="mailto:info@beldra.com">info@beldra.com</a>
          <a className="block underline mt-2" href="mailto:export@beldra.com">export@beldra.com</a>  
          <a className="block underline mt-2" href="mailto:middashashank@gmail.com">middashashank@gmail.com </a>  
        </dd>
      </div>
      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-normal font-medium text-gray-500 text-left">
        Call Us
        </dt>
        <dd className="mt-1 text-normal text-gray-900 sm:mt-0 sm:col-span-2 text-left">
        <a className="block underline" href="tel:+918699113377">+91 8699113377</a>
          <a className="block underline mt-2" href="tel:+918699116765">+91 8699116765</a>  
          <a className="block underline mt-2" href="tel:+911752303377">+91 1752303377 </a>  
        </dd>
      </div>
      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-normal font-medium text-gray-500 text-left">
          Skype
        </dt>
        <dd className="mt-1 text-normal text-gray-900 sm:mt-0 sm:col-span-2 text-left">
          middashashank
        </dd>
      </div>
      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-normal font-medium text-gray-500 text-left">
          About
        </dt>
        <dd className="mt-1 text-normal text-gray-900 sm:mt-0 sm:col-span-2 text-left">
        Our Mission Statement reflects the commitment towards long-term association with our clients. Quality parameters have always been given paramount importance in our business. That is why we give more stress on the quality of the product so that it can be appreciated in the world market.
        </dd>
      </div>
      {/* <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-normal font-medium text-gray-500 text-left">
          Attachments
        </dt>
        <dd className="mt-1 text-normal text-gray-900 sm:mt-0 sm:col-span-2">
          <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
            <li className="pl-3 pr-4 py-3 flex items-center justify-between text-normal">
              <div className="w-0 flex-1 flex items-center">
                <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                </svg>
                <span className="ml-2 flex-1 w-0 truncate">
                  resume_back_end_developer.pdf
                </span>
              </div>
              <div className="ml-4 flex-shrink-0">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Download
                </a>
              </div>
            </li>
            <li className="pl-3 pr-4 py-3 flex items-center justify-between text-normal">
              <div className="w-0 flex-1 flex items-center">
                <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                </svg>
                <span className="ml-2 flex-1 w-0 truncate">
                  coverletter_back_end_developer.pdf
                </span>
              </div>
              <div className="ml-4 flex-shrink-0">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Download
                </a>
              </div>
            </li>
          </ul>
        </dd>
      </div> */}
    </dl>
  </div>
</div>

  );
}
