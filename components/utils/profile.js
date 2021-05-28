import { Menu } from '@headlessui/react'
import { UserCircleIcon } from '@heroicons/react/solid'

export const Profile = ({ className = "" }) => {
    return (
        <Menu as="div" className={`relative ${className}`}>
            {({ open }) => (
                <>
                    <div>
                        <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-2xl text-white focus:outline-none">
                            <UserCircleIcon className="block h-7 w-7 text-2xl" />
                        </Menu.Button>
                    </div>

                    {open && <Menu.Items
                        className="origin-top-right absolute
                        right-0 mt-2 pt-2 px-2 w-48
                        rounded-md shadow-lg bg-white focus:outline-none"
                    >
                        {["Settings", "Log Out"].map((item) => (
                            // <Link ..
                            <Menu.Item key={item}>
                                {({ active }) => (
                                    <a
                                        href="#"
                                        className={'block px-4 py-3 mb-2 text-sm rounded-lg text-gray-700 ' +
                                        (active ? 'bg-gray-100' : '')}
                                    >
                                        {item}
                                    </a>
                                )}
                            </Menu.Item>
                        ))}
                    </Menu.Items>
                    }
                </>
            )}
        </Menu>
    )
}