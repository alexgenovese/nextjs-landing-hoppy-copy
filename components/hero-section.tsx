import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative bg-[#FFD700] py-20">
      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
            Write sentences that people love to read
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-800">
            Get multiple rewrites for any sentence with a single click to improve clarity and style
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800">
              Start writing free
            </Button>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">£1.00</span>
              <span className="text-sm text-gray-600">/month (billed annually)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

