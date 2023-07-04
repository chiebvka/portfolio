'use client'

import {  Fragment, useState } from 'react'
import { Caveat } from 'next/font/google'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
  }
   

const cavet = Caveat({ subsets: ['latin'] })
const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]



export default function Header ()  {

  interface BooleanType {
    boleanstate: Boolean
  }

  let initalState : boolean
  initalState = false

  const [mobileMenuOpen, setMobileMenuOpen] = useState<BooleanType>(initalState);
  return (
    <div className="   w-full flex  max-w-5xl items-center  justify-between font-mono text-sm ">
      <div className=" flex  justify-center  mt-3  p-2  ">
        <Link href="/"  className={`${cavet.className} text-4xl text-[#bebebe] font-extrabold`}>Ebvka.</Link>  
      </div>
      <div className=" flex items-end justify-center  hover:shine transition-all duration-150 delay-500 ease-in  lg:static lg:h-auto lg:w-auto lg:bg-none">
        {/* <FaBarsStaggered /> */}
        <div className="flex  mt-3">
          <button
            type="button"
            className=" inline-flex items-center lg:hidden justify-center rounded-md p-2.5 text-gray-700 has-before bg-[#1b1b1d] hover:shine hover:mt-5 hover:ml-3  border border-slate-400 transition-all duration-150 delay-250  ease-in"
            onClick={() => setMobileMenuOpen(true)}
          >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6 text-white " aria-hidden="true" />
        </button>
        </div>

      <Dialog as="div" className="lg:hidden has-before hover:shine transition-all duration-150 delay-250" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
      <div className="fixed inset-0  z-10" ></div>
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto hover:shine transition-all duration-150 delay-500  bg-[#bebebe]  px-6 py-6">
      {/* <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-11/12 overflow-y-auto bg-white  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"> */}
        <div className="flex w-11/12 mx-auto items-center justify-between">
          <Link href="/"  onClick={() => setMobileMenuOpen(false)} className="md:ml-7 mb-7  p-1.5">
            <span className={`${cavet.className} text-4xl font-extrabold text-slate-700 `}>Ebvka.</span>
          </Link>
          <button
            type="button"
            className=" md:mr-7 mb-5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 w-11/12 mx-auto flow-root">
          <div className="-my-6 md:ml-7 mb-7 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
          
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Home
              </Link>
              <Link
                href="/works"
                onClick={() => setMobileMenuOpen(false)}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Projects
              </Link>
              <Link
                href="/articles"
                onClick={() => setMobileMenuOpen(false)}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Articles
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Contact
              </Link>
            </div>

          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
      </div>
  </div>
  )
}
