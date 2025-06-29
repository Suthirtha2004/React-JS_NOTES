import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet, useNavigation } from "react-router";
import { Loading } from "./Loading";

export const AppLayout = () =>{

    const navigation = useNavigation();
    console.log(navigation);

    if(navigation.state === "loading") return <Loading />
    return(
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}