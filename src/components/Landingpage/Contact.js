import React from 'react'
import map from "../../assets/images/backgrounds/map.jpg"

const Contact = () => {
    return (
        <div style={{ width: "100%",marginBottom:"300px" }}>
            <div style={{}}>
                <div style={{ display: "flex", justifyContent: "center", backgroundColor: "grey", width: "80%", marginLeft: "120px", borderRadius:"20px" }}>
                    <div style={{ flex: "1" }}>
                        <div style={{ padding: "20px" }}>
                            <h1>Contact </h1>
                            <span style={{fontSize:"14px"}}>Kigali Nyarugenge  ,KG ave 234</span>
                                <h3>Email: <span style={{fontSize:"14px", color:"lightblue"}}>inventory@gmail.com</span></h3>
                                <h3>Phone: <span style={{fontSize:"14px"}}>0784572637363</span></h3>
                                <h3>Skype: <span style={{fontSize:"14px"}}>invent.win</span></h3>
                            <img src={map} width="50%" height="30%"/>
                        </div>
                    </div>
                    <div style={{ flex: "1", marginTop: "50px" }} >
                        <div>
                            <form>
                                <div style={{ display: "flex", }}>
                                    <div>
                                        <label>Last name:</label><br />
                                        <input type='text' style={{ padding:"10px",borderRadius:"5px" }} />
                                    </div>
                                    <div style={{ marginLeft: "15px" }}>
                                        <label>Last name:</label><br />
                                        <input type='text' style={{ padding:"10px",borderRadius:"5px" }} />
                                    </div>
                                </div>
                                <div>
                                    <label>First name:</label> <br />
                                    <input type='text' style={{ width: "70%",padding:"10px",borderRadius:"5px" }} />
                                </div>
                                <div>
                                    <label>message</label><br />
                                    <textarea style={{ width: "73%", borderRadius:"5px" }} rows="8" cols="50">
                                    </textarea>
                                </div>
                                <div style={{marginTop:"20px", marginLeft:"290px"}}>
                                <button style={{background:"blue", color:"white" ,padding:"10px", border:"none", borderRadius:"3px"}}>
                                    send message
                                </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact