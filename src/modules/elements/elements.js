import React from 'react';
import {useDataReducer} from "../../store/reducer";
import styles from './elements.module.scss'
import {paths} from "../../routes/routes";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

const Elements = () => {
    const elements = useDataReducer();
    const dispatch = useDispatch();

    return (
        <div className={`${styles.container} ${styles.generalMarginBottom}`}>
            {elements.map((el, index) => {
                return (
                    <h2 key={`h2-${index}`}>
                        <Link key={`link-${index}`} to={`${paths.viewElementBase}${el.id}`}>{el.name}</Link>
                    </h2>
                )
            })}
            <button className={`${styles.btn} ${styles.marginTop}`} >Load More</button>
        </div>
    );
};

export default Elements;