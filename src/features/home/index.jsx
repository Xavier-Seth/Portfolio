import HeroSection from './HeroSection'
import SelectedWork from './SelectedWork'
import StatsRow from './StatsRow'

export default function HomePage() {
  return (
    <main className="pt-20">
      <div className="max-w-7xl mx-auto px-0 md:px-12">
        <HeroSection />
        <SelectedWork />
        <StatsRow />
      </div>
    </main>
  )
}
