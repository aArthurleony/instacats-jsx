import React from 'react';
import './Header.css'
const Header = () =>{
    return(
    <React.Fragment>
        <nav className="navbar">
        <div className="container">
            <a href="index.html"><img src="./img/logo." alt="" /></a>
            <ul className="nav-links">
                <li><a href="#">LOGIN</a></li>
                <li><a href="#">REGISTRAR</a></li>
            </ul>
        </div>
        </nav>
    </React.Fragment>
    )
}

export default Header;
//A sintaxe export default é usada para exportar um valor padrão de um módulo, o que significa que ao importar esse módulo, você obtém esse valor padrão diretamente.
//módulo é um arquivo que contém código JavaScript que pode ser exportado e importado em outros arquivos JavaScript.
//a estilização diretamente no componente style={{'backgroundColor':'green'}} 