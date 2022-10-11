import { data } from '../../helper/data';
import Card from './Card';
import './Main.scss';

const Main = () => {
    
    return(        
        <div className='card-container'>
            {data.map((item, index) => <Card {...item} key ={index} />)}
        </div>
    )
}
export default Main;