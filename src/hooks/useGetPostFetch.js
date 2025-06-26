import { useEffect, useState } from "react"

const usePostFetch = () => {


    const URL = '/api/posts'
    const [dataPost, setDataPost] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {

        setLoading(true)

        const controller = new AbortController()
        const signal = controller.signal

        const getFetch = async () => {

            try {
                const response = await fetch(URL, { signal })
                if (!response.ok) {
                    throw new Error("Algo fallo, Error: " + response.status)
                }
                const json = await response.json()
                console.log(json.post);

                setDataPost(json.post)
                setError(false)

            } catch (err) {
                if (err.name !== "AbortError") {
                    console.error(err)
                    setError(true)
                }
            } finally {
                setLoading(false)
            }

        }
        getFetch()
        return () => {
            controller.abort()
        }
    }, [])
    return { dataPost, loading, error }
}

export default usePostFetch