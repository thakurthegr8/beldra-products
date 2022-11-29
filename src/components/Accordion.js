import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

export default function AccordionItem(props) {
  return (
    <div className="w-full max-w-md p-1 mx-auto bg-gray-50 rounded-2xl">
      {
        <Disclosure>
          {({ open }) => (
            <>
              {/* <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-900 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"> */}

              <Disclosure.Button
                className={`${
                  open ? "bg-yellow-200 text-yellow-600" : ""
                } flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-900 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75`}
              >
                <span>{props.item}</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180 text-yellow-500" : ""
                  } w-5 h-5 text-gray-500 `}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pt-2 pb-2 text-sm text-gray-500 flex flex-col">
                {props.subItems.map((item) => {
                  return (
                    <>
                    <li className="list-none justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <Link to={item.link}>
                      <a href="//#" className="block">
                        {item.title}
                      </a>
                      </Link>
                    </li>
                    <hr/>
                    </>
                  );
                })}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      }
    </div>
  );
}
