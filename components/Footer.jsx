

export default function Footer() {
    const Year =  new Date().getFullYear()
    return (
        <footer className="primary-footer">
        <p>Copyright &copy; {Year}</p>
      </footer>
    );
}

