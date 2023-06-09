import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <main>
     <h1>Wecolme to Globomantics Conference</h1>
     <h2>
        <Link href="/blog">Blog</Link>
     </h2>
     <h2>
        <Link href="/settings">Settings</Link>
     </h2>
    </main>
  )
}
