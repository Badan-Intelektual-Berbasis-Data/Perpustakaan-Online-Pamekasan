import { useEffect, useState } from 'react'

export default function useDebounce(callback, dependencies=[], delay=5000) {

    const [execute, setExecute] = useState(false)

    useEffect(() => {
        const func = setInterval(() => {
            if (execute) return    
            setExecute(true)
        }, delay)

        callback()


        return () => clearInterval(func)
    }, [])


    useEffect(() => {
        if (!execute) return

        callback()
        setExecute(false)
    }, dependencies)
 
}
