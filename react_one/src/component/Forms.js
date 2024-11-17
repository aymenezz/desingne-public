import React from "react";

function Forms(){
  return (
        <div className="div-form">
            <h1>Contact Us</h1>
            <form>
                <div className="forms">
                    <div className="div-firstname">
                    <label for="firstName" style={{marginLeft:'10px'}} >First Name *</label>
                    
                     <input type="text"  id="firstName"/>
                    </div>
                    
                    <div className="div-lastname">
                    <label for="lastName" style={{marginLeft:'10px'}}>Last Name *</label>
                    <input type="text" id='lastName'/>
                    </div>
                    
                {/* <br/> */} 
                <div className="div-email" >
                    <label for='email' style={{marginLeft:"10px"}}>Email address *</label>
                    <input type="email" id="email" />
                </div>
                
                </div>
                <span style={{marginLeft:'10px'}}>Query Type *</span>
                <div className="queries">
                    
                    
                <div className="general-query"> 
                    
                    <input type="radio" name="query" id="general_enquiry"/>
                    <label for="general_enquiry">general enquiry</label>
                </div>

                <div className="support-query">
                    
                    <input type="radio" name="query"  id='Support_request'/>
                    <label for="Support_request">Support request</label>
                </div>

                </div>
                <span style={{marginLeft:'10px'}}>Message *</span>
                <div className="div-textarea">
                  <textarea style={{maxWidth:'550px',maxHeight:'100px'}}></textarea>
                </div>

                <div className="div-inp-check" style={{marginLeft:'10px'}}>
                
                    <input type="checkbox" id="check"/>
                    <label for="check" style={{marginLeft:'10px',color:'#6e6b6b'}}>I consent to being contacted by the team</label>
                </div>

                <div className="div-button" style={{marginTop: '36px'}}>
                        <button type="submit" className="button">sumbit</button>
                </div>

            </form>
        </div>
  );

}
export default Forms ;