import React from 'react'

import rg1 from '../assests/images/featured-game-1.jpg'
import rg2 from '../assests/images/featured-game-2.jpg'
import rg3 from '../assests/images/featured-game-3.jpg'
import rg4 from '../assests/images/featured-game-4.jpg'
import icon from '../assests/images/featured-game-icon.png'

const ReleasedGames = () => {
  return (
    <>
      <section
        className='section featured-game'
        id='features'
        aria-label='featured game'
      >
        <div className='container'>
          <h2 className='h2 section-title'>
            All Released <span className='span'>Games</span>
          </h2>

          <ul className='has-scrollbar'>
            <li className='scrollbar-item'>
              <div className='featured-game-card'>
                <figure
                  className='card-banner img-holder'
                  style={{ width: '450', height: '600' }}
                >
                  <img
                    src={rg1}
                    width='450'
                    height='600'
                    loading='lazy'
                    alt='Just for Gamers'
                    className='img-cover'
                  />
                </figure>

                <div className='card-content'>
                  <h3 className='h3'>
                    <a href='/' className='card-title' tabIndex='-1'>
                      Just for <span className='span'>Gamers</span>
                    </a>
                  </h3>

                  <span className='card-meta'>
                    <ion-icon
                      name='notifications'
                      role='img'
                      className='md hydrated'
                      aria-label='notifications'
                    ></ion-icon>

                    <span className='span'>Playstation 5, Xbox</span>
                  </span>
                </div>

                <div className='card-content-overlay'>
                  <img
                    src={icon}
                    width='36'
                    height='61'
                    loading='lazy'
                    alt=''
                    className='card-icon'
                  />

                  <h3 className='h3'>
                    <a href='/' className='card-title'>
                      Just for <span className='span'>Gamers</span>
                    </a>
                  </h3>

                  <span className='card-meta'>
                    <ion-icon
                      name='notifications'
                      role='img'
                      className='md hydrated'
                      aria-label='notifications'
                    ></ion-icon>

                    <span className='span'>Playstation 5, Xbox</span>
                  </span>
                </div>
              </div>
            </li>

            <li className='scrollbar-item'>
              <div className='featured-game-card'>
                <figure
                  className='card-banner img-holder'
                  style={{ width: '450', height: '600' }}
                >
                  <img
                    src={rg2}
                    width='450'
                    height='600'
                    loading='lazy'
                    alt='Need for Speed'
                    className='img-cover'
                  />
                </figure>

                <div className='card-content'>
                  <h3 className='h3'>
                    <a href='/' className='card-title' tabIndex='-1'>
                      Need for <span className='span'>Speed</span>
                    </a>
                  </h3>

                  <span className='card-meta'>
                    <ion-icon
                      name='notifications'
                      role='img'
                      className='md hydrated'
                      aria-label='notifications'
                    ></ion-icon>

                    <span className='span'>Playstation 5, Xbox</span>
                  </span>
                </div>

                <div className='card-content-overlay'>
                  <img
                    src={icon}
                    width='36'
                    height='61'
                    loading='lazy'
                    alt=''
                    className='card-icon'
                  />

                  <h3 className='h3'>
                    <a href='/' className='card-title'>
                      Need for <span className='span'>Speed</span>
                    </a>
                  </h3>

                  <span className='card-meta'>
                    <ion-icon
                      name='notifications'
                      role='img'
                      className='md hydrated'
                      aria-label='notifications'
                    ></ion-icon>

                    <span className='span'>Playstation 5, Xbox</span>
                  </span>
                </div>
              </div>
            </li>

            <li className='scrollbar-item'>
              <div className='featured-game-card'>
                <figure
                  className='card-banner img-holder'
                  style={{ width: '450', height: '600' }}
                >
                  <img
                    src={rg3}
                    width='450'
                    height='600'
                    loading='lazy'
                    alt='Egypt Hunting Gamers'
                    className='img-cover'
                  />
                </figure>

                <div className='card-content'>
                  <h3 className='h3'>
                    <a href='/' className='card-title' tabIndex='-1'>
                      Egypt Hunting <span className='span'>Gamers</span>
                    </a>
                  </h3>

                  <span className='card-meta'>
                    <ion-icon
                      name='notifications'
                      role='img'
                      className='md hydrated'
                      aria-label='notifications'
                    ></ion-icon>

                    <span className='span'>Playstation 5, Xbox</span>
                  </span>
                </div>

                <div className='card-content-overlay'>
                  <img
                    src={icon}
                    width='36'
                    height='61'
                    loading='lazy'
                    alt=''
                    className='card-icon'
                  />

                  <h3 className='h3'>
                    <a href='/' className='card-title'>
                      Egypt Hunting <span className='span'>Gamers</span>
                    </a>
                  </h3>

                  <span className='card-meta'>
                    <ion-icon
                      name='notifications'
                      role='img'
                      className='md hydrated'
                      aria-label='notifications'
                    ></ion-icon>

                    <span className='span'>Playstation 5, Xbox</span>
                  </span>
                </div>
              </div>
            </li>

            <li className='scrollbar-item'>
              <div className='featured-game-card'>
                <figure
                  className='card-banner img-holder'
                  style={{ width: '450', height: '600' }}
                >
                  <img
                    src={rg4}
                    width='450'
                    height='600'
                    loading='lazy'
                    alt='Just for Gamers'
                    className='img-cover'
                  />
                </figure>

                <div className='card-content'>
                  <h3 className='h3'>
                    <a href='/' className='card-title' tabIndex='-1'>
                      Just for <span className='span'>Gamers</span>
                    </a>
                  </h3>

                  <span className='card-meta'>
                    <ion-icon
                      name='notifications'
                      role='img'
                      className='md hydrated'
                      aria-label='notifications'
                    ></ion-icon>

                    <span className='span'>Playstation 5, Xbox</span>
                  </span>
                </div>

                <div className='card-content-overlay'>
                  <img
                    src={icon}
                    width='36'
                    height='61'
                    loading='lazy'
                    alt=''
                    className='card-icon'
                  />

                  <h3 className='h3'>
                    <a href='/' className='card-title'>
                      Just for <span className='span'>Gamers</span>
                    </a>
                  </h3>

                  <span className='card-meta'>
                    <ion-icon
                      name='notifications'
                      role='img'
                      className='md hydrated'
                      aria-label='notifications'
                    ></ion-icon>

                    <span className='span'>Playstation 5, Xbox</span>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default ReleasedGames
