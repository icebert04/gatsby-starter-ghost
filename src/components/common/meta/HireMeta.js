import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import _ from 'lodash'

import ImageMeta from './ImageMeta'
import config from '../../../utils/siteConfig'

export default HireMeta () {

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={canonical} />
                <meta property="og:site_name" content={settings.title} />
                <meta property="og:type" content="profile" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={canonical} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:url" content={canonical} />
                {settings.twitter && <meta name="twitter:site" content={`https://twitter.com/${settings.twitter.replace(/^@/, ``)}/`} />}
                {settings.twitter && <meta name="twitter:creator" content={settings.twitter} />}
                <script type="application/ld+json">{JSON.stringify(jsonLd, undefined, 4)}</script>
            </Helmet>
            <ImageMeta image={shareImage} />
            
                <section>
            <div>
              <h1>I AM FRANCIS ISBERTO</h1>
              <p>Hey there, I'm <b>Francis!</b>
                  I'm a <b>Web Developer, Digital Content Creator,</b> and a <b>Serial Entrepreneur.</b>

                  The bulk of my time goes to helping Startup companies.
                  On weekdays, I pick several small startups, then I tweet about it on Twitter giving my advice on how to scale their business.
                  I also choose one Startup at the end of the week,
                  then write a detailed article about it on my blog on how to launch an effective marketing campaign for their B2C or B2B clients.

                  That process continues until they hit their mark.
              </p>
              <h4><b>My Email: </b></h4>
             </div>
                 </section>
        </>
    )
}


