import Layout from '../components/Layout'

// const MyTest = ({children}) => {
//     return(
//         <>
//         <h1>My Test Comp</h1>
//         {children}
//         </>
//     )
// }

// function About(){
//     return (
//         <>
//         <NavBar/>
//         <MyTest>
//         <h1> I am about page, Hello!</h1>
//         <h1> I am about page, Hello!</h1>
//         <h1> I am about page, Hello!</h1>
//         </MyTest>
    
//         </>
//         )

// }

function About(){
return(
    <Layout>
        <h1>I am About Page</h1>
    </Layout>
)
}

export default About;