import React from 'react';
import Link from 'next/link';
import { createPopper } from '@popperjs/core';

const IndexDropdown = () => {
	// dropdown props
	const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
	const btnDropdownRef = React.createRef();
	const popoverDropdownRef = React.createRef();
	const openDropdownPopover = () => {
		createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
			placement: 'bottom-start',
		});
		setDropdownPopoverShow(true);
	};
	const closeDropdownPopover = () => {
		setDropdownPopoverShow(false);
	};
	return (
		<>
			<a
				className="flex items-center px-3 py-4 text-xs font-bold uppercase hover:text-blueGray-500 text-blueGray-700 lg:py-2"
				href="#pablo"
				ref={btnDropdownRef}
				onClick={(e) => {
					e.preventDefault();
					dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
				}}
			>
        Demo Pages
			</a>
			<div
				ref={popoverDropdownRef}
				className={
					(dropdownPopoverShow ? 'block ' : 'hidden ') +
          'bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48'
				}
			>
				<span
					className={
						'text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400'
					}
				>
          Admin Layout
				</span>
				<Link href="/admin/dashboard">
					<span
						className={
							'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
						}
					>
            Dashboard
					</span>
				</Link>
				<Link href="/admin/settings">
					<span
						className={
							'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
						}
					>
            Settings
					</span>
				</Link>
				<Link href="/admin/tables">
					<span
						className={
							'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
						}
					>
            Tables
					</span>
				</Link>
				<Link href="/admin/maps">
					<span
						className={
							'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
						}
					>
            Maps
					</span>
				</Link>
				<div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
				<span
					className={
						'text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400'
					}
				>
          Auth Layout
				</span>
				<Link href="/auth/login">
					<span
						className={
							'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
						}
					>
            Login
					</span>
				</Link>
				<Link href="/auth/register">
					<span
						className={
							'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
						}
					>
            Register
					</span>
				</Link>
				<div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
				<span
					className={
						'text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400'
					}
				>
          No Layout
				</span>
				<Link href="/landing">
					<span
						className={
							'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
						}
					>
            Landing
					</span>
				</Link>
				<Link href="/profile">
					<span
						className={
							'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
						}
					>
            Profile
					</span>
				</Link>
			</div>
		</>
	);
};

export default IndexDropdown;
