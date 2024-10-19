import Notes from './Notes'


const Hoome = (props) => {
  const {showAlert} = props
  return ( 
    <div>
      
      <Notes showAlert={showAlert}/>
    </div>
  )
}

export default Hoome
