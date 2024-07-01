import Href from "../atoms/href";
import Footer from "../organisms/footer";
import './contacto.css';

function Contacto(){
    return(
        <>
        <Href/>
        <div className="container1">
            <div className="container2">
                <div className="text">
                    <h2>CONTACTO</h2>
                    <br></br>
                    <span>+123-456-7890</span>
                    <br></br>
                    <span>www.proGYM.com</span>
                    <br></br>
                    <span>proGYM123@outlook.es</span>
                    <br></br>
                    <span>123 calle sur St., for City, ST 12345</span>
                </div>
            </div>
            <div className="img">
             <img src="https://img.freepik.com/foto-gratis/vista-angulo-hombre-musculoso-irreconocible-preparandose-levantar-barra-club-salud_637285-2497.jpg"></img>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Contacto;