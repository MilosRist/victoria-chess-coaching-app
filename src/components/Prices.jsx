import { CheckIcon } from '@heroicons/react/20/solid'
import Header from '../components/Header'

const tiers = [
  {
    name: 'Solo Lessons',
    id: 'tier-hobby',
    href: '#',
    priceMonthly: '$40 + Fees',
    description: "Can be considered for highly motivated and focused students",
    features: [
        '1-on-1', 
        'Can be hosted at your home', 
        'More focused and detail-oriented', 
        'Additional fees depending on travel'
    ],
    featured: false,
  },
  {
    name: 'Group Lessons',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: '$25',
    description: 'Recommended for the average student',
    features: [
      'Interact and play with peers',
      'Learn from others',
      'Offered on location',
      'Fun learning environment'
    ],
    featured: true,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Prices = () => {
  return (
    <div>
        <Header />
        <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        </div>
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
            <h2 className="text-base font-semibold leading-7 text-gray-700">Pricing</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-mono">
            Chess Coaching
            </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
            I offer both private and group chess coaching in Victoria, BC. Feel free to contact for more information!
        </p>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
            {tiers.map((tier, tierIdx) => (
            <div
                key={tier.id}
                className={classNames(
                tier.featured ? 'relative bg-gray-50 shadow-2xl' : 'bg-white/60 sm:mx-8 lg:mx-0',
                tier.featured
                    ? ''
                    : tierIdx === 0
                    ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none'
                    : 'sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl',
                'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10',
                )}
            >
                <h3
                id={tier.id}
                className={classNames(
                    tier.featured ? 'text-gray-700' : 'text-gray-700',
                    'text-base font-semibold leading-7', 'font-mono',
                )}
                >
                {tier.name}
                </h3>
                <p className="mt-4 flex items-baseline gap-x-2">
                <span
                    className={classNames(
                    tier.featured ? 'text-gray-900' : 'text-gray-900',
                    'text-5xl font-bold tracking-tight', 'font-mono',
                    )}
                >
                    {tier.priceMonthly}
                </span>
                <span className={classNames(tier.featured ? 'text-gray-600' : 'text-gray-600', 'text-base')}>/session</span>
                </p>
                <p className={classNames(tier.featured ? 'text-gray-600' : 'text-gray-600', 'mt-6 text-base leading-7')}>
                {tier.description}
                </p>
                <ul
                role="list"
                className={classNames(
                    tier.featured ? 'text-gray-600' : 'text-gray-600',
                    'mt-8 space-y-3 text-sm leading-6 sm:mt-10', 'font-mono',
                )}
                >
                {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                        aria-hidden="true"
                        className={classNames(tier.featured ? 'text-gray-700' : 'text-gray-700', 'h-6 w-5 flex-none')}
                    />
                    {feature}
                    </li>
                ))}
                </ul>
            </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default Prices
