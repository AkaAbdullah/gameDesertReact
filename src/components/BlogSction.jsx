import React from 'react'
import blog1 from '../assests/images/blog-1.jpg'
import blog2 from '../assests/images/blog-2.jpg'
import blog3 from '../assests/images/blog-3.jpg'

const BlogSction = () => {
  return (
    <>
      <section className='section blog' id='blog' aria-label='blog'>
        <div className='container'>
          <h2 className='h2 section-title'>
            Latest News &amp; <span className='span'>Articles</span>
          </h2>

          <p className='section-text'>
            Compete With 100 Players On A Remote Island For Winner Takes
            Showdown Known Issue Where Certain Skin Strategic
          </p>

          <ul className='blog-list'>
            <li>
              <div className='blog-card'>
                <figure
                  className='card-banner img-holder'
                  style={{ width: '400', height: '290' }}
                >
                  <img
                    src={blog1}
                    width='400'
                    height='290'
                    loading='lazy'
                    alt='Shooter Action Video'
                    className='img-cover'
                  />
                </figure>

                <div className='card-content'>
                  <ul className='card-meta-list'>
                    <li className='card-meta-item'>
                      <ion-icon
                        name='person-outline'
                        role='img'
                        className='md hydrated'
                        aria-label='person outline'
                      ></ion-icon>

                      <a href='/' className='item-text'>
                        Admin
                      </a>
                    </li>

                    <li className='card-meta-item'>
                      <ion-icon
                        name='calendar-outline'
                        role='img'
                        className='md hydrated'
                        aria-label='calendar outline'
                      ></ion-icon>

                      <time dateTime='2022-09-19' className='item-text'>
                        September 19, 2022
                      </time>
                    </li>
                  </ul>

                  <h3>
                    <a href='/' className='card-title'>
                      Shooter Action Video
                    </a>
                  </h3>

                  <p className='card-text'>
                    Compete With 100 Players On A Remote Island Thats Winner
                    Takes Showdown Known Issue.
                  </p>

                  <a href='/' className='card-link'>
                    <span className='span'>Read More</span>

                    <ion-icon
                      name='caret-forward'
                      role='img'
                      className='md hydrated'
                      aria-label='caret forward'
                    ></ion-icon>
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div className='blog-card'>
                <figure
                  className='card-banner img-holder'
                  style={{ width: '400', height: '290' }}
                >
                  <img
                    src={blog2}
                    loading='lazy'
                    alt='The Walking Dead'
                    className='img-cover'
                  />
                </figure>

                <div className='card-content'>
                  <ul className='card-meta-list'>
                    <li className='card-meta-item'>
                      <ion-icon
                        name='person-outline'
                        role='img'
                        className='md hydrated'
                        aria-label='person outline'
                      ></ion-icon>

                      <a href='/' className='item-text'>
                        Admin
                      </a>
                    </li>

                    <li className='card-meta-item'>
                      <ion-icon
                        name='calendar-outline'
                        role='img'
                        className='md hydrated'
                        aria-label='calendar outline'
                      ></ion-icon>

                      <time dateTime='2022-09-19' className='item-text'>
                        September 19, 2022
                      </time>
                    </li>
                  </ul>

                  <h3>
                    <a href='/' className='card-title'>
                      The Walking Dead
                    </a>
                  </h3>

                  <p className='card-text'>
                    Compete With 100 Players On A Remote Island Thats Winner
                    Takes Showdown Known Issue.
                  </p>

                  <a href='/' className='card-link'>
                    <span className='span'>Read More</span>

                    <ion-icon
                      name='caret-forward'
                      role='img'
                      className='md hydrated'
                      aria-label='caret forward'
                    ></ion-icon>
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div className='blog-card'>
                <figure
                  className='card-banner img-holder'
                  style={{ width: '400', height: '290' }}
                >
                  <img
                    src={blog3}
                    width='400'
                    height='290'
                    loading='lazy'
                    alt='Defense Of The Ancients'
                    className='img-cover'
                  />
                </figure>

                <div className='card-content'>
                  <ul className='card-meta-list'>
                    <li className='card-meta-item'>
                      <ion-icon
                        name='person-outline'
                        role='img'
                        className='md hydrated'
                        aria-label='person outline'
                      ></ion-icon>

                      <a href='/' className='item-text'>
                        Admin
                      </a>
                    </li>

                    <li className='card-meta-item'>
                      <ion-icon
                        name='calendar-outline'
                        role='img'
                        className='md hydrated'
                        aria-label='calendar outline'
                      ></ion-icon>

                      <time dateTime='2022-09-19' className='item-text'>
                        September 19, 2022
                      </time>
                    </li>
                  </ul>

                  <h3>
                    <a href='/' className='card-title'>
                      Defense Of The Ancients
                    </a>
                  </h3>
                  <p className='card-text'>
                    Compete With 100 Players On A Remote Island Thats Winner
                    Takes Showdown Known Issue.
                  </p>
                  <a href='/' className='card-link'>
                    <span className='span'>Read More</span>
                    <ion-icon
                      name='caret-forward'
                      role='img'
                      className='md hydrated'
                      aria-label='caret forward'
                    ></ion-icon>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default BlogSction
