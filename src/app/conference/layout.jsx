import style from './style.css'

export default function ConferenceLayout({ children }) {
    return (
        <div>
            <header style={style.header}>
                <h1>GLOBOMANTICS MANIACALLY TAAKING TECH TO THE GLOBE</h1>
            </header>
            <body>
            <session>{children}</session>
            </body>
        </div>
    )
  }