import "./SearchBar.css"
export default function SearchBar(){
    return (
      <div className='searchBar justify-content-around'>
      <input  className="col-7" placeholder='looking for...'  name='search' />
      <button className="col-2 bg-secondary" > search  </button>
    </div>
    )
  }