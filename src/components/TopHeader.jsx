import React, { useState } from 'react'
import SearchModal from './SearchModal'
import { Link } from 'react-scroll'
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from 'react-icons/ai'
import { BsPinterest, BsSearch } from 'react-icons/bs'

const TopHeader = () => {
  const [modal, setModal] = useState(false)
  const handleSearch = () => {
    setModal(true)
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
                className='nav-toggle-btn'
                aria-label='toggle menu'
                data-nav-toggler=''
              >
                <ion-icon
                  name='menu-outline'
                  className='menu md hydrated'
                  role='img'
                  aria-label='menu outline'
                ></ion-icon>
                <ion-icon
                  name='close-outline'
                  className='close md hydrated'
                  role='img'
                  aria-label='close outline'
                ></ion-icon>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default TopHeader
