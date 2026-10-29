
import './index.css'
const HistoryItem = props => {
  const {historyDetails, deleteSearch} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails
  const onDelete = () => {
    deleteSearch(id)
  }
  return (
    <li className="lc">
      {' '}
      <div className="search-list-container">
        <div className="list-items">
          <p>{timeAccessed}</p>
          <div className="searched-items">
            <img src={logoUrl} alt="domain logo" />
            <p>{title}</p>
            <p>{domainUrl}</p>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={onDelete}
        className="delete-button"
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-button-image"
        />
      </button>
    </li>
  )
}
export default HistoryItem
