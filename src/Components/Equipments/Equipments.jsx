import React from 'react'
import { EquipmentList} from './EquipmentsList'
import EquipmentCard from './EquipmentCard'

const Equipment = () => {
  return (<div style={{flex:"1"}}>
    <h2 style={{
      padding:"23px 0 0 30px"
      }}>EQUIPMENTS</h2>
    <div className='Equipment-container' style={
      { display:"grid", 
        gridTemplateColumns:"1fr 1fr 1fr 1fr",
        padding:"20px 50px 50px 50px",
        columnGap:"25px"
      }}>
      {EquipmentList.map((equip,index) => {
          return (<EquipmentCard key={index} data={equip}/>)
      })}
    </div>
  </div>)
}

export default Equipment