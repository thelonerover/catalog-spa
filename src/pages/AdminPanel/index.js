import React from "react";
import { Container, Grid } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import ManageProducts from "../../components/ManageProducts";
import MainMenu from "../../components/MainMenu";
import NoMatch from "../../pages/NoMatchPage";
import AdminSidebar from "../../components/AdminSIdebar";

export default function AdminPanel() {
    const user = useSelector(state => state.user);

    return (
        <Container>
            {user.userType === "A" ? 
            <div>
                <MainMenu />
                <Grid divided='vertically'>
                    <Grid.Row columns={12}>
                        <Grid.Column width={3}>
                            <AdminSidebar />
                        </Grid.Column>
                        <Grid.Column width={1} />
                        <Grid.Column width={8}>
                        <Switch>
                            <Route path="/admin-panel">
                                <ManageProducts />
                            </Route>
                        </Switch> 
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div> :
            <NoMatch />
            }
        </Container>
    );
}