import Header from "../../components/Header"
import Container from "../../components/Container"
import { Outlet } from "react-router-dom"

const PageBase = () => {
    return (
        <>
            <Header />
            <Container>
                <Outlet />
            </Container>
        </>
    )
}

export default PageBase