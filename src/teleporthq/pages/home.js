import React from 'react'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import TestimonialCard2 from '../components/testimonial-card2'
import TestimonialCard4 from '../components/testimonial-card4'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Aromatic Rusty Jackal</title>
        <meta property="og:title" content="Aromatic Rusty Jackal" />
      </Helmet>
      <header data-role="Header" className={styles['header']}>
        <img
          alt="logo"
          src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
          className={styles['image']}
        />
        <div className={styles['nav']}>
          <NavigationLinks rootClassName="rootClassName10"></NavigationLinks>
        </div>
        <div className={styles['btn-group']}>
          <button className={` ${styles['login']} ${projectStyles['button']} `}>
            Login
          </button>
          <button className={projectStyles['button']}>Register</button>
        </div>
        <div data-type="BurgerMenu" className={styles['burger-menu']}>
          <svg viewBox="0 0 1024 1024" className={styles['icon']}>
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-type="MobileMenu" className={styles['mobile-menu']}>
          <div className={styles['nav1']}>
            <div className={styles['container01']}>
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className={styles['image1']}
              />
              <div data-type="CloseMobileMenu" className={styles['menu-close']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon02']}>
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks rootClassName="rootClassName11"></NavigationLinks>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className={styles['icon04']}
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className={styles['icon06']}
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className={styles['icon08']}
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className={styles['hero']}>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1529859503572-5b9d1e68e952?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fG1pbmltYWxpc20lMjBjb3VjaHxlbnwwfHx8fDE2MjYxODI1OTE&amp;ixlib=rb-1.2.1&amp;w=1200"
          className={styles['image2']}
        />
        <div className={styles['container02']}>
          <h1 className={styles['text']}>Let’s keep things organised</h1>
          <h2 className={styles['text001']}>
            Magnificent things are very simple.
          </h2>
          <div className={styles['btn-group1']}>
            <button
              className={` ${styles['button']} ${projectStyles['button']} `}
            >
              Get Started
            </button>
            <button
              className={` ${styles['button1']} ${projectStyles['button']} `}
            >
              Learn More
            </button>
          </div>
          <span className={styles['text002']}>
            <span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span>
              <span>
                Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
                Lorem
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span>
              <span>
                ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              <span>
                Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </span>
        </div>
      </div>
      <div className={styles['hero1']}>
        <h1 className={styles['text016']}>Let&apos;s keep things organized</h1>
        <span className={styles['text017']}>
          <span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              volutpat turpis.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <br></br>
          <span>
            <span>
              Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </span>
        <div className={styles['btn-group2']}>
          <button
            className={` ${styles['button2']} ${projectStyles['button']} `}
          >
            Get Started
          </button>
          <button
            className={` ${styles['button3']} ${projectStyles['button']} `}
          >
            Learn More
          </button>
        </div>
      </div>
      <div className={styles['hero2']}>
        <div className={styles['container03']}>
          <h1 className={styles['text024']}>
            Let&apos;s keep things organised
          </h1>
          <span className={styles['text025']}>
            <span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span>
              <span>
                Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </span>
          <button
            className={` ${styles['button4']} ${projectStyles['button']} `}
          >
            Get Started
          </button>
        </div>
      </div>
      <div className={styles['pricing']}>
        <div className={styles['container04']}>
          <div className={styles['pricing-card']}>
            <span className={styles['text032']}>Free</span>
            <div className={styles['container05']}>
              <span className={styles['text033']}>
                <span>$</span>
                <span></span>
              </span>
              <span className={styles['text036']}>0</span>
            </div>
            <div className={styles['container06']}>
              <span className={styles['text037']}>
                <span>✔ Full access to design tool</span>
              </span>
              <span className={styles['text039']}>
                <span>✔ Publish with Teleport</span>
              </span>
              <span className={styles['text041']}>
                <span>✔ Subdomain publish</span>
              </span>
              <span className={styles['text043']}>
                <span>✔ Download code</span>
              </span>
            </div>
            <button
              className={` ${styles['button5']} ${projectStyles['button']} `}
            >
              Learn More
            </button>
          </div>
          <div className={styles['pricing-card1']}>
            <span className={styles['text045']}>basic</span>
            <div className={styles['container07']}>
              <span className={styles['text046']}>
                <span>$</span>
                <span></span>
              </span>
              <span className={styles['text049']}>9</span>
              <span className={styles['text050']}>
                <span>/ monthly</span>
              </span>
            </div>
            <span className={styles['text052']}>
              <span>Billed annualy or $12 month-to-month.</span>
              <span></span>
            </span>
            <div className={styles['container08']}>
              <span className={styles['text055']}>
                <span>✔ All features of FREE plan</span>
              </span>
              <span className={styles['text057']}>
                <span>✔ Connect to custom domains</span>
              </span>
              <span className={styles['text059']}>
                <span>✔ Private projects</span>
              </span>
              <span className={styles['text061']}>
                <span>✔ No project limitations</span>
              </span>
              <span className={styles['text063']}>
                <span>✔ Unlimited collabotators</span>
              </span>
            </div>
            <button
              className={` ${styles['button6']} ${projectStyles['button']} `}
            >
              Learn More
            </button>
          </div>
          <div className={styles['pricing-card2']}>
            <span className={styles['text065']}>Pro</span>
            <div className={styles['container09']}>
              <span className={styles['text066']}>
                <span>$</span>
                <span></span>
              </span>
              <span className={styles['text069']}>29</span>
              <span className={styles['text070']}>
                <span>/ monthly</span>
              </span>
            </div>
            <span className={styles['text072']}>
              <span>Billed annualy or $32 month-to-month.</span>
              <span></span>
            </span>
            <div className={styles['container10']}>
              <span className={styles['text075']}>
                <span>✔ All features of BASIC plan</span>
              </span>
              <span className={styles['text077']}>
                <span>✔ Priority support</span>
              </span>
              <span className={styles['text079']}>
                <span>✔ Premium analytics</span>
              </span>
              <span className={styles['text081']}>
                <span>✔ Version history</span>
              </span>
            </div>
            <button
              className={` ${styles['button7']} ${projectStyles['button']} `}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className={styles['testimonial']}>
        <div className={styles['container11']}>
          <div className={styles['container12']}>
            <div className={styles['container13']}>
              <TestimonialCard2
                profile_src="https://images.unsplash.com/photo-1614630982169-e89202c5e045?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxtYWxlJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUyMTk4&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName1"
              ></TestimonialCard2>
            </div>
            <TestimonialCard2
              profile_src="https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fHBvcnRyYWl0JTIwYnd8ZW58MHx8fHwxNjI2NDUyMjQw&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName2"
            ></TestimonialCard2>
          </div>
          <div className={styles['container14']}>
            <TestimonialCard4
              picture_src="https://images.unsplash.com/photo-1546456073-ea246a7bd25f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fGJsYWNrJTIwbWFufGVufDB8fHx8MTYyNjQ1MjAwOA&amp;ixlib=rb-1.2.1&amp;h=1200"
              profile_src="https://images.unsplash.com/photo-1553184118-d20774c4c1db?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMGJ3fGVufDB8fHx8MTYyNjQ1MjI0MA&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName"
            ></TestimonialCard4>
          </div>
        </div>
      </div>
      <footer className={styles['footer']}>
        <div className={styles['container15']}>
          <div className={styles['logo']}>
            <img
              alt="logo"
              src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
              className={styles['image3']}
            />
            <span className={styles['text083']}>
              <span>
                <span>
                  Professional website builder
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <br></br>
              <span>for developers.</span>
            </span>
          </div>
          <div className={styles['links-container']}>
            <div className={styles['container16']}>
              <div className={styles['product-container']}>
                <span className={styles['text089']}>Product</span>
                <span className={styles['text090']}>Features</span>
                <span className={styles['text091']}>Pricing</span>
                <span className={styles['text092']}>Tutorials</span>
                <span>Releases</span>
              </div>
              <div className={styles['company-container']}>
                <span className={styles['text094']}>Company</span>
                <span className={styles['text095']}>About</span>
                <span className={styles['text096']}>Careers</span>
                <span className={styles['text097']}>Contact</span>
                <span>Blog</span>
              </div>
            </div>
            <div className={styles['container17']}>
              <div className={styles['contact']}>
                <span className={styles['text099']}>Contact Us</span>
                <span className={styles['text100']}>hello@teleporthq.io</span>
                <span>+123 (4567) 890</span>
              </div>
              <div className={styles['socials']}>
                <span className={styles['text102']}>Follow Us</span>
                <div className={styles['icon-group1']}>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className={styles['icon10']}
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={styles['icon12']}
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className={styles['icon14']}
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['separator']}></div>
        <span className={styles['text103']}>
          <span>© 2021 teleportHQ, All Rights Reserved.</span>
          <span className={styles['text105']}></span>
          <span></span>
        </span>
      </footer>
    </div>
  )
}

export default Home
