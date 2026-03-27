import React, { useState } from "react";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";
import Home from "./pages/home";
import About from "./pages/about";
import Productcategory from "./pages/mainCotegurges";
// import Injectionmoulding from "./pages/InjectionMouldingClampingdevices";
import TappedEndClamp from "./pages/Injection_Moulding/tappedendclamp";
import Forgedmould from "./pages/Injection_Moulding/ForgedMould";
import Mouldclamp from "./pages/Injection_Moulding/MouldClamp";
// import PressShopToolClampingdevices from "./pages/ClampingWorkHoldingApplication/PressShopToolClampingdevices/PressShopToolClampingdevices";
import Strapanduniversal from "./pages/ClampingWorkHoldingApplication/PressShopToolClampingdevices/StrapAndUniversal";
import UClamp from "./pages/ClampingWorkHoldingApplication/PressShopToolClampingdevices/UClamp";
import MachineShopJobClampingDevices from "./pages/ClampingWorkHoldingApplication/MachineShopJobClampingDevices/MachineShopJobClampingDevices";
import StrapStepStrap from "./pages/ClampingWorkHoldingApplication/MachineShopJobClampingDevices/StrapStepStrap";
import PinchClamp from "./pages/ClampingWorkHoldingApplication/MachineShopJobClampingDevices/PinchClamp";
import PneumaticSwingClamps from "./pages/ClampingWorkHoldingApplication/MachineShopJobClampingDevices/Pneumatic-Swing-Clamps";
import PneumaticSwingClampss from "./pages/ClampingWorkHoldingApplication/MachineShopJobClampingDevices/Pneumatic-Swing-Clamps-2";
import HydraulicSwingClamps from "./pages/ClampingWorkHoldingApplication/MachineShopJobClampingDevices/Hydraulic-Swing-Clamps";
import HydraulicSwingClampss from "./pages/ClampingWorkHoldingApplication/MachineShopJobClampingDevices/Hydraulic-Swing-Clamps2";
// import HydraulicSwingClamps3 from "./pages/ClampingWorkHoldingApplication/MachineShopJobClampingDevices/Hydraulic-Swing-Clamps3";
import Hydraulicswingclampsupperflange from "./pages/ClampingWorkHoldingApplication/MachineShopJobClampingDevices/Hydraulic-Swing-Clamps3";
// import Linkclamps from "./pages/ClampingWorkHoldingApplication/MachineShopJobClampingDevices/Link-Clamps";
// import PowerclampforWeldingFixtures from "./pages/ClampingWorkHoldingApplication/PowerClampforWeldingFixtures/Power-Clamp-forWeldingFixtures";
import Hydraulicclamp from "./pages/ClampingWorkHoldingApplication/HydraulicClamp/Hydraulic-Clamp";
// import Clampingaccessories from "./pages/ClampingWorkHoldingApplication/Clamping-accessories/Clamping-accessories";
import TBoltTNut from "./pages/ClampingWorkHoldingApplication/Clamping-accessories/T-Bolt-&-T-Nut";
import Clampingstudsmouldstudhexagonalstuds from "./pages/ClampingWorkHoldingApplication/Clamping-accessories/Clamping-Studs-Mould-Stud-Hexagonal-Studs";
import Plainsphericalwasher from "./pages/ClampingWorkHoldingApplication/Clamping-accessories/Plain-Spherical-Washer";
import Flangednuthexagonalnut from "./pages/ClampingWorkHoldingApplication/Clamping-accessories/Flanged-Nut-Hexagonal-Nut";
import Adustablesupportstepblocks from "./pages/ClampingWorkHoldingApplication/Clamping-accessories/Adustable-Support-Step-Blocks";
import ExtensionNutCWasher from "./pages/ClampingWorkHoldingApplication/Clamping-accessories/Extension-Nut-C-Washer";
import CGClamps from "./pages/ClampingWorkHoldingApplication/Clamping-accessories/C-G-Clamps";
import BenchVice from "./pages/Workholding/BenchVice";
import BenchGrindingVice from "./pages/Workholding/BenchGrindingVice";
import GrindingVicesMillingMachine from "./pages/Workholding/GrindingVices-MillingMachine";
import MillingMachineVice from "./pages/Workholding/MillingMachineVice1-2";
// import MillingMachineVice3Angle from "./pages/Workholding/MillingMachineViceAngle";
// import Workholding from "./pages/Workholding/Workholding";
// import SwivelPrecisionModular from "./pages/Workholding/Swivel-PrecisionModular";
// import PrecisionModularPrecision from "./pages/Workholding/PrecisionModular-Precision";
// import PrecisionSteel from "./pages/Workholding/Precision-Steel";
// import SteelVBlockWithCClampMagneticVBlock from "./pages/Workholding/SteelV-Block(WithC-Clamp)MagneticV-Block";
// import CIAnglePlatePunchFormer from "./pages/Workholding/CI-Angle-PlatePunch-Former";
// import MagneticSineViceMagneticChuck from "./pages/Workholding/MagneticSineVice-Magnetic-Chuck";
import StandardPartsforPressToolMoulds from "./pages/StandardPartsforPressToolMoulds/StandardPartsforPressToolMoulds";
import ForMouldsPlasticInjectionMoulds from "./pages/StandardPartsforPressToolMoulds/ForMoulds-PlasticInjectionMoulds";
// import PowerClamp from "./pages/ClampingWorkHoldingApplication/PowerClampforWeldingFixtures/PowerClampMain";
// import jsPDF from "jspdf";
// import jsons from './datas/Bookmarks.json'
import "jspdf-autotable";




// import PartingLocks from "./pages/StandardPartsforPressToolMoulds/ThreePlateMouldAccessories/PartingLocks";
// import LatchLock from "./pages/StandardPartsforPressToolMoulds/ThreePlateMouldAccessories/LatchLock";
// import ShortLockHolder from "./pages/StandardPartsforPressToolMoulds/ThreePlateMouldAccessories/ShortLockHolder";
// import LongLockHolder from "./pages/StandardPartsforPressToolMoulds/ThreePlateMouldAccessories/LongLockHolder";
// import ShoulderScrew from "./pages/StandardPartsforPressToolMoulds/ThreePlateMouldAccessories/ShoulderScrew";
// import ShoulderScrew2 from "./pages/StandardPartsforPressToolMoulds/ThreePlateMouldAccessories/ShoulderScrew2";
// import LiftingEyeBolts from "./pages/StandardPartsforPressToolMoulds/OtherAccessories/LiftingEyeBolts";
// import DateInserts from "./pages/StandardPartsforPressToolMoulds/OtherAccessories/DateInserts";
// import MouldShortCounters from "./pages/StandardPartsforPressToolMoulds/OtherAccessories/MouldShortCounters";
// import EjectionAccessories from "./pages/StandardPartsforPressToolMoulds/EjectionAccessories/EjectionAccessories";
// import MouldAlignmentAccessories from "./pages/StandardPartsforPressToolMoulds/MouldAlignmentAccessories/MouldAlignmentAccessories";
// import autoTable from "jspdf-autotable";
// import jsPDF from "jspdf";
// import ThreePlateMouldAccessories from "./pages/StandardPartsforPressToolMoulds/ThreePlateMouldAccessories/ThreePlateMouldAccessories";
// import ForPressToolsSheetMetalDies from "./pages/StandardPartsforPressToolMoulds/ForPressTools(SheetMetalDies)/ForPressTools(SheetMetalDies)";
// import Springs from "./pages/StandardPartsforPressToolMoulds/ForPressTools(SheetMetalDies)/Springs";
// import DieSpringss from "./pages/StandardPartsforPressToolMoulds/ForPressTools(SheetMetalDies)/DieSprings";
// import CoilSprings from "./pages/StandardPartsforPressToolMoulds/ForPressTools(SheetMetalDies)/CoilSprings";
// import CoilSpringss from "./pages/StandardPartsforPressToolMoulds/ForPressTools(SheetMetalDies)/CoilSprings2";
// import DieSprings2 from "./pages/StandardPartsforPressToolMoulds/ForPressTools(SheetMetalDies)/DieSprings2";
// import GasSprings from "./pages/StandardPartsforPressToolMoulds/ForPressTools(SheetMetalDies)/GasSprings";
// import GasSpringsApplication from "./pages/StandardPartsforPressToolMoulds/ForPressTools(SheetMetalDies)/GasSprings_Application";
// import GasSpringsApplication2 from "./pages/StandardPartsforPressToolMoulds/ForPressTools(SheetMetalDies)/GasSprings_Application2";
// import GasSpringsApplication3 from "./pages/StandardPartsforPressToolMoulds/ForPressTools(SheetMetalDies)/GasSprings_Application3";
// import GasSpringsApplication4 from "./pages/StandardPartsforPressToolMoulds/ForPressTools(SheetMetalDies)/GasSprings_Application4";
// import GasSpringsApplication5 from "./pages/StandardPartsforPressToolMoulds/ForPressTools(SheetMetalDies)/GasSprings_Application5";
// import GasSpringsApplication6 from "./pages/StandardPartsforPressToolMoulds/ForPressTools(SheetMetalDies)/GasSprings_Application6";
import GasSprings1 from "./pages/StandardPartsforPressToolMoulds/ForPressTools(SheetMetalDies)/GasSpringssss/GasSprings1";
// import GasSprings2 from "./pages/StandardPartsforPressToolMoulds/ForPressTools(SheetMetalDies)/GasSpringssss/GasSprings2";
import GasSprings3 from "./pages/StandardPartsforPressToolMoulds/ForPressTools(SheetMetalDies)/GasSpringssss/GasSprings3";
// import GasSprings4 from "./pages/StandardPartsforPressToolMoulds/ForPressTools(SheetMetalDies)/GasSpringssss/GasSprings4";
// import WidestChoiceofMounts from "./pages/StandardPartsforPressToolMoulds/ForPressTools(SheetMetalDies)/GasSpringssss/WidestChoiceofMounts";
// import Accessories from "./pages/StandardPartsforPressToolMoulds/ForPressTools(SheetMetalDies)/GasSpringssss/Accessories";
// import Spacesolution from "./pages/StandardPartsforPressToolMoulds/ForPressTools(SheetMetalDies)/GasSpringssss/specalsolution";
import SafetyFeatures from "./pages/StandardPartsforPressToolMoulds/ForPressTools(SheetMetalDies)/GasSpringssss/safetyfeatures";
// import Reliability_features from "./pages/StandardPartsforPressToolMoulds/ForPressTools(SheetMetalDies)/GasSpringssss/Reliability_features";
import ServicesatYourDoorstep from "./pages/StandardPartsforPressToolMoulds/ForPressTools(SheetMetalDies)/GasSpringssss/ServicesatYourDoorstep";
// import GuidePost from "./pages/StandardPartsforPressToolMoulds/ForPressTools(SheetMetalDies)/guide_post/guide_post";
// import GuidePost2 from "./pages/StandardPartsforPressToolMoulds/ForPressTools(SheetMetalDies)/guide_post/guide_post2";
// import GuidePost3 from "./pages/StandardPartsforPressToolMoulds/ForPressTools(SheetMetalDies)/guide_post/guide_post3";
// import GuidePost4 from "./pages/StandardPartsforPressToolMoulds/ForPressTools(SheetMetalDies)/guide_post/guide_post4";
// import GuidePost5 from "./pages/StandardPartsforPressToolMoulds/ForPressTools(SheetMetalDies)/guide_post/guide_post5";
import UTypeSpecialMouldClamp from "./pages/Injection_Moulding/U-TypeSpecialMouldClamp";
import ForgedMouldClamp2 from "./pages/Injection_Moulding/ForgedMouldClamp2";
import UniversalStrapClamps from "./pages/ClampingWorkHoldingApplication/PressShopToolClampingdevices/UniversalStrapClamps";
import LowerFlangeVersionRightLeftSwing from "./pages/ClampingWorkHoldingApplication/MachineShopJobClampingDevices/LowerFlangeVersionRightLeftSwing";
import BlockVersionPneumaticSwingClamps from "./pages/ClampingWorkHoldingApplication/MachineShopJobClampingDevices/BlockVersionPneumaticSwingClamps";
import HydraulicSwingClampsLowerFlangeVersion from "./pages/ClampingWorkHoldingApplication/MachineShopJobClampingDevices/HydraulicSwingClampsLowerFlangeVersion";
import PowerClampsSystemsSwingClamps from "./pages/ClampingWorkHoldingApplication/PowerClampforWeldingFixtures/powerclampingsystemsswingclamps";
import TNut from "./pages/ClampingWorkHoldingApplication/Clamping-accessories/T-NUT";
import Clampingstudsmouldstudhexagonalstudsdetail from "./pages/ClampingWorkHoldingApplication/Clamping-accessories/Clamping-Studs-Mould-Stud-Hexagonal-StudsDeatail";
import LevellingJacksHeavyDuty from "./pages/ClampingWorkHoldingApplication/Clamping-accessories/LevellingJacks–HeavyDuty";
// import ScrewJacksForHeavyFabrication from "./pages/ClampingWorkHoldingApplication/Clamping-accessories/ScrewJacks–ForHeavyFabrication";
// import StepBlocks from "./pages/ClampingWorkHoldingApplication/Clamping-accessories/StepBlocks";
import HeavyDutySpecialLongClamp from "./pages/ClampingWorkHoldingApplication/PressShopToolClampingdevices/HeavyDutySpecialLongClamp";
// import html2pdf from "html2pdf.js";
import autoTable from "jspdf-autotable";
// import { PDFDocument } from "pdf-lib";


import Clampingstudsmouldstudhexagonalstudsdetail2 from "./pages/ClampingWorkHoldingApplication/Clamping-accessories/Clamping-Studs-Mould-Stud-Hexagonal-StudsDeatail2";
import PunchesandDiesbutton from "./pages/StandardPartsforPressToolMoulds/PunchesandDiesbutton";
import GuidingComponent from "./pages/StandardPartsforPressToolMoulds/GuidingComponent";
import Springsss from "./pages/StandardPartsforPressToolMoulds/Springs";
import Peripheralcomponents from "./pages/StandardPartsforPressToolMoulds/Peripheralcomponents";




export default function Catalogue() {
  // const [progress, setProgress] = useState(0);
  
  // const [progress, setProgress] = useState(0);
  // const pages = [
  //   { id: "catalogue", pageNumber: 1 },
  //   { id: "catalogue1", pageNumber: 2 },
  //   { id: "catalogue2", pageNumber: 3 },
  //   { id: "catalogue3", pageNumber: 4 },
  //   { id: "catalogue4", pageNumber: 5 },
  //   { id: "catalogue5", pageNumber: 6 },
  //   { id: "catalogue6", pageNumber: 7 },
  //   { id: "catalogue7", pageNumber: 8 },
  //   { id: "catalogue8", pageNumber: 9 },
  //   { id: "catalogue9", pageNumber: 10 },
  //   { id: "catalogue10", pageNumber: 11 },
  //   { id: "catalogue11", pageNumber: 12 },
  //   { id: "catalogue12", pageNumber: 13 },
  //   { id: "catalogue13", pageNumber: 14 },
  //   { id: "catalogue14", pageNumber: 15 },
  //   { id: "catalogue15", pageNumber: 16 },
  //   { id: "catalogue16", pageNumber: 17 },
  //   { id: "catalogue17", pageNumber: 18 },
  //   { id: "catalogue18", pageNumber: 19 },
  //   { id: "catalogue19", pageNumber: 20 },
  //   { id: "catalogue20", pageNumber: 21 },
  //   { id: "catalogue21", pageNumber: 22 },
  //   { id: "catalogue22", pageNumber: 23 },
  //   { id: "catalogue23", pageNumber: 24 },
  //   { id: "catalogue24", pageNumber: 25 },
  //   { id: "catalogue25", pageNumber: 26 },
  //   { id: "catalogue26", pageNumber: 27 },
  //   { id: "catalogue27", pageNumber: 28 },
  //   { id: "catalogue28", pageNumber: 29 },
  //   { id: "catalogue29", pageNumber: 30 },
  //   { id: "catalogue30", pageNumber: 31 },
  //   { id: "catalogue31", pageNumber: 32 },
  //   { id: "catalogue32", pageNumber: 33 },
  //   { id: "catalogue33", pageNumber: 34 },
  //   { id: "catalogue34", pageNumber: 35 },
  //   { id: "catalogue35", pageNumber: 36 },
  //   { id: "catalogue36", pageNumber: 37 },
  //   { id: "catalogue37", pageNumber: 38 },
  //   { id: "catalogue38", pageNumber: 39 },
  //   { id: "catalogue39", pageNumber: 40 },
  //   { id: "catalogue40", pageNumber: 41 },
  //   { id: "catalogue41", pageNumber: 42 },
  //   { id: "catalogue42", pageNumber: 43 },
  //   { id: "catalogue43", pageNumber: 44 },
  //   { id: "catalogue44", pageNumber: 45 },
  //   { id: "catalogue45", pageNumber: 46 },
  //   { id: "catalogue46", pageNumber: 47 },
  //   { id: "catalogue47", pageNumber: 48 },
  //   { id: "catalogue48", pageNumber: 49 },
  //   { id: "catalogue49", pageNumber: 50 },
  //   { id: "catalogue50", pageNumber: 51 }
  //   // { id: "catalogue51", pageNumber: 52 },
  //   // { id: "catalogue52", pageNumber: 53 },
  //   // { id: "catalogue53", pageNumber: 54 },
  //   // { id: "catalogue54", pageNumber: 55 },
  //   // { id: "catalogue55", pageNumber: 56 },
  //   // { id: "catalogue56", pageNumber: 57 },
  //   // { id: "catalogue57", pageNumber: 58 },
  //   // { id: "catalogue58", pageNumber: 59 },
  //   // { id: "catalogue59", pageNumber: 60 },
  //   // { id: "catalogue60", pageNumber: 61 },
  //   // { id: "catalogue61", pageNumber: 62 },
  //   // { id: "catalogue62", pageNumber: 63 },
  //   // { id: "catalogue63", pageNumber: 64 },
  //   // { id: "catalogue64", pageNumber: 65 },
  //   // { id: "catalogue65", pageNumber: 66 },
  //   // { id: "catalogue66", pageNumber: 67 },
  //   // { id: "catalogue67", pageNumber: 68 },
  //   // { id: "catalogue68", pageNumber: 69 },
  //   // { id: "catalogue69", pageNumber: 70 },
  //   // { id: "catalogue70", pageNumber: 71 },
  //   // { id: "catalogue71", pageNumber: 72 },
  //   // { id: "catalogue72", pageNumber: 73 },
  //   // { id: "catalogue73", pageNumber: 74 },
  //   // { id: "catalogue74", pageNumber: 75 },
  //   // { id: "catalogue75", pageNumber: 76 },
  //   // { id: "catalogue76", pageNumber: 77 },
  //   // { id: "catalogue77", pageNumber: 78 },
  //   // { id: "catalogue78", pageNumber: 79 },
  //   // { id: "catalogue79", pageNumber: 80 },
  //   // { id: "catalogue80", pageNumber: 81 },
  //   // { id: "catalogue81", pageNumber: 82 },
  //   // { id: "catalogue82", pageNumber: 83 },
  //   // { id: "catalogue83", pageNumber: 84 },
  //   // { id: "catalogue84", pageNumber: 85 },
  //   // { id: "catalogue85", pageNumber: 86 },
  //   // { id: "catalogue86", pageNumber: 87 },
  //   // { id: "catalogue87", pageNumber: 88 },
  //   // { id: "catalogue88", pageNumber: 89 },
  //   // { id: "catalogue89", pageNumber: 90 },
  //   // { id: "catalogue90", pageNumber: 91 },
  //   // { id: "catalogue91", pageNumber: 92 },
  //   // { id: "catalogue92", pageNumber: 93 },
  //   // { id: "catalogue93", pageNumber: 94 },
  //   // { id: "catalogue94", pageNumber: 95 },
  //   // { id: "catalogue95", pageNumber: 96 },
  //   // { id: "catalogue96", pageNumber: 97 },
  //   // { id: "catalogue97", pageNumber: 98 },
  //   // { id: "catalogue98", pageNumber: 99 },
  //   // { id: "catalogue99", pageNumber: 100 },
  //   // { id: "catalogue100", pageNumber: 101 },
  //   // { id: "catalogue101", pageNumber: 102 },
  //   // { id: "catalogue102", pageNumber: 103 },
  //   // { id: "catalogue103", pageNumber: 104 },
  //   // { id: "catalogue104", pageNumber: 105 },
  //   // { id: "catalogue105", pageNumber: 106 },
  //   // { id: "catalogue106", pageNumber: 107 },
  //   // { id: "catalogue107", pageNumber: 108 },
  //   // { id: "catalogue108", pageNumber: 109 },
  //   // { id: "catalogue109", pageNumber: 110 },
  //   // { id: "catalogue110", pageNumber: 111 },
  //   // { id: "catalogue111", pageNumber: 112 },
  //   // { id: "catalogue112", pageNumber: 113 },
  //   // { id: "catalogue113", pageNumber: 114 },
  //   // { id: "catalogue114", pageNumber: 115 },
  //   // { id: "catalogue115", pageNumber: 116 },
  //   // { id: "catalogue116", pageNumber: 117 },
  //   // { id: "catalogue117", pageNumber: 118 },
  //   // { id: "catalogue118", pageNumber: 119 },
  //   // { id: "catalogue119", pageNumber: 120 },
  //   // { id: "catalogue120", pageNumber: 121 },
  //   // { id: "catalogue121", pageNumber: 122 },
  //   // { id: "catalogue122", pageNumber: 123 },
  //   // { id: "catalogue123", pageNumber: 124 },
  //   // { id: "catalogue124", pageNumber: 125 },
  //   // { id: "catalogue125", pageNumber: 126 },
  //   // { id: "catalogue126", pageNumber: 127 },
  //   // { id: "catalogue127", pageNumber: 128 },
  //   // { id: "catalogue128", pageNumber: 129 },
  //   // { id: "catalogue129", pageNumber: 130 },
  //   // { id: "catalogue130", pageNumber: 131 },
  //   // { id: "catalogue131", pageNumber: 132 },
  //   // { id: "catalogue132", pageNumber: 133 },
  //   // { id: "catalogue133", pageNumber: 134 },
  //   // { id: "catalogue134", pageNumber: 135 },
  //   // { id: "catalogue135", pageNumber: 136 },
  //   // { id: "catalogue136", pageNumber: 137 },
  //   // { id: "catalogue137", pageNumber: 138 },
  //   // { id: "catalogue138", pageNumber: 139 },
  //   // { id: "catalogue139", pageNumber: 140 },
  //   // { id: "catalogue140", pageNumber: 141 },
  //   // { id: "catalogue141", pageNumber: 142 },
  //   // { id: "catalogue142", pageNumber: 143 },
  //   // { id: "catalogue143", pageNumber: 144 },
  //   // { id: "catalogue144", pageNumber: 145 },
  //   // { id: "catalogue145", pageNumber: 146 },
  //   // { id: "catalogue146", pageNumber: 147 },
  //   // { id: "catalogue147", pageNumber: 148 },
  //   // { id: "catalogue148", pageNumber: 149 },
  //   // { id: "catalogue149", pageNumber: 150 },
  //   // { id: "catalogue150", pageNumber: 151 },
  //   // { id: "catalogue151", pageNumber: 152 },
  //   // { id: "catalogue152", pageNumber: 153 },
  //   // { id: "catalogue153", pageNumber: 154 },
  //   // { id: "catalogue154", pageNumber: 155 },
  //   // { id: "catalogue155", pageNumber: 156 },


  // ];


  // import jsPDF from "jspdf";
  // import html2canvas from "html2canvas";
  // import autoTable from "jspdf-autotable";
  // import { PDFDocument } from "pdf-lib";




  /* ================== EXPORT HANDLER ================== */

  const [exporting, setExporting] = useState(false);
  const handleExport = async () => {
      try {
        setExporting(true);
    
        const response = await fetch("http://localhost:3001/generate-pdf", {
          method: "GET",
        });
    
        if (!response.ok) {
          throw new Error("PDF generation failed");
        }
    
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
    
        const a = document.createElement("a");
        a.href = url;
        a.download = "Veto_Catalogue.pdf";
        document.body.appendChild(a);
        a.click();
    
        a.remove();
        window.URL.revokeObjectURL(url);
    
      } catch (err) {
        console.error(err);
        alert("PDF export failed!");
      } finally {
        setExporting(false);
      }
    };

 
 
 










  return (
    <>
      
      <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button onClick={handleExport} disabled={exporting}>
  {exporting ? "Generating PDF..." : "Export Catalogue PDF"}
</button>
      </div>

   
      {/* <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button onClick={handleExport} disabled={exporting} style={{ backgroundColor: exporting ? "#aaa" : "#007bff", color: "#fff", padding: "10px 20px", border: "none", borderRadius: "6px", cursor: exporting ? "not-allowed" : "pointer", }} >
          {exporting ? "Exporting..." : "Export as PDF"}
        </button>
        {exporting && (<div style={{ marginTop: "15px", width: "80%", marginInline: "auto" }}>
          <label htmlFor="progressBar">Export Progress: {progress}%</label>
          <progress id="progressBar" value={progress} max="100" style={{ width: "100%", height: "10px", borderRadius: "6px", marginTop: "5px", }} >
          </progress>
        </div>)}
      </div> */}




       <Home />
      <About />
      <Productcategory />
      {/* <Injectionmoulding /> not page*/}
      <TappedEndClamp />
      <UTypeSpecialMouldClamp />
      <Mouldclamp />
      <Forgedmould />
      <ForgedMouldClamp2 />
      {/* <PressShopToolClampingdevices /> not page */}
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
      {/* <Linkclamps /> not page*/}
      {/* <PowerClamp /> not page*/}
      {/* <PowerclampforWeldingFixtures /> not page*/}
      <Hydraulicclamp />
      {/* <Clampingaccessories /> not page*/}
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
      {/* <StepBlocks/> not page*/}
      {/* <ScrewJacksForHeavyFabrication/> not page*/}


      <CGClamps />
      {/* <Workholding /> not page*/}
      <BenchVice />
      <BenchGrindingVice />
      <GrindingVicesMillingMachine />
      <MillingMachineVice />
      {/* <MillingMachineVice3Angle /> not page */}
      {/* <SwivelPrecisionModular />not page */}
      {/* <PrecisionModularPrecision />not page */}
      {/* <PrecisionSteel /> not page*/}
      {/* <SteelVBlockWithCClampMagneticVBlock /> not page*/}
      {/* <CIAnglePlatePunchFormer /> not page*/}
      {/* <MagneticSineViceMagneticChuck /> not page*/}
      <StandardPartsforPressToolMoulds />
      <ForMouldsPlasticInjectionMoulds />
      <PunchesandDiesbutton />
      <GuidingComponent />
      <Springsss />
      {/* <CoilSprings /> not page*/}
      {/* <DieSpringss /> not page*/}
      {/* <DieSprings2 /> not page*/}
      <GasSprings3 />
      <SafetyFeatures />
      <GasSprings1 />
      <ServicesatYourDoorstep />
      <Peripheralcomponents/>


          {/* second part */}


      {/* <EjectionAccessories />
      <MouldAlignmentAccessories />
      <ThreePlateMouldAccessories />


      <PartingLocks />
      <LatchLock />
      <ShortLockHolder />
      <LongLockHolder /> */}
      {/* {/* <ShoulderScrew /> */}
      {/* <ShoulderScrew2 />
      <LiftingEyeBolts />
      <DateInserts />
      <MouldShortCounters />
      <ForPressToolsSheetMetalDies />  */}
      {/* <Springs /> not page*/}    


      {/* <CoilSpringss /> not page*/}


    {/* <GasSprings />
      <GasSpringsApplication />
      <GasSpringsApplication2 />
      <GasSpringsApplication3 />
      <GasSpringsApplication4 />
      <GasSpringsApplication5 />
      <GasSpringsApplication6 />  */}
     
      {/* <GasSprings2 /> not page*/}
     
      {/* <GasSprings4 /> not page*/}
      {/* <WidestChoiceofMounts /> not page*/}
       {/* <Accessories />
      <Spacesolution />  */}
     
      {/* <Reliability_features /> */}
     
      {/* <GuidePost />
      <GuidePost2 />
      <GuidePost3 />
      <GuidePost4 />
      <GuidePost5 /> */}
    </>
  );
}













