import { FaRegTrashAlt, FaRegEdit} from "react-icons/fa"
import Card from "../shared/Card"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

export default function FeedbackItem({item}) {
  const{deleteFeedback, editFeedback}= useContext(FeedbackContext)

  return (
    <Card>
        <div className="num-display">{item.rating}</div>

        <button className="edit"
          onClick={()=>{editFeedback(item)}}
        >
          <FaRegEdit color=" #8AAAE5"/>
        </button>

        <button className="close"
          onClick={()=>{deleteFeedback(item.id)}}
          >
          <FaRegTrashAlt color=" #8AAAE5"/>
        </button>

        <div className="text-display">{item.text}</div>
    </Card>
  )
}