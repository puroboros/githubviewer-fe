import React, {useEffect, useState} from 'react';
import {Redirect, useParams} from 'react-router-dom';
import {useDataReducer} from "../../store/reducer";
import {useDispatch} from "react-redux";
import {paths} from "../../routes/routes";
import styles from './view-element.module.scss'

const ViewElement = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const elements = useDataReducer();
    const [selected, setSelected] = useState(null);
    const [redirect, setRedirect] = useState(false);
    const [loadedImage, setLoadedImage] = useState(false);

    const preLoadImage = (url) => {
        const img = new Image();
        img.onload = () => setLoadedImage(true);
        img.src = url;
    };

    useEffect(() => {
        if (elements && selected === null) {
            const found = elements.find(el => el.id === +id);
            if (found) {
                setSelected(found);
                preLoadImage(found.image)
            } else {
                setRedirect(true)
            }
        }
    }, [elements, selected, id, dispatch]);

    return (
        <>
            {selected && loadedImage ?
                <div className={`${styles.container} ${styles.generalMarginBottom}`}>
                    <h2>{selected.name}</h2>
                    <img src={selected.image} alt={`img-${selected.name}`} className={styles.image}/>
                    <span><strong>species:</strong> {selected.species}</span>
                    <span><strong>gender:</strong> {selected.species}</span>
                </div> :
                'Loading data...'}
            {redirect && <Redirect to={paths.root}/>}
        </>
    );
};

export default ViewElement;