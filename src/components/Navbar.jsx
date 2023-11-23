import { useEffect,useState } from 'react';
import { Disclosure } from '@headlessui/react';

import burgerButton from '@/assets/images/burger-button.png';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const Navbar = () => {
  const [navigation, setNavigation] = useState([
    { name: 'Beranda', href: '#', current: true, id: '' },
    { name: 'Tentang Kami', href: '#', current: false, id: 'tentang-kami' },
    { name: 'Kontak', href: '#', current: false, id: 'kontak' },
  ]);

  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  const handleItemClick = (clickedItem) => {
    const updatedNavigation = navigation.map((item) => ({
      ...item,
      current: item.name === clickedItem.name,
      href: `#${item.id}`,
    }));
    setNavigation(updatedNavigation);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsNavbarFixed(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`container px-6 max-w-none sticky top-0 z-40 ${isNavbarFixed ? 'bg-white shadow-md' : ''}`}>
      <nav id="beranda">
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-full">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="hover: relative inline-flex items-center justify-center rounded-md p-2 text-greyDestimate-100 hover:text-primary-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <p className="block h-6 w-6" aria-hidden="true">
                          X
                        </p>
                      ) : (
                        <img src={burgerButton} className="block h-6 w-6" aria-hidden="true"></img>
                      )}
                    </Disclosure.Button>
                  </div>

                  <img className="h-8 w-auto" src="/logo-3.png" alt="Destimate" />
                  <div className="flex flex-shrink-0 items-center">
                    <div className="hidden sm:ml-6 sm:block ">
                      <div className="flex space-x-4 gap-6">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            onClick={() => handleItemClick(item)}
                            className={classNames(
                              item.current
                                ? 'font-bold text-primary-100'
                                : ' hover: font-bold text-black hover:text-primary-100',
                              'rounded-md px-3 py-2 font-heading text-sm font-semibold'
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
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      onClick={() => handleItemClick(item)}
                      className={classNames(
                        item.current
                          ? ' font-bold text-primary-100'
                          : 'hover: font-bold text-greyDestimate-100 hover:text-primary-100',
                        'block rounded-md px-3 py-2 font-heading text-base font-semibold'
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
    </div>
  );
};
