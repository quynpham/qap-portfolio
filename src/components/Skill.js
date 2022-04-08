const Skill = (props) => {
  return (
    <li className=" flex flex-col items-center p-3 text-4xl">{props.icon}<span className="text-xs">{props.name}</span></li>
  )
}

export default Skill;
