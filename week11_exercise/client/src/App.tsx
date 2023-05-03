import React, { useState, useEffect } from 'react'
import './App.css'
// https://www.apollographql.com/docs/react/get-started
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import SimpleCards from './components/SimpleCards';
import WithUseQuery from './components/WithUseQuery';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import ThemeContext from "./contexts/ThemeContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import UserContextProvider from "./contexts/UserContext";

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
});

const App = () => {
    return (
        <>
            <BrowserRouter>
                <UserContextProvider>
                    <ThemeContextProvider>
                        <ApolloProvider client={client}>
                            <Routes>
                                <Route path="/" element={<><WithUseQuery />
                                    <SimpleCards client={client} /></>}/>
                                <Route path="/login" element={<Login/>}/>
                            </Routes>
                        </ApolloProvider>
                    </ThemeContextProvider>
                </UserContextProvider>
            </BrowserRouter>
        </>
        /*
        *
        * */
    )
}

export default App