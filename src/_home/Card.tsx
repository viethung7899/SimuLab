import React from "react"

export interface CardProps {
  title: string;
  description?: string;
  link?: string;
}

const Card: React.FC<CardProps> = ({title, description, link}) => {
  return (
    <div className="w-full mb-4 p-4 inline-block border border-gray-200 bg-white rounded-xl hover:bg-gray-200">
      <div className="font-medium text-xl text-gray-700 hover:underline hover:text-blue-700">
        <a href={link || '/'}>{title}</a>
      </div>
      <div className="text-sm text-gray-700">{description}</div>
    </div>
  )
}

export default Card