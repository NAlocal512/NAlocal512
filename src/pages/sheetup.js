import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const SheetUpPage = () => (
  <Layout>
    <SEO title="SheetUp" />
    <h3>Some details for the upcoming SheetUp</h3>
      <p>
        <ol>Be respectful of others ammo, either bring your own, or buy ammo there at the range (ammo bought at the range is more expensive).</ol>
        <ol>You must attend the short safety course at the range before firing any firearm.</ol>
        <ol>Guns should be left at the station and should only be moved by gun owners themselves.</ol>
        <ol>If you are concerned about serial numbers on guns being captured by the ubiquitous cameras you should cover them with tape.</ol>
        <ol>Similarly, if you are concerned about your face being captured by the ubiquitous cameras you should wear a Guy Fawkes mask (or similar sort of mask), though it should be noted that holding a firearm while wearing a mask can give people the wrong impression.</ol>
      </p>
    <h3>Known ammo types that will fit the guns that will be there</h3>
      <p>
        <ul>.22</ul>
        <ul>5.56x45mm</ul>
        <ul>.270</ul>
        <ul>30.06</ul>
        <ul>7.62x39mm</ul>
        <ul>7.62x51mm</ul>
        <ul>9mm parabellum</ul>
        <ul>.357 magnum</ul>
        <ul>.44 magnum</ul>
        <ul>.45 ACP</ul>
      </p>
    <p>Go back to our front <Link to="/">page</Link>.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default SheetUpPage
