import './header.css'


const Header = (props) => {
    return(<span onClick={() => window.scroll(0, 0)} className="header" >{props.data}</span>)
}

export default Header;