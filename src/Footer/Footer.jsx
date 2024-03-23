import React from 'react';
import './Footer.css'
const Footer = () =>{
    return(
        <React.Fragment>
        <footer className ="site-footer">
        <div className ="footer-bottom">
            <p className ="direitos">&copy;Todos os direitos reservados.</p>
        </div>
        </footer>
      </React.Fragment>
    )
}
export default Footer;
//o return só retorna apenas um elemento
//pode ccriar uma grande div contendo tudo
//<>react.fragment</> ou apenas <> </>
//class pode causar conflitos, usar className
//para estilizações globais, usa o index.css