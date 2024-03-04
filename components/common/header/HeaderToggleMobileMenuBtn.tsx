"use client"

import React, { useState } from 'react'
import MenuHamburgerIcon from "@/components/svg/menuHamburger";
import CloseIcon from "@/components/svg/closeIcon";

const HeaderToggleMobileMenuBtn = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	return (
		<button
			className="navbar-toggler collapsed"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#main_nav"
			aria-expanded="false"
			aria-label="Toggle navigation"
			onClick={() => setIsOpen(!isOpen)}
		>
			{isOpen ? <CloseIcon /> : <MenuHamburgerIcon fill={"white"} />}
		</button>
	)
}

export default HeaderToggleMobileMenuBtn
