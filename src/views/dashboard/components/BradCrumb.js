import {ComponentContext} from "../../../Context";
import {useContext} from 'react'

function BreadCrumb(){
    const {page} = useContext(ComponentContext);

    return (
        <div className="breadcrumb-area">
            <h1>Dashboard</h1>
            <ol className="breadcrumb">
                <li className="item"><a href="dashboard-analytics.html"><i className='bx bx-home-alt'></i></a></li>
                <li className="item">Dashboard</li>
                <li className="item">{page}</li>
            </ol>
        </div>
    )
}

export default BreadCrumb