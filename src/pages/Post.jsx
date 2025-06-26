import { useParams } from "react-router"
import usePostFetch from "../hooks/useGetPostFetch";


export default function Post() {
    const { dataPost, loading, error } = usePostFetch()
    const params = useParams()

    const post = dataPost?.find(item => item.slug === params.slug)
    console.log(post);



    if (loading) {
        return <h1>Cargando Post...</h1>
    }

    if (error) {
        return <h1>Upss!! Algo salió mal</h1>
    }

    if (!post) {
        return <h1>cargando...</h1>
    }
    return (



        <>



            <h1>{post.title}</h1>
            <p>{post.summary} </p>

        </>
    )
}