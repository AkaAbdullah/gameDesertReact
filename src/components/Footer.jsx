import React from 'react'
import payment from '../assests/images/footer-bottom-img.png'

const Footer = () => {
  return (
    <>
      <footer class='footer' id='footer'>
        <div class='footer-top'>
          <div class='container'>
            <div class='footer-brand'>
              <a href='/' class='logo'>
                Desert Game Studio
              </a>
              <p class='footer-text'>
                Desert Game Studio focusing on quality games.
              </p>
              <ul class='contact-list'>
                <li class='contact-item'>
                  <div class='contact-icon'>
                    <ion-icon
                      name='location'
                      role='img'
                      class='md hydrated'
                      aria-label='location'
                    ></ion-icon>
                  </div>
                  <address class='item-text'>
                    Address : 2A Compton Avenue East Ham, London E6 3DP , UK
                  </address>
                </li>
                <li class='contact-item'>
                  <div class='contact-icon'>
                    <ion-icon
                      name='location'
                      role='img'
                      class='md hydrated'
                      aria-label='location'
                    ></ion-icon>
                  </div>
                  <address class='item-text'>
                    Address : MangoSpace 182 Y Commercial Area, Sector Y DHA
                    Phase 3 Lahore, Pakisan
                  </address>
                </li>
                <li class='contact-item'>
                  <div class='contact-icon'>
                    <ion-icon
                      name='headset'
                      role='img'
                      class='md hydrated'
                      aria-label='headset'
                    ></ion-icon>
                  </div>
                  <a href='tel:+447477320233' class='item-text'>
                    Phone : +44 747 7320233
                  </a>
                </li>
                <li class='contact-item'>
                  <div class='contact-icon'>
                    <ion-icon
                      name='headset'
                      role='img'
                      class='md hydrated'
                      aria-label='headset'
                    ></ion-icon>
                  </div>
                  <a href='tel:+923059192811' class='item-text'>
                    Phone : +92 305 9192811
                  </a>
                </li>
                <li class='contact-item'>
                  <div class='contact-icon'>
                    <ion-icon
                      name='mail-open'
                      role='img'
                      class='md hydrated'
                      aria-label='mail open'
                    ></ion-icon>
                  </div>
                  <a href='mailto:info@desertgamestudio.com' class='item-text'>
                    Email : info@desertgamestudio.com
                  </a>
                </li>
              </ul>
            </div>

            <ul class='footer-list'>
              <li>
                <p class='footer-list-title'>Careers</p>
              </li>

              <li>
                <a href='mailto:HR@desertgamestudio.com' class='footer-link'>
                  HR@desertgamestudio.com
                </a>
              </li>
            </ul>

            <ul class='footer-list'>
              <li>
                <p class='footer-list-title'>Need Help?</p>
              </li>

              <li>
                <a href='/' class='footer-link'>
                  Terms &amp; Conditions
                </a>
              </li>

              <li>
                <a href='/' class='footer-link'>
                  Privacy Policy
                </a>
              </li>
            </ul>

            <div class='footer-wrapper'>
              <div class='social-wrapper'>
                <p class='footer-list-title'>Follow Us</p>

                <ul class='social-list'>
                  <li>
                    <a
                      href='/'
                      class='social-link'
                      style={{ backgroundColor: '#3b5998' }}
                    >
                      <ion-icon
                        name='logo-facebook'
                        role='img'
                        class='md hydrated'
                        aria-label='logo facebook'
                      ></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a
                      href='/'
                      class='social-link'
                      style={{ backgroundColor: '#55acee' }}
                    >
                      <ion-icon
                        name='logo-twitter'
                        role='img'
                        class='md hydrated'
                        aria-label='logo twitter'
                      ></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a
                      href='/'
                      class='social-link'
                      style={{ backgroundColor: '#d71e18' }}
                    >
                      <ion-icon
                        name='logo-pinterest'
                        role='img'
                        class='md hydrated'
                        aria-label='logo pinterest'
                      ></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a
                      href='/'
                      class='social-link'
                      style={{ backgroundColor: '#1565c0' }}
                    >
                      <ion-icon
                        name='logo-linkedin'
                        role='img'
                        class='md hydrated'
                        aria-label='logo linkedin'
                      ></ion-icon>
                    </a>
                  </li>
                </ul>
              </div>

              <div class='footer-newsletter'>
                <p class='footer-list-title'>Newsletter Sign Up</p>

                <form action='' class='footer-newsletter'>
                  <input
                    type='email'
                    name='email_address'
                    aria-label='email'
                    placeholder='Enter your email'
                    required=''
                    class='email-field'
                  />

                  <button type='submit' class='footer-btn' aria-label='submit'>
                    <ion-icon
                      name='rocket'
                      role='img'
                      class='md hydrated'
                      aria-label='rocket'
                    ></ion-icon>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class='footer-bottom'>
          <div class='container'>
            <p class='copyright'>
              © 2022 Desert Game Studio. All Right Reserved by{' '}
              <a href='/' class='copyright-link'>
                codewithsadee
              </a>
            </p>

            <img
              src={payment}
              width='340'
              height='21'
              loading='lazy'
              alt=''
              class='footer-bottom-img'
            />
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
