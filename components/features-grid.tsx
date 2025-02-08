import { MonitorIcon, UsersIcon, LanguagesIcon, CheckCircleIcon, FolderIcon, MessageCircleIcon } from 'lucide-react'

export function FeaturesGrid() {
  const features = [
    {
      title: "50+ email templates",
      description: "Choose from our collection of proven templates and customize them to your needs",
      icon: MonitorIcon,
    },
    {
      title: "Works on desktop and mobile",
      description: "Get all the functionality you need, wherever you are",
      icon: UsersIcon,
    },
    {
      title: "Editor mode",
      description: "Powerful editing capabilities for perfect content every time",
      icon: LanguagesIcon,
    },
    {
      title: "35+ languages supported",
      description: "Write and generate content across different languages",
      icon: CheckCircleIcon,
    },
    {
      title: "Folder project management",
      description: "Organize your content efficiently with our folder system",
      icon: FolderIcon,
    },
    {
      title: "Community access",
      description: "Join our community of writers and share your experience",
      icon: MessageCircleIcon,
    },
  ]

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="container">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-16">
          Plus, everything else you need to become an email marketing pro
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="relative p-6 border rounded-lg">
              <div className="flex items-center gap-4">
                <feature.icon className="h-6 w-6" />
                <h3 className="font-semibold">{feature.title}</h3>
              </div>
              <p className="mt-4 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

