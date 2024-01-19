import { site, navLinks } from '@/lib/config'
import Link from 'next/link';

export default function Header() {
    return (
        <header className="primary-header">
            <a href="/" className="site__logo">{site.title}</a>
            <nav>
                <ul className="site__nav">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.url}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
