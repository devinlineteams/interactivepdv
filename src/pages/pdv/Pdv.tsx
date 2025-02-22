import './pdvcss.css'

function Pdv(){
    return(
       <div id='pdv' className='divPdv'>
            <div className='divLeft'>

            </div>
            <div className='divRight'>

                <div className='divSupInf'>
                    <div className='divSup'>
                        <div id="nameEmpresa"><h1>AEJBIJU</h1></div>
                        <div id="seach"> <input placeholder='Codigo Barra'  /></div>
                        <div id="nameLogin"> <h1>Jair do Nascimento</h1></div>
                    </div>
                    <div className='divInf'>
                        <div className='divInfLisOfSales'>
                            <div className='divListSales'>

                            </div>
                            <div className='divsaleTot'>

                            </div>
                        </div>
                        <div className='divInfSales'>

                        </div>
                    </div>

                </div>

            </div>
       </div>
    )
}

export default Pdv;