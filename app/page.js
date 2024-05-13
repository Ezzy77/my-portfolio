
export default function Home() {
    return(
        <main className="page " >
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                         className="max-w-sm rounded-lg shadow-2xl"/>
                    <div>
                        <h1 className="text-5xl font-bold">Hello, I am Elisio Cabral Sa</h1>
                        <p className="py-6">
                            I am a software engineer specialized in backend web services and CLI tools.
                        </p>
                        <p className="py-6"> This website is currently under development!!.</p>
                        <button className="btn btn-primary">View projects</button>
                    </div>
                </div>
            </div>
        </main>
    )
}
