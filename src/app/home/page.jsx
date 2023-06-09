import Link from "next/link"

export default function Home() {
    return (
      <main>
       <h1>Page Home</h1>
         <Link href="/conference/sessions">Session</Link>
            <br/>
            <Link href="/conference/speakers">Speaker</Link>
            <br/>
            <Link href="/settings">Settings</Link>
            
      </main>
    )
  }
  