import { useState } from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Productcategory from "./pages/mainCotegurges";
import TappedEndClamp from "./pages/Injection_Moulding/tappedendclamp";
import UTypeSpecialMouldClamp from "./pages/Injection_Moulding/U-TypeSpecialMouldClamp";
import Mouldclamp from "./pages/Injection_Moulding/MouldClamp";
import ForgedMouldClamp2 from "./pages/Injection_Moulding/ForgedMouldClamp2";
import Strapanduniversal from "./pages/ClampingWorkHoldingApplication/PressShopToolClampingdevices/StrapAndUniversal";
import StrapStepStrap from "./pages/ClampingWorkHoldingApplication/MachineShopJobClampingDevices/StrapStepStrap";
import UniversalStrapClamps from "./pages/ClampingWorkHoldingApplication/PressShopToolClampingdevices/UniversalStrapClamps";
import UClamp from "./pages/ClampingWorkHoldingApplication/PressShopToolClampingdevices/UClamp";
import HeavyDutySpecialLongClamp from "./pages/ClampingWorkHoldingApplication/PressShopToolClampingdevices/HeavyDutySpecialLongClamp";
import MachineShopJobClampingDevices from "./pages/ClampingWorkHoldingApplication/MachineShopJobClampingDevices/MachineShopJobClampingDevices";
import PinchClamp from "./pages/ClampingWorkHoldingApplication/MachineShopJobClampingDevices/PinchClamp";
import PowerClampsSystemsSwingClamps from "./pages/ClampingWorkHoldingApplication/PowerClampforWeldingFixtures/powerclampingsystemsswingclamps";
import PneumaticSwingClamps from "./pages/ClampingWorkHoldingApplication/MachineShopJobClampingDevices/Pneumatic-Swing-Clamps";
import LowerFlangeVersionRightLeftSwing from "./pages/ClampingWorkHoldingApplication/MachineShopJobClampingDevices/LowerFlangeVersionRightLeftSwing";
import PneumaticSwingClampss from "./pages/ClampingWorkHoldingApplication/MachineShopJobClampingDevices/Pneumatic-Swing-Clamps-2";
import BlockVersionPneumaticSwingClamps from "./pages/ClampingWorkHoldingApplication/MachineShopJobClampingDevices/BlockVersionPneumaticSwingClamps";
import HydraulicSwingClamps from "./pages/ClampingWorkHoldingApplication/MachineShopJobClampingDevices/Hydraulic-Swing-Clamps";
import HydraulicSwingClampsLowerFlangeVersion from "./pages/ClampingWorkHoldingApplication/MachineShopJobClampingDevices/HydraulicSwingClampsLowerFlangeVersion";
import HydraulicSwingClampss from "./pages/ClampingWorkHoldingApplication/MachineShopJobClampingDevices/Hydraulic-Swing-Clamps2";
import Hydraulicswingclampsupperflange from "./pages/ClampingWorkHoldingApplication/MachineShopJobClampingDevices/Hydraulic-Swing-Clamps3";
import Hydraulicclamp from "./pages/ClampingWorkHoldingApplication/HydraulicClamp/Hydraulic-Clamp";
import TBoltTNut from "./pages/ClampingWorkHoldingApplication/Clamping-accessories/T-Bolt-&-T-Nut";
import TNut from "./pages/ClampingWorkHoldingApplication/Clamping-accessories/T-NUT";
import Clampingstudsmouldstudhexagonalstuds from "./pages/ClampingWorkHoldingApplication/Clamping-accessories/Clamping-Studs-Mould-Stud-Hexagonal-Studs";
import Clampingstudsmouldstudhexagonalstudsdetail2 from "./pages/ClampingWorkHoldingApplication/Clamping-accessories/Clamping-Studs-Mould-Stud-Hexagonal-StudsDeatail2";
import Plainsphericalwasher from "./pages/ClampingWorkHoldingApplication/Clamping-accessories/Plain-Spherical-Washer";
import Flangednuthexagonalnut from "./pages/ClampingWorkHoldingApplication/Clamping-accessories/Flanged-Nut-Hexagonal-Nut";
import ExtensionNutCWasher from "./pages/ClampingWorkHoldingApplication/Clamping-accessories/Extension-Nut-C-Washer";
import LevellingJacksHeavyDuty from "./pages/ClampingWorkHoldingApplication/Clamping-accessories/LevellingJacks–HeavyDuty";
import Adustablesupportstepblocks from "./pages/ClampingWorkHoldingApplication/Clamping-accessories/Adustable-Support-Step-Blocks";
import CGClamps from "./pages/ClampingWorkHoldingApplication/Clamping-accessories/C-G-Clamps";
import BenchVice from "./pages/Workholding/BenchVice";
import BenchGrindingVice from "./pages/Workholding/BenchGrindingVice";
import GrindingVicesMillingMachine from "./pages/Workholding/GrindingVices-MillingMachine";
import MillingMachineVice from "./pages/Workholding/MillingMachineVice1-2";
import StandardPartsforPressToolMoulds from "./pages/StandardPartsforPressToolMoulds/StandardPartsforPressToolMoulds";
import ForMouldsPlasticInjectionMoulds from "./pages/StandardPartsforPressToolMoulds/ForMoulds-PlasticInjectionMoulds";
import PunchesandDiesbutton from "./pages/StandardPartsforPressToolMoulds/PunchesandDiesbutton";
import GuidingComponent from "./pages/StandardPartsforPressToolMoulds/GuidingComponent";
import Springsss from "./pages/StandardPartsforPressToolMoulds/Springs";
import GasSprings3 from "./pages/StandardPartsforPressToolMoulds/ForPressTools(SheetMetalDies)/GasSpringssss/GasSprings3";
import SafetyFeatures from "./pages/StandardPartsforPressToolMoulds/ForPressTools(SheetMetalDies)/GasSpringssss/safetyfeatures";
import GasSprings1 from "./pages/StandardPartsforPressToolMoulds/ForPressTools(SheetMetalDies)/GasSpringssss/GasSprings1";
import ServicesatYourDoorstep from "./pages/StandardPartsforPressToolMoulds/ForPressTools(SheetMetalDies)/GasSpringssss/ServicesatYourDoorstep";
import Peripheralcomponents from "./pages/StandardPartsforPressToolMoulds/Peripheralcomponents";
import Clampingstudsmouldstudhexagonalstudsdetail from "./pages/ClampingWorkHoldingApplication/Clamping-accessories/Clamping-Studs-Mould-Stud-Hexagonal-StudsDeatail";
import Forgedmould from "./pages/Injection_Moulding/ForgedMould";
import Cnc from "./pages/CNCTURNINGMILLINGACCESSORIES/cnc";
import Cnc2 from "./pages/CNCTURNINGMILLINGACCESSORIES/cnc2";
import MouldAlignmentAccessories from "./pages/StandardPartsforPressToolMoulds/MouldAlignmentAccessories/MouldAlignmentAccessories";
import ThreePlateMouldAccessories from "./pages/StandardPartsforPressToolMoulds/ThreePlateMouldAccessories/ThreePlateMouldAccessories";
import LiftingEyeBolts from "./pages/StandardPartsforPressToolMoulds/OtherAccessories/LiftingEyeBolts";
import EjectionAccessories from "./pages/StandardPartsforPressToolMoulds/EjectionAccessories/EjectionAccessories";

const Cataloguepdf = () => {
    const [exporting, setExporting] = useState(false);
    const handleExport = async () => {
        setExporting(true);
        try {
            // डायरेक्ट विंडो लोकेशन का उपयोग करें ताकि डाउनलोड स्मूथ हो
            window.location.href = "http://localhost:3001/generate-pdf";

            // बटन को थोड़ी देर के लिए डिसेबल रखें
            setTimeout(() => setExporting(false), 5000);

        } catch (err) {
            console.error(err);
            alert("Export failed!");
            setExporting(false);
        }
    };

    return (
        <>
            <div className="pdf-container">
                {/* यह ID "catalogue0" बैकएंड द्वारा PDF से हटा दी जाएगी */}
                <div id="catalogue0">
                    <button
                        onClick={handleExport}
                        disabled={exporting}
                        style={{ padding: "10px 20px", cursor: "pointer", background: "blue", color: "white", border: "none", borderRadius: "5px" }}
                    >
                        {exporting ? "Preparing PDF..." : "Download Full Catalogue"}
                    </button>
                </div>

                {/* <Home />
                <About />
                 <Productcategory />
                <TappedEndClamp />
                <UTypeSpecialMouldClamp />
                <Mouldclamp />
                <Forgedmould />
                <ForgedMouldClamp2 />
                <Strapanduniversal />
                <StrapStepStrap />
                <UniversalStrapClamps />
                <UClamp />
                <HeavyDutySpecialLongClamp />
                <MachineShopJobClampingDevices />
                <PinchClamp />
                <PowerClampsSystemsSwingClamps />
                <PneumaticSwingClamps />
                <LowerFlangeVersionRightLeftSwing />
                <PneumaticSwingClampss />
                <BlockVersionPneumaticSwingClamps />
                <HydraulicSwingClamps />
                <HydraulicSwingClampsLowerFlangeVersion />
                <HydraulicSwingClampss />
                <Hydraulicswingclampsupperflange />
                <Hydraulicclamp />
                <TBoltTNut />
                <TNut />
                <Clampingstudsmouldstudhexagonalstuds />
                <Clampingstudsmouldstudhexagonalstudsdetail />
                <Clampingstudsmouldstudhexagonalstudsdetail2 />
                <Plainsphericalwasher />
                <Flangednuthexagonalnut />
                <ExtensionNutCWasher />
                <LevellingJacksHeavyDuty />
                <Adustablesupportstepblocks />
                <CGClamps />
                <BenchVice />
                <BenchGrindingVice />
                <GrindingVicesMillingMachine />
                <MillingMachineVice />
                <StandardPartsforPressToolMoulds />
                <ForMouldsPlasticInjectionMoulds />
                <PunchesandDiesbutton />
                <GuidingComponent />
                <Springsss />
                <GasSprings3 />
                <SafetyFeatures />
                <GasSprings1 />
                <ServicesatYourDoorstep />
                <Peripheralcomponents /> 
                <Cnc/>
                <Cnc2/>     */}


                {/* <MouldAlignmentAccessories/> */}
                {/* <ThreePlateMouldAccessories /> */}
                {/* <LiftingEyeBolts /> */}
                <EjectionAccessories/>
            </div>
        </>
    )
}
export default Cataloguepdf;