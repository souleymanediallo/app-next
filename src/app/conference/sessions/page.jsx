import Link from 'next/link'

export default function Page() {
    return (
      <main>
        <h1>Welcome to Globomantics Sessions</h1>
       <h2>
        <Link href="/conference">Back to Conference</Link>
        </h2>
      </main>
    )
  }