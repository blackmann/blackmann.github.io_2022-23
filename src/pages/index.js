import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function HomepageHeader() {
  return (
    <header>
      <div className="container padding-vert--lg">
        <div className="row">
          <div className="col col--8">
            <h1 className="home-title">Javascript and Go developer leading <a href="https://adeton.io">Adeton</a> and
              doing some open source stuff.</h1>
            <h1 className="home-title">
              I sometimes create 3d artworks and play 🎮 FIFA a lot recently. My dream is to be an inspiration to a lot
              of
              people in my country 🇬🇭.
            </h1>
          </div>
        </div>

        <div className="row margin-top--xl padding-vert--lg divide">
          <div className="col col--4">
            <h2 className="home-title">Spotlight</h2>
          </div>

          <div className="col col--8">
            <div className="row">
              <div className="col col--6 margin-bottom--lg">
                <h3 className="sub-title">go-gurl</h3>

                <p className="p-large">This is an opensource API testing tool written in Go and runs in the
                  terminal. Unlike curl or httpie, go-gurl has a persistent interface just like vim and comes with
                  relevant controls and commands.</p>

                <p className="p-large">It's still work-in-progress. Contributions are welcome</p>

                <p className="p-large"><a href="https://github.com/blackmann/go-gurl">blackmann/go-gurl</a></p>
              </div>

              <div className="col col--6">
                <h3 className="sub-title">Adeton</h3>

                <p className="p-large">
                  This is a SaaS project I developed; an e-commerce enabler. Think Shopify but tailored for the Ghanaian
                  merchant. Currently hosting over 700 shops and processing tens of orders a week.
                </p>

                <p className="p-large">(The Ghanaian market is a tough one)</p>

                <p className="p-large"><a href="https://adeton.io">Visit homepage</a></p>
              </div>


              <div className="col col--6">
                <h3 className="sub-title">Patreon</h3>

                <p className="p-large">
                  Are looking to transition from another discipline into software development? Are you already enrolled
                  in tertiary education but want to engage in a beneficial extracurricular activity?
                </p>

                <p className="p-large">
                  My <a href="https://patreon.com/degreat">Patreon</a> memberships offers various packages for various
                  levels of interest.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row margin-top--xl padding-vert--xl divide">

        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home | ${siteConfig.title}`}
      description="Javascript and Go developer">
      <HomepageHeader/>
      <main>
        <div className="container">

        </div>
      </main>
    </Layout>
  );
}
