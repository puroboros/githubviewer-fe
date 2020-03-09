import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {BrowserRouter} from 'react-router-dom'
import {getAllItems} from "./store/actions";
import {useDataReducer} from "./store/reducer";
import {Routes} from "./routes/routes";
import styles from "./modules/view-element/view-element.module.scss";

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
            <div className={`${styles.container} ${styles.generalMarginBottom}`}>
                {data.length ?
                    <BrowserRouter>
                        <Routes/>
                    </BrowserRouter>
                    :
                    <h3>Loading data...</h3>}
            </div>
        </>
    );

};

export default App;
