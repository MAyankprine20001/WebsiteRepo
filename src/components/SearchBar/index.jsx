import InputBox from '../InputBox'
import classes from './SearchBar.module.scss'
import { IoIosSearch } from 'react-icons/io'

const SearchBar = ({ classWrap, label = 'Search', filter, onChange }) => {
  return <InputBox type={'text'} onChange={onChange} icon={IoIosSearch} value={filter} classWrap={`${classes.wrapper} ${classWrap}`} classInput={classes.wrapper_search} placeholder={label} />
}

export default SearchBar