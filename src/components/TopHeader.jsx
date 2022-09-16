import React, { useContext } from 'react'
import SearchModal from './SearchModal'
import { Link } from 'react-scroll'
import { GiHamburgerMenu } from 'react-icons/gi'
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiOutlineClose,
} from 'react-icons/ai'
import { BsPinterest, BsSearch } from 'react-icons/bs'
import { NavBarContext } from '../context/cssContext'
import MenuDropDown from './MenuDropDown'

const TopHeader = () => {
  const { state1 } = useContext(NavBarContext)
  const [mobView, setMobView] = state1
  const { state2 } = useContext(NavBarContext)
  const [modal, setModal] = state2
  const { state3 } = useContext(NavBarContext)
  const [hamBurger, setHamburger] = state3
  const { state4 } = useContext(NavBarContext)
  const [cross, setCross] = state4
  const { state5 } = useContext(NavBarContext)
  const [toogle, setToogle] = state5

  const handleSearch = () => {
    setModal(true)
  }

  const handleDropDown = () => {
    setMobView(true)
    setToogle(true)
  }

  return (
    <>
      {modal && <SearchModal />}
      <header id='home' className='header'>
        <div className='header-top'>
          <div className='container'>
            <div className='countdown-text'></div>
            <div className='social-wrapper'>
              <p className='social-title'>Follow us on :</p>
              <ul className='social-list'>
                <li>
                  <a href='/' className='social-link'>
                    <AiFillFacebook />
                  </a>
                </li>
                <li>
                  <a href='/' className='social-link'>
                    <AiFillTwitterSquare />
                  </a>
                </li>
                <li>
                  <a href='/' className='social-link'>
                    <BsPinterest />
                  </a>
                </li>
                <li>
                  <a href='/' className='social-link'>
                    <AiFillLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='header-bottom skewBg' data-header=''>
          <div className='container'>
            <a href='/' className='logo'>
              Desert Game Studio
            </a>

            <nav className='navbar' data-navbar=''>
              <ul className='navbar-list'>
                <li className='navbar-item'>
                  <Link to='home' className='navbar-link skewBg'>
                    Home
                  </Link>
                </li>

                <li className='navbar-item'>
                  <Link to='services' className='navbar-link skewBg'>
                    Services
                  </Link>
                </li>

                <li className='navbar-item'>
                  <Link to='carrier' className='navbar-link skewBg'>
                    Carrier
                  </Link>
                </li>
                <li className='navbar-item'>
                  <Link to='contact' className='navbar-link skewBg'>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            <div className='header-actions'>
              <button
                className='search-btn'
                aria-label='open search'
                data-search-toggler=''
                onClick={handleSearch}
              >
                <BsSearch />
              </button>

              <button
                onClick={handleDropDown}
                className='nav-toggle-btn'
                aria-label='toggle menu'
              >
                {toogle ? <AiOutlineClose /> : <GiHamburgerMenu />}
                {mobView && <MenuDropDown />}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default TopHeader
