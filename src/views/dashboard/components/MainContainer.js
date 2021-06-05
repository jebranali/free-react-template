function MainContainer(props){
    return (
        <div className="main-content d-flex flex-column">
            {props.children}
        </div>
    )
}

export default MainContainer