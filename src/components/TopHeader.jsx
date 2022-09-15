import React from 'react'

const TopHeader = () => {
  return (
    <>
      <header className='header'>
        <div className='header-top'>
          <div className='container'>
            <div className='countdown-text'></div>
            <div className='social-wrapper'>
              <p className='social-title'>Follow us on :</p>
              <ul className='social-list'>
                <li>
                  <a href='/' className='social-link'>
                    <ion-icon
                      name='logo-facebook'
                      role='img'
                      className='md hydrated'
                      aria-label='logo facebook'
                    ></ion-icon>
                  </a>
                </li>
                <li>
                  <a href='/' className='social-link'>
                    <ion-icon
                      name='logo-twitter'
                      role='img'
                      className='md hydrated'
                      aria-label='logo twitter'
                    ></ion-icon>
                  </a>
                </li>
                <li>
                  <a href='/' className='social-link'>
                    <ion-icon
                      name='logo-pinterest'
                      role='img'
                      className='md hydrated'
                      aria-label='logo pinterest'
                    ></ion-icon>
                  </a>
                </li>
                <li>
                  <a href='/' className='social-link'>
                    <ion-icon
                      name='logo-linkedin'
                      role='img'
                      className='md hydrated'
                      aria-label='logo linkedin'
                    ></ion-icon>
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
                  <button className='navbar-link skewBg' data-nav-link=''>
                    Home
                  </button>
                </li>

                <li className='navbar-item'>
                  <a
                    href='#features'
                    className='navbar-link skewBg'
                    data-nav-link
                  >
                    Services
                  </a>
                </li>

                <li className='navbar-item'>
                  <button className='navbar-link skewBg' data-nav-link=''>
                    Blog
                  </button>
                </li>
                <li className='navbar-item'>
                  <button className='navbar-link skewBg' data-nav-link=''>
                    Contact
                  </button>
                </li>
              </ul>
            </nav>

            <div className='header-actions'>
              <button className='cart-btn' aria-label='cart'>
                <ion-icon name='cart'></ion-icon>

                <span className='cart-badge'>0</span>
              </button>

              <button
                className='search-btn'
                aria-label='open search'
                data-search-toggler=''
              >
                <ion-icon
                  name='search-outline'
                  role='img'
                  className='md hydrated'
                  aria-label='search outline'
                ></ion-icon>
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
