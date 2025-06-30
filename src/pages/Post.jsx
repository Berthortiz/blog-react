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
					<header className=" h-[300px] relative ">
						<div className="w-full h-full absolute bg-zinc-950/45 flex justify-center items-end px-12 ">
							<div className="w-[1440px] flex flex-col gap-6.5 justify-end text-white h-full py-12 " >
								<div>

									{/* <h2>{post.category.id}</h2> */}
									<CategoryPost category={post.category} ></CategoryPost>
									<h1 className=" text-3xl text-white" >{post.title}</h1>
								</div>

								<div className="flex gap-3">
									<AuthorPost author={post.author} ></AuthorPost>
									<div id="datePost"
										className="flex gap-0.5 text-zinc-300">
										<span>{post.date.year}</span>/
										<span>{post.date.month}</span>/
										<span>{post.date.day}</span>


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