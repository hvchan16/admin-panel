import React from 'react'
// Components
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Charts from '../../components/charts/Charts'
import Featured from '../../components/featured/Featured'
// SCSS Files
import "./home.scss"
import Table from '../../components/table/Table'

const Home = () => {
    return (
        <div className='home'>
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance" />
                </div>
                <div className="charts">
                    <Featured />
                    <Charts aspect={2 / 1} title={'Last 6 Months Revenue'} />
                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Transaction</div>
                    <Table />
                </div>
            </div>
        </div>
    )
}

export default Home