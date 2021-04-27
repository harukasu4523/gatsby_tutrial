import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (<div style ={{ color: 'purple'}}>
    <Link to="/contact/">Contact</Link>
    <h1>Hello Gatsby!</h1>
    <Link to="/about/">About</Link>
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  );
}
