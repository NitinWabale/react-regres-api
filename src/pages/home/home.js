import React from 'react'
import PublicHead from "../../components/publicHead";
import DefaultLayout from "../../layouts/defaultLayout";
import UsersList from "./usersList/usersList";

const Home = () => {
        const title = "Super Hero Co.";
        return (
            <DefaultLayout title={title} private>
                <PublicHead title={title} />
                    <UsersList/>
            </DefaultLayout>
        )
}
export default Home