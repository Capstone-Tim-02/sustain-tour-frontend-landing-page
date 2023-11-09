import { Disclosure} from '@headlessui/react'
import strips3 from "@/assets/strips3.png"

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'About Us', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Navbar = () => {
  return (
    <nav id="navbar">
      <Disclosure as="nav" className="bg-[#FFFFFF]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-full ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-greyDestimate-100 hover: hover:text-primary-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <p className="block h-6 w-6" aria-hidden="true" >X</p>
                  ) : (
                    <img src={strips3} className="block h-6 w-6" aria-hidden="true">
                    </img>
                  )}
                </Disclosure.Button>
              </div>
                <div className="flex flex-shrink-0 items-center ">
                  <a href="">
                  <img
                    className="h-8 w-auto"
                    src="/public/logo-3.png"
                    alt="Destimate"
                  />
                  </a>
                </div>
                <div className="hidden sm:ml-6 sm:block ">
                  <div className="flex space-x-4 ">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'text-primary-100 font-bold' : ' font-bold text-black hover: hover:text-primary-100',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? ' text-primary-100 font-bold' : 'font-bold text-greyDestimate-100 hover: hover:text-primary-100',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </nav>
  );
};
