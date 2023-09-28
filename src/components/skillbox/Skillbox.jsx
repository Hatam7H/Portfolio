import './skillbox.css'

const Skillbox = (props) => {
  return (
    <div>
      <div className="skills_title">
        <h3 className='skills_title-name'>{props.lan}<span className='skills_title-svg'>{props.svg}</span></h3>
        <span className='skills_title-number'>{props.per}</span>
      </div>
      <div className="skills_bar">
        <span style={props.styl} id='skills_bar-percentage '></span>
      </div>
    </div>
  )
}

export default Skillbox