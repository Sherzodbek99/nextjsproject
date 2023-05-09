"use client"

import { useState } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
console.log(post.creator)
  
  return (
    <div className='prompt_card'>
      <div className="flex justify-between items-start gap-5">
        <div>
          {/* <Image 
            alt="user image"
          /> */}
        </div>
      </div>
    </div>
  )
}

export default PromptCard