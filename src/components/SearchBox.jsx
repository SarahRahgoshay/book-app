import { LuSearch } from "react-icons/lu";
import styles from './SearchBox.module.css';

const SearchBox = ({search , setSearch , searchHandler}) => {
    return (
        <div className= {styles.search}>
            <input 
                type="text" 
                placeholder="search title ..." 
                value={search} 
                onChange={(e)=> setSearch(e.target.value.toLocaleLowerCase())}
            />
            <button onClick={searchHandler} >
                <LuSearch />  
            </button>
        </div>
    );
};

export default SearchBox;