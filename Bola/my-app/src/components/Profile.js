function profile(props) {
    console.log(props)
    return <h1>
        Name: {props.name} {props.lastname} {props.child}
        </h1>;
}



export default Profile;