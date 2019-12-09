import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>To help with the development of this site please visit our gitlab portal <a href="https://nalocal512.gitlab.io/">page</a>.</p>
    <p>Go back to our front <Link to="/">page</Link>.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default AboutPage
