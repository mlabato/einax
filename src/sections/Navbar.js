

const Navbar = () => {
    return(
        <article className="flex flex-row items-center">
            
            <img src="/logo.png" alt="" />

            <ul className="flex flex-row">
                <li><a href="#why-solar"> why solar?</a></li>
                <li><a href="#services"> services</a></li>
                <li><a href="#about-us"> about us</a></li>
                <li><a href="#contact"> contact</a></li>
            </ul>
        </article>
    )
}

export default Navbar