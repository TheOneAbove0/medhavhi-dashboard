import React from 'react'
import IMAGES from '../assets'

const resourceData = [
  {
    avatar: IMAGES.PptAvatar,
    title: 'Life-cycle of frog.ppt',
    category: 'Science',
    size: '32.5 MB',
  },
  {
    avatar: IMAGES.WordAvatar,
    title: 'How to write a ...... .docx',
    category: 'Science',
    size: '32.5 MB',
  },
  {
    avatar: IMAGES.PdfAvatar,
    title: 'Atom and its structure.pdf',
    category: 'Science',
    size: '32.5 MB',
  },
  {
    avatar: IMAGES.PptAvatar,
    title: 'Life-cycle of frog.ppt',
    category: 'Science',
    size: '32.5 MB',
  },
];

export default function Resources() {
  return (
    <div className='py-2 px-4'>
      {resourceData.map((resource, index) => (
        <div key={index} className='flex items-center justify-between py-5 px-2'>
          <div className='flex items-center gap-4'>
            <div>
              <img src={resource.avatar} alt="Avatar" />
            </div>
            <div className='flex flex-col'>
              <span>{resource.title}</span>
              <div className='flex gap-4 items-center'>
                <span className=' text-LighRed '>{resource.category}</span>
                <span>{resource.size}</span>
              </div>
            </div>
          </div>
          <div>
            <img src={IMAGES.ThreeDot} alt="ThreeDot" />
          </div>
        </div>
      ))}
    </div>
  )
}
