import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { HireMeta } from '../components/common/meta'


/**
* Author page (/author/:slug)
*
* Loads all posts for the requested author incl. pagination.
*
*/
const Hire = ({ data, location, pageContext }) => {
    const author = data.ghostAuthor
    const posts = data.allGhostPost.edges
    const twitterUrl = author.twitter ? `https://twitter.com/${author.twitter.replace(/^@/, ``)}` : null
    const facebookUrl = author.facebook ? `https://www.facebook.com/${author.facebook.replace(/^\//, ``)}` : null

    return (
        <>
            <Layout>
                <div className="container">
                    <HireMeta/>
                </div>
            </Layout>
        </>
    )
}

export default Hire
