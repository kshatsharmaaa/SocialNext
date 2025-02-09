import Image from "next/image"

const Stories = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide'>
        <div className="flex gap-8 w-max">

            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Image src="/eddardstark.jpeg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
                <span className="font-medium">Your Story</span>
            </div>
            
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Image src="/aryastark.jpeg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
                <span className="font-medium">Arya</span>
            </div>
            
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Image src="/tywin1.jpeg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
                <span className="font-medium">Tywin</span>
            </div>
            
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Image src="/mergery.jpeg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
                <span className="font-medium">Margery</span>
            </div>
            
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Image src="/RobbertBaratheon.jpeg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
                <span className="font-medium">Robbert</span>
            </div>
            
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Image src="/eddardstark.jpeg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
                <span className="font-medium">Eddard</span>
            </div>
            
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Image src="/eddardstark.jpeg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
                <span className="font-medium">Eddard</span>
            </div>
            
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Image src="/eddardstark.jpeg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
                <span className="font-medium">Eddard</span>
            </div>
            
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Image src="/eddardstark.jpeg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
                <span className="font-medium">Eddard</span>
            </div>
            
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Image src="/eddardstark.jpeg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
                <span className="font-medium">Eddard</span>
            </div>
            
        </div>
    </div>
  )
}

export default Stories