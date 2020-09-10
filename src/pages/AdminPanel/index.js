import React from "react";
import { Container, Grid } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import ProductManaging from "../../components/ProductManaging";
import MainMenu from "../../components/MainMenu";
import NoMatch from "../../pages/NoMatchPage";
import ProductFilters from "../../components/ProductFilters";
import SortBy from "../../components/SortBy";

export default function AdminPanel() {
    const user = useSelector(state => state.user);

    return (
        <Container>
            {user.userType === "A" ? 
            <div>
                <MainMenu />
                <Grid divided='vertically'>
                    <Grid.Row columns={2}>
                        <Grid.Column width={4}>
                            <ProductFilters />
                        </Grid.Column>
                        <Grid.Column width={8}>
                        <Switch>
                            <Route path="/admin-panel">
                                <SortBy />
                                <ProductManaging />
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