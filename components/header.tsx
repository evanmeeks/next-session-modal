import React, { useCallback } from "react"
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"
import Button from "../components/Button"
import styles from "./header.module.css"
import Modal from "../components/TimeoutModal"

export const SHOW_INACTIVE_TIMEOUT_SECONDS = 5
export const COUNTDOWN_SECONDS = 15

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  const { data: session, status } = useSession()
  const time = React.useRef<number>(COUNTDOWN_SECONDS)

  const [showCountDown, setShowCountDown] = React.useState(
    SHOW_INACTIVE_TIMEOUT_SECONDS
  )

  const handleSignOut = useCallback(() => {
    signOut()
  }, [signOut])

  const resetShowCountDown = useCallback(() => {
    time.current = COUNTDOWN_SECONDS
    setShowCountDown(SHOW_INACTIVE_TIMEOUT_SECONDS)
  }, [setShowCountDown, time.current])

  React.useEffect(() => {
    let showTimer: NodeJS.Timer

    if (session?.user) {
      showTimer = setInterval(() => {
        const countDown = showCountDown - 1
        // console.log("Showing countdown in  " + showCountDown + " seconds")
        setShowCountDown(countDown)
      }, 1000)
    }

    return () => clearInterval(showTimer)
  }, [session?.user, showCountDown, setShowCountDown])

  React.useEffect(() => {
    if (time.current <= 0) {
      handleSignOut()
    }
  }, [time.current])

  React.useEffect(() => {
    let countDown: NodeJS.Timer
    countDown = setInterval(() => {
      if (session?.user && showCountDown <= 0) {
        time.current--
      }
    }, 1000)

    return () => clearInterval(countDown)
  }, [time.current, session?.user, showCountDown])

  const loading = status === "loading"

  let showModal = showCountDown <= 0

  return (
    <header>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <div className="container">
        <p
          className={`nojs-show ${
            !session && loading ? styles.loading : styles.loaded
          }`}
        >
          {!session && (
            <>
              <span className={styles.notSignedInText}>
                You are not signed in
              </span>
              <Button
                className="relative z-10"
                onClick={(e) => {
                  e.preventDefault()
                  signIn()
                }}
              >
                Sign in
              </Button>
            </>
          )}
          {session?.user && (
            <>
              {session.user.image && (
                <span
                  style={{ backgroundImage: `url('${session.user.image}')` }}
                  className={styles.avatar}
                />
              )}
              <span className={styles.signedInText}>
                <small>Signed in as</small>
                <br />
                <strong>{session.user.email ?? session.user.name}</strong>
              </span>
              <Button
                variant="primary"
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >
                Sign out
              </Button>
            </>
          )}
        </p>
      </div>
      <nav>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/client">Client</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/server">Server</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/protected">Protected</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/api-example">API</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/admin">Admin</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/me">Me</Link>
          </li>
        </ul>
      </nav>

      {session?.user ? (
        <>
          <div className="flex">
            <h1 className="text-xl text-red-500 m-4">{`Showing countdown in ${showCountDown}  seconds`}</h1>
            <Button onClick={() => setShowCountDown(0)}>Show Modal</Button>
          </div>

          <Modal
            modalTitle="Need more time?"
            modalMessage={
              <>
                <div>Your session is about to expire,</div>
                <div>Please select from the options below.</div>
                <div className="mt-3 mb-3">
                  Otherwise, we will log out of this session in:
                </div>
              </>
            }
            time={time.current}
            okText="Log Out"
            cancelText="Continue Sesson"
            okAction={handleSignOut}
            cancelAction={resetShowCountDown}
            showModal={showModal}
          />
        </>
      ) : null}
    </header>
  )
}
