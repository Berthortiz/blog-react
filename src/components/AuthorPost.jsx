import { useState } from "react";

export default function AuthorPost({ author }) {

    const [imgPostAuthor, setImgPostAuthor] = useState(true)

    return (
        <div id="post-author" className="flex gap-3.5">
            <img onError={() => setImgPostAuthor(false)} className=" size-8 rounded-4xl"
                src={
                    imgPostAuthor
                        ? author.imgPostAuthor
                        : "/public/author-icon.svg"}
                alt={`author ${author.name}  `} />
            <span>{author.name}</span>

        </div>
    )
}