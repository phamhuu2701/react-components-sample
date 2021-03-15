import React, { useEffect, useState } from 'react'
import './styles.css'

const HEIGHT = 200

function ScrollToTop(props) {
  const [show, setShow] = useState(false)

  const handleOnWindowScroll = () => {
    if (window.pageYOffset > HEIGHT) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleOnWindowScroll)
  }, [])

  const handleScrollToTop = () => {
    let scrollInterval = setInterval(() => {
      window.scrollTo({ top: window.pageYOffset - HEIGHT, left: 0 })

      if (window.pageYOffset === 0) {
        clearInterval(scrollInterval)
      }
    }, 10)
  }

  return <div>{show && <div className="rcs-scroll-to-top" onClick={handleScrollToTop}></div>}</div>
}

export default ScrollToTop
