// import { useEffect, useState } from "react";
// import DataTable from "react-data-table-component"; // ✅ Import DataTable
// import vb11Data from "../StandardPartsforPressToolMoulds/data_table/GuidePillarsTable.json";

const GuidePillars = () => {
    // const [filterText, setFilterText] = useState("");
    // const [filteredItems, setFilteredItems] = useState(vb11Data);

    // ✅ Define columns for DataTable
    // const columns = [
    //     { name: "Code", selector: row => row.Code, sortable: true },
    //     { name: "d1", selector: row => row.d1, sortable: true },
    //     { name: "d2", selector: row => row.d2, sortable: true },
    //     { name: "d3", selector: row => row.d3, sortable: true },
    //     { name: "k", selector: row => row.k, sortable: true },
    //     { name: "L", selector: row => row.L, sortable: true },
    //     { name: "L1", selector: row => row.L1, sortable: true },
    //     { name: "L2", selector: row => row.L2, sortable: true },
    //     { name: "L3", selector: row => row.L3, sortable: true },
    // ];

    // ✅ Filtering logic
    // useEffect(() => {
    //     const ft = filterText.toLowerCase();
    //     const newData = vb11Data.filter(item => {
    //         return Object.values(item)
    //             .some(val => String(val).toLowerCase().includes(ft));
    //     });
    //     setFilteredItems(newData);
    // }, [filterText]);

    // const customStyles = {
    //     headCells: {
    //         style: {
    //             backgroundColor: "#007bff", // Blue header
    //             color: "#fff",               // White text
    //             fontWeight: "bold",
    //             fontSize: "15px",
    //             textAlign: "center",
    //             overflow: "visible",         // Show full text
    //             whiteSpace: "normal",        // Allow wrapping if long text
    //         },
    //     },
    //     rows: {
    //         style: {
    //             textAlign: "center",
    //             overflow: "visible",         // Show full text in rows
    //             whiteSpace: "normal",        // Allow wrapping
    //         },
    //     },
    // };

    return (
        <div id="catalogue2" className="footer_bg">
            <div className="d-flex align-items-center py-2 px-3 justify-content-between">
                <span className="line_pro_h"></span>
                <h5 className="line_pro_h_hd">
                    Standard Parts for Press Tool & <mark>Moulds</mark>
                </h5>
            </div>

            <div className="container">
                {/* Product 1 */}
                <div className="product-block">
                    <div className="section-title">Guide Pillars</div>
                     <div className="row mt-2 g-1">
                        <div className="col-5">
                            <img
                                src="../images/Guide_Pillars_two.webp"
                                alt="strap Clamp"
                                className="img-fluid product-image mb-0"
                            />
                        </div>
                        
                        <div className="col-5">
                            <img
                                src="../images/Guide_Pillars.webp"
                                alt="strap Clamp"
                                className="img-fluid product-image mb-0"
                            />
                        </div>
                        <div className="col-2">
                            <p className="fw-bold mb-0">VB1.1
                            </p>
                            <p className="mb-0" style={{fontSize:"13px"}}>Guide Pillar (VB1.1)</p>
                            <p className="mb-0" style={{fontSize:"13px"}}>Raw Material: EN36</p>
                            <p style={{fontSize:"13px"}}>Case Hardness: 58-60 HRC</p>
                        </div>
                    </div>

                    <div className="row mt-0">


                        <div className="col-12">
                            <div className="table-responsive d-flex stp_table_padd gap-2">
                                {/* <div style={{ padding: "20px" }}>
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        value={filterText}
                                        onChange={e => setFilterText(e.target.value)}
                                        style={{
                                            marginBottom: "10px",
                                            padding: "5px",
                                            width: "300px",
                                        }}
                                    />
                                   
                                    <DataTable
                                        columns={columns}
                                        data={filteredItems}
                                        pagination
                                        highlightOnHover
                                        striped
                                        responsive
                                        customStyles={customStyles}
                                    />
                                </div> */}
                                    <div className="table-container table_row-9 mb-0 divs_font_table">
                                        
                                        <div className="table-header">
                                            <span className="cell columns" data-rows="9">Ø16</span>
                                                <span className="cell">Code</span>
                                                <span className="cell">d1</span>
                                                <span className="cell">d2</span>
                                                <span className="cell">d3</span>
                                                <span className="cell">d4</span>
                                                <span className="cell">L</span>
                                                <span className="cell">L1</span>
                                                <span className="cell">L2</span>
                                                <span className="cell">L3</span>
                                        </div>
                                        <div className="table-body">
                                            <div className="table-row">
                                                <span className="cell">VB1.1/001</span>
                                                <span className="cell rowspan" data-rows={8}>16</span>
                                                <span className="cell rowspan" data-rows={8}>22</span>
                                                <span className="cell rowspan" data-rows={8}>26</span>
                                                <span className="cell rowspan" data-rows={8}>6</span>
                                                <span className="cell">59</span>
                                                <span className="cell rowspan" data-rows={8}>25</span>
                                                <span className="cell">25</span>
                                                <span className="cell rowspan" data-rows={8}>9</span>
                                                
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/002</span>
                                                <span className="cell">64</span>
                                                <span className="cell">30</span>
                                                
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/003</span>
                                                <span className="cell">69</span>
                                                <span className="cell">35</span>
                                                
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/004</span>
                                                <span className="cell">74</span>
                                                <span className="cell">40</span>
                                                
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/005</span>
                                                <span className="cell">75</span>
                                                <span className="cell">45</span>
                                                
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/006</span>
                                                <span className="cell">84</span>
                                                <span className="cell">50</span>
                                                
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/007</span>
                                                <span className="cell">104</span>
                                                <span className="cell">70</span>
                                                
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/008</span>
                                                <span className="cell">124</span>
                                                <span className="cell">90</span>
                                                
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/009</span>
                                                <span className="cell rowspan" data-rows={8}>16</span>
                                                <span className="cell rowspan" data-rows={8}>22</span>
                                                <span className="cell rowspan" data-rows={8}>26</span>
                                                <span className="cell rowspan" data-rows={8}>6</span>
                                                <span className="cell">64</span>
                                                <span className="cell rowspan" data-rows={8}>30</span>
                                                <span className="cell">25</span>
                                                <span className="cell rowspan" data-rows={8}>9</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/010</span>
                                                <span className="cell">69</span>
                                                <span className="cell">30</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/011</span>
                                                <span className="cell">74</span>
                                                <span className="cell">35</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/012</span>
                                                <span className="cell">79</span>
                                                <span className="cell">40</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/013</span>
                                                <span className="cell">84</span>
                                                <span className="cell">45</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/014</span>
                                                <span className="cell">89</span>
                                                <span className="cell">50</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/015</span>
                                                <span className="cell">109</span>
                                                <span className="cell">70</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/016</span>
                                                <span className="cell">129</span>
                                                <span className="cell">90</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/017</span>
                                                <span className="cell rowspan" data-rows={6}>16</span>
                                                <span className="cell rowspan" data-rows={6}>22</span>
                                                <span className="cell rowspan" data-rows={6}>26</span>
                                                <span className="cell rowspan" data-rows={6}>6</span>
                                                <span className="cell">80</span>
                                                <span className="cell rowspan" data-rows={6}>36</span>
                                                <span className="cell">35</span>
                                                <span className="cell rowspan" data-rows={6}>9</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/018</span>
                                                <span className="cell">85</span>
                                                <span className="cell">40</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/019</span>
                                                <span className="cell">90</span>
                                                <span className="cell">45</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/020</span>
                                                <span className="cell">95</span>
                                                <span className="cell">50</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/021</span>
                                                <span className="cell">115</span>
                                                <span className="cell">70</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/022</span>
                                                <span className="cell">135</span>
                                                <span className="cell">90</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/023</span>
                                                <span className="cell rowspan" data-rows={5}>16</span>
                                                <span className="cell rowspan" data-rows={5}>22</span>
                                                <span className="cell rowspan" data-rows={5}>26</span>
                                                <span className="cell rowspan" data-rows={5}>6</span>
                                                <span className="cell">95</span>
                                                <span className="cell rowspan" data-rows={5}>46</span>
                                                <span className="cell">40</span>
                                                <span className="cell rowspan" data-rows={5}>9</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/024</span>
                                                <span className="cell">105</span>
                                                <span className="cell">50</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/025</span>
                                                <span className="cell">125</span>
                                                <span className="cell">70</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/026</span>
                                                <span className="cell">145</span>
                                                <span className="cell">90</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/027</span>
                                                <span className="cell">165</span>
                                                <span className="cell">110</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/028</span>
                                                <span className="cell rowspan" data-rows={5}>16</span>
                                                <span className="cell rowspan" data-rows={5}>22</span>
                                                <span className="cell rowspan" data-rows={5}>26</span>
                                                <span className="cell rowspan" data-rows={5}>6</span>
                                                <span className="cell">115</span>
                                                <span className="cell rowspan" data-rows={5}>56</span>
                                                <span className="cell">50</span>
                                                <span className="cell rowspan" data-rows={5}>9</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/029</span> 
                                                <span className="cell">135</span> 
                                                <span className="cell">70</span> 
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/030</span> 
                                                <span className="cell">155</span>
                                                <span className="cell">90</span> 
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/031</span> 
                                                <span className="cell">175</span> 
                                                <span className="cell">110</span> 
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/032</span> 
                                                <span className="cell">185</span> 
                                                <span className="cell">120</span> 
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/033</span>
                                                <span className="cell rowspan" data-rows={5}>16</span>
                                                <span className="cell rowspan" data-rows={5}>22</span>
                                                <span className="cell rowspan" data-rows={5}>26</span>
                                                <span className="cell rowspan" data-rows={5}>6</span>
                                                <span className="cell">125</span>
                                                <span className="cell rowspan" data-rows={5}>66</span>
                                                <span className="cell">50</span>
                                                <span className="cell rowspan" data-rows={5}>9</span>
                                                
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/034</span> 
                                                <span className="cell">145</span> 
                                                <span className="cell">70</span> 
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/035</span>
                                                <span className="cell">165</span>
                                                <span className="cell">90</span> 
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/036</span> 
                                                <span className="cell">185</span> 
                                                <span className="cell">110</span> 
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/037</span> 
                                                <span className="cell">205</span> 
                                                <span className="cell">130</span> 
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/038</span>
                                                <span className="cell rowspan" data-rows={3}>16</span>
                                                <span className="cell rowspan" data-rows={3}>22</span>
                                                <span className="cell rowspan" data-rows={3}>26</span>
                                                <span className="cell rowspan" data-rows={3}>6</span>
                                                <span className="cell">135</span>
                                                <span className="cell rowspan" data-rows={3}>76</span>
                                                <span className="cell">50</span>
                                                <span className="cell rowspan" data-rows={3}>9</span>
                                                
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/039</span>
                                                <span className="cell">155</span>
                                                <span className="cell">70</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/040</span>
                                                <span className="cell">195</span>
                                                <span className="cell">110</span>
                                            </div>
                                        </div>
                                    </div>

                                {/* O20 Table */}
                                    <div className="table-container table_row-9 mb-0 divs_font_table">
                                        <div className="table-header">
                                        <span className="cell columns" data-rows="9">Ø20</span>
                                                <span className="cell">Code</span>
                                                <span className="cell">d1</span>
                                                <span className="cell">d2</span>
                                                <span className="cell">d3</span>
                                                <span className="cell">d4</span>
                                                <span className="cell">L</span>
                                                <span className="cell">L1</span>
                                                <span className="cell">L2</span>
                                                <span className="cell">L3</span>
                                        </div>
                                        <div className="table-body">
                                            <div className="table-row">
                                                <span className="cell">VB1.1/041</span>
                                                <span className="cell rowspan" data-rows={7}>20</span>
                                                <span className="cell rowspan" data-rows={7}>30</span>
                                                <span className="cell rowspan" data-rows={7}>35</span>
                                                <span className="cell rowspan" data-rows={7}>6</span>
                                                <span className="cell">69</span>
                                                <span className="cell rowspan" data-rows={7}>30</span>
                                                <span className="cell">30</span>
                                                <span className="cell rowspan" data-rows={7}>9</span>
                                                
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/042</span>
                                                <span className="cell">74</span>
                                                <span className="cell">35</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/043</span>
                                                <span className="cell">79</span>
                                                <span className="cell">40</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/044</span>
                                                <span className="cell">84</span>
                                                <span className="cell">45</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/045</span>
                                                <span className="cell">89</span>
                                                <span className="cell">50</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/046</span>
                                                <span className="cell">109</span>
                                                <span className="cell">70</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/047</span>
                                                <span className="cell">129</span>
                                                <span className="cell">100</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/048</span>
                                                <span className="cell rowspan" data-rows={6}>20</span>
                                                <span className="cell rowspan" data-rows={6}>30</span>
                                                <span className="cell rowspan" data-rows={6}>35</span>
                                                <span className="cell rowspan" data-rows={6}>6</span>
                                                <span className="cell">80</span>
                                                <span className="cell rowspan" data-rows={6}>36</span>
                                                <span className="cell">35</span>
                                                <span className="cell rowspan" data-rows={6}>9</span>
                                                
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/049</span> 
                                                <span className="cell">85</span> 
                                                <span className="cell">40</span> 
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/050</span>
                                                <span className="cell">90</span> 
                                                <span className="cell">45</span> 
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/051</span> 
                                                <span className="cell">95</span> 
                                                <span className="cell">50</span> 
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/052</span> 
                                                <span className="cell">115</span> 
                                                <span className="cell">70</span> 
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/053</span> 
                                                <span className="cell">145</span> 
                                                <span className="cell">100</span> 
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/054</span>
                                                <span className="cell rowspan" data-rows={7}>20</span>
                                                <span className="cell rowspan" data-rows={7}>30</span>
                                                <span className="cell rowspan" data-rows={7}>35</span>
                                                <span className="cell rowspan" data-rows={7}>6</span>
                                                <span className="cell">95</span>
                                                <span className="cell rowspan" data-rows={7}>46</span>
                                                <span className="cell">40</span>
                                                <span className="cell rowspan" data-rows={7}>9</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/055</span>
                                                <span className="cell">100</span>
                                                <span className="cell">45</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/056</span>
                                                <span className="cell">105</span>
                                                <span className="cell">50</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/057</span>
                                                <span className="cell">115</span>
                                                <span className="cell">60</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/058</span>
                                                <span className="cell">125</span>
                                                <span className="cell">70</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/059</span>
                                                <span className="cell">145</span> 
                                                <span className="cell">90</span> 
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/060</span> 
                                                <span className="cell">165</span> 
                                                <span className="cell">110</span> 
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/061</span>
                                                <span className="cell rowspan" data-rows={5}>20</span>
                                                <span className="cell rowspan" data-rows={5}>30</span>
                                                <span className="cell rowspan" data-rows={5}>35</span>
                                                <span className="cell rowspan" data-rows={5}>6</span>
                                                <span className="cell">105</span>
                                                <span className="cell rowspan" data-rows={5}>56</span>
                                                <span className="cell">40</span>
                                                <span className="cell rowspan" data-rows={5}>9</span>
                                                
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/062</span> 
                                                <span className="cell">115</span> 
                                                <span className="cell">50</span> 
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/063</span>
                                                <span className="cell">135</span>
                                                <span className="cell">70</span> 
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/064</span> 
                                                <span className="cell">155</span> 
                                                <span className="cell">90</span> 
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/065</span> 
                                                <span className="cell">175</span> 
                                                <span className="cell">110</span> 
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/066</span>
                                                <span className="cell rowspan" data-rows={5}>20</span>
                                                <span className="cell rowspan" data-rows={5}>30</span>
                                                <span className="cell rowspan" data-rows={5}>35</span>
                                                <span className="cell rowspan" data-rows={5}>6</span>
                                                <span className="cell">115</span>
                                                <span className="cell rowspan" data-rows={5}>66</span>
                                                <span className="cell">40</span>
                                                <span className="cell rowspan" data-rows={5}>9</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/067</span>
                                                <span className="cell">125</span>
                                                <span className="cell">50</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/068</span>
                                                <span className="cell">145</span>
                                                <span className="cell">70</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/069</span>
                                                <span className="cell">165</span>
                                                <span className="cell">90</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/070</span>
                                                <span className="cell">185</span>
                                                <span className="cell">110</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/071</span>
                                                <span className="cell rowspan" data-rows={5}>20</span>
                                                <span className="cell rowspan" data-rows={5}>30</span>
                                                <span className="cell rowspan" data-rows={5}>35</span>
                                                <span className="cell rowspan" data-rows={5}>6</span>
                                                <span className="cell">135</span>
                                                <span className="cell rowspan" data-rows={5}>76</span>
                                                <span className="cell">50</span>
                                                <span className="cell rowspan" data-rows={5}>9</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/072</span>
                                                <span className="cell">155</span>
                                                <span className="cell">70</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/073</span>
                                                <span className="cell">175</span>
                                                <span className="cell">90</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/074</span>
                                                <span className="cell">195</span>
                                                <span className="cell">110</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/075</span>
                                                <span className="cell">215</span>
                                                <span className="cell">130</span>
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/076</span>
                                                <span className="cell rowspan" data-rows={5}>20</span>
                                                <span className="cell rowspan" data-rows={5}>30</span>
                                                <span className="cell rowspan" data-rows={5}>35</span>
                                                <span className="cell rowspan" data-rows={5}>6</span>
                                                <span className="cell">165</span>
                                                <span className="cell rowspan" data-rows={5}>86</span>
                                                <span className="cell">70</span>
                                                <span className="cell rowspan" data-rows={5}>9</span>
                                                
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/077</span>
                                                <span className="cell">185</span> 
                                                <span className="cell">90</span> 
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/078</span>
                                                <span className="cell">205</span>
                                                <span className="cell">110</span> 
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/079</span> 
                                                <span className="cell">225</span> 
                                                <span className="cell">130</span> 
                                            </div>
                                            <div className="table-row">
                                                <span className="cell">VB1.1/080</span> 
                                                <span className="cell">245</span> 
                                                <span className="cell">150</span> 
                                            </div>
                                        </div>
                                    </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span className="page_number">Page 02</span>
            <p className="product_category">Mould alignment accessories (Guide Pillar)</p>
        </div >
    );
};

export default GuidePillars;
