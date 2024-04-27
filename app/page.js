
export default function Home() {
    return(
        <main className="page">
            <section className="flex items-center justify-between space-x-4 py-10 px-6 bg-gray-100">
                <div className="flex-1">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <h1 className="text-3xl font-bold mb-2">Hello, I'm Elisio Cabral Sa</h1>
                    <h3 className="text-xl mb-4">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        I'm a software engineer specialized in backend web services
                        and CLI tools
                    </h3>
                    <p className="text-gray-600">
                        [Brief Introduction about yourself]
                    </p>
                </div>

                <div className="flex-1">
                    <img className="object-cover w-full h-64 rounded-lg" src="developer_hero.avif" alt="computer image"/>
                </div>
            </section>
        </main>
    )
}
