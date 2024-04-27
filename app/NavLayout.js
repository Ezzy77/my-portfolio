import Link from "next/link";

export default function NavLayout() {
    return (
        <header>
            <nav className="flex items-center justify-between p-6 bg-gray-800 text-white">
                <div className="text-2xl ml-20">
                    <Link href="/">
                        Elisio Cabral Sa
                    </Link>
                </div>
                <div>
                    <ul className="flex space-x-5 mr-20">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/">Projects</Link></li>
                        <li><Link href="/">About</Link></li>
                        <li><Link href="/">Blogs</Link></li>
                        <li><Link href="/">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}