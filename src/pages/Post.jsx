import { useParams } from "react-router"
import { useEffect, useState } from "react"
import usePostFetch from "../hooks/useGetPostFetch"
import PostMeta from "../components/meta/PostMeta"
import AuthorPost from "../components/AuthorPost"
import CategoryPost from "../components/CategoryPost"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './postMarkdown.css'


export default function Post() {
  const { dataPost, loading, error } = usePostFetch()
  const params = useParams()
  const post = dataPost?.find(item => item.slug === params.slug)

  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    // agregar que hacer cuando la ruta no se encuentre
    if (!post?.contentMarkdown) return

    const content = post.contentMarkdown.toString()
    if (content.trim().startsWith("#")) {
      setMarkdown(content)
    } else {
      fetch(content)
        .then(res => res.text())
        .then(text => setMarkdown(text))
        .catch(err => console.error("Error al cargar Markdown:", err))
    }
  }, [post])

  if (loading) return <h1>Cargando Post...</h1>
  if (error) return <h1>Upss!! Algo salió mal</h1>
  if (!post) return null

  return (
    <>
      <PostMeta title={post.title} description={post.summary} image={post.image} slug={post.slug} />
      <main className="w-full ">
        <article className="w-full ">
          <header className="h-[400px] relative">
            <div className="w-full h-full absolute bg-zinc-950/45 flex justify-center items-end">
              <div className="w-[1440px] flex flex-col gap-5 justify-end h-full py-10 px-7 text-white lg:w-[1440px] lg:px-12 ">
                <div className="flex flex-col gap-1.5">
                  <CategoryPost category={post.category} />
                  <h1 className="font-bold text-3xl lg:w-[60%] lg:text-4xl ">{post.title}</h1>
                  <div className="flex items-center gap-1.5 text-white">
                    <svg width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 21C16.523 21 21 16.523 21 11C21 5.477 16.523 1 11 1C5.477 1 1 5.477 1 11C1 16.523 5.477 21 11 21Z" stroke="#fff" strokeWidth="1" strokeLinejoin="round" />
                      <path d="M10 6V13H15" stroke="#fff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>5</span>
                    <span>min Read</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <AuthorPost author={post.author} />
                  <div className="flex gap-0.5 text-zinc-300">
                    <span>{post.date.month}</span>/
                    <span>{post.date.day}</span>/
                    <span>{post.date.year}</span>
                  </div>
                </div>
              </div>
            </div>
            <picture>
              <img className="w-full object-cover h-full" src={post.image} alt={post.title} />
            </picture>
          </header>

          <div className="max-w-[1440px] py-8 mx-auto ">
            <div className="prose prose-lg prose-gray px-7 lg:max-w-[60%] lg:px-12">
              <ReactMarkdown remarkPlugins={[remarkGfm]}
              >
                {markdown}
              </ReactMarkdown>
            </div>
          </div>
        </article>
      </main >

      <aside></aside>
    </>
  )
}