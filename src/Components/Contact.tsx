import { useState } from 'react'
import { Title } from './UI/Title'
import { Button } from './UI/Button'
export function Contact() {
  const [isCopy, setIsCopy] = useState(false)

  function handleCopy(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    setIsCopy(true)
    navigator.clipboard.writeText('ngcsmrtnz@gmail.com')

    setTimeout(() => {
      setIsCopy(false)
    }, 5000)
  }

  return (
    <section className="flex flex-col w-full justify-center h-svh items-center">
      <Title title="Contact" extraClass=" text-center pb-5" />
      <div className="bg-slate-800 rounded-xl h-80 w-96">
        <div className="flex flex-col text-slate-300 gap-2 items-center content-center">
          <p>ngcsmrtnz@gmail.com</p>
          <Button
            onClick={handleCopy}
            textOnly
            disabled={isCopy ? true : false}
          >
            Copy email
          </Button>
          <p>Phone: +5522999371943</p>
        </div>
      </div>
    </section>
  )
}
