import { PrefetchPageLinks } from "react-router-dom";
import AirEjectorPin from "./AirEjectorPin";
import AirEjectorPin63 from "./AirEjectorPin63";
import AirVentVE71 from "./AirVent(VE71)";
import BladeEjectorPinDIN from "./BladeEjectorPin-DIN";
import BushforPressureSleeve from "./BushforPressureSleeve(VE9.2)";
import PlateAccelerator from "./PlateAccelerator(VE8.2)";
import SleevePins from "./SleevePins";
import SleevePins42 from "./SleevePins42";
import SleevePins43 from "./SleevePins43";
import StepEjctors from "./StepEjctors";
import StraightEjectorPins_H from "./StraightEjectorPins_H";
import StraightEjectorPins_H2 from "./StraightEjectorPins_H2";
import StraightEjectorPins_H21 from "./StraightEjectorPins_H21";
import StraightEjectorPins_H22 from "./StraightEjectorPins_H22";
import StraightEjectorPins_H23 from "./StraightEjectorPins_H23";
import StraightEjectorPins_H24 from "./StraightEjectorPins_H24";
import StraightEjectorPins_H25 from "./StraightEjectorPins_H25";
import StraightEjectorPins_T3 from "./StraightEjectorPins_T3";
import StraightEjectorPins_T4 from "./StraightEjectorPins_T4";
import StraightEjectorPins_T5 from "./StraightEjectorPins_T5";
import StraightEjectorPins_T6 from "./StraightEjectorPins_T6";

const EjectionAccessories = () => {
    return(
        <>
        <div id="catalogue1" className="footer_bg">
            <div className="container py-2 px-0">
                <div className="w-100 ps-4 ">
                    <img src="../images/logo.png" alt="logo" className="w-25" />
                </div>
                <div className="product_info_main">
                    <h1 className="fs-3 ">Ejection Accessories</h1>
                    <p>VETO provides robust and reliable Ejection Accessories designed to ensure smooth, efficient, and precise ejection of moulded components during production.</p>
                </div>
                <div className="product-list my-0 p-3 product_list_main produ_list_hmain">
                    <div className="row row-cols-1 row-cols-3 g-2 mb-4">
                        <div className="col">
                            <a className="card border-0 bg-transparent" href="https://veto-india.com/wp-content/uploads/2026/03/Ejector-Springs-and-Die-Springs.pdf">
                                <img src="../images/Ejector_Springs_Die_Springs.webp" alt="Product 1" className="card-img-top" />
                                <div className="card-body bg-white position-absolute  w-100" style={{ top: "93%" }}>
                                    <p className="card-title text-center text-dark mb-0">Ejector Springs, Die Springs</p>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a className="card border-0 bg-transparent pdf-link" href="#catalogue2">
                                <img src="../images/Ejection-Accessories_main.webp" alt="Tapped-End-Clamps" className="card-img-top" />
                                <div className="card-body bg-white position-absolute  w-100" style={{ top: "93%" }}>
                                    <p className="card-title text-center text-dark mb-0">Straight Ejector Pins</p>
                                </div>
                            </a>
                        </div>

                        <div className="col">
                            <a className="card border-0 bg-transparent pdf-link" href="#catalogue13">
                                <img src="../images/StepEjctors_main.webp" alt="Product 1" className="card-img-top" />
                                <div className="card-body bg-white position-absolute  w-100" style={{ top: "93%" }}>
                                    <p className="card-title text-center text-dark mb-0">Step Ejctors</p>
                                </div>
                            </a>
                        </div>

                         <div className="col">
                            <a className="card border-0 bg-transparent pdf-link" href="#catalogue14">
                                <img src="../images/SleevePins_main.webp" alt="Product 1" className="card-img-top" />
                                <div className="card-body bg-white position-absolute  w-100" style={{ top: "93%" }}>
                                    <p className="card-title text-center text-dark mb-0">Sleeve Pins</p>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a className="card border-0 bg-transparent pdf-link" href="#catalogue17">
                                <img src="../images/BladePin_main.webp" alt="Product 1" className="card-img-top" />
                                <div className="card-body bg-white position-absolute  w-100" style={{ top: "93%" }}>
                                    <p className="card-title text-center text-dark mb-0">Blade Pin</p>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a className="card border-0 bg-transparent pdf-link" href="#catalogue18">
                                <img src="../images/AirEjectorPin_main.webp" alt="Product 1" className="card-img-top" />
                                <div className="card-body bg-white position-absolute  w-100" style={{ top: "93%" }}>
                                    <p className="card-title text-center text-dark mb-0">Air Ejector Pin</p>
                                </div>
                            </a>
                        </div>
                         <div className="col">
                            <a className="card border-0 bg-transparent pdf-link" href="#catalogue21">
                                <img src="../images/Dowel_Pins.webp" alt="Product 1" className="card-img-top" />
                                <div className="card-body bg-white position-absolute  w-100" style={{ top: "93%" }}>
                                    <p className="card-title text-center text-dark mb-0">Dowel Pins</p>
                                </div>
                            </a>
                        </div>

                         

                    </div>
                </div>
            </div>
            <span className="page_number">Page 01</span>
        </div>
        {/* Ejector Springs, Die Springs */}
        {/* Straight Ejector Pins  */}

        {/* <StraightEjectorPins_H/>
        <StraightEjectorPins_H2/>
        <StraightEjectorPins_T3/>
        <StraightEjectorPins_T4/>
        <StraightEjectorPins_T5/>
        <StraightEjectorPins_T6/>
        <StraightEjectorPins_H21/>
        <StraightEjectorPins_H22/>
        <StraightEjectorPins_H23/>
        <StraightEjectorPins_H24/>
        <StraightEjectorPins_H25/> */}
        

        {/* Step Ejctors */}

        {/* <StepEjctors/> */}

        {/* Sleeve Pins */}

        {/* <SleevePins/>
        <SleevePins42/>
        <SleevePins43/> */}

        {/* Blade Pin */}

        {/* <BladeEjectorPinDIN/> */}

        {/* Air Ejector Pin */}

        <AirEjectorPin/>
        {/* <AirEjectorPin63/> */}
        {/* <AirVentVE71/> */}

        {/* Dowel Pins */}
        {/* <PlateAccelerator/> */}
        <BushforPressureSleeve/>

        </>
    )
}
export default EjectionAccessories;