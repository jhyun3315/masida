import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from "react-dom"

interface ProtalProps{
  children?: ReactNode;
}

const Modal_portal = ({children}:ProtalProps) => {
   const [mounted, setMounted] = useState(false)

   useEffect(() => {
     setMounted(true);
     
    return () => setMounted(false);
   }, [])

   return mounted
      ? createPortal(children, 
        document.querySelector("#modal-root") as HTMLElement)
      : null
}

export default Modal_portal;