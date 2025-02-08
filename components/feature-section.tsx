import Image from "next/image"
import { Button } from "@/components/ui/button"

export function FeatureSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div className="flex items-center justify-center">
            <Image
              src="/placeholder.svg"
              alt="Pencil illustration"
              width={400}
              height={400}
              className="max-w-sm"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              There are endless ways to express a single idea
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Rewrite your content at scale using AI-powered suggestions to improve clarity, flow, and readability. Generate phrases by generating creative rewrites of your thoughts.
            </p>
            <div className="mt-10">
              <Button variant="outline" size="lg">
                Get started now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

