import { useParams } from "react-router"
import usePostFetch from "../hooks/useGetPostFetch";
import PostMeta from "../components/meta/PostMeta";
import AuthorPost from "../components/AuthorPost";
import CategoryPost from "../components/CategoryPost";

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
		return
	}
	return (



		<>
			<PostMeta title={post.title} description={post.summary} image={post.image} slug={post.slug} />
			<main className="w-full  ">
				<article className="w-full">
					<header className=" h-[400px] relative ">
						<div className="w-full h-full absolute bg-zinc-950/45 flex justify-center items-end px-6 ">
							<div className="w-[1440px] flex flex-col gap-5 justify-end h-full py-10 text-white " >
								<div className="flex flex-col gap-1.5" >

									{/* <h2>{post.category.id}</h2> */}
									<CategoryPost category={post.category} ></CategoryPost>
									<h1 className=" font-bold text-3xl text-white" >{post.title}</h1>
									<div className="text-white flex items-center gap-1.5"><svg
										width="18"
										height="18"
										viewBox="0 0 22 22"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M11 21C16.523 21 21 16.523 21 11C21 5.477 16.523 1 11 1C5.477 1 1 5.477 1 11C1 16.523 5.477 21 11 21Z"
											stroke="#fff"
											strokeWidth="1"
											strokeLinejoin="round"
										/>
										<path
											d="M10 6V13H15"
											stroke="#fff"
											strokeWidth="1"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
										<span>5 </span>
										<span> min Read</span>
									</div>
								</div>

								<div className="flex gap-3">
									<AuthorPost author={post.author} ></AuthorPost>
									<div id="datePost"
										className="flex gap-0.5 text-zinc-300">
										{/* <span id="date-post">Fecha: </span> */}

										<span>{post.date.month}</span>/
										<span>{post.date.day}</span>/
										<span>{post.date.year}</span>


									</div>
								</div>
							</div>
						</div>

						<picture className="" >
							<img className="w-full object-cover h-full " src={post.image} alt={post.title} />
						</picture>

					</header>


				</article>

			</main>



		</>
	)
}