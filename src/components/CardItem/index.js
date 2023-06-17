// Write your code here.
import './index.css'

const CardItem = props => {
  const {details} = props
  const {title, description, imgUrl, className} = details

  return (
    <li className={className}>
      <div>
        <h1 className="head">{title}</h1>
        <p className="pera">{description}</p>
        <div className="image">
          <img src={imgUrl} alt={title} />
        </div>
      </div>
    </li>
  )
}

export default CardItem
