import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {BrowserRouter} from 'react-router-dom'
import {getAllItems} from "./store/actions";
import {useDataReducer} from "./store/reducer";
import {Routes} from "./routes/routes";

const App = () => {
    const data = useDataReducer();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!data.length) {
            dispatch(getAllItems());
        }
    }, [data, dispatch]);

    return (
        <>
            {data.length ?
                <BrowserRouter>
                    <Routes/>
                </BrowserRouter>
                : 'Loading data...'}
        </>
    );

};

export default App;
