import React from 'react'
import Layout from '@theme/Layout'

function HomepageHeader() {
  return (
    <header>
      <div className="container padding-vert--xl">
        <div className="row">
          <div className="col col--8">
            <h1 className="home-title">
              Javascript and Go developer building beautiful user experiences and️ doing some open
              source stuff.
              <br/> <br/>
              <span className="home-title__meta">
                I sometimes create 3d artworks and play 🎮 FIFA on weekends.
                My dream is to be an inspiration to a lot of people in my
                country 🇬🇭.
              </span>
            </h1>
          </div>
        </div>
      </div>
    </header>
  )
}

export default function Home() {
  return (
    <Layout title="Home" description="Javascript and Go developer">
      <HomepageHeader/>
      <main>
        <div className="container">
          <section>
            <div className="row margin-top--xl padding-vert--xl divide">
              <div className="col col--4">
                <h2 className="home-title">Spotlight</h2>
              </div>

              <div className="col col--8">
                <div className="row">
                  <div className="col col--6 margin-bottom--lg">
                    <h3 className="sub-title">aaccraa</h3>

                    <p className="p-large">
                      Connecting strangers and building real connections with live video.
                    </p>

                    <p className="p-large">
                      Spent a weekend on this proof-of-concept. Deployed midweek and had a surge of 1000 unique visitors
                      in the first 24 hours.
                    </p>

                    <p className="p-large">
                      <a
                        className="hover-underline"
                        href="https://aaccraa.com/?source=degreat.co.uk"
                      >
                        aaccraa.com
                      </a>
                    </p>
                  </div>


                  <div className="col col--6">
                    <h3 className="sub-title">Adeton</h3>

                    <p className="p-large">
                      This is a SaaS project I developed; an e-commerce enabler.
                      Think Shopify but tailored for the Ghanaian<sup>1</sup>{' '}
                      merchant. Currently hosting over 700 shops and processing
                      tens of orders a week.
                    </p>

                    <p className="p-large">
                      Free to get started<sup>2</sup>.
                    </p>

                    <p className="p-large">
                      <a className="hover-underline" href="https://adeton.io">
                        Visit homepage
                      </a>
                    </p>
                  </div>

                  <div className="col col--6 margin-bottom--lg">
                    <h3 className="sub-title">go-gurl</h3>

                    <p className="p-large">
                      This is an opensource API testing tool written in Go and
                      runs in the terminal. Unlike curl or httpie, go-gurl has a
                      persistent interface just like vim and comes with relevant
                      controls and commands.
                    </p>

                    <p className="p-large">
                      It's still work-in-progress. Contributions are welcome
                    </p>

                    <p className="p-large">
                      <a
                        className="hover-underline"
                        href="https://github.com/blackmann/go-gurl"
                      >
                        blackmann/go-gurl
                      </a>
                    </p>
                  </div>
                </div>

                <footer className="container margin-top--xl">
                  <p className="margin-bottom--none" style={{color: '#888'}}>
                    <sup>1</sup> The Ghanaian market is a tough one. My
                    perspectives have gotten the best of alignments.
                  </p>
                  <p className="margin-bottom--none" style={{color: '#888'}}>
                    <sup>2</sup> We only charge order processing fees at 5%.
                    Meaning, we make money when merchants do.
                  </p>
                </footer>
              </div>
            </div>
          </section>

          <div className="row margin-top--xl padding-vert--xl divide">
            <div className="col col--4">
              <h2 className="home-title">Experience</h2>
            </div>

            <div className="col col--8">
              <div className="row">
                <div className="col col--6">
                  <p className="p-large">
                    I currently specialize in Frontend Development with React. And use Go to build fast and realtime
                    backend services.
                  </p>

                  <p className="p-large">
                    But before now, I've been an all-round product developer
                    with solid strengths in design, planning, backend, frontend
                    and devops.<sup>1</sup>
                  </p>
                </div>

                <div className="col col--6">
                  <div className="row">
                    <div className="col col--6">
                      <h3 className="sub-title">Languages</h3>

                      <ul>
                        <li>
                          <p className="p-large margin-bottom--none">
                            Javascript
                          </p>
                        </li>
                        <li>
                          <p className="p-large margin-bottom--none">Go</p>
                        </li>
                        <li>
                          <p className="p-large margin-bottom--none divide">Dart</p>
                        </li>
                        <li>
                          <p className="p-large margin-bottom--none ">
                            Python
                          </p>
                        </li>
                        <li>
                          <p className="p-large margin-bottom--none">Kotlin</p>
                        </li>
                      </ul>

                      <h3 className="sub-title margin-top--lg">Frameworks</h3>

                      <ul>
                        <li>
                          <p className="p-large margin-bottom--none">React</p>
                        </li>
                        <li>
                          <p className="p-large margin-bottom--none">
                            Express / Mongoose
                          </p>
                        </li>
                        <li>
                          <p className="p-large margin-bottom--none">Flutter</p>
                        </li>
                        <li>
                          <p className="p-large margin-bottom--none">
                            Charm.sh
                          </p>
                        </li>
                      </ul>
                    </div>

                    <div className="col col--6">
                      <h3 className="sub-title">Graphics</h3>

                      <ul>
                        <li>
                          <p className="p-large margin-bottom--none">
                            Adobe Suite
                          </p>
                        </li>
                        <li>
                          <p className="p-large margin-bottom--none">Figma</p>
                        </li>
                        <li>
                          <p className="p-large margin-bottom--none">Blender</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <footer className="container margin-top--xl">
                <p className="margin-bottom--none" style={{color: '#888'}}>
                  <sup>1</sup> I tried to learn Rust 🦀. Oh boy, sh*t is crazy.
                  Perhaps a comeback! But I managed to create static{' '}
                  <a href="https://github.com/blackmann/home-archive-2022-01/tree/master/tools/myjekyllripoff">
                    site generator
                  </a>{' '}
                  (think Jekyll) for my old website with Rust.
                </p>
              </footer>
            </div>
          </div>

          <div className="row divide margin-top--xl padding-top--xl">
            <div className="col col--4">
              <h2 className="home-title">Recents</h2>
            </div>
            <div className="col col--8">
              <div className="row">
                <div className="col col--6 margin-bottom--lg">
                  <img
                    src="/img/donut-galaxy.gif"
                    alt="Donut Galaxy"
                    loading="lazy"
                  />
                  <p>R&D: Donuts Galaxy</p>
                  <p style={{color: '#888'}}>
                    An attempt to clone{' '}
                    <a href="https://ilithya.rocks">ilithya.rocks</a> homepage
                    after completing the first chapter of threejs journey
                    course.
                  </p>

                  <p>
                    <a
                      className="hover-underline"
                      href="/docs/rnds/donuts-galaxy"
                    >
                      Details + Interact
                    </a>
                  </p>
                </div>

                <div className="col col--6 margin-bottom--lg">
                  <img src="/img/ozark.jpg" alt="Ozark" loading="lazy"/>
                  <p>TV Show: Ozark</p>
                  <p style={{color: '#888'}}>
                    Yerr, I'm done! I nominate this TV series as the one of the
                    few best TV shows ever (👀 Breaking Bad). It's a 💯.
                  </p>

                  <p style={{color: '#888'}}>
                    Ruth Langmore was my favorite and Marty Byrd was some cool
                    guy.
                  </p>
                </div>

                <div className="col col--6">
                  <video
                    src="/videos/robo-out.mp4"
                    loop
                    autoPlay
                    style={{width: '100%'}}
                  />
                  <p>3D & Render: Robo Fight</p>
                  <p style={{color: '#888'}}>
                    Bored Blender Render. Rigging done with Mixamo. How do you
                    rate my lighting?
                  </p>
                  <p>
                    <a
                      className="hover-underline"
                      href="https://www.youtube.com/shorts/49X3wNg-NM0"
                    >
                      → Youtube
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row margin-top--xl padding-vert--xl divide">
            <div className="col col--4">
              <h2 className="home-title">I wish to…</h2>
            </div>
            <div className="col col--8">
              <div className="row">
                <div className="col col--6">
                  <h3 style={{color: '#888'}}>Meet</h3>

                  <ul>
                    {[
                      'Bill Gates',
                      'Kylian Mbappe',
                      'Christiano Ronaldo',
                      'Lil Wayne',
                      'Drake',
                    ].map((person) => (
                      <li key={person}>
                        <p className="p-large margin-bottom--none">{person}</p>
                      </li>
                    ))}

                    <li>
                      <p className="p-large margin-bottom--none t-gray">
                        <s>Grey</s>
                      </p>
                    </li>

                    {['Bob Odenkirk (Saul Goodman)'].map((person) => (
                      <li key={person}>
                        <p className="p-large margin-bottom--none">{person}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col col--6">
                  <h3 style={{color: '#888'}}>Visit</h3>
                  <ul>
                    {[
                      'Northern Region (Ghana)',
                      'Switzerland',
                      'Zanzibar',
                      'United States',
                      'Apple Headquarters',
                    ].map((person) => (
                      <li key={person}>
                        <p className="p-large margin-bottom--none">{person}</p>
                      </li>
                    ))}
                  </ul>
                  <h3 style={{color: '#888'}}>Try</h3>
                  <ul>
                    {[
                      'Skateboarding 🛹',
                      'Basketball',
                      'Boxing 🥊',
                      'Snowboarding ⛷',
                      'Conference Speaking',
                    ].map((person) => (
                      <li key={person}>
                        <p className="p-large margin-bottom--none">{person}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
