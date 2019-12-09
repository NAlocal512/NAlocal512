import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p><Link to="/about/">about page</Link>.</p>
    <p><Link to="/sheetup/">sheetup page</Link>.</p>
  </Layout>
)

export default IndexPage
