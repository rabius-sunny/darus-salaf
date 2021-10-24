import { AcademicCapIcon, CodeIcon, TrendingUpIcon, GiftIcon, LibraryIcon, BookOpenIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Spread Education',
    description:
      'Build full-featured library and Dawah Center for education, research and distribution.',
    icon: TrendingUpIcon,
  },
  {
    name: 'Build Masjid and Madrasa',
    description:
      'Construct Masjid and Madrasa for worshiping and spreading the healthy education.',
    icon: LibraryIcon,
  },
  {
    name: 'Media and Softwares',
    description:
      'Develope Furnished Online & Offline Dawah media and necessary Softwares.',
    icon: CodeIcon,
  },
  {
    name: 'Training & Counseling',
    description:
      'Provide trainings and counselings on Dawah, Education, Tilawah, Ruqyah and other beneficial projects.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Publish & Lectures',
    description:
      'Publish benificial Books, Leaflet, Booklet, Magazine, Research paper etc and arrange lectures and other functions.',
    icon: BookOpenIcon,
  },
  {
    name: 'Help the Needy',
    description:
      'Help the needy and helpless peoples and contribute on other sound social works.',
    icon: GiftIcon,
  },
]

export default function Featured() {
  return (
    <div className="pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-gray-700 font-semibold tracking-wide uppercase">our goal</h2>
          <p className="mt-2 text-indigo-600 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            Unity for preaching the Light and Truth
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Some dedicated youngs who love their Deen and want to raise capitals for the hereafter, help us to accomplish our goals, only for the sake of Allah
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature, index) => (
              <div key={index} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

