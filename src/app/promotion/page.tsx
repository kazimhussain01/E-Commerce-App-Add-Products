import Image from "next/image"


const Promotion = () => {
  return (
    <div className="grid grid-cols-4 gap-6 py-20 px-40">

      <div className="w-full h-48 flex col-span-2 bg-gray-500 justify-around items-center px-5">
        <div>
        <h1 className="text-2xl font-bold">GET UP TO 60%</h1>
        <p>For the summer season</p>
        </div>
        <div>
        <Image className="" src="/promotion1.webp" alt="Promotion-1"
        width={245}
        height={245}
        />
        </div>
      </div>
      <div className="w-full h-[25rem] flex flex-col bg-[#EFE1C7]">
        <div className="ml-7 mt-4">
          <p>Flex Sweatshirt</p>
          <h2>$100.00$75.00</h2>
        </div>
        <div className="flex items-center justify-center">
          <Image className="w-60 h-[21rem]" src="/male-1.webp" alt="male-1"
          width={200}
          height={200}
          />
        </div>
      </div>

      <div className="flex flex-col w-full h-full bg-red-500">
        <div className="ml-7 mt-4">
          <p>Flex Push Button Bomber</p>
          <h2>$225.00$190.00</h2>
        </div>
        <div className="flex justify-center">
          <Image className="h-[21rem] w-60" src="/male-2.webp" alt="male-2"
          width={200}
          height={200}
          />
        </div>
      </div>

      <div className="py-9 text-white w-full col-span-2 bg-[#212121] flex flex-col justify-cnter items-center">

      </div>
    </div>
  )
}

export default Promotion
