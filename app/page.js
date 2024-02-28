"use client"
import { BeerList } from "../components/Beers/BeerList"

export default async function Home() {

  return (
    <section>
      <div className="container">
        <BeerList />
      </div>
    </section>
  )
}
