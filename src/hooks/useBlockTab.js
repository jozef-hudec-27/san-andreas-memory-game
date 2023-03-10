import { useEffect } from 'react'

export default function useBlockTab() {
  useEffect(() => {
    const blockTab = (e) => {
      e.preventDefault()
    }

    Array.from(document.getElementById('main').children).forEach((element) => {
      if (!(element.classList.contains('overlay') || element.classList.contains('modal'))) {
        element.addEventListener('keydown', blockTab)
        element.addEventListener('keydown', blockTab)
      }
    })

    return () => {
      Array.from(document.getElementById('main').children).forEach((element) => {
        if (!(element.classList.contains('overlay') || element.classList.contains('modal'))) {
          element.removeEventListener('keydown', blockTab)
          element.removeEventListener('keydown', blockTab)
        }
      })
    }
  }, [])
}
