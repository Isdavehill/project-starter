import { site } from '@/lib/config'

export default function Footer() {
    const Year =  new Date().getFullYear()
    return (
        <footer className="primary-footer">
        <p>Copyright &copy; {Year} {site.author}</p>
      </footer>
    );
}

