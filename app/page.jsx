import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Share
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center">
                Different Tech-ideas Globally 
            </span>
        </h1>
        <p className="desc text-center">
            Tech-notes is a tool for modern world to discover, create and share creative technology related notes.
        </p>

        <Feed />
    </section>
  )
}

export default Home  