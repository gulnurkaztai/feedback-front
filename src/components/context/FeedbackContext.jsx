import { createContext, useState, useEffect } from "react"


 const FeedbackContext = createContext()

export const FeedbackProvider =({children})=>{
    const [feedback,setFeedback] = useState([
        // {
        //     id: 1,
        //     text: "An amazing course if you are looking forward to become a Front End Developer. Mentors and coordinators really root for your success. Syllabus is very well-structured and the emphasis is placed on foundational knowledge. Would I recommend this course to my friends? ABSOLUTELY! Samat, Aruzhan, Aidana, and Dalida, thank you so much for everything 💚 - Gulnur, Batch 27",
        //     rating:10
        // }
    ])

    useEffect(()=>{
        fetchFeedback()
    },[])

    const fetchFeedback = async()=>{
        const response = await fetch("https://course-fb-app.vercel.app/feedback")
        const data = await response.json()

        setFeedback(data)
    }

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        idet: false
    })

    const deleteFeedback = async (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
          await fetch(`/feedback/${id}`, { method: 'DELETE' })
    
          setFeedback(feedback.filter((item) => item.id !== id))
        }
      }

    const editFeedback = (item) =>{
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const addFeedback = async (newFeedback) => {
        const response = await fetch('https://course-fb-app.vercel.app/feedback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newFeedback),
        })
    
        const data = await response.json()
    
        setFeedback([data, ...feedback])
      }

      const updateFeedback = async (id, updItem) => {
        const response = await fetch(`https://course-fb-app.vercel.app/feedback/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updItem),
        })
    
        const data = await response.json()
        setFeedback(feedback.map((item) => (item.id === id ? data : item)))
        setFeedbackEdit({
            item: {},
            edit: false,
        })
    }


    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        deleteFeedback, 
        addFeedback,
        editFeedback,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext 