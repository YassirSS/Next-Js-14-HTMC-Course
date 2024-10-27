import { MdMore } from "react-icons/md";
import React from 'react'
import Link from "next/link";

const TodosCard = ({ todo }) => {

    console.log("From Todo ", todo)

    return (
        <div>
            <Link href={`/Dashboard/${todo.id}`}>
                <div className="rounded">
                    <div className="w-full flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
                        <div>
                            <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">
                                {todo.title}
                                <MdMore size={30} className="text-blue-700" />
                            </h4>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default TodosCard;
