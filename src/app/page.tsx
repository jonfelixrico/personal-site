import { Metadata } from 'next'
import CompatibilityPage from './CompatibilityPage'

export const metadata: Metadata = {
  title: 'Jon Felix Rico • Home',
}


export default function Home() {
  return <CompatibilityPage />
}
