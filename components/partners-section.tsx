import Image from "next/image"

export function PartnersSection() {
  return (
    <div className="bg-white py-12">
      <div className="container">
        <div className="mx-auto grid grid-cols-2 items-center gap-8 md:grid-cols-5">
          <div className="flex justify-center">
            <Image src="/placeholder.svg" alt="Partner logo" width={120} height={40} className="h-8 w-auto" />
          </div>
          <div className="flex justify-center">
            <Image src="/placeholder.svg" alt="Partner logo" width={120} height={40} className="h-8 w-auto" />
          </div>
          <div className="flex justify-center">
            <Image src="/placeholder.svg" alt="Partner logo" width={120} height={40} className="h-8 w-auto" />
          </div>
          <div className="flex justify-center">
            <Image src="/placeholder.svg" alt="Partner logo" width={120} height={40} className="h-8 w-auto" />
          </div>
          <div className="flex justify-center">
            <Image src="/placeholder.svg" alt="Partner logo" width={120} height={40} className="h-8 w-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}

