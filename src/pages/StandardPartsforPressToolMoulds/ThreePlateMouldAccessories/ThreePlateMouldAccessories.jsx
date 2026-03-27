import LatchLock from "./LatchLock";
import LongLockHolder from "./LongLockHolder";
import PartingLocks from "./PartingLocks";
import ShortLockHolder from "./ShortLockHolder";
import ShoulderScrew from "./ShoulderScrew";
import ShoulderScrew2 from "./ShoulderScrew2";

const ThreePlateMouldAccessories=()=>{
    return(
        <>
        <div id="catalogue1" className="footer_bg">
            <div className="container py-2 px-0">
                <div className="w-100 ps-4 ">
                    <img src="../images/logo.png" alt="logo" className="w-25" />
                </div>
                <div className="product_info_main">
                    <h1 className="fs-3 ">Three Plate Mould accessories</h1>
                    <p className="mb-0">Three Plate Mould Accessories are essential components used in three-plate injection moulds to ensure precise part separation and efficient ejection. These accessories help in achieving better gate cutting and smooth mould operation, especially in multi-cavity and high-precision moulds.</p>
                </div>
                <div className="product-list my-0 px-3 pb-3 pt-0 product_list_main produ_list_hmain">
                    <div className="row row-cols-1 row-cols-3 g-2 mb-4">
                        <div className="col">
                            <a className="card border-0 bg-transparent pdf-link" href="#catalogue2">
                                <img src="../images/Parting_Locks_inn.webp" alt="Product 1" className="card-img-top" />
                                <div className="card-body bg-white position-absolute  w-100" style={{ top: "93%" }}>
                                    <p className="card-title text-center text-dark mb-0">Parting Locks</p>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a className="card border-0 bg-transparent pdf-link" href="#catalogue3">
                                <img src="../images/Latchlock_main.webp" alt="Tapped-End-Clamps" className="card-img-top" />
                                <div className="card-body bg-white position-absolute  w-100" style={{ top: "93%" }}>
                                    <p className="card-title text-center text-dark mb-0">Latch lock</p>

                                </div>
                            </a>
                        </div>

                        <div className="col">
                            <a className="card border-0 bg-transparent pdf-link" href="#catalogue3">
                                <img src="../images/ShortLatchBar_main.webp" alt="Product 1" className="card-img-top" />
                                <div className="card-body bg-white position-absolute  w-100" style={{ top: "93%" }}>
                                    <p className="card-title text-center text-dark mb-0">Short Latch Bar</p>
                                </div>
                            </a>
                        </div>

                         <div className="col">
                            <a className="card border-0 bg-transparent pdf-link" href="#catalogue3">
                                <img src="../images/LongLatchbar_main.webp" alt="Product 1" className="card-img-top" />
                                <div className="card-body bg-white position-absolute  w-100" style={{ top: "93%" }}>
                                    <p className="card-title text-center text-dark mb-0">Long Latch bar</p>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a className="card border-0 bg-transparent pdf-link" href="#catalogue4">
                                <img src="../images/ShortLockHolder_main.webp" alt="Product 1" className="card-img-top" />
                                <div className="card-body bg-white position-absolute  w-100" style={{ top: "93%" }}>
                                    <p className="card-title text-center text-dark mb-0">Short Lock Holder</p>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a className="card border-0 bg-transparent pdf-link" href="#catalogue5">
                                <img src="../images/LongLockHolder_main.webp" alt="Product 1" className="card-img-top" />
                                <div className="card-body bg-white position-absolute  w-100" style={{ top: "93%" }}>
                                    <p className="card-title text-center text-dark mb-0">Long Lock Holder</p>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a className="card border-0 bg-transparent pdf-link" href="#catalogue6">
                                <img src="../images/ShoulderScrew_main.webp" alt="Product 1" className="card-img-top" />
                                <div className="card-body bg-white position-absolute  w-100" style={{ top: "93%" }}>
                                    <p className="card-title text-center text-dark mb-0">Shoulder Screw</p>
                                </div>
                            </a>
                        </div>
                        

                         

                    </div>
                </div>
            </div>
            <span className="page_number">Page 01</span>
        </div>
        <PartingLocks />
        <LatchLock />
        <ShortLockHolder />
        <LongLockHolder />
        <ShoulderScrew />
        <ShoulderScrew2 />
        </>
    )
}
export default ThreePlateMouldAccessories;