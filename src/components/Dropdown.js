/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import {Link} from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dropdown(props) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="inline-flex justify-center w-full rounded-md px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none  ">
              {props.dropdownTitle}
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="py-1">
                  {
            props.dropdownItem.map((item)=>{
                return (
                    <>
                    <Menu.Item>
                    {({ active }) => (
                      <Link to={props.linkTo}>
                      <a
                        href="//#"
                        key = {props.linkTo}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        {item}
                      </a>
                      </Link>
                    )}
                  </Menu.Item>
</>
                )
            })
             
        }
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
