export function StepsSection() {
  const steps = [
    {
      number: "1",
      title: "Open your content inside the document editor",
    },
    {
      number: "2",
      title: "Select the parts of your content that you want the AI to rewrite",
    },
    {
      number: "3",
      title: "Click on the 'Rewrite' button available in the upper toolbar",
    },
    {
      number: "4",
      title: "Cycle through different versions of generated outputs and choose the most appealing one",
    },
  ]

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="container">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          How to rewrite sentences seamlessly:
        </h2>
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-black text-white">
                  {step.number}
                </div>
                <div className="flex items-center">
                  <p className="text-lg font-medium">{step.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

