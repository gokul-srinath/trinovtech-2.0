import Image from 'next/image'

const contactItems = [
    { icon: '/mail.svg', title: 'Email', value: 'info@trinovtech.in', href: 'mailto:info@trinovtech.in' },
    { icon: '/whatsapp.svg', title: 'Whatsapp', value: '+91 73958 81708', href: 'https://wa.me/917395881708' },
    { icon: '/phone.svg', title: 'Phone', value: '+91 91504 11708', href: 'tel:+919150411708' },
]

const headings = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about-us' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Services', href: '#services' },
    { label: 'Contact Us', href: '#contact' },
]

const solutions = [
    { label: 'Embedded Systems', href: '#embedded-systems' },
    { label: 'IOT Integrations', href: '#iot-integrations' },
    { label: 'Enterprise Application', href: '#enterprise-application' },
]

const services = [
    { label: 'Pcb Designing', href: '#pcb-designing' },
    { label: 'Firmware Development', href: '#firmware-development' },
    { label: 'Linux Drviver Support', href: '#linux-driver' },
    { label: 'Mobile App Development', href: '#mobile-app' },
    { label: 'Web App Development', href: '#web-app' },
    { label: 'UI/UX Design', href: '#ui-ux' },
    { label: 'Cloud Operations', href: '#cloud-ops' },
    { label: 'Cloud Infrastructure', href: '#cloud-infra' },
    { label: 'Cloud Security', href: '#cloud-security' },
]

export default function Footer() {
    return (
        <footer style={{ backgroundColor: '#dce8f2', overflow: 'hidden' }} className="text-slate-900">
            <div className="mx-auto max-w-7xl px-6 pt-10 pb-0 lg:px-12">
                <div className="flex flex-col">

                    {/* Contact cards + nav links */}
                    <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">

                        {/* Contact cards */}
                        <div className="flex flex-col gap-3 w-[320px] shrink-0">
                            {contactItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    target={item.href.startsWith('http') ? '_blank' : undefined}
                                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                                    className="flex items-center gap-3 rounded-[15px] px-4 py-3 transition hover:opacity-90"
                                    style={{ backgroundColor: '#1f7a63' }}
                                >
                                    <div
                                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                                        style={{ backgroundColor: 'rgba(3,2,19,0.10)' }}
                                    >
                                        <Image src={item.icon} alt={item.title} width={20} height={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-normal" style={{ color: 'rgba(255,255,255,0.8)' }}>{item.title}</p>
                                        <p className="text-sm font-semibold text-white">{item.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Nav columns */}
                        <div className="grid grid-cols-3 gap-12 lg:self-start w-[700px]">
                            <div>
                                <p className="mb-4 text-sm font-semibold tracking-widest" style={{ color: '#8fa3b1' }}>Headings</p>
                                <ul>
                                    {headings.map((item) => (
                                        <li key={item.href}>
                                            <a href={item.href} className="text-sm font-bold leading-8 text-slate-800 hover:text-[#1f7a63] transition">
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <p className="mb-4 text-sm font-semibold tracking-widest" style={{ color: '#8fa3b1' }}>Solutions</p>
                                <ul>
                                    {solutions.map((item) => (
                                        <li key={item.href}>
                                            <a href={item.href} className="text-sm font-bold leading-8 text-slate-800 hover:text-[#1f7a63] transition">
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <p className="mb-4 text-sm font-semibold tracking-widest" style={{ color: '#8fa3b1' }}>Services</p>
                                <ul>
                                    {services.map((item) => (
                                        <li key={item.href}>
                                            <a href={item.href} className="text-sm font-normal leading-8 text-slate-700 hover:text-[#1f7a63] transition">
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Footer logo — flexible, clips bottom whitespace */}
                    <div className="relative w-full overflow-hidden" style={{ height: '180px', marginBottom: '0px' }}>
                        <Image
                            src="/footer logo.svg"
                            alt="Trinovtech"
                            fill
                            className="object-contain object-left"
                            priority={false}
                        />
                    </div>

                </div>
            </div>
        </footer>
    )
}
