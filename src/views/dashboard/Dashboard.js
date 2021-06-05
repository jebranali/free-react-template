import React,{Fragment, useEffect} from 'react';
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import BradCrumb from "./components/BradCrumb";
import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer";
import Content from "./components/Content";
import {ComponentContext} from "../../Context";
import {capitalize, renderContent} from "../../Helpers";


function Dashboard(props){

    const page = capitalize(props.match.params.page);

    useEffect(() => {
        // Update the document title using the browser API
        document.title = 'React Learning - '+page;
    });

    return (
    <Fragment>
        <ComponentContext.Provider value={{page: page}}>
            <SideBar/>
            <MainContainer>
                <NavBar/>
                <BradCrumb/>
                <Content>
                    {renderContent(page)}
                </Content>
                <div className="flex-grow-1"/>
                <Footer/>
            </MainContainer>
        </ComponentContext.Provider>
    </Fragment>
    )
}

export default Dashboard