import * as React from 'react'

import SocialTags from '../components/SocialTags'
import Header from '../components/Header/Header'
import BlogList from '../components/BlogList/BlogList'
import Footer from '../components/Footer/Footer'

export default function PostsPage() {
  return (
    <React.Fragment>
      <SocialTags
        page_title="Últimas postagens de Iago Bruno"
        description="Últimas postagens do blog do Iago Bruno"
        url="https://www.iagobruno.com/posts"
      />

      <div className="page posts-list-page">
        <Header mode="compact" />

        <BlogList length={Infinity} />

        <div style={{ textAlign: 'center', fontSize: 16, paddingBottom: 30 }}>
          <a href="/static/rss-feed.xml">Feed rss</a>
        </div>

        <Footer />
      </div>
    </React.Fragment>
  )
}
