import React from 'react'
import payment from '../assests/images/footer-bottom-img.png'
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from 'react-icons/ai'
import { BsPinterest, BsFillTelephoneFill } from 'react-icons/bs'
import { IoLocationSharp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <>
      <footer className='footer' id='footer'>
        <div className='footer-top'>
          <div className='container'>
            <div className='footer-brand'>
              <a href='/' className='logo'>
                Desert Game Studio
              </a>
              <p className='footer-text'>
                Desert Game Studio focusing on quality games.
              </p>
              <ul className='contact-list'>
                <li className='contact-item'>
                  <div className='contact-icon'>
                    <IoLocationSharp />
                  </div>
                  <address className='item-text'>
                    Address : 2A Compton Avenue East Ham, London E6 3DP , UK
                  </address>
                </li>
                <li className='contact-item'>
                  <div className='contact-icon'>
                    <IoLocationSharp />
                  </div>
                  <address className='item-text'>
                    Address : MangoSpace 182 Y Commercial Area, Sector Y DHA
                    Phase 3 Lahore, Pakisan
                  </address>
                </li>
                <li className='contact-item'>
                  <div className='contact-icon'>
                    <BsFillTelephoneFill />
                  </div>
                  <a href='tel:+447477320233' className='item-text'>
                    Phone : +44 747 7320233
                  </a>
                </li>
                <li className='contact-item'>
                  <div className='contact-icon'>
                    <BsFillTelephoneFill />
                  </div>
                  <a href='tel:+923059192811' className='item-text'>
                    Phone : +92 305 9192811
                  </a>
                </li>
                <li className='contact-item'>
                  <div className='contact-icon'>
                    <MdEmail />
                  </div>
                  <a
                    href='mailto:info@desertgamestudio.com'
                    className='item-text'
                  >
                    Email : info@desertgamestudio.com
                  </a>
                </li>
              </ul>
            </div>

            <ul className='footer-list'>
              <li>{/* <p className='footer-list-title'>Careers</p> */}</li>

              {/* <li>
                <a href='mailto:HR@desertgamestudio.com' className='footer-link'>
                  HR@desertgamestudio.com
                </a>
              </li> */}
            </ul>

            <ul className='footer-list'>
              <li>
                <p className='footer-list-title'>Need Help?</p>
              </li>

              <li>
                <a href='/' className='footer-link'>
                  Terms &amp; Conditions
                </a>
              </li>

              <li>
                <a href='/' className='footer-link'>
                  Privacy Policy
                </a>
              </li>
            </ul>

            <div className='footer-wrapper'>
              <div className='social-wrapper'>
                <p className='footer-list-title'>Follow Us</p>

                <ul className='social-list'>
                  <li>
                    <a
                      href='/'
                      className='social-link'
                      style={{ backgroundColor: '#3b5998' }}
                    >
                      <AiFillFacebook />
                    </a>
                  </li>

                  <li>
                    <a
                      href='/'
                      className='social-link'
                      style={{ backgroundColor: '#55acee' }}
                    >
                      <AiFillTwitterSquare />
                    </a>
                  </li>

                  <li>
                    <a
                      href='/'
                      className='social-link'
                      style={{ backgroundColor: '#d71e18' }}
                    >
                      <BsPinterest />
                    </a>
                  </li>

                  <li>
                    <a
                      href='/'
                      className='social-link'
                      style={{ backgroundColor: '#1565c0' }}
                    >
                      <AiFillLinkedin />
                    </a>
                  </li>
                </ul>
              </div>

              <div className='footer-newsletter'>
                <p className='footer-list-title'>Newsletter Sign Up</p>

                <form action='' className='footer-newsletter'>
                  <input
                    type='email'
                    name='email_address'
                    aria-label='email'
                    placeholder='Enter your email'
                    required=''
                    className='email-field'
                  />

                  <button
                    type='submit'
                    className='footer-btn'
                    aria-label='submit'
                  >
                    <ion-icon
                      name='rocket'
                      role='img'
                      className='md hydrated'
                      aria-label='rocket'
                    ></ion-icon>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className='footer-bottom'>
          <div className='container'>
            <p className='copyright'>
              © 2022 Desert Game Studio. All Right Reserved by{' '}
              <a href='/' className='copyright-link'>
                codewithsadee
              </a>
            </p>

            <img
              src={payment}
              width='340'
              height='21'
              loading='lazy'
              alt=''
              className='footer-bottom-img'
            />
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
