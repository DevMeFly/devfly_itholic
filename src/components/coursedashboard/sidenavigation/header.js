import Image from 'next/image'

export default function SidenavHeader() {
  return (
    <div className='sticky top-0 z-10 flex h-[200px] items-center justify-center border-b-2 border-red-500 bg-white pt-6 pb-6'>
      <Image
        sizes='(max-hight: 200px) 100vw,
              (max-width: 200px) 50vw,
              33vw'
        priority
        fill
        src='/logo.png'
        alt='logo'
        className='rounded-xl'
      />
    </div>
  )
}
