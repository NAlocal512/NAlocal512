import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <p>This site was built by local No Agenda fans from the NAlocal512 meetup group.</p>
    <p>
      To help with the development of this site please visit our <a href="https://nalocal512.gitlab.io/"> gitlab portal page</a>.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default AboutPage
