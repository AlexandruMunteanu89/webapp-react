import Stars from '../components/Stars'


function ReviewsCard ({ review }) {
    

    const { name, vote, text } = review;
    return (
        <div className="card mb-4">
            <div className="card-body">
                
                <div className="card-header d-flex justify-content-between align-items-center">
                    <address><i className="bi bi-person-bounding-box">  By <strong>{name}</strong></i></address>
                    <Stars vote={vote} /> {}
                </div>
                <p className="card-text">{text}</p>
            </div>
        </div>
    )
}
export default ReviewsCard