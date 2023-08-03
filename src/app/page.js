import { Hero } from '@/components/hero'
import { Clients } from '@/components/clients'
import { Feature } from '@/components/feature'
import { Mission } from '@/components/mission'

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <Feature />
      <Mission />
    </main>
  )
}
