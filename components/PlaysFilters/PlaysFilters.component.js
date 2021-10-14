import { Disclosure } from '@headlessui/react'
import {BiChevronDown, BiChevronUp} from "react-icons/bi";
const PlaysFilter = (props) => {
  return (
    <Disclosure>
    {({ open }) => (
      <>
      <Disclosure.Button className="px-3 py-2 flex items-center gap-3">
      {open ? <BiChevronUp /> : <BiChevronDown />}

         <span className={open ? "text-red-600" : "text-gray-700"}>
           {props.title}
         </span>

         <span className= "text-gray-700 text-sm pl-32">
           {props.subtitle}
        </span>

      </Disclosure.Button>


      <Disclosure.Panel className="text-gray-500">
        <div className="flex item-center gap-2 flex-wrap px-4 bg-gray-100">
         {props.tags.map((tag) => (
           <>
            <div className="border border-yellow-400 text-base px-3 py-1">
            <span className="text-red-600">{tag}</span>
            </div>
           </>
         ))

         }
        </div>
      </Disclosure.Panel>
      </>
    )}
    </Disclosure>
  );
};

export default PlaysFilter;
