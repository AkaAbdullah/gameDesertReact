import React from 'react'
import game1 from '../assests/images/latest-game-2.jpg'
import game2 from '../assests/images/latest-game-1.jpg'
import game3 from '../assests/images/latest-game-3.jpg'

const Services = () => {
  return (
    <>
      <div className='section-wrapper' id='services'>
        <section className='section latest-game' aria-label='latest game'>
          <div className='container'>
            <p className='section-subtitle'>Latest Releases</p>

            <h2 className='h2 section-title'>
              OUR <span className='span'>GAMES</span>
            </h2>

            <ul className='has-scrollbar'>
              <li className='scrollbar-item'>
                <div className='latest-game-card'>
                  <figure
                    className='card-banner img-holder'
                    style={{ width: '400', height: '470' }}
                  >
                    <img
                      src={game2}
                      width='400'
                      height='470'
                      loading='lazy'
                      alt='White Walker Daily'
                      className='img-cover'
                    />
                  </figure>

                  <div className='card-content'>
                    <a href='/' className='card-badge skewBg'>
                      Zombie
                    </a>

                    <h3 className='h3'>
                      <a href='/' className='card-title'>
                        White Walker <span className='span'>Daily</span>
                      </a>
                    </h3>
                  </div>
                </div>
              </li>

              <li className='scrollbar-item'>
                <div className='latest-game-card'>
                  <figure
                    className='card-banner img-holder'
                    style={{ width: '400', height: '470' }}
                  >
                    <img
                      src={game1}
                      width='400'
                      height='470'
                      loading='lazy'
                      alt='Hunter Killer II'
                      className='img-cover'
                    />
                  </figure>

                  <div className='card-content'>
                    <a href='/' className='card-badge skewBg'>
                      Adventure
                    </a>

                    <h3 className='h3'>
                      <a href='/' className='card-title'>
                        Hunter Killer <span className='span'>II</span>
                      </a>
                    </h3>
                  </div>
                </div>
              </li>

              <li className='scrollbar-item'>
                <div className='latest-game-card'>
                  <figure
                    className='card-banner img-holder'
                    style={{ width: '400', height: '470' }}
                  >
                    <img
                      src={game3}
                      width='400'
                      height='470'
                      loading='lazy'
                      alt='Cyberpunk Daily'
                      className='img-cover'
                    />
                  </figure>

                  <div className='card-content'>
                    <a href='/' className='card-badge skewBg'>
                      Action
                    </a>

                    <h3 className='h3'>
                      <a href='/' className='card-title'>
                        Cyberpunk <span className='span'>Daily</span>
                      </a>
                    </h3>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}

export default Services
