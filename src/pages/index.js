import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function HomepageHeader() {
  return (
    <header>
      <div className="container padding-vert--lg">
        <div className="row">
          <div className="col col--6">
            <h1>Javascript and Go developer leading Adeton and doing some open source stuff.</h1>
            <p>I sometimes create 3d artworks and play FIFA a lot recently. My dream is to be an inspiration to a lot of
              people in my country.</p>
          </div>
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
