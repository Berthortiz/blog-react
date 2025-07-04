import { useEffect, useState } from "react"
import data from "../service/categotyColor.json"


export default function CategoryPost({ category }) {
    const [color, setColor] = useState(null)
    useEffect(() => {
        const bgColor = data.categoryIndexColor?.find((item) => item.id === category.tag)
        if (!bgColor) {
            setColor("#000")
            return
        }
        if (bgColor.id === category.tag) {
            setColor(bgColor.color)

        }
    }, [category.tag])

    console.log(" true " + color);
    return (
        <>
            <span className="w-fit flex items-center py-1 px-3 rounded-xl text-sm text-white" style={{ backgroundColor: `${color}` }} >{category.name}</span>

        </>
    )
}